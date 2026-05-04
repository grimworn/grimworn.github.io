
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0.2, 4.6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const geo = new THREE.IcosahedronGeometry(1.15, 1)
    const mat = new THREE.MeshPhysicalMaterial({
      color: '#7e1f23',
      emissive: '#0e0707',
      metalness: 0.65,
      roughness: 0.28,
      clearcoat: 0.9,
      clearcoatRoughness: 0.18,
    })
    const mesh = new THREE.Mesh(geo, mat)
    group.add(mesh)

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.45, 0)),
      new THREE.LineBasicMaterial({ color: '#c4181f', transparent: true, opacity: 0.26 })
    )
    group.add(wire)

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.03, 16, 120),
      new THREE.MeshBasicMaterial({ color: '#c4181f', transparent: true, opacity: 0.45 })
    )
    ring.rotation.x = 1.25
    scene.add(ring)

    const light = new THREE.PointLight('#c4181f', 16, 20)
    light.position.set(2.4, 2, 3.8)
    scene.add(light)
    scene.add(new THREE.AmbientLight('#ffffff', 0.45))

    let frame
    const animate = () => {
      frame = requestAnimationFrame(animate)
      mesh.rotation.x += 0.0032
      mesh.rotation.y += 0.0055
      wire.rotation.x -= 0.0023
      wire.rotation.y += 0.0035
      ring.rotation.z += 0.0025
      group.position.y = Math.sin(Date.now() * 0.0012) * 0.08
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geo.dispose()
      mat.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="scene-wrap" ref={mountRef} aria-hidden="true" />
}

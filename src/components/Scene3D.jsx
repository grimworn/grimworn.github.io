import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Scene3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      30,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    )

    // Manual camera control. Keep this stable across breakpoints.
    camera.position.set(0.45, 0.9, 4.8)
    camera.lookAt(-0.5, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const root = new THREE.Group()
    scene.add(root)

    const ambient = new THREE.AmbientLight(0xf7efe5, 0.82)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xfff4e4, 1.15)
    keyLight.position.set(4, 5, 6)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x5a151c, 0.75)
    fillLight.position.set(-3, 10, 1)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xad2121, 2.25)
    rimLight.position.set(1, 1, -12)
    scene.add(rimLight)

    const rimLight2 = new THREE.DirectionalLight(0xad2121, 0.7)
    rimLight2.position.set(-2, -1, -2)
    scene.add(rimLight2)

    let raven = null
    let mixer = null
    let frameId = null

    const clock = new THREE.Clock()
    const loader = new GLTFLoader()

    loader.load(
      '/models/raven.glb',
      (gltf) => {
        raven = gltf.scene

        const box = new THREE.Box3().setFromObject(raven)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)

        raven.position.x -= center.x
        raven.position.y -= center.y
        raven.position.z -= center.z

        const targetSize = 3.55
        const scale = targetSize / maxDim
        raven.scale.setScalar(scale)

        raven.position.y = -0.2
        raven.position.x = 0
        raven.rotation.y = 1

        raven.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false
            child.receiveShadow = false

           
          }
        })

        root.add(raven)

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(raven)
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
        }

        animate()
      },
      undefined,
      (error) => {
        console.error('Raven model failed to load:', error)
      }
    )

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      const elapsed = clock.getElapsedTime()
      const delta = clock.getDelta()

      root.rotation.y = Math.sin(elapsed * 0.8) * 0.08
      root.position.y = Math.sin(elapsed * 1) * 0.03

      if (raven) {
        raven.rotation.z = Math.sin(elapsed * 0.7) * 0.012
      }

      if (mixer) mixer.update(delta)

      renderer.render(scene, camera)
    }

    const onResize = () => {
      if (!mount) return

      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()

        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose())
          } else {
            obj.material.dispose()
          }
        }
      })

      renderer.dispose()

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div className="scene-wrap" ref={mountRef} aria-hidden="true" />
}

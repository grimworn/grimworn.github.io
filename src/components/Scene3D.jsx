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
      38,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, -1, 6)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const ambient = new THREE.AmbientLight('#ffffff', 1)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight('#ffffff', 3)
    keyLight.position.set(2.5, 3, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight('#7e1f23', 1)
    fillLight.position.set(-3, 1.5, 2)
    scene.add(fillLight)

    const rimLight = new THREE.PointLight('#c4181f', 28, 55)
    rimLight.position.set(-1.8, 1.2, -2.2)
    scene.add(rimLight)

    let raven = null
    let mixer = null

    const loader = new GLTFLoader()
    loader.load(
      '/models/raven.glb',
      (gltf) => {
        raven = gltf.scene

        raven.scale.set(1, 1, 1)
        raven.position.set(0, -1.05, 0)
        raven.rotation.y = 1.0

        raven.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false
            child.receiveShadow = false

            if (child.material) {
              child.material.envMapIntensity = 1.1

              if (child.material.color) {
                const hex = `#${child.material.color.getHexString()}`
                if (hex === '#ffffff' || hex === '#cccccc' || hex === '#999999') {
                  child.material.color = new THREE.Color('#161010')
                }
              }
            }
          }
        })

        group.add(raven)

        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(raven)
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
        }
      },
      undefined,
      (error) => {
        console.error('Raven model failed to load:', error)
      }
    )

    const clock = new THREE.Clock()
    let frameId

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      const elapsed = clock.getElapsedTime()
      const delta = clock.getDelta()

      group.rotation.y = Math.sin(elapsed * 0.45) * 0.18
      group.position.y = Math.sin(elapsed * 1.1) * 0.08


      if (raven) {
        raven.rotation.z = Math.sin(elapsed * 0.9) * 0.03
      }

      if (mixer) mixer.update(delta)

      renderer.render(scene, camera)
    }

    animate()

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
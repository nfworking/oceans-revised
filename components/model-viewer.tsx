"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import { Suspense } from "react"
import type { Model3D } from "@/types/model"
import { Button } from "@/components/ui/button"
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import type * as THREE from "three"

interface ModelProps {
  model: Model3D
}

function Model({ model }: ModelProps) {
  const { scene } = useGLTF(model.modelUrl)
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003
    }
  })

  return (
    <group
      ref={modelRef}
      position={model.position}
      rotation={model.rotation as [number, number, number]}
      scale={[model.scale, model.scale, model.scale]}
    >
      <primitive object={scene} />
    </group>
  )
}

function ModelControls() {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const zoomIn = () => {
    camera.position.z *= 0.8
  }

  const zoomOut = () => {
    camera.position.z *= 1.2
  }

  return (
    <>
      <OrbitControls ref={controlsRef} enablePan={false} />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button variant="secondary" size="icon" onClick={resetCamera} aria-label="Reset view">
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={zoomIn} aria-label="Zoom in">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={zoomOut} aria-label="Zoom out">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>
    </>
  )
}

export function ModelViewer({ model }: ModelProps) {
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-[400px] bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center">
        <p>Loading 3D viewer...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[400px] bg-blue-50 dark:bg-blue-950 rounded-lg overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Model model={model} />
          <Environment preset="sunset" />
          <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={1.5} far={2} />
          <ModelControls />
        </Suspense>
      </Canvas>
    </div>
  )
}


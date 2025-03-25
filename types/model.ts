export interface Model3D {
  id: string
  name: string
  description: string
  modelUrl: string
  thumbnail: string
  scale: number
  position: [number, number, number]
  rotation: [number, number, number]
  category: "coral" | "marine-life" | "ecosystem"
  tags: string[]
}


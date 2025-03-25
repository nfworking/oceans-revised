import type { Model3D } from "@/types/model"

export const models: Model3D[] = [
  {
    id: "staghorn-coral",
    name: "Staghorn Coral",
    description:
      "Staghorn coral (Acropora cervicornis) is a critically endangered species of coral characterized by its antler-like branches. It's one of the most important reef-building corals in the Caribbean.",
    modelUrl: "/models/staghorn-coral.glb",
    thumbnail: "/placeholder.svg?height=300&width=300",
    scale: 2.5,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    category: "coral",
    tags: ["endangered", "caribbean", "reef-building"],
  },
  {
    id: "brain-coral",
    name: "Brain Coral",
    description:
      "Brain corals are known for their spherical shape and grooved surface that resembles a brain. They can live for several centuries and are important reef-builders.",
    modelUrl: "/models/brain-coral.glb",
    thumbnail: "/placeholder.svg?height=300&width=300",
    scale: 2,
    position: [0, -0.5, 0],
    rotation: [0, 0, 0],
    category: "coral",
    tags: ["long-lived", "reef-building"],
  },
  {
    id: "sea-turtle",
    name: "Green Sea Turtle",
    description:
      "The green sea turtle (Chelonia mydas) is an endangered species that plays a vital role in maintaining the health of seagrass beds and coral reefs.",
    modelUrl: "/models/sea-turtle.glb",
    thumbnail: "/placeholder.svg?height=300&width=300",
    scale: 1.5,
    position: [0, 0, 0],
    rotation: [0, Math.PI / 4, 0],
    category: "marine-life",
    tags: ["endangered", "reptile", "herbivore"],
  },
]

export const getModelById = (id: string): Model3D | undefined => {
  return models.find((model) => model.id === id)
}

export const getModelsByCategory = (category: Model3D["category"]): Model3D[] => {
  return models.filter((model) => model.category === category)
}


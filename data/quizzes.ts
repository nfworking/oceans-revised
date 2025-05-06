import type { Quiz } from "@/types/quiz"

export const quizzes: Quiz[] = [
  {
    id: "coral-basics",
    title: "Coral Reef Basics",
    description: "Test your knowledge about coral reefs and their importance to our oceans.",
    difficulty: "easy",
    imageUrl: "/firstquizz.jpg",
    questions: [
      {
        id: "basics-1",
        question: "What are corals?",
        type: "multiple-choice",
        options: [
          "Plants that grow in the ocean",
          "Types of rocks formed by volcanic activity",
          "Animals related to jellyfish and sea anemones",
          "Types of seaweed that grow in warm waters",
        ],
        correctAnswer: "Animals related to jellyfish and sea anemones",
        explanation:
          "Corals are actually animals! They are related to jellyfish and sea anemones, belonging to the group Cnidaria. Each coral is made up of thousands of tiny animals called polyps.",
      },
      {
        id: "basics-2",
        question: "What percentage of marine species do coral reefs support?",
        type: "multiple-choice",
        options: ["About 5%", "About 25%", "About 50%", "About 75%"],
        correctAnswer: "About 25%",
        explanation:
          "Although coral reefs cover less than 1% of the ocean floor, they support approximately 25% of all marine species, making them incredibly important biodiversity hotspots.",
      },
      {
        id: "basics-3",
        question: "What do corals eat?",
        type: "multiple-choice",
        options: [
          "Only the sugars produced by zooxanthellae algae",
          "Only small fish and plankton",
          "Both plankton and sugars from zooxanthellae algae",
          "Seaweed and other plants",
        ],
        correctAnswer: "Both plankton and sugars from zooxanthellae algae",
        explanation:
          "Corals have a symbiotic relationship with algae called zooxanthellae, which provide them with food through photosynthesis. However, corals also capture and eat plankton and small organisms using their tentacles.",
      },
      {
        id: "basics-4",
        question: "Which of these is NOT a benefit that coral reefs provide?",
        type: "multiple-choice",
        options: [
          "Protection from coastal storms and erosion",
          "Habitat for many fish species that humans eat",
          "Source of medicines for human diseases",
          "Production of fossil fuels",
        ],
        correctAnswer: "Production of fossil fuels",
        explanation:
          "Coral reefs provide many benefits including coastal protection, fisheries, tourism, and potential medicines, but they do not produce fossil fuels. Fossil fuels come from the remains of plants and animals that lived millions of years ago.",
      },
      {
        id: "basics-5",
        question: "What do corals need to build their skeletons?",
        type: "multiple-choice",
        options: [
          "Sand and small rocks",
          "Calcium carbonate",
          "Dead fish and other marine animals",
          "Iron and other metals",
        ],
        correctAnswer: "Calcium carbonate",
        explanation:
          "Corals build their skeletons using calcium carbonate (limestone) that they extract from seawater. This is why ocean acidification, which makes it harder for corals to access calcium carbonate, is a serious threat to coral reefs.",
      },
    ],
  },
  {
    id: "reef-threats",
    title: "Threats to Coral Reefs",
    description: "Learn about the dangers facing coral reefs around the world.",
    difficulty: "medium",
    imageUrl: "/secondquizz.jpg",
    questions: [
      {
        id: "threats-1",
        question: "Climate change is causing coral bleaching by making ocean waters too warm.",
        type: "true-false",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "True. When ocean temperatures rise too high, corals expel the colorful algae (zooxanthellae) living in their tissues, causing them to turn white or 'bleach'. If the stress continues, the coral will die.",
      },
      {
        id: "threats-2",
        question: "Sunscreen cannot harm coral reefs.",
        type: "true-false",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "False. Some chemicals in common sunscreens, like oxybenzone and octinoxate, can harm coral reefs even in very small amounts. That's why reef-safe sunscreens are important to use when swimming near coral reefs.",
      },
      {
        id: "threats-3",
        question: "Ocean acidification makes it easier for corals to build their skeletons.",
        type: "true-false",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "False. Ocean acidification (caused by the ocean absorbing CO2) makes it harder for corals to build their calcium carbonate skeletons. It's like osteoporosis for corals, weakening their structures.",
      },
      {
        id: "threats-4",
        question: "Overfishing doesn't affect coral reefs as long as people don't break the coral.",
        type: "true-false",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "False. Overfishing can severely impact coral reef health by removing key species that keep the ecosystem in balance. For example, removing herbivorous fish can allow algae to overgrow and smother corals.",
      },
      {
        id: "threats-5",
        question: "Plastic pollution can directly harm coral reefs.",
        type: "true-false",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "True. Plastic waste can physically damage corals, block sunlight, and introduce toxins. Research has shown that plastic debris increases the risk of disease in corals from 4% to 89% when it comes in contact with them.",
      },
    ],
  },
  {
    id: "reef-ecosystem",
    title: "Coral Reef Ecosystem",
    description: "Match marine species with their roles in the coral reef ecosystem.",
    difficulty: "medium",
    imageUrl: "/q.png",
    questions: [
      {
        id: "ecosystem-1",
        question: "Match each marine species with its role in the coral reef ecosystem:",
        type: "matching",
        options: ["Parrotfish", "Crown-of-thorns starfish", "Cleaner wrasse", "Sea urchin", "Coral polyp"],
        correctAnswer: [
          "Parrotfish - Bioerosion and algae control",
          "Crown-of-thorns starfish - Coral predator",
          "Cleaner wrasse - Parasite removal from other fish",
          "Sea urchin - Algae grazer",
          "Coral polyp - Reef builder",
        ],
        explanation:
          "Each species plays a specific role in the reef ecosystem. Parrotfish scrape algae and bite off small pieces of coral, creating sand. Crown-of-thorns starfish eat coral and can cause damage in large numbers. Cleaner wrasse remove parasites from other fish. Sea urchins graze on algae, preventing it from overgrowing coral. Coral polyps are the tiny animals that build the reef structure.",
      },
    ],
  },
  {
    id: "conservation-actions",
    title: "Conservation Actions",
    description: "What would you do in these coral reef conservation scenarios?",
    difficulty: "hard",
    imageUrl: "/q2.jpg",
    questions: [
      {
        id: "actions-1",
        question:
          "You're visiting a coral reef on vacation. You notice another tourist standing on the coral to take a photo. What should you do?",
        type: "scenario",
        options: [
          "Do nothing, it's not your business",
          "Politely explain that standing on coral kills it and suggest they step back into deeper water",
          "Take a photo of them damaging the reef to report to authorities",
          "Stand on the coral yourself to show them how ridiculous they look",
        ],
        correctAnswer: "Politely explain that standing on coral kills it and suggest they step back into deeper water",
        explanation:
          "Education is often the best approach. Many people don't realize that corals are living animals that can be damaged by standing on them. A polite explanation can help protect the reef while raising awareness.",
      },
      {
        id: "actions-2",
        question:
          "Your school is located near a coastal area with coral reefs. You want to organize a project to help protect them. Which of these would likely have the most direct positive impact?",
        type: "scenario",
        options: [
          "Creating a social media campaign about coral reefs",
          "Organizing a beach and coastal cleanup day",
          "Writing letters to local politicians about reef protection",
          "Selling coral-themed t-shirts to raise money",
        ],
        correctAnswer: "Organizing a beach and coastal cleanup day",
        explanation:
          "While all these actions can help, removing trash from beaches and coastal areas has a direct and immediate positive impact by preventing debris from reaching the reef. Trash and plastic pollution can physically damage corals and introduce toxins.",
      },
      {
        id: "actions-3",
        question:
          "You notice that your local supermarket sells fish species that are caught using methods that damage coral reefs. What's the most effective action you could take?",
        type: "scenario",
        options: [
          "Stop eating fish completely",
          "Put up posters outside the store telling people not to shop there",
          "Research sustainable seafood alternatives and ask the store manager to consider stocking them",
          "Tell your friends not to shop at that supermarket",
        ],
        correctAnswer: "Research sustainable seafood alternatives and ask the store manager to consider stocking them",
        explanation:
          "Constructive engagement is often more effective than boycotts or protests. Providing specific alternatives shows the store there's consumer interest in sustainable options and gives them a clear path to improvement.",
      },
      {
        id: "actions-4",
        question:
          "Your family is planning a vacation to an area with coral reefs. What suggestion could you make to minimize your impact?",
        type: "scenario",
        options: [
          "Suggest staying in a hotel that treats and recycles its wastewater",
          "Recommend bringing regular sunscreen from home to save money",
          "Propose collecting coral pieces as souvenirs",
          "Suggest a fishing trip to catch as many reef fish as possible",
        ],
        correctAnswer: "Suggest staying in a hotel that treats and recycles its wastewater",
        explanation:
          "Hotels that properly treat their wastewater prevent harmful nutrients and chemicals from reaching the reef. Untreated wastewater can cause algal blooms that smother corals and disrupt the reef ecosystem.",
      },
    ],
  },
]

export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find((quiz) => quiz.id === id)
}


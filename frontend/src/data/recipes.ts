import type { Recipe } from "../types";

export const initialRecipes: Recipe[] = [
  {
    id: 1,
    name: "Chicken curry",
    category: "dinner",
    minutes: 40,
    difficulty: "medium",
    ingredients: [
      "500 g chicken, diced",
      "1 onion, chopped",
      "2 tbsp curry paste",
      "400 ml coconut milk",
    ],
    steps: [
      "Cook the onion in a little oil until soft.",
      "Add chicken and curry paste; cook for 5 minutes.",
      "Add coconut milk and simmer for 25 minutes.",
    ],
    favourite: false,
  },
  {
    id: 2,
    name: "Pancakes",
    category: "breakfast",
    minutes: 20,
    difficulty: "easy",
    ingredients: ["200 g flour", "2 eggs", "300 ml milk"],
    steps: ["Mix everything into a batter.", "Fry both sides until golden."],
    favourite: true,
  },
  {
    id: 3,
    name: "Mango sticky rice",
    category: "dessert",
    minutes: 35,
    difficulty: "medium",
    ingredients: [
      "200 g glutinous rice",
      "1 ripe mango",
      "200 ml coconut milk",
      "2 tbsp sugar",
    ],
    steps: [
      "Steam the rice until soft.",
      "Stir in sweetened coconut milk.",
      "Serve with sliced mango.",
    ],
    favourite: false,
  },
];
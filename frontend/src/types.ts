export type RecipeCategory = "breakfast" | "lunch" | "dinner" | "dessert";
export type Difficulty = "easy" | "medium" | "hard";

export interface Recipe {
  id: number;
  name: string;
  category: RecipeCategory;
  minutes: number;
  difficulty: Difficulty;
  ingredients: string[];
  steps: string[];
  favourite: boolean;
}
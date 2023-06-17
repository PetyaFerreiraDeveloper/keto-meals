export type RecipeType = {
  name: string;
  description: string;
  category: string;
  ingredients: IngredientType[];
  preparationTime: number;
  timeUnit: string;
  instructions: string;
};

export type IngredientType = {
  name: string;
  quantity: number;
  measureUnit: string;
};

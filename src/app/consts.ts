import { RecipeType } from "./types";

export const recipes: RecipeType[] = [
  {
    name: "musaka",
    description: "Tasty meal with vegetables and minced meat",
    category: "Meat",
    ingredients: [
      {
        name: "peppers",
        quantity: 2,
        measureUnit: "pieces",
      },
      {
        name: "oil",
        quantity: 50,
        measureUnit: "grams",
      },
    ],
    preparationTime: 30,
    timeUnit: "minutes",
    instructions:
      "Wash vegetables. Cut vegetables in small pieces. Cut squash on the long side. Mix ingredients",
  },
  {
    name: "omlet",
    description: "Tasty meal with vegetables and eggs",
    category: "Vegetarian",
    ingredients: [
      {
        name: "egg",
        quantity: 2,
        measureUnit: "pieces",
      },
      {
        name: "celery",
        quantity: 2,
        measureUnit: "pieces",
      },
    ],
    preparationTime: 20,
    timeUnit: "minutes",
    instructions:
      "Cut vegetables and meat in small pieces.Brake eggs in hot pan.Mix ingredients",
  },
];

export const mishmash: RecipeType = {
  name: "mishmash",
  description: "Tasty meal with eggs and peppers",
  category: "Vegetarian",
  ingredients: [
    {
      name: "peppers",
      quantity: 6,
      measureUnit: "pieces",
    },
    {
      name: "eggs",
      quantity: 6,
      measureUnit: "pieces",
    },
  ],
  preparationTime: 30,
  timeUnit: "minutes",
  instructions:
    "Wash pepper.Bake and peal peppers.Cut them in long stripes.Peal 1 onion and cut it in stripes",
};
export const tarator: RecipeType = {
  name: "tarator",
  description: "Tasty meal with eggs and peppers",
  category: "Soups",
  ingredients: [
    {
      name: "cucumbers",
      quantity: 1,
      measureUnit: "pieces",
    },
    {
      name: "youghurt",
      quantity: 500,
      measureUnit: "ml",
    },
    {
      name: "water",
      quantity: 1000,
      measureUnit: "ml",
    },
  ],
  preparationTime: 10,
  timeUnit: "minutes",
  instructions:
    "Wash and cut cucumber into small cubes. Peal garlic and squeeze it together with the cucumbers. Mix water, youghurt, garlic and cucumebers. Put salt and dill",
};

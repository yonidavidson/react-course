import { ADD_RECIPE, TOGGLE_FAVORITE, API, SET_RECIPES } from 'consts/action-types';

export const addRecipe = (title, description) => ({
  type: ADD_RECIPE,
  payload: {
    title,
    description
  }
});

export const toggleFavorite = (title) => ({
  type: TOGGLE_FAVORITE,
  payload: title
});

export const fetchRecipes = () => ({
  type: API,
  url: 'recipes.json',
  success: setRecipes
});

export const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
});
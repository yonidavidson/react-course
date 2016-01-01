import { ADD_RECIPE, TOGGLE_FAVORITE, FETCH_RECIPES, SET_RECIPES } from 'consts/action-types';

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
  type: FETCH_RECIPES
});

export const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
});
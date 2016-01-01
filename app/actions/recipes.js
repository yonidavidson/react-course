import { ADD_RECIPE, TOGGLE_FAVORITE } from 'consts/action-types';

export const addRecipe = (title) => ({
  type: ADD_RECIPE,
  title
});

export const toggleFavorite = (title) => ({
  type: TOGGLE_FAVORITE,
  title
});
import { ADD_RECIPE, TOGGLE_FAVORITE } from 'consts/action-types';

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
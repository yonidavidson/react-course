export const addRecipe = (title) => ({
  type: 'ADD_RECIPE',
  title
});

export const toggleFavorite = (title) => ({
  type: 'TOGGLE_FAVORITE',
  title
});
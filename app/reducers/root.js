const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      const newRecipe = {
        title: action.title,
        favorite: false
      };

      return Object.assign({}, state, {
        recipes: state.recipes.concat(newRecipe)
      });

    case 'TOGGLE_FAVORITE':
      const recipes = state.recipes.map(recipe =>
        recipe.title !== action.title
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite })
      );

      return Object.assign({}, state, { recipes });
  }

  return state;
};

export default reducer;
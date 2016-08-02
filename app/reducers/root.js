import { ADD_RECIPE, TOGGLE_FAVORITE } from 'consts/action-types';

const reducer = (state, action) => {

  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = {
        title: action.title,
        favorite: false,
        description: action.description
      };

      return Object.assign({}, state, {
        recipes: state.recipes.concat(newRecipe)
      });

    case TOGGLE_FAVORITE:
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

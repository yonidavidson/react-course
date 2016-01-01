import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      const newRecipe = {
        title: action.title,
        favorite: false
      };

      return Object.assign({}, state, { recipes: state.recipes.concat(newRecipe) });

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

const initialState = {
  recipes: [
    {
      title: 'Waffles',
      favorite: false
    },
    {

      title: 'Omelette',
      favorite: true
    }
  ]
};

const store = createStore(reducer, initialState);

const App = () => (
  <div>
    <h1>Recipes:</h1>
    <Recipes />
    <AddRecipe />
  </div>
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);

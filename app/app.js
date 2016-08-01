import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';

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

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'TOGGLE':
      const newRecipes = state.recipes.map(recipe =>
        recipe.title !== action.title
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite }));

      return Object.assign({}, state, {
        recipes: newRecipes
      });
  }
  return state;
};

const store = createStore(reducer, initialState);

window.store = store;

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

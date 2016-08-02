import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';

const  initialState = {
  recipes : [
  { title: 'Waffles', favorite: false},
  { title: 'Omelette',favorite: true}
  ]
}

function reducer(state,action){
  let newRecipes = {};
  switch (action.type){
    case "TOGGLE":
        newRecipes = state.recipes.map(recipe => 
        recipe.title===action.title? Object.assign({},recipe,{favorite:(!recipe.favorite)}):recipe)
        return Object.assign({},state,{recipes:newRecipes})
    case "UPDATE_RECIPE":
        newRecipes = state.recipes.concat({title:action.title,favorite:false})
        return Object.assign({},state,{recipes:newRecipes})
    default:
      return state;
  }
}

const store = createStore(reducer, initialState );

const App = () => (
  <div>
  <h1>Recipes:</h1>
  <Recipes/>
  <AddRecipe />
  </div>
  );

render(
  <Provider store = {store}>
  <App/>
  </Provider>,
  document.getElementById('app')
  );
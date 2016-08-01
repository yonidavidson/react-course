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

const store = createStore(x => x, initialState );

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
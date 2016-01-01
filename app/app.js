import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store/store';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';

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

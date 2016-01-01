import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe } recipe={ recipe } /> )}
  </ul>
);

const recipes = ['Waffles', 'Omelette'];

const App = () => (
  <div>
    <h1>Recipes:</h1>
    <Recipes recipes={ recipes } />
  </div>
);

render(
  React.createElement(App),
  document.getElementById('app')
);

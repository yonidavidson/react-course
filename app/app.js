import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

const Recipe = () => (
  <li>Waffel</li>
);

const App = () => (
  <div>
    <h1>Recipes:</h1>
    <ul>
      <Recipe />
      <Recipe />
    </ul>
  </div>
);

render(
  React.createElement(App),
  document.getElementById('app')
);

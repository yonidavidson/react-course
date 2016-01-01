import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

function App() {
  return React.createElement('h1', null, 'I am a component!');
}

render(
  React.createElement(App),
  document.getElementById('app')
);

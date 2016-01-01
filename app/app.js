import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

function App() {
  return React.createElement('div', null,
    React.createElement('h1', null, 'I am a component!'),
    React.createElement('h2', null, 'I am a sub title!')
  );
}

render(
  React.createElement(App),
  document.getElementById('app')
);

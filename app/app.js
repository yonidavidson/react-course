import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

function App() {
  return (
    <div>
      <h1>I am a component!</h1>
      <h2>I am a sub title</h2>
    </div>
  );
}

render(
  React.createElement(App),
  document.getElementById('app')
);

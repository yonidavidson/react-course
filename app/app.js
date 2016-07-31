import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

const Math = ({x,y}) => (<h2>{x+y}</h2>) // Destructering from props

const App = () => (
 <div>
  <h1>I am a component</h1> // Main component is between tags
  <Math x={1} y={2}></Math> //Propes are part of first tag 
  <Math x={2} y={3}></Math> 
  </div>
);

render(
  React.createElement(App),
  document.getElementById('app')
);
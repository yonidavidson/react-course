import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

import Recipes from 'components/Recipes'
import AddRecipe from 'components/AddRecipe'

const recipes = ['Waffles', 'Omelette'];

class App extends React.Component {
  constructor() {
    super();

    this.state = { recipes };
  }

  render() {
    return (
      <div>
        <h1>Recipes:</h1>
        <Recipes recipes={ this.state.recipes }/>
        <AddRecipe addRecipe={ this.addRecipe.bind(this) } />
      </div>
    );
  }

  addRecipe(title) {
    this.setState({ recipes: this.state.recipes.concat(title) });
  }
}

render(
  React.createElement(App),
  document.getElementById('app')
);

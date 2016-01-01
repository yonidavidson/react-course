import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';

const recipes = [
  {
    title: 'Waffles',
    favorite: false
  },
  {

    title: 'Omelette',
    favorite: true
  }
];

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
    const newRecipe = {
      title,
      favorite: false
    };

    this.setState({ recipes: this.state.recipes.concat(newRecipe) });
  }
}

render(
  React.createElement(App),
  document.getElementById('app')
);

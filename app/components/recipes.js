import Recipe from './recipe';

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe.title } recipe={ recipe } /> )}
  </ul>
);

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

export default Recipes;

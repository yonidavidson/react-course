import Recipe from './recipe';

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe } recipe={ recipe } /> )}
  </ul>
);

export default Recipes;
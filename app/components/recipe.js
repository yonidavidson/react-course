const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.string.isRequired
};

export default Recipe;
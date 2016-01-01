const Recipe = ({ recipe: { favorite, title } }) => (
  <li className={ favorite && 'favorite' }>{ title }</li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

export default Recipe;
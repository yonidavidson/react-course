const Recipe = ({ recipe: { favorite, title, description }, toggleFavorite }) => (
  <li className={ favorite && 'favorite' }
      onClick={ () => toggleFavorite(title) }>
    { title } ({description})
  </li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipe;

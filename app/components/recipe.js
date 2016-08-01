const Recipe = ({ recipe: { favorite, title }, toggleFavorite }) => {
  console.log(title);
  return (
    <li className={ favorite && 'favorite' }
        onClick={ () => toggleFavorite(title) }>
      { title }
    </li>
  );
}

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

export default Recipe;
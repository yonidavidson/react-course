const Recipe = ({ recipe }) => (
	<li className={recipe.favorite ?'favorite' :''}>{ recipe.title }</li>
);

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

export default Recipe;
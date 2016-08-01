import { connect } from 'react-redux'
import Recipe from './recipe';

const Recipes = ({ recipes, toggleFavorite }) => (
  <ul>
  {
    recipes.map(recipe => (
      <Recipe key={ recipe.title }
      recipe={ recipe }
      toggleFavorite={ toggleFavorite } />
      )
    )
  }
  </ul>
  );

Recipes.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  toggleFavorite: React.PropTypes.func.isRequired
};

//connecting
const mapStateToProps = (state) => ({
  recipes: state.recipes
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (title) => dispatch({type:"TOGGLE", title})
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
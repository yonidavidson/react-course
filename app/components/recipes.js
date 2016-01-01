import { connect } from 'react-redux';
import { toggleFavorite } from 'actions/recipes';
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

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, { toggleFavorite })(Recipes);

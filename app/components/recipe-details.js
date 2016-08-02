import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

const RecipeDetails = (props) => (
  <div>
    <h1>{props.params.id}</h1>
    <h2>{props.description} 'meta-data'</h2>
    <Link to="/">"Home"</Link>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
    description : JSON.stringify(state.recipes.find(recipe => recipe.title === ownProps.params.title)) 
  });

export default connect(mapStateToProps, null)(RecipeDetails);

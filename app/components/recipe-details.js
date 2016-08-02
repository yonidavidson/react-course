import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

const RecipeDetails = (props) => (
  <div>
    <h1>{props.params.id}</h1>
    <h2>{props.description}</h2>
    <Link to="/">"Home"</Link>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  description : JSON.stringify(ownProps.routeParams.id)
});

export default connect(mapStateToProps, null)(RecipeDetails);

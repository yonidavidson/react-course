import { Link, browserHistory } from 'react-router';

const RecipeDetails = (props) => (
  <div>
    <h1>{props.params.id}</h1>
    <Link to="/">HOME</Link>
  </div>
);

export default RecipeDetails

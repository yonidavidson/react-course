import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Link, browserHistory } from 'react-router';
import store from 'store/store';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';
import Detail from 'components/recipe-details'

const App = ({ children }) => (
  <div>
    <h1>Recipes app:</h1>
    { children || <Recipes /> }
  </div>
);

const NotFound = () => (
  <div>
    <h1>You are lost?</h1>
    <Link to="/">Back home</Link>
  </div>
);


render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" components={ App }>
        <Route path="add" component={ AddRecipe } />
        <Route path=":id" component={Detail} />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('app')
);

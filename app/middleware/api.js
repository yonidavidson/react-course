import { FETCH_RECIPES } from 'consts/action-types';
import { setRecipes } from 'actions/recipes';

const RECIPES_URL = 'https://s3.amazonaws.com/500tech-shared/recipes.json';

const makeRequest = (url, success) => fetch(url)
  .then(response => {
    if (response.status !== 200) {
      console.log(`Error fetching recipes: ${ response.status }`);
    } else {
      response.json().then(success)
    }
  })
  .catch(err => console.log(`Error fetching recipes: ${ err }`));

const apiMiddleware = store => next => action => {
  if (action.type === FETCH_RECIPES) {
    makeRequest(RECIPES_URL, (data) => store.dispatch(setRecipes(data)));
  }

  next(action);
};

export default apiMiddleware;
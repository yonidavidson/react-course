import { API } from 'consts/action-types';

const RECIPES_URL = 'https://s3.amazonaws.com/500tech-shared/';

const handleError = error => console.log(`Error accessing server: ${ error }`);

const makeRequest = (url, success) => fetch(RECIPES_URL + url)
  .then(response => {
    if (response.status !== 200) {
      handleError(response.status);
    } else {
      response.json().then(success)
    }
  })
  .catch(handleError);

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === API) {
    makeRequest(action.url, (data) => dispatch(action.success(data)));
  }

  next(action);
};

export default apiMiddleware;
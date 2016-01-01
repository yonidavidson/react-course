import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/root';
import logMiddleware from 'middleware/log';

const initialState = {
  recipes: [
    {
      title: 'Waffles',
      description: '',
      favorite: false
    },
    {

      title: 'Omelette',
      description: '',
      favorite: true
    }
  ]
};

export default createStore(rootReducer, initialState, applyMiddleware(logMiddleware));
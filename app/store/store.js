import { createStore } from 'redux';
import rootReducer from 'reducers/root';

const initialState = {
  recipes: [
    {
      title: 'Waffles',
      favorite: false
    },
    {

      title: 'Omelette',
      favorite: true
    }
  ]
};

export default createStore(rootReducer, initialState);
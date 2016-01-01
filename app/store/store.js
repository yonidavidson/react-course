import { createStore } from 'redux';
import rootReducer from 'reducers/root';

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

export default createStore(rootReducer, initialState);
import { createStore } from 'redux';
import rootReducer from 'reducers/root';

const initialState = {
  recipes: [
    {
      title: 'Waffles',
      favorite: false,
      description:'Best waffels recipe'
    },
    {

      title: 'Omelette',
      favorite: true,
      description:'Best Omelette recipe'
    }
  ]
};

export default createStore(rootReducer, initialState);

import React from 'react';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TOGGLE_FAVORITE } from 'consts/action-types';
import { addRecipe } from 'actions/recipes';
import rootReducer from 'reducers/root';

import Recipes from 'components/recipes';

const setup = () => {
  const initialState = { recipes: [] };
  const reducer = jasmine.createSpy('stub').and.callFake(rootReducer);
  const store = createStore(reducer, initialState);
  const wrapper = mount(<Provider store={ store }><Recipes /></Provider>);

  return {
    wrapper,
    store,
    reducer
  }
};

describe('<App />', () => {
  it('renders li component', () => {
    let { wrapper, store, reducer } = setup();

    store.dispatch(addRecipe('name', 'desc'));

    wrapper.find('li').simulate('click');

    const lastAction = reducer.calls.mostRecent().args[1];

    expect(lastAction.type).toEqual(TOGGLE_FAVORITE);
    expect(lastAction.payload).toEqual('name');

    expect(store.getState().recipes[0].favorite).toEqual(true);
  });
});
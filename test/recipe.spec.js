import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'test-utils';

import Recipe from 'components/recipe';

const setup = (cb = noop) => {
  const recipe = { title: 'test', favorite: false };
  const wrapper = shallow(<Recipe recipe={ recipe } toggleFavorite={ cb } />);

  return {
    wrapper,
    recipe,
    cb
  };
};

describe('<Recipe />', () => {
  it('renders li component', () => {
    const { wrapper, recipe } = setup();

    expect(wrapper.find('li').props().children).toBe(recipe.title);
  });

  it('should call toggleFavorite', () => {
    const { wrapper, recipe, cb } = setup(jasmine.createSpy());

    wrapper.find('li').simulate('click');

    expect(cb).toHaveBeenCalledWith(recipe.title);
  });
});
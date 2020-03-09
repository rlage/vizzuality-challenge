import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

import Circle from '../Circle';

describe('<Circle /> spec', () => {
  it('renders component', () => {
    const wrapper = render(
      <Circle
        x={1}
        y={1}
        color='red'
        radius={10}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});

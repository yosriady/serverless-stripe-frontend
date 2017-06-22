import React from 'react';
import renderer from 'react-test-renderer';

import PayButton from '../../components/PayButton';

describe('PayButton', () => {
  test('renders successfully', () => {
    const component = renderer.create(<PayButton amount={100} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

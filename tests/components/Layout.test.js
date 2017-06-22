import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../../components/Layout';

describe('Layout', () => {
  test('renders successfully', () => {
    const component = renderer.create(<Layout><p>Hello world</p></Layout>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

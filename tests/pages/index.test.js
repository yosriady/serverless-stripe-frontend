import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../../pages/index';

describe('With Enzyme', () => {
  test('Index shows heading', () => {
    const app = shallow(<Index />);
    expect(app.find('h1').text()).toEqual('Serverless Stripe Checkout');
  });
});

describe('With Snapshot Testing', () => {
  test('Index renders successfully', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

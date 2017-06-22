import React from 'react';
import PropTypes from 'prop-types';
import { injectStripe } from 'react-stripe-elements';

import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
  handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // However, this line of code will do the same thing:
    this.props.stripe.createToken({ type: 'card', name: 'Jenny Rosen' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <AddressSection />
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  stripe: PropTypes.shape({
    createToken: PropTypes.func,
  }).isRequired,
};

export default injectStripe(CheckoutForm);

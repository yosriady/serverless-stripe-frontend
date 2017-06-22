import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import config from '../config';

class PayButton extends React.Component {
  constructor(props) {
    super(props);
     // This binding is necessary to make `this` work in the callback
    this.onToken = this.onToken.bind(this);
  }

  async onToken(token) { // Token returned from Stripe
    const res = await fetch(config.stripe.apiUrl, { // Backend API url
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount,
          currency: config.stripe.currency,
        },
      }),
    });
    const data = await res.json();
    console.log('onToken'); // Logs for ease of debugging
    console.log(data);
  }

  render() {
    return (
      <StripeCheckout
        name="Serverless Stripe Store Inc."
        token={this.onToken}
        amount={this.props.amount}
        currency={config.stripe.currency}
        stripeKey={config.stripe.apiKey} // Stripe publishable API key
        allowRememberMe={false}
      />
    );
  }
}

PayButton.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default PayButton;

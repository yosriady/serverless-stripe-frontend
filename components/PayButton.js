import fetch from 'isomorphic-unfetch';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import config from '../config';

class PayButton extends React.Component {
  static async onToken(token) {
    const res = await fetch(config.stripe.apiUrl, {
      method: 'POST',
      body: JSON.stringify(token),
    });
    const data = await res.json();
    console.log(data);
  }

  render() {
    return (
      <StripeCheckout
        name="Serverless Stripe Store Inc."
        token={PayButton.onToken}
        amount={100}
        stripeKey={config.stripe.apiKey}
        allowRememberMe={false}
      />
    );
  }
}

export default PayButton;

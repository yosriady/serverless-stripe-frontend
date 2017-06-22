import React from 'react';
import { CardElement } from 'react-stripe-elements';

const CardSection = () => (
  <div>
    Card details
    <CardElement style={{ base: { fontSize: '18px' } }} />
  </div>
);

export default CardSection;

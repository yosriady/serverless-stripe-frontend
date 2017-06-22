import React from 'react';
import { AddressElement } from 'react-stripe-elements';

const AddressSection = () => (
  <div>
    Address details
    <AddressElement style={{ base: { fontSize: '18px' } }} />
  </div>
);

export default AddressSection;

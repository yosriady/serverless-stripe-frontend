import Head from 'next/head';
import { StripeProvider } from 'react-stripe-elements';

import MyCheckout from '../components/MyCheckout';

export default () => (
  <div>
    <Head>
      <title>Serverless Stripe Example</title>
      <script src="https://js.stripe.com/v3/" />
    </Head>
    <p> Welcome to next.js!</p>
    <StripeProvider apiKey="pk_test_12345">
      <MyCheckout />
    </StripeProvider>
  </div>
);

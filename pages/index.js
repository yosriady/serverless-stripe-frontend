import Layout from '../components/Layout';
import PayButton from '../components/PayButton';

export default () => (
  <Layout>
    <h1>Serverless Stripe Checkout</h1>
    <p>Use test@email.com, 4242 4242 4242 4242, and any CVC and future expiration date.</p>
    <PayButton amount={200} />
    <p><a href="https://yos.io/2017/06/22/serverless-stripe/">Read the blog post!</a></p>
  </Layout>
);

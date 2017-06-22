import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>Serverless Stripe Checkout Example</title>
      <script src="https://js.stripe.com/v3/" />
      <style>{`
         html {
           height: 100%;
         }
         #container {
           font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
           background: #F6F8FA;
           color: #4C555A;
           min-height: 100%;
           text-align: center;
           -webkit-font-smoothing: antialiased;
         }
         a {
           color: #00a3da;
         }
         a:hover {
           background-color: #fff2a8;
         }
      `}</style>
    </Head>
    <div id="container">
      {props.children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

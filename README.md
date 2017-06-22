# Serverless Stripe frontend

The frontend for a serverless stripe application.
Built with Next.js and React.

[Demo](https://serverless-stripe-frontend-xlknvwjjlv.now.sh)

[Blog Post](https://yos.io/2017/06/22/serverless-stripe/)

## Setup

### Install dependencies

```
yarn
```

### Run locally

```
yarn dev
```

## Configuration

Enter your configuration variables in `config.js`. Example:

```javascript
const config = {
  stripe: {
    apiKey: 'pk_test_SG9qh1GK5AiTycr7x4t3L9p6',
    apiUrl: 'https://i79u9jwadj.execute-api.us-east-1.amazonaws.com/dev/charges',
  },
};

export default config;
```

You need:

- Your Stripe **publishable key**
- Your backend's HTTP API endpoint url

## Thanks

**serverless-stripe-frontend** © 2017+, Yos Riady. Released under the [MIT] License.<br>
Authored and maintained by Yos Riady with help from contributors ([list][contributors]).

> [yos.io](http://yos.io) &nbsp;&middot;&nbsp;
> GitHub [@yosriady](https://github.com/yosriady)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/yosriady/serverless-stripe-frontend/contributors

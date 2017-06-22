'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactStripeElements = require('react-stripe-elements');

var _MyCheckout = require('../components/MyCheckout');

var _MyCheckout2 = _interopRequireDefault(_MyCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yosriady/serverless-stripe-frontend/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Serverless Stripe Example'), _react2.default.createElement('script', { src: 'https://js.stripe.com/v3/', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, ' Welcome to next.js!'), _react2.default.createElement(_reactStripeElements.StripeProvider, { apiKey: 'pk_test_12345', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_MyCheckout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })));
};
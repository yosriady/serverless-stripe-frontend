
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _reactStripeElements = __webpack_require__(540);

var _MyCheckout = __webpack_require__(545);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yosriady/serverless-stripe-frontend/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yosriady/serverless-stripe-frontend/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactStripeElements = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yosriady/serverless-stripe-frontend/components/AddressSection.js';


var AddressSection = function AddressSection() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Address details', _react2.default.createElement(_reactStripeElements.AddressElement, { style: { base: { fontSize: '18px' } }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

exports.default = AddressSection;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yosriady/serverless-stripe-frontend/components/AddressSection.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yosriady/serverless-stripe-frontend/components/AddressSection.js"); } } })();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactStripeElements = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yosriady/serverless-stripe-frontend/components/CardSection.js';


var CardSection = function CardSection() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Card details', _react2.default.createElement(_reactStripeElements.CardElement, { style: { base: { fontSize: '18px' } }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

exports.default = CardSection;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yosriady/serverless-stripe-frontend/components/CardSection.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yosriady/serverless-stripe-frontend/components/CardSection.js"); } } })();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(85);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStripeElements = __webpack_require__(540);

var _AddressSection = __webpack_require__(542);

var _AddressSection2 = _interopRequireDefault(_AddressSection);

var _CardSection = __webpack_require__(543);

var _CardSection2 = _interopRequireDefault(_CardSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yosriady/serverless-stripe-frontend/components/CheckoutForm.js';


var CheckoutForm = function (_React$Component) {
  (0, _inherits3.default)(CheckoutForm, _React$Component);

  function CheckoutForm() {
    (0, _classCallCheck3.default)(this, CheckoutForm);

    return (0, _possibleConstructorReturn3.default)(this, (CheckoutForm.__proto__ || (0, _getPrototypeOf2.default)(CheckoutForm)).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckoutForm, [{
    key: 'handleSubmit',
    value: function handleSubmit(ev) {
      // We don't want to let default form submission happen here, which would refresh the page.
      ev.preventDefault();

      // However, this line of code will do the same thing:
      this.props.stripe.createToken({ type: 'card', name: 'Jenny Rosen' });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('form', { onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_AddressSection2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_CardSection2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Confirm order'));
    }
  }]);

  return CheckoutForm;
}(_react2.default.Component);

CheckoutForm.propTypes = {
  stripe: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactStripeElements.injectStripe)(CheckoutForm);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yosriady/serverless-stripe-frontend/components/CheckoutForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yosriady/serverless-stripe-frontend/components/CheckoutForm.js"); } } })();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactStripeElements = __webpack_require__(540);

var _CheckoutForm = __webpack_require__(544);

var _CheckoutForm2 = _interopRequireDefault(_CheckoutForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/yosriady/serverless-stripe-frontend/components/MyCheckout.js';


var MyCheckout = function MyCheckout() {
  return _react2.default.createElement(_reactStripeElements.Elements, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_CheckoutForm2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

exports.default = MyCheckout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/yosriady/serverless-stripe-frontend/components/MyCheckout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/yosriady/serverless-stripe-frontend/components/MyCheckout.js"); } } })();

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ })

},[551]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2YxYzQ1ZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRyZXNzU2VjdGlvbi5qcz9mMWM0NWRkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZFNlY3Rpb24uanM/ZjFjNDVkZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qcz9mMWM0NWRkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTXlDaGVja291dC5qcz9mMWM0NWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBTdHJpcGVQcm92aWRlciB9IGZyb20gJ3JlYWN0LXN0cmlwZS1lbGVtZW50cyc7XG5cbmltcG9ydCBNeUNoZWNrb3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlDaGVja291dCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5TZXJ2ZXJsZXNzIFN0cmlwZSBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxwPiBXZWxjb21lIHRvIG5leHQuanMhPC9wPlxuICAgIDxTdHJpcGVQcm92aWRlciBhcGlLZXk9XCJwa190ZXN0XzEyMzQ1XCI+XG4gICAgICA8TXlDaGVja291dCAvPlxuICAgIDwvU3RyaXBlUHJvdmlkZXI+XG4gIDwvZGl2PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFkZHJlc3NFbGVtZW50IH0gZnJvbSAncmVhY3Qtc3RyaXBlLWVsZW1lbnRzJztcblxuY29uc3QgQWRkcmVzc1NlY3Rpb24gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgQWRkcmVzcyBkZXRhaWxzXG4gICAgPEFkZHJlc3NFbGVtZW50IHN0eWxlPXt7IGJhc2U6IHsgZm9udFNpemU6ICcxOHB4JyB9IH19IC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzc1NlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FkZHJlc3NTZWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmRFbGVtZW50IH0gZnJvbSAncmVhY3Qtc3RyaXBlLWVsZW1lbnRzJztcblxuY29uc3QgQ2FyZFNlY3Rpb24gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgQ2FyZCBkZXRhaWxzXG4gICAgPENhcmRFbGVtZW50IHN0eWxlPXt7IGJhc2U6IHsgZm9udFNpemU6ICcxOHB4JyB9IH19IC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NhcmRTZWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBpbmplY3RTdHJpcGUgfSBmcm9tICdyZWFjdC1zdHJpcGUtZWxlbWVudHMnO1xuXG5pbXBvcnQgQWRkcmVzc1NlY3Rpb24gZnJvbSAnLi9BZGRyZXNzU2VjdGlvbic7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSAnLi9DYXJkU2VjdGlvbic7XG5cbmNsYXNzIENoZWNrb3V0Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZVN1Ym1pdChldikge1xuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gbGV0IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGhhcHBlbiBoZXJlLCB3aGljaCB3b3VsZCByZWZyZXNoIHRoZSBwYWdlLlxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBIb3dldmVyLCB0aGlzIGxpbmUgb2YgY29kZSB3aWxsIGRvIHRoZSBzYW1lIHRoaW5nOlxuICAgIHRoaXMucHJvcHMuc3RyaXBlLmNyZWF0ZVRva2VuKHt0eXBlOiAnY2FyZCcsIG5hbWU6ICdKZW5ueSBSb3Nlbid9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPEFkZHJlc3NTZWN0aW9uIC8+XG4gICAgICAgIDxDYXJkU2VjdGlvbiAvPlxuICAgICAgICA8YnV0dG9uPkNvbmZpcm0gb3JkZXI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbkNoZWNrb3V0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIHN0cmlwZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0U3RyaXBlKENoZWNrb3V0Rm9ybSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS5qcyIsImltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAncmVhY3Qtc3RyaXBlLWVsZW1lbnRzJztcblxuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tICcuL0NoZWNrb3V0Rm9ybSc7XG5cbmNvbnN0IE15Q2hlY2tvdXQgPSAoKSA9PiAoXG4gIDxFbGVtZW50cz5cbiAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gIDwvRWxlbWVudHM+XG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IE15Q2hlY2tvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015Q2hlY2tvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFkQTtBQUNBO0FBbUJBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
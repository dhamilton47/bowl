"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactHotLoader = require("react-hot-loader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = (0, _reactHotLoader.hot)(module)(function () {
  return /*#__PURE__*/_react.default.createElement("div", null, "Get message from backend");
});

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(App, null), document.getElementById('root'));
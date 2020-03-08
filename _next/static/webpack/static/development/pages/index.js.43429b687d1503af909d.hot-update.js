webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tooltip/Tooltip.js":
/*!***************************************!*\
  !*** ./components/Tooltip/Tooltip.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.module.css */ "./components/Tooltip/Tooltip.module.css");
/* harmony import */ var _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rafael.tavares/Documents/vizzuality/vizzuality-challenge/components/Tooltip/Tooltip.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Tooltip = function Tooltip(_ref) {
  var content = _ref.content,
      display = _ref.display,
      element = _ref.element;
  var orientation = element ? element.y < 67 ? "bottom" : "top" : "top";
  var x = element ? element.x - 110 / 2 + 16 : 0;
  var y = element ? orientation === "bottom" ? element.y + 16 : element.y - 67 - 16 : 0;
  var tooltipClass = orientation === "bottom" ? _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tooltipBottom : _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tooltip;

  if (display) {
    return __jsx("div", {
      className: _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: tooltipClass,
      style: {
        left: x,
        top: y
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("span", {
      className: _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, content)), __jsx("div", {
      className: _Tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ })

})
//# sourceMappingURL=index.js.43429b687d1503af909d.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Basic/Basic.js":
/*!***********************************!*\
  !*** ./components/Basic/Basic.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "./components/Basic/Circle.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Label */ "./components/Label/index.js");
var _jsxFileName = "/Users/rafael.tavares/Documents/vizzuality/vizzuality-challenge/components/Basic/Basic.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Basic = function Basic(_ref) {
  var data = _ref.data;
  var r = 6;
  var separator = 7;
  return __jsx("g", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data ? data.items.map(function (d, i) {
    return __jsx("g", {
      transform: "translate(".concat(0, " ", i * r * 2 + separator * i + 10, ")"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_Circle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      x: 0,
      y: 0,
      radius: r,
      color: d.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx(_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      x: r + 5,
      y: r / 2,
      text: d.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ })

})
//# sourceMappingURL=index.js.576517c1394613704103.hot-update.js.map
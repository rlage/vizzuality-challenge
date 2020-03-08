webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InfoModal/InfoModal.js":
/*!*******************************************!*\
  !*** ./components/InfoModal/InfoModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoModal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoModal.module.css */ "./components/InfoModal/InfoModal.module.css");
/* harmony import */ var _InfoModal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InfoModal_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rafael.tavares/Documents/vizzuality/vizzuality-challenge/components/InfoModal/InfoModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var InfoModal = function InfoModal(_ref) {
  var content = _ref.content,
      setShowModal = _ref.setShowModal;

  var handleClick = function handleClick() {
    setShowModal({
      'layer': null,
      'display': false
    });
  };

  return __jsx("div", {
    className: _InfoModal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: _InfoModal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    "class": _InfoModal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
    onClick: function onClick() {
      return handleClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\xD7"), __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoModal);

/***/ })

})
//# sourceMappingURL=index.js.a5aace3fc2ac4acc61fc.hot-update.js.map
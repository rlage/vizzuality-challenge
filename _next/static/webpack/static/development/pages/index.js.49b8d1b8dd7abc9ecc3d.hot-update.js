webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart/index.js");
/* harmony import */ var _components_Headline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Headline */ "./components/Headline/index.js");
/* harmony import */ var _components_Basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Basic */ "./components/Basic/index.js");
/* harmony import */ var _components_Gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Gradient */ "./components/Gradient/index.js");
/* harmony import */ var _components_Choropleth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Choropleth */ "./components/Choropleth/index.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utils */ "./components/utils.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_InfoModal_InfoModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/InfoModal/InfoModal */ "./components/InfoModal/InfoModal.js");



var _jsxFileName = "/Users/rafael.tavares/Documents/vizzuality/vizzuality-challenge/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function fetchData() {
      var result, dataObject;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default()('https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json'));

            case 2:
              result = _context.sent;
              dataObject = {};
              result.data.forEach(function (d) {
                return d.type !== 'timeline' ? dataObject[d.type] = d : null;
              });
              setData(dataObject);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a);
    }

    fetchData();
  }, []);

  var _useChartDimensions = Object(_components_utils__WEBPACK_IMPORTED_MODULE_10__["useChartDimensions"])(),
      _useChartDimensions2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useChartDimensions, 2),
      ref = _useChartDimensions2[0],
      dimensions = _useChartDimensions2[1];

  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.app,
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.basic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_5__["Chart"], {
    cssClass: "basic",
    dimensions: dimensions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Basic__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data.basic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), __jsx(_components_Headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.gradient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_5__["Chart"], {
    cssClass: "gradient",
    dimensions: dimensions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_Gradient__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data.gradient,
    width: dimensions.boundedWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx(_components_Headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.choropleth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_5__["Chart"], {
    cssClass: "choropleth",
    dimensions: dimensions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_components_Choropleth__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data.choropleth,
    width: dimensions.boundedWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(_components_InfoModal_InfoModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    content: data.basic.description,
    display: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.49b8d1b8dd7abc9ecc3d.hot-update.js.map
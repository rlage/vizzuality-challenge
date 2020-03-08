webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Headline/Headline.js":
/*!*****************************************!*\
  !*** ./components/Headline/Headline.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Tooltip */ "./components/Tooltip/index.js");
/* harmony import */ var _assets_drag_dots_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/drag-dots.svg */ "./assets/drag-dots.svg");
/* harmony import */ var _assets_drag_dots_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_drag_dots_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_hide_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/hide.svg */ "./assets/hide.svg");
/* harmony import */ var _assets_hide_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_hide_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_info_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/info.svg */ "./assets/info.svg");
/* harmony import */ var _assets_info_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_info_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrow-down.svg */ "./assets/arrow-down.svg");
/* harmony import */ var _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_show_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/show.svg */ "./assets/show.svg");
/* harmony import */ var _assets_show_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_show_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Headline_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Headline.module.css */ "./components/Headline/Headline.module.css");
/* harmony import */ var _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Headline_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Label */ "./components/Label/index.js");
var _jsxFileName = "/Users/rafael.tavares/Documents/vizzuality/vizzuality-challenge/components/Headline/Headline.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Headline = function Headline(_ref) {
  var data = _ref.data,
      children = _ref.children;
  console.log("data: ", data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      visible = _useState[0],
      setVisibility = _useState[1];

  var handleMouseOver = function handleMouseOver(e) {
    var bb = e.target.getBoundingClientRect();
    console.log(bb);
  };

  var toggleVisibility = function toggleVisibility() {
    setVisibility(!visible);
  };

  var infoTooltipContent = "Layer Info";
  var hideTooltipContent = visible ? "Hide layer" : "Show layer";
  var visibilityImg = visible ? _assets_hide_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_show_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
  {
    if (data) {
      var name = data.name;
      var description = data.description;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("span", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.leftIcons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("img", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: _assets_drag_dots_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx("span", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, " ", name, " ")), __jsx("span", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.rightIcons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
        content: hideTooltipContent,
        display: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("img", {
        onMouseOver: function onMouseOver(e) {
          return handleMouseOver(e);
        },
        onClick: function onClick() {
          return toggleVisibility();
        },
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: visibilityImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("img", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: _assets_info_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("img", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }))), children);
    }
  }
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Headline);

/***/ })

})
//# sourceMappingURL=index.js.0a96acf0b56f58d72b58.hot-update.js.map
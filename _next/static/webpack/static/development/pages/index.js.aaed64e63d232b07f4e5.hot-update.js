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
  console.log('data: ', data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      visible = _useState[0],
      setVisibility = _useState[1]; // const [ collapsedState, setCollapsedState ] = useState({
  //   'basic': false,
  //   'gradient': false,
  //   'choropleth': false
  // });


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      tooltipText = _useState2[0],
      setTooltipText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      hoveredElement = _useState3[0],
      setHoveredElement = _useState3[1];

  var handleMouseOver = function handleMouseOver(e) {
    var bb = e.target.getBoundingClientRect();
    setHoveredElement(bb);
    var tooltipText = '';

    switch (e.target.id) {
      case 'visibility':
        tooltipText = visible ? 'Hide layer' : 'Show layer';
        break;

      case 'info':
        tooltipText = 'Layer Info';
        break;

      case 'collapse':
        tooltipText = 'Collapse';
        break;

      default:
        tooltipText = '';
    }

    setTooltipText(tooltipText);
  };

  var handleMouseOut = function handleMouseOut(e) {
    setHoveredElement(null);
  };

  var toggleVisibility = function toggleVisibility() {
    setVisibility(!visible);
  };

  console.log(tooltipText);
  var visibilityImg = visible ? _assets_hide_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_show_svg__WEBPACK_IMPORTED_MODULE_6___default.a;
  {
    if (data) {
      var name = data.name;
      var description = data.description;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("span", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.leftIcons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("img", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: _assets_drag_dots_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("span", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, " ", name, " ")), __jsx("span", {
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.rightIcons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
        content: tooltipText,
        element: hoveredElement,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("img", {
        id: "visibility",
        onMouseOver: function onMouseOver(e) {
          return handleMouseOver(e);
        },
        onMouseOut: function onMouseOut(e) {
          return handleMouseOut(e);
        },
        onClick: function onClick() {
          return toggleVisibility();
        },
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: visibilityImg,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("img", {
        id: "info",
        onMouseOver: function onMouseOver(e) {
          return handleMouseOver(e);
        },
        onMouseOut: function onMouseOut(e) {
          return handleMouseOut(e);
        },
        onClick: function onClick() {
          return toggleVisibility();
        },
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: _assets_info_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), __jsx("img", {
        id: "collapse",
        onMouseOver: function onMouseOver(e) {
          return handleMouseOver(e);
        },
        onMouseOut: function onMouseOut(e) {
          return handleMouseOut(e);
        },
        className: _Headline_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.img,
        src: _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
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
//# sourceMappingURL=index.js.aaed64e63d232b07f4e5.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Tooltip/Tooltip.module.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./components/Tooltip/Tooltip.module.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Tooltip_tooltip__PctsB {\n  position: absolute;\n  display: inline-block;\n  border: solid 1px #dbe2e6;\n  background-color: #ffffff;\n  width: 110px;\n  height: 67px;\n  word-wrap: break-word;\n  border-radius: 7px;\n  padding: var(--space3);\n}\n\n.Tooltip_tooltip__PctsB::before {\n  background-color: #ffffff;\n  content: \" \";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  z-index: 999;\n  left: calc((100% / 2) - (15px / 2));\n  top: calc(67px - 8px);\n  transform: rotate(135deg);\n  border-top: solid 1px #dbe2e6;\n  border-right: solid 1px #dbe2e6;\n}\n\n.Tooltip_tooltipBottom__48yqk {\n  position: absolute;\n  display: inline-block;\n  border: solid 1px #dbe2e6;\n  background-color: #ffffff;\n  width: 110px;\n  height: 67px;\n  word-wrap: break-word;\n  border-radius: 7px;\n  padding: var(--space3);\n  margin-left: 12px;\n}\n\n.Tooltip_tooltipBottom__48yqk::before {\n  background-color: #ffffff;\n  content: \" \";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  z-index: 999;\n  left: 5px;\n  top: calc((100% / 2) - (15px / 2));\n  transform: rotate(45deg);\n  border-top: solid 1px #dbe2e6;\n  border-right: solid 1px #dbe2e6;\n}\n\n.Tooltip_text__2kv1y {\n  display: block;\n  font-size: var(--fontSize200);\n}\n\n.Tooltip_textDate__3Sr00 {\n  color: var(--xdlColorTextSecondary);\n}\n\n.Tooltip_textVisits__-NGWb {\n  font-size: var(--fontSize300);\n  color: var(--xdlColorText);\n}\n\n.Tooltip_textVisitsNumber__1vJCg {\n  font-weight: var(--fontWeightBold);\n}", "",{"version":3,"sources":["/Users/rafael.tavares/Documents/vizzuality/vizzuality-challenge/components/Tooltip/Tooltip.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mCAAmC;EACnC,qBAAqB;EACrB,yBAAyB;EACzB,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,kCAAkC;EAClC,wBAAwB;EACxB,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;EACE,cAAc;EACd,6BAA6B;AAC/B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,6BAA6B;EAC7B,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;AACpC","file":"Tooltip.module.css","sourcesContent":[".tooltip {\n  position: absolute;\n  display: inline-block;\n  border: solid 1px #dbe2e6;\n  background-color: #ffffff;\n  width: 110px;\n  height: 67px;\n  word-wrap: break-word;\n  border-radius: 7px;\n  padding: var(--space3);\n}\n\n.tooltip::before {\n  background-color: #ffffff;\n  content: \" \";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  z-index: 999;\n  left: calc((100% / 2) - (15px / 2));\n  top: calc(67px - 8px);\n  transform: rotate(135deg);\n  border-top: solid 1px #dbe2e6;\n  border-right: solid 1px #dbe2e6;\n}\n\n.tooltipBottom {\n  position: absolute;\n  display: inline-block;\n  border: solid 1px #dbe2e6;\n  background-color: #ffffff;\n  width: 110px;\n  height: 67px;\n  word-wrap: break-word;\n  border-radius: 7px;\n  padding: var(--space3);\n  margin-left: 12px;\n}\n\n.tooltipBottom::before {\n  background-color: #ffffff;\n  content: \" \";\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  z-index: 999;\n  left: 5px;\n  top: calc((100% / 2) - (15px / 2));\n  transform: rotate(45deg);\n  border-top: solid 1px #dbe2e6;\n  border-right: solid 1px #dbe2e6;\n}\n\n.text {\n  display: block;\n  font-size: var(--fontSize200);\n}\n\n.textDate {\n  color: var(--xdlColorTextSecondary);\n}\n\n.textVisits {\n  font-size: var(--fontSize300);\n  color: var(--xdlColorText);\n}\n\n.textVisitsNumber {\n  font-weight: var(--fontWeightBold);\n}"]}]);
// Exports
exports.locals = {
	"tooltip": "Tooltip_tooltip__PctsB",
	"tooltipBottom": "Tooltip_tooltipBottom__48yqk",
	"text": "Tooltip_text__2kv1y",
	"textDate": "Tooltip_textDate__3Sr00",
	"textVisits": "Tooltip_textVisits__-NGWb",
	"textVisitsNumber": "Tooltip_textVisitsNumber__1vJCg"
};

/***/ })

})
//# sourceMappingURL=index.js.03d43a32c90bb36a4c0c.hot-update.js.map
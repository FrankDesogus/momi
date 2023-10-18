exports.id = 2674;
exports.ids = [2674];
exports.modules = {

/***/ 2674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Card(props) {
  const {
    title,
    expanded = false,
    adClass,
    iconClass,
    type = "normal",
    url
  } = props;
  return "normal" === type ? __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: `card ${adClass}`
  }, __jsx("div", {
    className: `card-header`,
    onClick: onToggle
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: `toggle-button ${toggleState.toLowerCase()}`
  }, iconClass ? __jsx("i", {
    className: iconClass
  }) : "", title ? title : "")), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "card-body overflow-hidden"
  }, props.children)))) : "parse" === type ? __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: url ? url : '#',
    content: title,
    className: `parse-content ${toggleState.toLowerCase()}`,
    onClick: e => {
      onToggle();
    }
  }), __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, props.children))) : __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: url ? url : "#"
  }, title, __jsx("span", {
    className: `toggle-btn ${toggleState.toLowerCase()}`,
    onClick: e => {
      onToggle();
      e.preventDefault();
    }
  })), __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, props.children)));
  return '';
}

/***/ })

};
;
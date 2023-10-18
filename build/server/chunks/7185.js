exports.id = 7185;
exports.ids = [7185];
exports.modules = {

/***/ 7185:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Accordion(props) {
  const {
    adClass
  } = props;

  function onHandleClick(e) {
    if (e.target.classList.contains("toggle-button") || e.target.querySelector(".toggle-button")) {
      if (e.target.classList.contains("collapsed") || e.target.querySelector(".toggle-button") && e.target.querySelector(".toggle-button").classList.contains("collapsed") || e.target.classList.contains("collapsing") || e.target.querySelector(".toggle-button") && e.target.querySelector(".toggle-button").classList.contains("collapsing")) {
        if (e.currentTarget.querySelector(".toggle-button.expanded")) {
          e.currentTarget.querySelector(".toggle-button.expanded").click();
        }

        if (e.currentTarget.querySelector(".toggle-button.expanding")) {
          e.currentTarget.querySelector(".toggle-button.expanding").click();
        }
      }
    }
  }

  return __jsx("div", {
    className: `accordion ${adClass}`,
    onClick: onHandleClick
  }, props.children);
}

/* harmony default export */ __webpack_exports__["Z"] = (Accordion);

/***/ })

};
;
exports.id = 7845;
exports.ids = [7845];
exports.modules = {

/***/ 7845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ProductCountDown; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7183);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ProductCountDown(props) {
  const {
    date = "2021-08-20",
    type = 1,
    adClass = ''
  } = props;

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      return __jsx("span", null, "Product Selling Finished!");
    } else {
      return type === 1 ? __jsx("div", {
        className: `countdown ${adClass}`
      }, __jsx("div", {
        className: "countdown-row countdown-show4"
      }, __jsx("span", {
        className: "countdown-section"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(days)), __jsx("span", {
        className: "countdown-period"
      }, "DAYS")), __jsx("span", {
        className: "countdown-section"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(hours)), __jsx("span", {
        className: "countdown-period"
      }, "HOURS")), __jsx("span", {
        className: "countdown-section"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(minutes)), __jsx("span", {
        className: "countdown-period"
      }, "MINUTES")), __jsx("span", {
        className: "countdown-section"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(seconds)), __jsx("span", {
        className: "countdown-period"
      }, "SECONDS")))) : __jsx("div", {
        className: "product-countdown-container font-weight-semi-bold"
      }, __jsx("span", {
        className: "product-countdown-title"
      }, "Offer Ends In:\xA0"), __jsx("div", {
        className: "product-countdown countdown-compact"
      }, __jsx("span", {
        className: "countdown-section days"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(days), " "), __jsx("span", {
        className: "countdown-period"
      }, "days,\xA0")), __jsx("span", {
        className: "countdown-section hours"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(hours), __jsx("span", {
        className: "mr-1 ml-1"
      }, ":"))), __jsx("span", {
        className: "countdown-section minutes"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(minutes), __jsx("span", {
        className: "mr-1 ml-1"
      }, ":"))), __jsx("span", {
        className: "countdown-section seconds"
      }, __jsx("span", {
        className: "countdown-amount"
      }, (0,react_countdown__WEBPACK_IMPORTED_MODULE_1__.zeroPad)(seconds)))));
    }
  };

  return __jsx((react_countdown__WEBPACK_IMPORTED_MODULE_1___default()), {
    date: new Date(date),
    renderer: renderer
  });
}

/***/ })

};
;
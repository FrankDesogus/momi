(function() {
var exports = {};
exports.id = 2773;
exports.ids = [2773,3866];
exports.modules = {

/***/ 4699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Breadcrumb; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function Breadcrumb(props) {
  return __jsx("div", {
    className: "page-header",
    style: {
      backgroundImage: `url( ./images/home/page-header.jpg )`,
      backgroundColor: "#584B3B"
    }
  }, __jsx("h1", {
    className: "page-title"
  }, props.title), __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", {
    className: "delimiter"
  }, "/"), props.parentUrl ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("li", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: props.parentUrl
  }, props.subTitle)), __jsx("li", {
    className: "delimiter"
  }, "/")) : "", __jsx("li", null, props.title)));
}

/***/ }),

/***/ 3561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4699);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8765);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3405);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function Alert(props) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Alert & Notification")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Alert & Notification"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Alert & Notification",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("section", {
    className: "mt-10 pt-4"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Simple"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-primary alert-simple alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "News : "), " You have done 5 actions.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-success alert-simple alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Success : "), " The page has been added.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-warning alert-simple alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Warning : "), " You have 190 messages.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-danger alert-simple alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Danger : "), " The daily report has failed.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))))), __jsx("section", {
    className: "mt-10 pt-2"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Dark"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-primary alert-dark alert-round alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "News : "), " You have done 5 actions.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-success alert-dark alert-round alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Success : "), " The page has been added.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-warning alert-dark alert-round alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Warning : "), " You have 190 messages.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-danger alert-dark alert-round alert-inline"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Danger : "), " The daily report has failed.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))))), __jsx("section", {
    className: "mt-10 pt-2"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx("h2", {
    className: "title title-sm title-center mb-5"
  }, "With Icon"), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-simple alert-primary alert-icon mb-4"
  }, __jsx("i", {
    className: "fas fa-check"
  }), " You have done 5 actions.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  }))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-light alert-primary alert-icon mb-4"
  }, __jsx("i", {
    className: "fas fa-exclamation-circle"
  }), " The page has been added.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  }))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-light alert-danger alert-icon alert-inline mb-4"
  }, __jsx("i", {
    className: "fas fa-exclamation-triangle"
  }), " ", __jsx("h4", {
    className: "alert-title"
  }, "Oh snap! "), " Change a few things up and try submitting again.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx("h2", {
    className: "title title-sm title-center"
  }, "With Title"), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-message alert-light alert-primary alert-link mb-4"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Some Message Link"), __jsx("p", null, "Lorem ipsum Minim ad pariatur eiusmod ea ut ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#"
  }, "nulla aliqua est quis"), " id pariat minim vot nulla aliqualuptate."), __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  }))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-message alert-light alert-warning alert-inline mb-4"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Some Message"), " ", __jsx("p", null, "Lorem ipsum Minim ad pariatur eiusmod ea ut nulla quis id dolore minim vot nulla aliqualuptate."), __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))))), __jsx("section", {
    className: "mt-10"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "With Button"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-primary alert-simple alert-btn"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-md"
  }, "NEWS "), " You have done 5 actions.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-success alert-simple alert-btn"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-success btn-md"
  }, "SUCCESS "), " The page has been added.", __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-message alert-warning alert-dark alert-btn"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Some Message"), __jsx("p", null, "Lorem ipsum Minim ad pariatur eiusmod ea ut ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "text-primary"
  }, "nulla aliqua est quis"), " id pariat minim vot nulla aliqualuptate."), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-secondary btn-md mr-1"
  }, "Do This"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-secondary btn-md"
  }, "Or This"), __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-message alert-warning alert-light alert-btn"
  }, __jsx("h4", {
    className: "alert-title"
  }, "Some Message"), __jsx("p", null, "Lorem ipsum Minim ad pariatur eiusmod ea ut ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#"
  }, "nulla aliqua est quis"), " id pariat minim vot nulla aliqualuptate."), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-secondary btn-md mr-1"
  }, "Do This"), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-secondary btn-md"
  }, "Or This"), __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))))), __jsx("section", {
    className: "mt-10 pt-2"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Summary"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-danger alert-summary alert-light alert-message alert-inline"
  }, __jsx("i", {
    className: "fas fa-exclamation-triangle"
  }), " ", __jsx("h4", {
    className: "alert-title"
  }, "Oh snap! "), "Change a few things up and try submitting again.", __jsx("ul", null, __jsx("li", null, "Inform your username"), __jsx("li", null, "Inform your password")), __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  })))))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    expanded: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    ref: setCollapsibleElement,
    className: "overflow-hidden"
  }, __jsx("div", {
    className: "alert alert-summary alert-dark alert-black alert-message alert-inline"
  }, __jsx("i", {
    className: "fas fa-exclamation-triangle"
  }), " ", __jsx("h4", {
    className: "alert-title"
  }, "Oh snap!"), "Change a few things up and try submitting again.", __jsx("ul", null, __jsx("li", null, "Inform your username"), __jsx("li", null, "Inform your password")), __jsx("button", {
    type: "button",
    className: "btn btn-link btn-close"
  }, __jsx("i", {
    className: "d-icon-times",
    onClick: onToggle
  }))))))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "mt-10"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Alert));

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,3405], function() { return __webpack_exec__(3561); });
module.exports = __webpack_exports__;

})();
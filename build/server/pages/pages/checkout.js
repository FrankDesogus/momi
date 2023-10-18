(function() {
var exports = {};
exports.id = 3065;
exports.ids = [3065,3866];
exports.modules = {

/***/ 5511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8765);
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2674);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Checkout(props) {
  const {
    cartList
  } = props;
  const {
    0: isFirst,
    1: setFirst
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return __jsx("main", {
    className: "main checkout"
  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_2___default()), null, __jsx("title", null, "Riode React eCommerce Template | Checkout")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Checkout"), __jsx("div", {
    className: `page-content pt-7 pb-10 ${cartList.length > 0 ? 'mb-10' : 'mb-2'}`
  }, __jsx("div", {
    className: "step-by pr-4 pl-4"
  }, __jsx("h3", {
    className: "title title-simple title-step"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/pages/cart"
  }, "1. Shopping Cart")), __jsx("h3", {
    className: "title title-simple title-step active"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#"
  }, "2. Checkout")), __jsx("h3", {
    className: "title title-simple title-step"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/pages/order"
  }, "3. Order Complete"))), __jsx("div", {
    className: "container mt-7"
  }, cartList.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "card accordion"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    type: "parse",
    title: "<div class='alert alert-light alert-primary alert-icon mb-4 card-header'>\r <i class='fas fa-exclamation-circle'></i> <span class='text-body'>Returning customer?</span> <a href='#' class='text-primary collapse'>Click here to login</a>\r </div>"
  }, __jsx("div", {
    className: "alert-body collapsed"
  }, __jsx("p", null, "If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section."), __jsx("div", {
    className: "row cols-md-2"
  }, __jsx("form", {
    className: "mb-4 mb-md-0"
  }, __jsx("label", {
    htmlFor: "username"
  }, "Username Or Email *"), __jsx("input", {
    type: "text",
    className: "input-text form-control mb-0",
    name: "username",
    id: "username",
    autoComplete: "username"
  })), __jsx("form", {
    className: "mb-4 mb-md-0"
  }, __jsx("label", {
    htmlFor: "password"
  }, "Password *"), __jsx("input", {
    className: "input-text form-control mb-0",
    type: "password",
    name: "password",
    id: "password",
    autoComplete: "current-password"
  }))), __jsx("div", {
    className: "checkbox d-flex align-items-center justify-content-between"
  }, __jsx("div", {
    className: "form-checkbox pt-0 mb-0"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember"
  }), __jsx("label", {
    className: "form-control-label",
    htmlFor: "signin-remember"
  }, "Remember Me")), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "lost-link"
  }, "Lost your password?")), __jsx("div", {
    className: "link-group"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "btn btn-dark btn-rounded mb-4"
  }, "Login"), " ", __jsx("span", {
    className: "d-inline-block text-body font-weight-semi-bold"
  }, "or Login With"), " ", __jsx("div", {
    className: "social-links mb-4"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-link social-google fab fa-google"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  })))))), __jsx("div", {
    className: "card accordion"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "\r <div class='alert alert-light alert-primary alert-icon mb-4 card-header'>\r <i class='fas fa-exclamation-circle'></i>\r <span class='text-body'>Have a coupon?</span>\r <a href='#' class='text-primary'>Click here to enter your code</a>\r </div>",
    type: "parse"
  }, __jsx("div", {
    className: "alert-body mb-4 collapsed"
  }, __jsx("p", null, "If you have a coupon code, please apply it below."), __jsx("form", {
    className: "check-coupon-box d-flex"
  }, __jsx("input", {
    type: "text",
    name: "coupon_code",
    className: "input-text form-control text-grey ls-m mr-4",
    id: "coupon_code",
    placeholder: "Coupon code"
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-dark btn-rounded btn-outline"
  }, "Apply Coupon"))))), __jsx("form", {
    action: "#",
    className: "form"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-7 mb-6 mb-lg-0 pr-lg-4"
  }, __jsx("h3", {
    className: "title title-simple text-left text-uppercase"
  }, "Billing Details"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "First Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "first-name",
    required: true
  })), __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "Last Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "last-name",
    required: true
  }))), __jsx("label", null, "Company Name (Optional)"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "company-name",
    required: true
  }), __jsx("label", null, "Country / Region *"), __jsx("div", {
    className: "select-box"
  }, __jsx("select", {
    name: "country",
    className: "form-control",
    defaultValue: "us"
  }, __jsx("option", {
    value: "us"
  }, "United States (US)"), __jsx("option", {
    value: "uk"
  }, " United Kingdom"), __jsx("option", {
    value: "fr"
  }, "France"), __jsx("option", {
    value: "aus"
  }, "Austria"))), __jsx("label", null, "Street Address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "address1",
    required: true,
    placeholder: "House number and street name"
  }), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "address2",
    required: true,
    placeholder: "Apartment, suite, unit, etc. (optional)"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "Town / City *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "city",
    required: true
  })), __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "State *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "state",
    required: true
  }))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "ZIP *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "zip",
    required: true
  })), __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "Phone *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "phone",
    required: true
  }))), __jsx("label", null, "Email Address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "email-address",
    required: true
  }), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_6___default()), {
    duration: 300,
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    className: "form-checkbox mb-0 pt-0"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "create-account",
    name: "create-account",
    onChange: onToggle
  }), __jsx("label", {
    className: "form-control-label ls-s",
    htmlFor: "create-account"
  }, "Create an account?"), __jsx("div", {
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    }
  }, __jsx("label", {
    htmlFor: "account_username",
    className: "pt-4"
  }, "Account username\xA0", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "account_username",
    id: "account_username",
    placeholder: "Username",
    rows: "5"
  }), __jsx("label", {
    htmlFor: "account_password"
  }, "Create account password\xA0", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "password",
    className: "form-control mb-3",
    name: "account_password",
    id: "account_password",
    placeholder: "Password",
    rows: "5"
  })))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_6___default()), {
    duration: 300,
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    className: "form-checkbox mb-6"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "different-address",
    name: "different-address",
    onChange: onToggle
  }), __jsx("label", {
    className: "form-control-label ls-s",
    htmlFor: "different-address"
  }, "Ship to a different address?"), __jsx("div", {
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    }
  }, __jsx("div", {
    className: "row pt-4"
  }, __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "First Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "first-name",
    required: true
  })), __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "Last Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "last-name",
    required: true
  }))), __jsx("label", null, "Company Name (Optional)"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "company-name",
    required: true
  }), __jsx("label", null, "Country / Region *"), __jsx("div", {
    className: "select-box"
  }, __jsx("select", {
    name: "country",
    className: "form-control",
    defaultValue: "us"
  }, __jsx("option", {
    value: "us"
  }, "United States (US)"), __jsx("option", {
    value: "uk"
  }, " United Kingdom"), __jsx("option", {
    value: "fr"
  }, "France"), __jsx("option", {
    value: "aus"
  }, "Austria"))), __jsx("label", null, "Street Address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "address1",
    required: true,
    placeholder: "House number and street name"
  }), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "address2",
    required: true,
    placeholder: "Apartment, suite, unit, etc. (optional)"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "Town / City *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "city",
    required: true
  })), __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "State *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "state",
    required: true
  }))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "ZIP *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "zip",
    required: true
  })), __jsx("div", {
    className: "col-xs-6"
  }, __jsx("label", null, "Phone *"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "phone",
    required: true
  })))))), __jsx("h2", {
    className: "title title-simple text-uppercase text-left mt-6"
  }, "Additional Information"), __jsx("label", null, "Order Notes (Optional)"), __jsx("textarea", {
    className: "form-control pb-2 pt-2 mb-0",
    cols: "30",
    rows: "5",
    placeholder: "Notes about your order, e.g. special notes for delivery"
  })), __jsx("aside", {
    className: "col-lg-5 sticky-sidebar-wrapper"
  }, __jsx("div", {
    className: "sticky-sidebar mt-1",
    "data-sticky-options": "{'bottom': 50}"
  }, __jsx("div", {
    className: "summary pt-5"
  }, __jsx("h3", {
    className: "title title-simple text-left text-uppercase"
  }, "Your Order"), __jsx("table", {
    className: "order-table"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Product"), __jsx("th", null))), __jsx("tbody", null, cartList.map(item => __jsx("tr", {
    key: 'checkout-' + item.name
  }, __jsx("td", {
    className: "product-name"
  }, item.name, " ", __jsx("span", {
    className: "product-quantity"
  }, "\xD7\xA0", item.qty)), __jsx("td", {
    className: "product-total text-body"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)(item.price * item.qty)))), __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, __jsx("h4", {
    className: "summary-subtitle"
  }, "Subtotal")), __jsx("td", {
    className: "summary-subtotal-price pb-0 pt-0"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTotalPrice */ .m_)(cartList)))), __jsx("tr", {
    className: "sumnary-shipping shipping-row-last"
  }, __jsx("td", {
    colSpan: "2"
  }, __jsx("h4", {
    className: "summary-subtitle"
  }, "Calculate Shipping"), __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "flat_rate",
    name: "shipping",
    className: "custom-control-input",
    defaultChecked: true
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "flat_rate"
  }, "Flat rate"))), __jsx("li", null, __jsx("div", {
    className: "custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "free-shipping",
    name: "shipping",
    className: "custom-control-input"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "free-shipping"
  }, "Free shipping"))), __jsx("li", null, __jsx("div", {
    className: "custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "local_pickup",
    name: "shipping",
    className: "custom-control-input"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "local_pickup"
  }, "Local pickup")))))), __jsx("tr", {
    className: "summary-total"
  }, __jsx("td", {
    className: "pb-0"
  }, __jsx("h4", {
    className: "summary-subtitle"
  }, "Total")), __jsx("td", {
    className: " pt-0 pb-0"
  }, __jsx("p", {
    className: "summary-total-price ls-s text-primary"
  }, "$", (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .toDecimal */ .YM)((0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTotalPrice */ .m_)(cartList))))))), __jsx("div", {
    className: "payment accordion radio-type"
  }, __jsx("h4", {
    className: "summary-subtitle ls-m pb-3"
  }, "Payment Methods"), __jsx("div", {
    className: "checkbox-group"
  }, __jsx("div", {
    className: "card-header"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: `text-body text-normal ls-m ${isFirst ? 'collapse' : ''}`,
    onClick: () => {
      !isFirst && setFirst(!isFirst);
    }
  }, "Check payments")), __jsx((react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default()), {
    in: isFirst
  }, __jsx("div", {
    className: "card-wrapper"
  }, __jsx("div", {
    className: "card-body ls-m overflow-hidden"
  }, "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."))), __jsx("div", {
    className: "card-header"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: `text-body text-normal ls-m ${!isFirst ? 'collapse' : ''}`,
    onClick: () => {
      isFirst && setFirst(!isFirst);
    }
  }, "Cash on delivery")), __jsx((react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default()), {
    in: !isFirst
  }, __jsx("div", {
    className: "card-wrapper"
  }, __jsx("div", {
    className: "card-body ls-m overflow-hidden"
  }, "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."))))), __jsx("div", {
    className: "form-checkbox mt-4 mb-5"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "terms-condition",
    name: "terms-condition"
  }), __jsx("label", {
    className: "form-control-label",
    htmlFor: "terms-condition"
  }, "I have read and agree to the website ", __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#"
  }, "terms and conditions "), "*")), __jsx("button", {
    type: "submit",
    className: "btn btn-dark btn-rounded btn-order"
  }, "Place Order"))))))) : __jsx("div", {
    className: "empty-cart text-center"
  }, __jsx("p", null, "Your cart is currently empty."), __jsx("i", {
    className: "cart-empty d-icon-bag"
  }), __jsx("p", {
    className: "return-to-shop mb-0"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    className: "button wc-backward btn btn-dark btn-md",
    href: "/shop"
  }, "Return to shop"))))));
}

function mapStateToProps(state) {
  return {
    cartList: state.cart.data ? state.cart.data : []
  };
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Checkout));

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

/***/ 9226:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,2674], function() { return __webpack_exec__(5511); });
module.exports = __webpack_exports__;

})();
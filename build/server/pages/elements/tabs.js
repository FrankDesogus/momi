(function() {
var exports = {};
exports.id = 6617;
exports.ids = [6617,3866];
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

/***/ 758:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6481);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4699);
/* harmony import */ var _components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3405);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function ElementTabs() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), null, __jsx("title", null, "Riode React eCommerce Template | Tabs")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Tabs"), __jsx(_components_features_breadcrumb__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    subTitle: "Elements",
    title: "Element Tabs",
    parentUrl: "/elements"
  }), __jsx("div", {
    className: "page-content"
  }, __jsx("section", {
    className: "mt-10 pt-8"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center mb-5"
  }, "Simple"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-nav-simple"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx("div", {
    className: "tab tab-nav-simple tab-nav-center tab-nav-boxed"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))))))), __jsx("section", {
    className: "mt-5"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "With Color"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-nav-boxed tab-nav-solid"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-nav-center tab-nav-boxed tab-nav-solid tab-nav-round"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))))))), __jsx("section", {
    className: "mt-5"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Boxed Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-boxed tab-nav-boxed tab-outline"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor mauris sit amet orci.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-nav-center tab-nav-boxed tab-boxed tab-outline2"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis ferment Aliquam porttitor mauris sit amet orci.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))))))), __jsx("section", {
    className: "mt-9 mb-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Vertical Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-vertical tab-nav-solid"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-vertical tab-simple"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))))))), __jsx("section", {
    className: "pt-10 grey-section"
  }, __jsx("div", {
    className: "container mt-3"
  }, __jsx("h2", {
    className: "title title-center"
  }, "Inverse Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 mb-10 pb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-boxed tab-nav-boxed tab-simple tab-inverse"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-10 pb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-vertical tab-boxed tab-inverse h-100"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-10 pb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-boxed tab-nav-boxed tab-nav-solid tab-inverse"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))), __jsx("div", {
    className: "col-lg-6 mb-10 pb-4"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0,
    className: "tab tab-vertical tab-nav-solid tab-boxed tab-inverse h-100"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "First header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Second header")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Third header"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane"
  }, __jsx("p", {
    className: "mb-0"
  }, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))))))), __jsx(_components_partials_elements_elements_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "bg-white mt-10"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ElementTabs));

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

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,3405], function() { return __webpack_exec__(758); });
module.exports = __webpack_exports__;

})();
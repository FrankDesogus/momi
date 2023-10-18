exports.id = 4138;
exports.ids = [4138];
exports.modules = {

/***/ 4138:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7033);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // let prevPath;

function OwlCarousel(props) {
  const {
    adClass,
    options
  } = props;
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const defaultOptions = {
    items: 1,
    loop: false,
    margin: 0,
    responsiveClass: "true",
    nav: true,
    navText: ['<i class="d-icon-angle-left">', '<i class="d-icon-angle-right">'],
    navElement: "button",
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    autoHeight: false // autoplayTimeout: 5000,

  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.onChangeRef) {
      props.onChangeRef(carouselRef);
    }
  }, [carouselRef]);
  let events = {
    onTranslated: function (e) {
      if (!e.target) return;

      if (props.onChangeIndex) {
        props.onChangeIndex(e.item.index);
      }
    }
  };
  events = Object.assign({}, events, props.events);
  let settings = Object.assign({}, defaultOptions, options);
  return props.children ? props.children.length > 0 || props.children && props.children.length === undefined ? __jsx((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: carouselRef,
    className: `owl-carousel ${adClass}`,
    options: settings,
    events: events
  }, props.children) : "" : "";
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OwlCarousel));

/***/ })

};
;
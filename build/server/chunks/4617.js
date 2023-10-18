exports.id = 4617;
exports.ids = [4617];
exports.modules = {

/***/ 4617:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8765);
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6723);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function DescOne(props) {
  const {
    product,
    isGuide = true,
    isDivider = true,
    openModal
  } = props;
  let colors = [],
      sizes = [];

  if (product.variants.length > 0) {
    if (product.variants[0].size) product.variants.forEach(item => {
      if (sizes.findIndex(size => size.name === item.size.name) === -1) {
        sizes.push({
          name: item.size.name,
          value: item.size.size
        });
      }
    });

    if (product.variants[0].color) {
      product.variants.forEach(item => {
        if (colors.findIndex(color => color.name === item.color.name) === -1) colors.push({
          name: item.color.name,
          value: item.color.color
        });
      });
    }
  }

  const setRating = e => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector('.active')) {
      e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  };

  const showVideoModalHandler = e => {
    e.preventDefault();
    let link = e.currentTarget.closest('.btn-play').getAttribute('data');
    openModal(link);
  };

  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
    className: "tab tab-nav-simple product-tabs",
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active",
    defaultIndex: 0
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {
    className: "nav nav-tabs justify-content-center",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Description")), product && product.brands.length > 0 || colors.length > 0 || sizes.length > 0 ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Additional information")) : '', isGuide ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Size Guide")) : '', __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Reviews (", product.reviews, ")"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-description"
  }, __jsx("div", {
    className: "row mt-6"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("h5", {
    className: "description-title mb-4 font-weight-semi-bold ls-m"
  }, "Features"), __jsx("p", {
    className: "mb-2"
  }, "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti iMassa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim Dilisis Facilisis quis sapien. Praesent id enim sit amet."), __jsx("ul", {
    className: "mb-8"
  }, __jsx("li", null, "Praesent id enim sit amet.Tdio vulputate"), __jsx("li", null, "Eleifend in in tortor. ellus massa.Dristique sitii"), __jsx("li", null, "Massa ristique sit amet condim vel"), __jsx("li", null, "Dilisis Facilisis quis sapien. Praesent id enim sit amet")), __jsx("h5", {
    className: "description-title mb-3 font-weight-semi-bold ls-m"
  }, "Specifications"), __jsx("table", {
    className: "table"
  }, __jsx("tbody", null, __jsx("tr", null, __jsx("th", {
    className: "font-weight-semi-bold text-dark pl-0"
  }, "Material"), __jsx("td", {
    className: "pl-4"
  }, "Praesent id enim sit amet.Tdio")), __jsx("tr", null, __jsx("th", {
    className: "font-weight-semi-bold text-dark pl-0"
  }, "Claimed Size"), __jsx("td", {
    className: "pl-4"
  }, "Praesent id enim sit")), __jsx("tr", null, __jsx("th", {
    className: "font-weight-semi-bold text-dark pl-0"
  }, "Recommended Use"), __jsx("td", {
    className: "pl-4"
  }, "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti")), __jsx("tr", null, __jsx("th", {
    className: "font-weight-semi-bold text-dark border-no pl-0"
  }, "Manufacturer"), __jsx("td", {
    className: "border-no pl-4"
  }, "Praesent id enim"))))), __jsx("div", {
    className: "col-md-6 pl-md-6 pt-4 pt-md-0"
  }, __jsx("h5", {
    className: "description-title font-weight-semi-bold ls-m mb-5"
  }, "Video Description"), __jsx("figure", {
    className: "p-relative d-inline-block mb-3"
  }, __jsx("img", {
    src: "./images/product.jpg",
    width: "559",
    height: "370",
    alt: "Product"
  }), __jsx("a", {
    className: "btn-play btn-iframe",
    href: "#",
    data: "/uploads/video/video-1.mp4",
    onClick: showVideoModalHandler
  }, __jsx("i", {
    className: "d-icon-play-solid"
  }))), __jsx("div", {
    className: "icon-box-wrap d-flex flex-wrap"
  }, __jsx("div", {
    className: "icon-box icon-box-side icon-border pt-2 pb-2 mb-4 mr-10"
  }, __jsx("div", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "d-icon-lock"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h4", {
    className: "icon-box-title lh-1 pt-1 ls-s text-normal"
  }, "2 year warranty"), __jsx("p", null, "Guarantee with no doubt"))), isDivider ? __jsx("div", {
    className: "divider d-xl-show mr-10"
  }) : '', __jsx("div", {
    className: "icon-box icon-box-side icon-border pt-2 pb-2 mb-4"
  }, __jsx("div", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "d-icon-truck"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h4", {
    className: "icon-box-title lh-1 pt-1 ls-s text-normal"
  }, "Free shipping"), __jsx("p", null, "On orders over $50.00"))))))), product && product.brands.length > 0 || colors.length > 0 || sizes.length > 0 ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-additional"
  }, __jsx("ul", {
    className: "list-none"
  }, product.categories.length > 0 ? __jsx("li", null, __jsx("label", null, "Categories:"), __jsx("p", null, product.categories.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index
  }, item.name, index < product.categories.length - 1 ? ', ' : "")))) : "", product.brands.length > 0 ? __jsx("li", null, __jsx("label", null, "Brands:"), __jsx("p", null, product.brands.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index
  }, item.name, index < product.brands.length - 1 ? ', ' : "")))) : "", colors.length > 0 ? __jsx("li", null, __jsx("label", null, "Color:"), __jsx("p", null, colors.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index
  }, item.name, index < colors.length - 1 ? ', ' : "")))) : "", sizes.length > 0 ? __jsx("li", null, __jsx("label", null, "Size:"), __jsx("p", null, sizes.map((item, index) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: item.name + '-' + index
  }, item.name, index < sizes.length - 1 ? ', ' : "")))) : "")) : '', isGuide ? __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-size-guide"
  }, __jsx("figure", {
    className: "size-image mt-4 mb-4"
  }, __jsx("img", {
    src: "./images/size_guide.png",
    alt: "Size Guide Image",
    width: "217",
    height: "398"
  })), __jsx("figure", {
    className: "size-table mt-4 mb-4"
  }, __jsx("table", null, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "SIZE"), __jsx("th", null, "CHEST(IN.)"), __jsx("th", null, "WEIST(IN.)"), __jsx("th", null, "HIPS(IN.)"))), __jsx("tbody", null, __jsx("tr", null, __jsx("th", null, "XS"), __jsx("td", null, "34-36"), __jsx("td", null, "27-29"), __jsx("td", null, "34.5-36.5")), __jsx("tr", null, __jsx("th", null, "S"), __jsx("td", null, "36-38"), __jsx("td", null, "29-31"), __jsx("td", null, "36.5-38.5")), __jsx("tr", null, __jsx("th", null, "M"), __jsx("td", null, "38-40"), __jsx("td", null, "31-33"), __jsx("td", null, "38.5-40.5")), __jsx("tr", null, __jsx("th", null, "L"), __jsx("td", null, "40-42"), __jsx("td", null, "33-36"), __jsx("td", null, "40.5-43.5")), __jsx("tr", null, __jsx("th", null, "XL"), __jsx("td", null, "42-45"), __jsx("td", null, "36-40"), __jsx("td", null, "43.5-47.5")), __jsx("tr", null, __jsx("th", null, "XXL"), __jsx("td", null, "45-48"), __jsx("td", null, "40-44"), __jsx("td", null, "47.5-51.5")))))) : '', __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-pane product-tab-reviews"
  }, product.reviews === 0 ? __jsx("div", {
    className: "comments mb-2 pt-2 pb-2 border-no"
  }, "There are no reviews yet.") : __jsx("div", {
    className: "comments mb-8 pt-2 pb-2 border-no"
  }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("img", {
    src: "./images/blog/comments/1.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx("div", {
    className: "comment-rating ratings-container mb-0"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .toDecimal */ .YM)(product.ratings)))), __jsx("div", {
    className: "comment-user"
  }, __jsx("span", {
    className: "comment-date text-body"
  }, "September 22, 2020 at 9:42 pm"), __jsx("h4", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "John Doe"))), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue."))))), product.reviews > 1 ? __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("img", {
    src: "./images/blog/comments/2.jpg",
    alt: "avatar",
    width: "100",
    height: "100"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx("div", {
    className: "comment-rating ratings-container mb-0"
  }, __jsx("div", {
    className: "ratings-full"
  }, __jsx("span", {
    className: "ratings",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltiptext tooltip-top"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .toDecimal */ .YM)(product.ratings)))), __jsx("div", {
    className: "comment-user"
  }, __jsx("span", {
    className: "comment-date text-body"
  }, "September 22, 2020 at 9:42 pm"), __jsx("h4", null, __jsx(_components_features_custom_link__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "John Doe"))), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat."))))) : "")), __jsx("div", {
    className: "reply"
  }, __jsx("div", {
    className: "title-wrapper text-left"
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal"
  }, product.reviews > 0 ? "Add a Review" : "Be The First To Review “" + product.name + "”"), __jsx("p", null, "Your email address will not be published. Required fields are marked *")), __jsx("div", {
    className: "rating-form"
  }, __jsx("label", {
    htmlFor: "rating",
    className: "text-dark"
  }, "Your rating * "), __jsx("span", {
    className: "rating-stars selected"
  }, [1, 2, 3, 4, 5].map((num, index) => __jsx("a", {
    className: `star-${num}`,
    href: "#",
    onClick: setRating,
    key: 'star-' + index
  }, num))), __jsx("select", {
    name: "rating",
    id: "rating",
    required: "",
    style: {
      display: 'none'
    }
  }, __jsx("option", {
    value: ""
  }, "Rate\u2026"), __jsx("option", {
    value: "5"
  }, "Perfect"), __jsx("option", {
    value: "4"
  }, "Good"), __jsx("option", {
    value: "3"
  }, "Average"), __jsx("option", {
    value: "2"
  }, "Not that bad"), __jsx("option", {
    value: "1"
  }, "Very poor"))), __jsx("form", {
    action: "#"
  }, __jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-4",
    placeholder: "Comment *",
    required: true
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-5"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true
  })), __jsx("div", {
    className: "col-md-6 mb-5"
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true
  }))), __jsx("div", {
    className: "form-checkbox mb-4"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember"
  }), __jsx("label", {
    className: "form-control-label",
    htmlFor: "signin-remember"
  }, "Save my name, email, and website in this browser for the next time I comment.")), __jsx("button", {
    type: "submit",
    className: "btn btn-primary btn-rounded"
  }, "Submit", __jsx("i", {
    className: "d-icon-arrow-right"
  })))))));
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)('', {
  openModal: _store_modal__WEBPACK_IMPORTED_MODULE_4__/* .modalActions.openModal */ .n.openModal
})(DescOne));

/***/ })

};
;
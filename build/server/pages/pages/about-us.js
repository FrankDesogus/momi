(function() {
var exports = {};
exports.id = 2749;
exports.ids = [2749,3866];
exports.modules = {

/***/ 1566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ about_us; }
});

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
;// CONCATENATED MODULE: external "react-countup"
var external_react_countup_namespaceObject = require("react-countup");;
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
var external_react_awesome_reveal_default = /*#__PURE__*/__webpack_require__.n(external_react_awesome_reveal_);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./utils/data/keyframes.js
var keyframes = __webpack_require__(9905);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./pages/pages/about-us.jsx
var __jsx = (external_react_default()).createElement;










function AboutUs() {
  (0,external_react_.useEffect)(() => {
    countToHandler();
    window.addEventListener('scroll', countToHandler, true);
    return () => {
      window.removeEventListener('scroll', countToHandler);
    };
  }, []);

  function countToHandler() {
    let items = document.querySelectorAll('.count-to');

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (item.getBoundingClientRect().top > 0 && window.innerHeight - item.offsetHeight > item.getBoundingClientRect().top && !item.classList.contains('finished')) {
        if (item.querySelector('button')) item.querySelector('button').click();
        item.classList.add('finished');
      }
    }
  }

  return __jsx("main", {
    className: "main about-us"
  }, __jsx((external_react_helmet_default()), null, __jsx("title", null, "Riode React eCommerce Template | About Us")), __jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - About Us"), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ul", {
    className: "breadcrumb"
  }, __jsx("li", null, __jsx(custom_link/* default */.Z, {
    href: "/"
  }, __jsx("i", {
    className: "d-icon-home"
  }))), __jsx("li", null, "About Us")))), __jsx("div", {
    className: "page-header pl-4 pr-4 pt-0",
    style: {
      backgroundImage: `url( ./images/page-header/about-us.jpg )`,
      backgroundColor: "#3C63A4"
    }
  }, __jsx("h3", {
    className: "page-subtitle font-weight-bold"
  }, "Welcome to Riode"), __jsx("h1", {
    className: "page-title font-weight-bold lh-1 text-white text-capitalize"
  }, "Our Services"), __jsx("p", {
    className: "page-desc text-white mb-0"
  }, "Lorem quis bibendum auctor, nisi elit consequat ipsum,", __jsx("br", null), " nec sagittis sem nibh id elit.")), __jsx("div", {
    className: "page-content mt-10 pt-10"
  }, __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: "50",
    duration: "1000",
    triggerOnce: true
  }, __jsx("section", {
    className: "about-section pb-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-lg-4 mb-10 mb-lg-4"
  }, __jsx("h5", {
    className: "section-subtitle lh-2 ls-md font-weight-normal"
  }, "01. What We Do"), __jsx("h3", {
    className: "section-title lh-1 font-weight-bold"
  }, "Provide perfect and practical services"), __jsx("p", {
    className: "section-desc"
  }, "Lorem quis bibendum auctar, nisi elit consequat ipsum, nec sagittis sem nibh id elit.")), __jsx("div", {
    className: "col-lg-8 "
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-4 mb-4"
  }, __jsx("div", {
    className: "counter text-center text-dark"
  }, __jsx((external_react_countup_default()), {
    start: 0,
    end: 35,
    duration: 4
  }, ({
    countUpRef,
    start
  }) => __jsx("div", {
    className: "count-to"
  }, __jsx("span", {
    ref: countUpRef
  }), __jsx("button", {
    onClick: start,
    className: "d-none"
  }, "Start"))), __jsx("h5", {
    className: "count-title font-weight-bold text-body ls-md"
  }, "Business Year"), __jsx("p", {
    className: "text-grey mb-0"
  }, "Lorem ipsum dolor sit", __jsx("br", null), "amet, conctetur adipisci elit. viverra erat orci."))), __jsx("div", {
    className: "col-md-4 mb-4"
  }, __jsx("div", {
    className: "counter text-center text-dark"
  }, __jsx((external_react_countup_default()), {
    start: 0,
    end: 50,
    duration: 4
  }, ({
    countUpRef,
    start
  }) => __jsx("div", {
    className: "count-to"
  }, __jsx("span", {
    ref: countUpRef
  }), __jsx("button", {
    onClick: start,
    className: "d-none"
  }, "Start"))), __jsx("h5", {
    className: "count-title font-weight-bold text-body ls-md"
  }, "Design Brands"), __jsx("p", {
    className: "text-grey mb-0"
  }, "Lorem ipsum dolor sit", __jsx("br", null), "amet, conctetur adipisci elit. viverra erat orci."))), __jsx("div", {
    className: "col-md-4 mb-4"
  }, __jsx("div", {
    className: "counter text-center text-dark"
  }, __jsx((external_react_countup_default()), {
    start: 0,
    end: 130,
    duration: 4
  }, ({
    countUpRef,
    start
  }) => __jsx("div", {
    className: "count-to"
  }, __jsx("span", {
    ref: countUpRef
  }), __jsx("button", {
    onClick: start,
    className: "d-none"
  }, "Start"))), __jsx("h5", {
    className: "count-title font-weight-bold text-body ls-md"
  }, "Team Members"), __jsx("p", {
    className: "text-grey mb-0"
  }, "Lorem ipsum dolor sit", __jsx("br", null), "amet, conctetur adipisci elit. viverra erat orci."))))))))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: "50",
    duration: "1000",
    triggerOnce: true
  }, __jsx("section", {
    className: "customer-section pb-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-md-7 mb-4"
  }, __jsx("figure", null, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/subpages/customer.jpg",
    alt: "Happy Customer",
    width: "580",
    height: "507",
    effect: "opacity",
    className: "banner-radius",
    style: {
      backgroundColor: "#BDD0DE"
    }
  }))), __jsx("div", {
    className: "col-md-5 mb-4"
  }, __jsx("h5", {
    className: "section-subtitle lh-2 ls-md font-weight-normal"
  }, "02. Happy Customer"), __jsx("h3", {
    className: "section-title lh-1 font-weight-bold"
  }, "Provide fashionable and", __jsx("br", null), "qualifed products"), __jsx("p", {
    className: "section-desc text-grey"
  }, "Already millions of people are very satisfied by thi.", __jsx("br", null), "s page builder and the number is growing more and more. Technolog", __jsx("br", null), "developing, requirements are increasing. Riode has brought."), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn btn-dark btn-link btn-underline ls-m"
  }, "Visit Our Store", __jsx("i", {
    className: "d-icon-arrow-right"
  }))))))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: "50",
    duration: "1000",
    triggerOnce: true
  }, __jsx("section", {
    className: "store-section pb-10"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-md-6 order-md-first mb-4"
  }, __jsx("h5", {
    className: "section-subtitle lh-2 ls-md font-weight-normal mb-1"
  }, "03. Our Store"), __jsx("h3", {
    className: "section-title lh-1 font-weight-bold"
  }, "Expect Restless", __jsx("br", null), "Amazing Support"), __jsx("p", {
    className: "section-desc text-grey"
  }, "Already millions of people are very satisfied by thi.", __jsx("br", null), "s page builder and the number is growing more and more. Technolog", __jsx("br", null), "developing, requirements are increasing. Riode has brought."), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "btn btn-dark btn-link btn-underline ls-m"
  }, "Get Our Store", __jsx("i", {
    className: "d-icon-arrow-right"
  }))), __jsx("div", {
    className: "col-md-6 mb-4"
  }, __jsx("figure", null, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/subpages/store.jpg",
    alt: "Our Store",
    width: "580",
    height: "507",
    effect: "opacity",
    className: "banner-radius",
    style: {
      backgroundColor: "#DEE6E8"
    }
  }))))))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: "50",
    duration: "1000",
    triggerOnce: true
  }, __jsx("section", {
    className: "brand-section grey-section pt-10 pb-10"
  }, __jsx("div", {
    className: "container mt-8 mb-10"
  }, __jsx("h5", {
    className: "section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center"
  }, "04. Our Clients"), __jsx("h3", {
    className: "section-title lh-1 font-weight-bold text-center mb-5"
  }, "Popular Brands"), __jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* mainSlider16 */.mr
  }, __jsx("figure", {
    className: "brand-wrap bg-white banner-radius"
  }, __jsx("img", {
    src: "./images/brands/1.png",
    alt: "Brand",
    width: "180",
    height: "100"
  })), __jsx("figure", {
    className: "brand-wrap bg-white banner-radius"
  }, __jsx("img", {
    src: "./images/brands/2.png",
    alt: "Brand",
    width: "180",
    height: "100"
  })), __jsx("figure", {
    className: "brand-wrap bg-white banner-radius"
  }, __jsx("img", {
    src: "./images/brands/3.png",
    alt: "Brand",
    width: "180",
    height: "100"
  })), __jsx("figure", {
    className: "brand-wrap bg-white banner-radius"
  }, __jsx("img", {
    src: "./images/brands/4.png",
    alt: "Brand",
    width: "180",
    height: "100"
  })), __jsx("figure", {
    className: "brand-wrap bg-white banner-radius"
  }, __jsx("img", {
    src: "./images/brands/5.png",
    alt: "Brand",
    width: "180",
    height: "100"
  })), __jsx("figure", {
    className: "brand-wrap bg-white banner-radius"
  }, __jsx("img", {
    src: "./images/brands/6.png",
    alt: "Brand",
    width: "180",
    height: "100"
  })))))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: "50",
    duration: "1000",
    triggerOnce: true
  }, __jsx("section", {
    className: "team-section pt-8 mt-10 pb-10 mb-6"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h5", {
    className: "section-subtitle lh-2 ls-md font-weight-normal mb-1 text-center"
  }, "05. Our Leaders"), __jsx("h3", {
    className: "section-title lh-1 font-weight-bold text-center mb-5"
  }, "Meet our team"), __jsx("div", {
    className: "row cols-sm-2 cols-md-4"
  }, __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInLeftShorter */.h6,
    delay: "20",
    duration: "1000",
    triggerOnce: true
  }, __jsx("div", {
    className: "member"
  }, __jsx("figure", {
    className: "banner-radius"
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/subpages/team1.jpg",
    alt: "Oteam member",
    width: 280,
    height: 280,
    effect: "opacity",
    style: {
      backgroundColor: "#EEE"
    }
  }), __jsx("div", {
    className: "overlay social-links"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-linkedin fab fa-linkedin-in"
  }))), __jsx("h4", {
    className: "member-name"
  }, "Tomasz Treflerzan"), __jsx("h5", {
    className: "member-job"
  }, "Ceo / Founder"))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInLeftShorter */.h6,
    delay: "30",
    duration: "1000",
    triggerOnce: true
  }, __jsx("div", {
    className: "member"
  }, __jsx("figure", {
    className: "banner-radius"
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/subpages/team2.jpg",
    alt: "Oteam member",
    width: 280,
    height: 280,
    effect: "opacity",
    style: {
      backgroundColor: "#EEE"
    }
  }), __jsx("div", {
    className: "overlay social-links"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-linkedin fab fa-linkedin-in"
  }))), __jsx("h4", {
    className: "member-name"
  }, "Dylan Chavez"), __jsx("h5", {
    className: "member-job"
  }, "Support manager / founder"))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInLeftShorter */.h6,
    delay: "40",
    duration: "1000",
    triggerOnce: true
  }, __jsx("div", {
    className: "member"
  }, __jsx("figure", {
    className: "banner-radius"
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/subpages/team3.jpg",
    alt: "Oteam member",
    width: 280,
    height: 280,
    effect: "opacity",
    style: {
      backgroundColor: "#EEE"
    }
  }), __jsx("div", {
    className: "overlay social-links"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-linkedin fab fa-linkedin-in"
  }))), __jsx("h4", {
    className: "member-name"
  }, "Viktoriia Demianenko"), __jsx("h5", {
    className: "member-job"
  }, "Designer"))), __jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInLeftShorter */.h6,
    delay: "50",
    duration: "1000",
    triggerOnce: true
  }, __jsx("div", {
    className: "member"
  }, __jsx("figure", {
    className: "banner-radius"
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "./images/subpages/team4.jpg",
    alt: "Oteam member",
    width: 280,
    height: 280,
    effect: "opacity",
    style: {
      backgroundColor: "#EEE"
    }
  }), __jsx("div", {
    className: "overlay social-links"
  }, __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-facebook fab fa-facebook-f"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-twitter fab fa-twitter"
  }), __jsx(custom_link/* default */.Z, {
    href: "#",
    className: "social-link social-linkedin fab fa-linkedin-in"
  }))), __jsx("h4", {
    className: "member-name"
  }, "Mikhail Hnatuk"), __jsx("h5", {
    className: "member-job"
  }, "Support")))))))));
}

/* harmony default export */ var about_us = (/*#__PURE__*/external_react_default().memo(AboutUs));

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

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

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-reveal");;

/***/ }),

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,4138,4943,9905], function() { return __webpack_exec__(1566); });
module.exports = __webpack_exports__;

})();
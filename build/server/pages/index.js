(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405,3866];
exports.modules = {

/***/ 9430:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: external "js-cookie"
var external_js_cookie_namespaceObject = require("js-cookie");;
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_namespaceObject);
;// CONCATENATED MODULE: ./components/features/modals/newsletter-modal.jsx

var __jsx = (external_react_default()).createElement;



const modalStyles = {
  content: {
    position: "relative"
  },
  overlay: {
    background: 'rgba(0,0,0,.4)',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: 'flex'
  }
};
external_react_modal_default().setAppElement("#__next");
function NewsletterModal() {
  const {
    0: modalState,
    1: setModalState
  } = (0,external_react_.useState)(false);
  const {
    0: noMore,
    1: setNoMore
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    let timer;
    external_js_cookie_default().get("hideNewsletter") || (timer = setTimeout(() => {
      setModalState(true);
    }, 5000));
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  function closeModal() {
    document.querySelector(".ReactModal__Overlay.newsletter-modal-overlay").classList.add('removed');
    document.querySelector(".newsletter-popup.ReactModal__Content").classList.remove("ReactModal__Content--after-open");
    setTimeout(() => {
      setModalState(false);
      noMore && external_js_cookie_default().set("hideNewsletter", 'true', {
        expires: 7,
        path: window.location.pathname
      });
    }, 250);
  }

  function handleChange(event) {
    setNoMore(event.target.checked);
  }

  return __jsx((external_react_modal_default()), {
    isOpen: modalState,
    style: modalStyles,
    onRequestClose: closeModal,
    shouldReturnFocusAfterClose: false,
    overlayClassName: "newsletter-modal-overlay",
    className: "newsletter-popup bg-img"
  }, __jsx("div", {
    className: "newsletter-popup",
    id: "newsletter-popup",
    style: {
      backgroundImage: "url(images/newsletter-popup.jpg)"
    }
  }, __jsx("div", {
    className: "newsletter-content"
  }, __jsx("h4", {
    className: "text-uppercase text-dark"
  }, "Up to ", __jsx("span", {
    className: "text-primary"
  }, "20% Off")), __jsx("h2", {
    className: "font-weight-semi-bold"
  }, "Sign up to ", __jsx("span", null, "RIODE")), __jsx("p", {
    className: "text-grey"
  }, "Subscribe to the Riode eCommerce newsletter to receive timely updates from your favorite products."), __jsx("form", {
    action: "#",
    method: "get",
    className: "input-wrapper input-wrapper-inline input-wrapper-round"
  }, __jsx("input", {
    type: "email",
    className: "form-control email",
    name: "email",
    id: "email2",
    placeholder: "Email address here...",
    required: true,
    "aria-label": "newsletter"
  }), __jsx("button", {
    className: "btn btn-dark",
    type: "submit"
  }, "SUBMIT")), __jsx("div", {
    className: "form-checkbox justify-content-center"
  }, __jsx("input", {
    type: "checkbox",
    value: noMore,
    className: "custom-checkbox",
    id: "hide-newsletter-popup",
    onChange: handleChange,
    name: "hide-newsletter-popup",
    required: true
  }), __jsx("label", {
    htmlFor: "hide-newsletter-popup"
  }, "Don't show this popup again"))), __jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal
  }, __jsx("span", null, "\xD7"))));
}
// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(104);
var external_react_awesome_reveal_default = /*#__PURE__*/__webpack_require__.n(external_react_awesome_reveal_);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/features/product/product-three.jsx
var product_three = __webpack_require__(4246);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
// EXTERNAL MODULE: ./utils/data/keyframes.js
var keyframes = __webpack_require__(9905);
;// CONCATENATED MODULE: ./components/partials/home/popular-collection.jsx
var popular_collection_jsx = (external_react_default()).createElement;







function PopularCollection(props) {
  const {
    products,
    loading
  } = props;
  return popular_collection_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: 300,
    duration: 1200,
    triggerOnce: true
  }, popular_collection_jsx("section", {
    className: "product-wrapper pb-2"
  }, popular_collection_jsx("div", {
    className: "container"
  }, popular_collection_jsx("h2", {
    className: "title title-center pt-3"
  }, "Popular Items"), loading ? popular_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-nav-full",
    options: carousel/* productSlider */.sE
  }, [1, 2, 3, 4, 5].map(item => popular_collection_jsx("div", {
    className: "product-loading-overlay",
    key: 'popular-skel-' + item
  }))) : popular_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-nav-full",
    options: carousel/* productSlider */.sE
  }, products && products.map((item, index) => popular_collection_jsx(product_three/* default */.Z, {
    isCategory: false,
    product: item,
    key: `popular-product ${index}`
  }))))));
}

/* harmony default export */ var popular_collection = (/*#__PURE__*/external_react_default().memo(PopularCollection));
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
;// CONCATENATED MODULE: ./components/partials/home/intro-section.jsx
var intro_section_jsx = (external_react_default()).createElement;

 // import Custom Components




function IntroSection() {
  return intro_section_jsx("section", {
    className: "intro-section"
  }, intro_section_jsx("div", {
    className: "banner banner-fixed",
    style: {
      backgroundColor: "#22252a"
    }
  }, intro_section_jsx("figure", null, intro_section_jsx("img", {
    src: "./images/home/banners/intro-banner.jpg",
    alt: "banner",
    width: "1903",
    height: "1010"
  })), intro_section_jsx("div", {
    className: "banner-content w-100 x-50 y-50 text-center pl-3 pr-3"
  }, intro_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInUpShorter */.lN,
    delay: 700,
    triggerOnce: true
  }, intro_section_jsx("h3", {
    className: "banner-title font-secondary text-white"
  }, "Make Yourself at Home")), intro_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInUp */.eu,
    delay: 1000,
    triggerOnce: true
  }, intro_section_jsx("p", {
    className: "mb-10 font-primary text-white"
  }, "We create ", intro_section_jsx("strong", {
    className: "text-uppercase"
  }, "High Quailty Products"), intro_section_jsx("br", null), "that are used & loved by thousands of customers")), intro_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInUp */.eu,
    delay: 1300,
    triggerOnce: true
  }, intro_section_jsx(custom_link/* default */.Z, {
    href: "/shop",
    className: "btn btn-outline btn-white btn-rounded"
  }, "Discover Now")))));
}

/* harmony default export */ var intro_section = (/*#__PURE__*/external_react_default().memo(IntroSection));
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
;// CONCATENATED MODULE: ./components/partials/home/category-section.jsx
var category_section_jsx = (external_react_default()).createElement;








function CategorySection() {
  return category_section_jsx((external_react_default()).Fragment, null, category_section_jsx("section", {
    className: "categories-section pt-10 mt-10"
  }, category_section_jsx("div", {
    className: "title-wrapper container text-center mt-1"
  }, category_section_jsx("h2", {
    className: "title title-simple"
  }, "Popular Categories"), category_section_jsx("p", null, "Lorem quis bibendum auctor, nisi elit consequat ipsum")), category_section_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* categorySlider */.Vb
  }, category_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInRightShorter */.uT,
    delay: 300,
    triggerOnce: true
  }, category_section_jsx("div", {
    className: "category category-overlay category-absolute overlay-dark overlay-zoom text-white",
    style: {
      backgroundColor: "#f0f0f0"
    }
  }, category_section_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'bedspreads'
      }
    }
  }, category_section_jsx("figure", {
    className: "category-media"
  }, category_section_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    threshold: 300,
    src: "./images/home/categories/1.jpg",
    alt: "category",
    width: "480",
    height: "480"
  }))), category_section_jsx("div", {
    className: "category-content x-50 y-50"
  }, category_section_jsx("h4", {
    className: "category-name font-secondary font-weight-bold ls-normal text-uppercase"
  }, "Bedspreads")))), category_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInRightShorter */.uT,
    delay: 400,
    triggerOnce: true
  }, category_section_jsx("div", {
    className: "category category-overlay category-absolute overlay-dark overlay-zoom text-white",
    style: {
      backgroundColor: "#554f48"
    }
  }, category_section_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'gallery'
      }
    }
  }, category_section_jsx("figure", {
    className: "category-media"
  }, category_section_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    threshold: 300,
    src: "./images/home/categories/2.jpg",
    alt: "category",
    width: "480",
    height: "480"
  }))), category_section_jsx("div", {
    className: "category-content x-50 y-50"
  }, category_section_jsx("h4", {
    className: "category-name font-secondary font-weight-bold ls-normal text-uppercase"
  }, "Gallery")))), category_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInRightShorter */.uT,
    delay: 500,
    triggerOnce: true
  }, category_section_jsx("div", {
    className: "category category-overlay category-absolute overlay-dark overlay-zoom text-white",
    style: {
      backgroundColor: "#c4c4c4"
    }
  }, category_section_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'chair'
      }
    }
  }, category_section_jsx("figure", {
    className: "category-media"
  }, category_section_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    threshold: 300,
    src: "./images/home/categories/3.jpg",
    alt: "category",
    width: "480",
    height: "480"
  }))), category_section_jsx("div", {
    className: "category-content x-50 y-50"
  }, category_section_jsx("h4", {
    className: "category-name font-secondary font-weight-bold ls-normal text-uppercase"
  }, "Chair")))), category_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInRightShorter */.uT,
    delay: 600,
    triggerOnce: true
  }, category_section_jsx("div", {
    className: "category category-overlay category-absolute overlay-dark overlay-zoom text-white",
    style: {
      backgroundColor: "#9a9ca0"
    }
  }, category_section_jsx(custom_link/* default */.Z, {
    href: {
      pathname: '/shop',
      query: {
        category: 'lamp'
      }
    }
  }, category_section_jsx("figure", {
    className: "category-media"
  }, category_section_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    threshold: 300,
    src: "./images/home/categories/4.jpg",
    alt: "category",
    width: "480",
    height: "480"
  }))), category_section_jsx("div", {
    className: "category-content x-50 y-50"
  }, category_section_jsx("h4", {
    className: "category-name font-secondary font-weight-bold ls-normal text-uppercase"
  }, "Lamp")))))), category_section_jsx("section", {
    className: "mt-10 pt-4 pb-4 mb-10"
  }, category_section_jsx("div", {
    className: "container"
  }, category_section_jsx("div", {
    className: "banner banner-cta1 row"
  }, category_section_jsx("div", {
    className: "col-lg-5"
  }, category_section_jsx("div", {
    className: "banner-content"
  }, category_section_jsx("h4", {
    className: "banner-subtitle font-weight-bold ls-normal text-primary text-uppercase"
  }, "New Collection"), category_section_jsx("h3", {
    className: "banner-title font-secondary font-weight-bold text-uppercase"
  }, "Complete your perfect set."), category_section_jsx("p", {
    className: "mb-7 font-primary text-body"
  }, "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh."), category_section_jsx(custom_link/* default */.Z, {
    href: "/shop",
    className: "btn btn-outline"
  }, "Shop now"))), category_section_jsx("div", {
    className: "col-lg-7"
  }, category_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeInLeftShorter */.h6,
    triggerOnce: true
  }, category_section_jsx("figure", {
    className: "d-flex align-items-center h-100"
  }, category_section_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    src: "./images/home/banners/1.jpg",
    alt: "banner",
    width: "820",
    height: "354"
  }))))))));
}

/* harmony default export */ var category_section = (/*#__PURE__*/external_react_default().memo(CategorySection));
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/modal.js
var modal = __webpack_require__(6723);
;// CONCATENATED MODULE: ./components/partials/home/video-section.jsx
var video_section_jsx = (external_react_default()).createElement;






function VideoSection(props) {
  const showVideoModalHandler = e => {
    e.preventDefault();
    let link = e.currentTarget.getAttribute('href');
    props.openModal(link);
  };

  return video_section_jsx("section", {
    className: "banner video-banner pl-2 pr-2",
    style: {
      backgroundImage: `url(./images/home/banners/5.jpg)`,
      backgroundColor: "#9bb5c4"
    }
  }, video_section_jsx("div", {
    className: "banner-content text-center"
  }, video_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    triggerOnce: true
  }, video_section_jsx("h3", {
    className: "banner-title font-secondary mb-0 font-weight-bold text-white text-uppercase mb-10"
  }, "Modern Furniture & Designe "), video_section_jsx("a", {
    className: "btn-play btn-iframe text-white",
    href: "/uploads/video/video-1.mp4",
    onClick: showVideoModalHandler
  }, video_section_jsx("i", {
    className: "d-icon-play-solid"
  })))));
}

/* harmony default export */ var video_section = ((0,external_react_redux_.connect)(null, {
  openModal: modal/* modalActions.openModal */.n.openModal
})(VideoSection));
;// CONCATENATED MODULE: ./components/partials/home/promo-section.jsx
var promo_section_jsx = (external_react_default()).createElement;




function PromoSection(props) {
  return promo_section_jsx("section", {
    className: "mt-10"
  }, promo_section_jsx("div", {
    className: "banner banner-cta2",
    style: {
      backgroundImage: `url(./images/home/banners/2.jpg)`,
      backgroundColor: "#666563"
    }
  }, promo_section_jsx("div", {
    className: "container"
  }, promo_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    triggerOnce: true
  }, promo_section_jsx("div", {
    className: "banner-content text-center"
  }, promo_section_jsx("h4", {
    className: "banner-subtitle font-weight-bold ls-m mb-3 text-uppercase text-white"
  }, "Best For Less"), promo_section_jsx("h3", {
    className: "banner-title font-secondary mb-10 font-weight-bold text-uppercase text-white"
  }, "Modern Furniture & design"), promo_section_jsx(custom_link/* default */.Z, {
    href: "/shop",
    className: "btn btn-outline btn-white ls-m font-weight-normal"
  }, "Discover now"))))));
}
// EXTERNAL MODULE: ./components/features/product/product-two.jsx
var product_two = __webpack_require__(3264);
;// CONCATENATED MODULE: ./components/partials/home/product-collection.jsx

var product_collection_jsx = (external_react_default()).createElement;






function ProductCollection(props) {
  const {
    products,
    loading
  } = props;
  return product_collection_jsx((external_react_default()).Fragment, null, product_collection_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    triggerOnce: true
  }, product_collection_jsx("section", {
    className: "products-section row gutter-no align-items-center"
  }, product_collection_jsx("div", {
    className: "col-lg-6"
  }, product_collection_jsx("div", {
    className: "intro-media",
    style: {
      backgroundColor: "#efefef"
    }
  }, product_collection_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    threshold: 300,
    src: "./images/home/banners/3.jpg",
    alt: "banner",
    width: "951",
    height: "645"
  }))), product_collection_jsx("div", {
    className: "col-lg-6 order-lg-first"
  }, product_collection_jsx("div", {
    className: "product-wrapper"
  }, product_collection_jsx("h2", {
    className: "title title-simple"
  }, "Decoration"), loading ? product_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-nav-full",
    options: carousel/* featuredSlider */.Rs
  }, [1, 2, 3].map(item => product_collection_jsx("div", {
    className: "product-loading-overlay",
    key: 'featured-skel-' + item
  }))) : product_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-nav-full",
    options: carousel/* featuredSlider */.Rs
  }, products.slice(0, 3).map(item => product_collection_jsx(product_two/* default */.Z, {
    product: item,
    key: `featured-${item.slug}`,
    isCategory: false
  }))))))), product_collection_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    triggerOnce: true
  }, product_collection_jsx("section", {
    className: "products-section row gutter-no align-items-center"
  }, product_collection_jsx("div", {
    className: "col-lg-6"
  }, product_collection_jsx("div", {
    className: "intro-media",
    style: {
      backgroundColor: "#efefef"
    }
  }, product_collection_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    effect: "opacity",
    threshold: 300,
    src: "./images/home/banners/4.jpg",
    alt: "banner",
    width: "960",
    height: "664"
  }))), product_collection_jsx("div", {
    className: "col-lg-6"
  }, product_collection_jsx("div", {
    className: "product-wrapper"
  }, product_collection_jsx("h2", {
    className: "title title-simple"
  }, "Small Furniture"), loading ? product_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-nav-full",
    options: carousel/* featuredSlider */.Rs
  }, [4, 5, 6].map(item => product_collection_jsx("div", {
    className: "product-loading-overlay",
    key: 'featured-skel-' + item
  }))) : product_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme owl-nav-full",
    options: carousel/* featuredSlider */.Rs
  }, products.slice(3, 6).map(item => product_collection_jsx(product_two/* default */.Z, {
    product: item,
    key: `featured-${item.slug}`,
    isCategory: false
  }))))))));
}
;// CONCATENATED MODULE: ./components/partials/home/best-collection.jsx
var best_collection_jsx = (external_react_default()).createElement;







function BestCollection(props) {
  const {
    products,
    loading
  } = props;
  return best_collection_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    delay: 300,
    duration: 1200,
    triggerOnce: true
  }, best_collection_jsx("section", {
    className: "product-wrapper mt-10 pt-9 mb-10"
  }, best_collection_jsx("div", {
    className: "container"
  }, best_collection_jsx("h2", {
    className: "title title-simple"
  }, "Popular Items"), loading ? best_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* productSlider */.sE
  }, [1, 2, 3, 4, 5].map(item => best_collection_jsx("div", {
    className: "product-loading-overlay",
    key: 'best-skel-' + item
  }))) : best_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* productSlider */.sE
  }, products && products.map((item, index) => best_collection_jsx(product_three/* default */.Z, {
    isCategory: false,
    product: item,
    key: `best-product ${index}`
  }))))));
}

/* harmony default export */ var best_collection = (/*#__PURE__*/external_react_default().memo(BestCollection));
// EXTERNAL MODULE: ./components/features/post/post-six.jsx
var post_six = __webpack_require__(2556);
;// CONCATENATED MODULE: ./components/partials/home/blog-section.jsx
var blog_section_jsx = (external_react_default()).createElement;







function BlogSection(props) {
  const {
    posts
  } = props;
  return blog_section_jsx("section", {
    className: "blog-section pt-6 pb-2 mb-10"
  }, blog_section_jsx((external_react_awesome_reveal_default()), {
    keyframes: keyframes/* fadeIn */.Ji,
    duration: 1000,
    triggerOnce: true
  }, blog_section_jsx("div", {
    className: "container"
  }, blog_section_jsx("h2", {
    className: "title title-center"
  }, "Latest Blog"), blog_section_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-theme",
    options: carousel/* postSlider */.jP
  }, posts && posts.length ? posts.slice(15, 19).map((post, index) => blog_section_jsx((external_react_default()).Fragment, {
    key: "post-eight" + index
  }, blog_section_jsx("div", {
    className: "blog-post"
  }, blog_section_jsx(post_six/* default */.Z, {
    post: post,
    adClass: "",
    isOriginal: true,
    btnAdClass: "text-capitalize font-primary font-weight-semi-bold"
  })))) : ''))));
}

/* harmony default export */ var blog_section = (/*#__PURE__*/external_react_default().memo(BlogSection));
;// CONCATENATED MODULE: ./pages/index.jsx
var pages_jsx = (external_react_default()).createElement;


 // Import Apollo Server and Query


 // import Home Components











function HomePage() {
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_HOME_DATA */.vP, {
    variables: {
      productsCount: 6
    }
  });
  const onSale = data && data.specialProducts.onSale;
  const bestSelling = data && data.specialProducts.bestSelling;
  const latest = data && data.specialProducts.latest;
  const posts = data && data.posts.data;
  return pages_jsx("div", {
    className: "main home"
  }, pages_jsx(external_react_helmet_.Helmet, null, pages_jsx("title", null, "Riode React eCommerce Template - Home")), pages_jsx("h1", {
    className: "d-none"
  }, "Riode React eCommerce Template - Home"), pages_jsx("div", {
    className: "page-content"
  }, pages_jsx(intro_section, null), pages_jsx(category_section, null), pages_jsx(popular_collection, {
    products: bestSelling,
    loading: loading
  }), pages_jsx(PromoSection, null), pages_jsx(ProductCollection, {
    products: onSale,
    loading: loading
  }), pages_jsx(video_section, null), pages_jsx(best_collection, {
    products: latest,
    loading: loading
  }), pages_jsx(blog_section, {
    posts: posts
  })), pages_jsx(NewsletterModal, null));
}

/* harmony default export */ var pages = ((0,apollo/* default */.Z)({
  ssr: true
})(HomePage));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

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

/***/ 9997:
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5588,5961,4138,4943,6090,5708,6723,4246,9905,3264,2556], function() { return __webpack_exec__(9430); });
module.exports = __webpack_exports__;

})();
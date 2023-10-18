exports.id = 5588;
exports.ids = [5588];
exports.modules = {

/***/ 8765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ ALink; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function ALink(_ref) {
  let {
    children,
    className,
    content,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "content", "style"]);

  const preventDefault = e => {
    if (props.href === '#') {
      e.preventDefault();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return content ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, props, __jsx("a", {
    className: className,
    style: style,
    onClick: preventDefault,
    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .parseContent */ .nK)(content)
  }, children)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, props, __jsx("a", {
    className: className,
    style: style,
    onClick: preventDefault
  }, children));
}

/***/ }),

/***/ 6442:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nK": function() { return /* binding */ parseContent; },
/* harmony export */   "Dp": function() { return /* binding */ stickyHeaderHandler; },
/* harmony export */   "Ul": function() { return /* binding */ resizeHandler; },
/* harmony export */   "vW": function() { return /* binding */ stickyFooterHandler; },
/* harmony export */   "K6": function() { return /* binding */ parallaxHandler; },
/* harmony export */   "Py": function() { return /* binding */ showScrollTopHandler; },
/* harmony export */   "_M": function() { return /* binding */ scrollTopHandler; },
/* harmony export */   "X9": function() { return /* binding */ videoHandler; },
/* harmony export */   "m_": function() { return /* binding */ getTotalPrice; },
/* harmony export */   "c0": function() { return /* binding */ getCartCount; },
/* harmony export */   "YM": function() { return /* binding */ toDecimal; }
/* harmony export */ });
/* unused harmony exports parseOptions, isIEBrowser, isSafariBrowser, isEdgeBrowser, findIndex, findArrayIndex */
/**
 * utils to parse options string to object
 * @param {string} options 
 * @return {object}
 */
const parseOptions = function (options) {
  if ("string" === typeof options) {
    return JSON.parse(options.replace(/'/g, '"').replace(';', ''));
  }

  return {};
};
/**
 * utils to dectect IE browser
 * @return {bool}
 */

const isIEBrowser = function () {
  let sUsrAg = navigator.userAgent;

  if (sUsrAg.indexOf("Trident") > -1) {
    return true;
  }

  return false;
};
/**
 * utils to detect safari browser
 * @return {bool}
 */

const isSafariBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1) return true;
  return false;
};
/**
 * utils to detect Edge browser
 * @return {bool}
 */

const isEdgeBrowser = function () {
  let sUsrAg = navigator.userAgent;
  if (sUsrAg.indexOf("Edge") > -1) return true;
  return false;
};
/**
 * utils to find index in array
 * @param {array} array
 * @param {callback} cb
 * @returns {number} index
 */

const findIndex = function (array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return i;
    }
  }

  return -1;
};
/**
 * utils to get the position of the first element of search array in array
 * @param {array} array
 * @param {array} searchArray
 * @param {callback} cb
 * @returns {number} index
 */

const findArrayIndex = function (array, searchArray, cb) {
  for (let i = 0; i < searchArray.length; i++) {
    if (cb(searchArray[i])) {
      return i;
    }
  }

  return -1;
};
/**
 * utils to remove all XSS  attacks potential
 * @param {String} html
 * @return {Object}
 */

const parseContent = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; //Removing the <script> tags

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  } //Removing all events from tags...


  html = html.replace(/ on\w+="[^"]*"/g, '');
  return {
    __html: html
  };
};
/**
 * Apply sticky header
 */

const stickyHeaderHandler = function () {
  let top = 300;
  let stickyHeader = document.querySelector('.sticky-header');
  let height = 0;

  if (stickyHeader) {
    height = stickyHeader.offsetHeight;
  }

  if (window.pageYOffset >= top && window.innerWidth >= 992) {
    if (stickyHeader) {
      stickyHeader.classList.add('fixed');

      if (!document.querySelector('.sticky-wrapper')) {
        let newNode = document.createElement("div");
        newNode.className = "sticky-wrapper";
        stickyHeader.parentNode.insertBefore(newNode, stickyHeader);
        document.querySelector('.sticky-wrapper').insertAdjacentElement('beforeend', stickyHeader);
        document.querySelector('.sticky-wrapper').setAttribute("style", "height: " + height + "px");
      }

      if (!document.querySelector('.sticky-wrapper').getAttribute("style")) {
        document.querySelector('.sticky-wrapper').setAttribute("style", "height: " + height + "px");
      }
    }
  } else {
    if (stickyHeader) {
      stickyHeader.classList.remove('fixed');
    }

    if (document.querySelector('.sticky-wrapper')) {
      document.querySelector('.sticky-wrapper').removeAttribute("style");
    }
  }

  if (window.outerWidth >= 992 && document.querySelector('body').classList.contains('right-sidebar-active')) {
    document.querySelector('body').classList.remove('right-sidebar-active');
  }
};
/**
 * Add or remove settings when the window is resized
 */

const resizeHandler = function (width = 992, attri = 'right-sidebar-active') {
  let bodyClasses = document.querySelector("body") && document.querySelector("body").classList;
  bodyClasses = bodyClasses.value.split(' ').filter(item => item !== 'home' && item !== 'loaded');

  for (let i = 0; i < bodyClasses.length; i++) {
    document.querySelector("body") && document.querySelector('body').classList.remove(bodyClasses[i]);
  }
};
/**
 * Apply sticky footer
 */

const stickyFooterHandler = function () {
  let stickyFooter = document.querySelector('.sticky-footer');
  let top = document.querySelector('main') ? document.querySelector('main').offsetTop : 300;
  let height = 0;

  if (stickyFooter) {
    height = stickyFooter.offsetHeight;
  }

  if (window.pageYOffset >= top && window.innerWidth < 768) {
    if (stickyFooter) {
      stickyFooter.classList.add('fixed');

      if (!document.querySelector('.sticky-content-wrapper')) {
        let newNode = document.createElement("div");
        newNode.className = "sticky-content-wrapper";
        stickyFooter.parentNode.insertBefore(newNode, stickyFooter);
        document.querySelector('.sticky-content-wrapper').insertAdjacentElement('beforeend', stickyFooter);
      }

      document.querySelector('.sticky-content-wrapper').setAttribute("style", "height: " + height + "px");
    }
  } else {
    if (stickyFooter) {
      stickyFooter.classList.remove('fixed');
    }

    if (document.querySelector('.sticky-content-wrapper')) {
      document.querySelector('.sticky-content-wrapper').removeAttribute("style");
    }
  }

  if (window.innerWidth > 768 && document.querySelector('.sticky-content-wrapper')) {
    document.querySelector('.sticky-content-wrapper').style.height = 'auto';
  }
};
/**
 * utils to make background parallax
 */

const parallaxHandler = function () {
  let parallaxItems = document.querySelectorAll('.parallax');

  if (parallaxItems) {
    for (let i = 0; i < parallaxItems.length; i++) {
      // calculate background y Position;
      let parallax = parallaxItems[i],
          yPos,
          parallaxSpeed = 1;

      if (parallax.getAttribute('data-option')) {
        parallaxSpeed = parseInt(parseOptions(parallax.getAttribute('data-option')).speed);
      }

      yPos = (parallax.offsetTop - window.pageYOffset) * 50 * parallaxSpeed / parallax.offsetTop + 50;
      parallax.style.backgroundPosition = "50% " + yPos + "%";
    }
  }
};
/**
 * utils to show scrollTop button
 */

const showScrollTopHandler = function () {
  let scrollTop = document.querySelector(".scroll-top");

  if (window.pageYOffset >= 768) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
};
/**
 * utils to scroll to top
 */

function scrollTopHandler(isCustom = true, speed = 15) {
  let offsetTop = 0;

  if (isCustom && !isEdgeBrowser()) {
    if (document.querySelector('.main .container > .row')) {
      offsetTop = document.querySelector('.main .container > .row').getBoundingClientRect().top + window.pageYOffset - document.querySelector('.sticky-header').offsetHeight + 2;
    }
  } else {
    offsetTop = 0;
  }

  if (isSafariBrowser() || isEdgeBrowser()) {
    let pos = window.pageYOffset;
    let timerId = setInterval(() => {
      if (pos <= offsetTop) clearInterval(timerId);
      window.scrollBy(0, -speed);
      pos -= speed;
    }, 1);
  } else {
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}
/**
 * utils to play and pause video
 */

const videoHandler = e => {
  e.stopPropagation();
  e.preventDefault();

  if (e.currentTarget.closest('.post-video')) {
    let video = e.currentTarget.closest('.post-video');

    if (video.classList.contains('playing')) {
      video.classList.remove('playing');
      video.classList.add('paused');
      video.querySelector('video').pause();
    } else {
      video.classList.add('playing');
      video.querySelector('video').play();
    }

    video.querySelector('video').addEventListener('ended', function () {
      video.classList.remove('playing');
      video.classList.remove('paused');
    });
  }
};
/**
 * utils to get total Price of products in cart.
 */

const getTotalPrice = cartItems => {
  let total = 0;

  if (cartItems) {
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * parseInt(cartItems[i].qty, 10);
    }
  }

  return total;
};
/**
 * utils to get number of products in cart
 */

const getCartCount = cartItems => {
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += parseInt(cartItems[i].qty, 10);
  }

  return total;
};
/**
 * utils to show number to n places of decimals
 */

const toDecimal = (price, fixedCount = 2) => {
  return price.toLocaleString(undefined, {
    minimumFractionDigits: fixedCount,
    maximumFractionDigits: fixedCount
  });
};

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;
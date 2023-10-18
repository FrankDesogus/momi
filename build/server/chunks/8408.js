exports.id = 8408;
exports.ids = [8408];
exports.modules = {

/***/ 8408:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MediaOne; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-image-magnifiers"
var external_react_image_magnifiers_ = __webpack_require__(7773);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
;// CONCATENATED MODULE: ./components/partials/product/thumb/thumb-one.jsx

var __jsx = (external_react_default()).createElement;

function ThumbOne(props) {
  const {
    index,
    product
  } = props;
  const {
    0: pos,
    1: setPos
  } = (0,external_react_.useState)(0);
  const {
    0: term,
    1: setTerm
  } = (0,external_react_.useState)(4);
  (0,external_react_.useEffect)(() => {
    window.addEventListener('resize', initCarouselHanlder);
    setTimeout(() => {
      let productThumb = document.querySelector('.product-thumb');
      let wrapperHeight = document.querySelector('.product-thumbs-one').offsetHeight;
      let thumbSpace = parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom"));
      let transformUnit = productThumb.offsetHeight + thumbSpace; // newTerm = Math.ceil( ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) ) / transformUnit );

      let newTerm = document.querySelector('.product-gallery.pg-vertical').offsetHeight + thumbSpace;
      newTerm = parseInt(newTerm / transformUnit);

      if (newTerm !== term) {
        setTerm(newTerm);
      }
    }, 300);
    return () => {
      window.removeEventListener('resize', initCarouselHanlder);
    };
  }, []); // initial settings

  (0,external_react_.useEffect)(() => {
    let productThumbs = document.querySelector('.product-thumbs-one');

    if (window.innerWidth < 992) {
      document.querySelector('.product-thumbs-one').style.display = 'none';
      document.querySelector('.product-thumbs-two').style.display = 'block';
      window.jQuery('.owl-carousel').trigger('refresh.owl.carousel');
    } else {
      document.querySelector('.product-thumbs-one').style.display = 'block';
      document.querySelector('.product-thumbs-two').style.display = 'none';
    }

    setPos(0);

    if (term < product.pictures.length) {
      productThumbs.querySelector('.thumb-down').classList.remove('disabled');
    } else {
      productThumbs.querySelector('.thumb-down').classList.add('disabled');
    }

    if (document.querySelector('.product-thumbs')) {
      activeItem(0);
      productThumbs.querySelector('.thumb-up').classList.add('disabled');
      document.querySelector('.product-thumbs').style.top = 0;
    }
  }, [product]); // change the pos and top when the media carousel is translated 

  (0,external_react_.useEffect)(() => {
    if (pos + term - 1 < index) {
      moveThumb("down");
      setPos(pos + 1);
    }

    if (index < pos) {
      moveThumb("up");
      setPos(pos - 1);
    }

    activeItem(index);
  }, [index]);
  (0,external_react_.useEffect)(() => {
    let productThumbs = document.querySelector('.product-thumbs-one');

    if (pos + term < product.pictures.length) {
      productThumbs.querySelector('.thumb-down').classList.remove('disabled');
    } else {
      productThumbs.querySelector('.thumb-down').classList.add('disabled');
    }

    if (pos + term === product.pictures.length) {// moveThumb( "down" );
      // setPos( pos + 1 );
    }

    if (index < pos) {// moveThumb( "up" );
      // setPos( pos - 1 );
    }
  }, [term]);
  (0,external_react_.useEffect)(() => {
    let productThumbs = document.querySelector('.product-thumbs-one');

    if (productThumbs) {
      if (pos > 0) {
        productThumbs.querySelector('.thumb-up').classList.remove('disabled');
      } else {
        productThumbs.querySelector('.thumb-up').classList.add('disabled');
      }

      if (pos + term < product.pictures.length) {
        productThumbs.querySelector('.thumb-down').classList.remove('disabled');
      } else {
        productThumbs.querySelector('.thumb-down').classList.add('disabled');
      }
    }
  }, [pos]); // move thumb pos

  function moveThumb(type = "up") {
    let sign = type === "up" ? 1 : -1;
    let productThumb = document.querySelector('.product-thumb');
    let wrapperHeight = document.querySelector('.product-thumbs-one').offsetHeight;
    let transformUnit = productThumb.offsetHeight + parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom"));

    if (type === 'down') {
      document.querySelector('.product-thumbs').style.top = -transformUnit * (pos - sign) + (wrapperHeight - transformUnit * term) + parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom")) + 'px';
    } else {
      document.querySelector('.product-thumbs').style.top = -transformUnit * (pos - sign) + 'px';
    }
  } // active selected item


  function activeItem(index) {
    if (document.querySelector('.product-thumbs').querySelector('.active.product-thumb')) {
      let activeItems = document.querySelector('.product-thumbs').querySelectorAll('.active.product-thumb');
      activeItems.forEach(item => {
        item.classList.remove('active');
      });
    }

    document.querySelector('.product-thumbs').querySelectorAll('.product-thumb')[index].classList.add('active');
  } // init and destroy thumb carousel in 992px


  const initCarouselHanlder = () => {
    if (window.innerWidth < 992) {
      document.querySelector('.product-thumbs-one').style.display = 'none';
      document.querySelector('.product-thumbs-two').style.display = 'block';
      window.jQuery('.owl-carousel').trigger('refresh.owl.carousel');
    } else {
      document.querySelector('.product-thumbs-one').style.display = 'block';
      document.querySelector('.product-thumbs-two').style.display = 'none';
      setTermHandler();
    }
  }; // change the items displayed once in sidebar


  const setTermHandler = () => {
    setTimeout(() => {
      let productThumb = document.querySelector('.product-thumb');
      let wrapperHeight = document.querySelector('.product-thumbs-one').offsetHeight;
      let thumbSpace = parseInt(window.getComputedStyle(productThumb).getPropertyValue("margin-bottom"));
      let transformUnit = productThumb.offsetHeight + thumbSpace; // newTerm = Math.ceil( ( ( document.querySelector( '.product-gallery.pg-vertical' ).offsetHeight + thumbSpace ) ) / transformUnit );

      let newTerm = document.querySelector('.product-gallery.pg-vertical').offsetHeight + thumbSpace;
      newTerm = parseInt(newTerm / transformUnit);
      console.log("new term is", newTerm, window.innerWidth);

      if (newTerm !== term) {
        setTerm(newTerm);
      }

      let thumbContainer = document.querySelector('.product-thumbs-one');

      if (product.pictures.length <= newTerm) {
        setTimeout(() => {
          thumbContainer.querySelector('.product-thumbs').style.top = 0;
        }, 100);
      } else {
        let currentTop = parseInt(window.getComputedStyle(thumbContainer.querySelector('.product-thumbs')).getPropertyValue('top'));
        let offset = currentTop + transformUnit * product.pictures.length - thumbSpace;
        let temp = wrapperHeight - offset;

        if ((index > newTerm - 1 || temp >= 0) && product.pictures.length > newTerm) {
          thumbContainer.querySelector('.product-thumbs').style.top = currentTop + temp + 'px';
        }
      }
    }, 300);
  }; // set the top on clicking prev


  const prevPosHandler = () => {
    setPos(pos - 1);
    moveThumb("up");
  }; // set the top on clicking next


  const nextPosHandler = () => {
    setPos(pos + 1);
    moveThumb("down");
  }; // active the thumb which is currently selected


  const activeHandler = (e, index) => {
    if (props.onChangeIndex) {
      props.onChangeIndex(index);
    }

    activeItem(index);
  };

  return __jsx("div", {
    className: "product-thumbs-wrap product-thumbs-one"
  }, __jsx("div", {
    className: "product-thumbs",
    id: "product-thumbs"
  }, product.pictures.map((item, index) => __jsx("div", {
    className: `product-thumb`,
    key: "thumb - " + index,
    onClick: e => activeHandler(e, index)
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + item.url,
    alt: "product thumbnail",
    width: "109",
    height: "122"
  })))), __jsx("button", {
    className: "thumb-up",
    onClick: prevPosHandler
  }, __jsx("i", {
    className: "fas fa-chevron-left"
  })), __jsx("button", {
    className: "thumb-down",
    onClick: nextPosHandler
  }, __jsx("i", {
    className: "fas fa-chevron-right"
  })));
}
// EXTERNAL MODULE: ./components/partials/product/thumb/thumb-two.jsx
var thumb_two = __webpack_require__(6295);
// EXTERNAL MODULE: ./components/partials/product/light-box.jsx
var light_box = __webpack_require__(8866);
// EXTERNAL MODULE: ./utils/data/carousel.js
var carousel = __webpack_require__(4943);
;// CONCATENATED MODULE: ./components/partials/product/media/media-one.jsx

var media_one_jsx = (external_react_default()).createElement;








function MediaOne(props) {
  const {
    product
  } = props;
  const {
    0: index,
    1: setIndex
  } = (0,external_react_.useState)(0);
  const {
    0: isOpen,
    1: setOpenState
  } = (0,external_react_.useState)(false);
  const {
    0: mediaRef,
    1: setMediaRef
  } = (0,external_react_.useState)(null);
  let lgImages = product.large_pictures ? product.large_pictures : product.pictures;
  (0,external_react_.useEffect)(() => {
    setIndex(0);
  }, [window.location.pathname]);
  (0,external_react_.useEffect)(() => {
    if (mediaRef !== null && mediaRef.current !== null && index >= 0) {
      mediaRef.current.$car.to(index, 300, true);
    }
  }, [index]);

  const setIndexHandler = mediaIndex => {
    if (mediaIndex !== index) {
      setIndex(mediaIndex);
    }
  };

  const changeRefHandler = carRef => {
    if (carRef.current !== undefined) {
      setMediaRef(carRef);
    }
  };

  const changeOpenState = openState => {
    setOpenState(openState);
  };

  const openLightBox = () => {
    setOpenState(true);
  };

  let events = {
    onTranslate: function (e) {
      if (!e.target) return;

      if (document.querySelector('.product-thumbs')) {
        document.querySelector('.product-thumbs').querySelector('.product-thumb.active').classList.remove('active');
        document.querySelector('.product-thumbs').querySelectorAll('.product-thumb')[e.item.index].classList.add('active');
      }
    }
  };
  return media_one_jsx((external_react_default()).Fragment, null, media_one_jsx("div", {
    className: "product-gallery pb-0 pg-vertical media-default",
    style: {
      top: "88px"
    }
  }, media_one_jsx("div", {
    className: "product-label-group"
  }, product.stock === 0 ? media_one_jsx("label", {
    className: "product-label label-out"
  }, "out") : "", product.is_top ? media_one_jsx("label", {
    className: "product-label label-top"
  }, "top") : "", product.is_new ? media_one_jsx("label", {
    className: "product-label label-new"
  }, "new") : "", product.discount ? media_one_jsx("label", {
    className: "product-label label-sale"
  }, "sale") : ""), media_one_jsx(owl_carousel/* default */.Z, {
    adClass: "product-single-carousel owl-theme owl-nav-inner",
    options: carousel/* mainSlider3 */.Hr,
    onChangeIndex: setIndexHandler,
    onChangeRef: changeRefHandler,
    events: events
  }, lgImages.map((image, index) => media_one_jsx("div", {
    key: image + '-' + index
  }, media_one_jsx(external_react_image_magnifiers_.Magnifier, {
    imageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    imageAlt: "magnifier",
    largeImageSrc: "https://d-themes.com/react_asset_api/riode" + image.url,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-image large-image"
  })))), media_one_jsx(custom_link/* default */.Z, {
    href: "#",
    className: "product-image-full",
    onClick: openLightBox
  }, media_one_jsx("i", {
    className: "d-icon-zoom"
  })), media_one_jsx(ThumbOne, {
    product: product,
    index: index,
    onChangeIndex: setIndexHandler
  }), media_one_jsx(thumb_two/* default */.Z, {
    product: product,
    index: index,
    onChangeIndex: setIndexHandler
  })), media_one_jsx(light_box/* default */.Z, {
    images: lgImages,
    isOpen: isOpen,
    changeOpenState: changeOpenState,
    index: index,
    product: product
  }));
}

/***/ })

};
;
exports.id = 6090;
exports.ids = [6090];
exports.modules = {

/***/ 6090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uw": function() { return /* binding */ cartActions; },
  "xT": function() { return /* binding */ cartSaga; },
  "ZP": function() { return /* binding */ cart; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(3643);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(584);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(5060);
// EXTERNAL MODULE: ./components/features/custom-link.jsx
var custom_link = __webpack_require__(8765);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/features/product/common/cart-popup.jsx
var __jsx = (external_react_default()).createElement;



function CartPopup(props) {
  const {
    product
  } = props;
  return __jsx("div", {
    className: "minipopup-area"
  }, __jsx("div", {
    className: "minipopup-box show",
    style: {
      top: "0"
    }
  }, __jsx("p", {
    className: "minipopup-title"
  }, "Successfully added."), __jsx("div", {
    className: "product product-purchased  product-cart mb-0"
  }, __jsx("figure", {
    className: "product-media pure-media"
  }, __jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, __jsx("img", {
    src: "https://d-themes.com/react_asset_api/riode" + product.pictures[0].url,
    alt: "product",
    width: "90",
    height: "90"
  }))), __jsx("div", {
    className: "product-detail"
  }, __jsx(custom_link/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "product-name"
  }, product.name), __jsx("span", {
    className: "price-box"
  }, __jsx("span", {
    className: "product-quantity"
  }, product.qty), __jsx("span", {
    className: "product-price"
  }, "$", (0,utils/* toDecimal */.YM)(product.price))))), __jsx("div", {
    className: "action-group d-flex"
  }, __jsx(custom_link/* default */.Z, {
    href: "/pages/cart",
    className: "btn btn-sm btn-outline btn-primary btn-rounded"
  }, "View Cart"), __jsx(custom_link/* default */.Z, {
    href: "/pages/checkout",
    className: "btn btn-sm btn-primary btn-rounded"
  }, "Check Out"))));
}
;// CONCATENATED MODULE: ./store/cart.js

var cart_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART: 'UPDATE_CART',
  REFRESH_STORE: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let tmpProduct = _objectSpread({}, action.payload.product);

      if (state.data.findIndex(item => item.name === action.payload.product.name) > -1) {
        let tmpData = state.data.reduce((acc, cur) => {
          if (cur.name === tmpProduct.name) {
            acc.push(_objectSpread(_objectSpread({}, cur), {}, {
              qty: parseInt(cur.qty) + parseInt(tmpProduct.qty)
            }));
          } else {
            acc.push(cur);
          }

          return acc;
        }, []);
        return _objectSpread(_objectSpread({}, state), {}, {
          data: tmpData
        });
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          data: [...state.data, tmpProduct]
        });
      }

    case actionTypes.REMOVE_FROM_CART:
      let cart = state.data.reduce((cartAcc, product) => {
        if (product.name !== action.payload.product.name) {
          cartAcc.push(product);
        }

        return cartAcc;
      }, []);
      return _objectSpread(_objectSpread({}, state), {}, {
        data: cart
      });

    case actionTypes.UPDATE_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: action.payload.products
      });

    case actionTypes.REFRESH_STORE:
      return initialState;

    default:
      return state;
  }
}

const cartActions = {
  addToCart: product => ({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product
    }
  }),
  removeFromCart: product => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      product
    }
  }),
  updateCart: products => ({
    type: actionTypes.UPDATE_CART,
    payload: {
      products
    }
  })
};
function* cartSaga() {
  yield (0,effects_.takeEvery)(actionTypes.ADD_TO_CART, function* saga(e) {
    (0,external_react_toastify_.toast)(cart_jsx(CartPopup, {
      product: e.payload.product
    }));
  });
}
const persistConfig = {
  keyPrefix: "riode-",
  key: "cart",
  storage: (storage_default())
};
/* harmony default export */ var cart = ((0,external_redux_persist_.persistReducer)(persistConfig, cartReducer));

/***/ })

};
;
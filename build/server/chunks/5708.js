exports.id = 5708;
exports.ids = [5708];
exports.modules = {

/***/ 5708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ wishlistActions; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3643);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  TOGGLE_WISHLIST: 'TOGGLE_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  REFRESH_STORE: 'REFRESH_STORE'
};
const initialState = {
  data: []
};

function wishlistReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_WISHLIST:
      let index = state.data.findIndex(item => item.name === action.payload.product.name);
      let tmpData = [...state.data];

      if (index === -1) {
        tmpData.push(action.payload.product);
      } else {
        tmpData.splice(index);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        data: tmpData
      });

    case actionTypes.REMOVE_FROM_WISHLIST:
      let wishlist = state.data.reduce((wishlistAcc, product) => {
        if (product.name !== action.payload.product.name) {
          wishlistAcc.push(product);
        }

        return wishlistAcc;
      }, []);
      return _objectSpread(_objectSpread({}, state), {}, {
        data: wishlist
      });

    case actionTypes.REFRESH_STORE:
      return initialState;

    default:
  }

  return state;
}

const wishlistActions = {
  toggleWishlist: product => ({
    type: actionTypes.TOGGLE_WISHLIST,
    payload: {
      product
    }
  }),
  removeFromWishlist: product => ({
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: {
      product
    }
  })
};
const persistConfig = {
  keyPrefix: "riode-",
  key: "wishlist",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, wishlistReducer));

/***/ })

};
;
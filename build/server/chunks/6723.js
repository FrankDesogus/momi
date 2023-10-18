exports.id = 6723;
exports.ids = [6723];
exports.modules = {

/***/ 6723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ modalActions; }
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3643);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(584);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  OPEN_QUICKVIEW: 'OPEN_QUICKVIEW',
  CLOSE_QUICKVIEW: 'CLOSE_QUICKVIEW',
  REFRESH_STORE: 'REFRESH_STORE'
};
const initialState = {
  type: 'video',
  openModal: false,
  quickview: false,
  singleSlug: ''
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_QUICKVIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        quickview: true,
        singleSlug: action.payload.slug
      });

    case actionTypes.CLOSE_QUICKVIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        quickview: false
      });

    case actionTypes.OPEN_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        singleSlug: action.payload.slug,
        openModal: true
      });

    case actionTypes.CLOSE_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        openModal: false
      });

    case actionTypes.REFRESH_STORE:
      return initialState;

    default:
      return state;
  }
}

const modalActions = {
  openModal: slug => ({
    type: actionTypes.OPEN_MODAL,
    payload: {
      slug
    }
  }),
  closeModal: modalType => ({
    type: actionTypes.CLOSE_MODAL,
    payload: {
      modalType
    }
  }),
  openQuickview: slug => ({
    type: actionTypes.OPEN_QUICKVIEW,
    payload: {
      slug
    }
  }),
  closeQuickview: () => ({
    type: actionTypes.CLOSE_QUICKVIEW
  })
};
const persistConfig = {
  keyPrefix: "riode-",
  key: "modal",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ __webpack_exports__["Z"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, modalReducer));

/***/ })

};
;
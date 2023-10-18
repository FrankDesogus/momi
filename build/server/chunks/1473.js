exports.id = 1473;
exports.ids = [1473];
exports.modules = {

/***/ 1473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Quantity; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Quantity(_ref) {
  let {
    qty = 1
  } = _ref,
      props = _objectWithoutProperties(_ref, ["qty"]);

  const {
    adClass = 'mr-2 input-group'
  } = props;
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(parseInt(qty));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setQuantity(qty);
  }, [props.product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    props.onChangeQty && props.onChangeQty(quantity);
  }, [quantity]);

  function minusQuantity() {
    if (quantity > 1) {
      setQuantity(parseInt(quantity) - 1);
    }
  }

  function plusQuantity() {
    if (quantity < props.max) {
      setQuantity(parseInt(quantity) + 1);
    }
  }

  function changeQty(e) {
    let newQty;

    if (e.currentTarget.value !== '') {
      newQty = Math.min(parseInt(e.currentTarget.value), props.max);
      newQty = Math.max(newQty, 1);
      setQuantity(newQty);
    }
  }

  return __jsx("div", {
    className: adClass
  }, __jsx("button", {
    className: "quantity-minus d-icon-minus",
    onClick: minusQuantity
  }), __jsx("input", {
    className: "quantity form-control",
    type: "number",
    min: "1",
    max: props.max,
    value: quantity,
    onChange: changeQty
  }), __jsx("button", {
    className: "quantity-plus d-icon-plus",
    onClick: plusQuantity
  }));
}

/***/ })

};
;
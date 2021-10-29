"use strict";
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 3170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8929);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Code({
  code
}) {
  const {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showCopy,
    1: setShowCopy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();

  const copyCode = codeStr => {
    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(codeStr);
    setCopied(true);
  };
  /* eslint-disable */


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    onMouseOver: () => {
      setShowCopy(true);
    },
    onMouseLeave: () => {
      setShowCopy(false);
      setCopied(false);
    },
    className: "relative",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "overflow-hidden overflow-x-auto rounded-md border-black border-3 my-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        onClick: () => {
          copyCode(code);
        },
        className: "p-2 select-all whitespace-nowrap",
        children: code
      })
    }), showCopy && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
      type: "button",
      className: "bg-black text-white absolute right-2 top-1 rounded mt-2 px-1 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",
      onClick: () => {
        copyCode(code);
      },
      children: copied ? t('copied') : t('copy')
    })]
  });
}

/***/ })

};
;
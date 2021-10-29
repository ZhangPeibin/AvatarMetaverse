"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DownloadModal)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4145);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function DownloadModal({
  onCancel,
  image
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(`common`);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Common__WEBPACK_IMPORTED_MODULE_1__.default, {
    onCancel: onCancel,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col items-center sm:flex-row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "w-full flex justify-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
            alt: "notion avatar",
            src: image,
            className: "w-64"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "h-full flex-col flex sm:justify-between mt-4 sm:mt-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "text-xl",
            children: ["\uD83C\uDF89 ", t(`modalTitle`)]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: " text-gray-500 mt-2",
            children: t(`modalHint`)
          })]
        })]
      })
    })
  });
}

/***/ })

};
;
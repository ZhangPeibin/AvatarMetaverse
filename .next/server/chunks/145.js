"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 4145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Modal({
  onCancel,
  children,
  onConfirm
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('common');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "fixed z-10 inset-0",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-56 text-center sm:block sm:p-0",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "absolute inset-0 bg-black bg-opacity-75 transition-opacity",
        "aria-hidden": "true"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
        "aria-hidden": "true",
        children: "\u200B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
        children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
          children: [onConfirm && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
            onClick: onConfirm,
            type: "button",
            className: "mt-3 w-full font-bold inline-flex justify-center rounded-md border-black border-3 shadow-sm px-4 py-2 bg-black text-white text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:mt-0 sm:ml-3 sm:w-auto",
            children: t('modalConfirm')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
            onClick: onCancel,
            type: "button",
            className: "mt-3 w-full font-bold inline-flex justify-center rounded-md border-black border-3 shadow-sm px-4 py-2 bg-white text-base hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:mt-0 sm:ml-3 sm:w-auto",
            children: t('modalCancel')
          })]
        })]
      })]
    })
  });
}

/***/ })

};
;
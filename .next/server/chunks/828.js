"use strict";
exports.id = 828;
exports.ids = [828];
exports.modules = {

/***/ 3828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmbedModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4145);
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3170);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const apiType = {
  png: `img`,
  svg: `svg`
};
const formatType = {
  png: `PNG`,
  svg: `SVG`
};
function EmbedModal({
  onCancel,
  config,
  imageType
}) {
  const {
    0: url,
    1: setUrl
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(``);
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setUrl(`${process.env.NEXT_PUBLIC_URL}/api/${apiType[imageType]}/${btoa(JSON.stringify(config))}`);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Common__WEBPACK_IMPORTED_MODULE_2__.default, {
    onCancel: onCancel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "my-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
          className: "text-xl uppercase",
          children: [formatType[imageType], " URL"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Code__WEBPACK_IMPORTED_MODULE_3__.default, {
          code: url
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "my-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
          className: "text-xl",
          children: `<img>`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Code__WEBPACK_IMPORTED_MODULE_3__.default, {
          code: `<img src="${url}" alt="notion avatar">`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "my-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
          className: "text-xl",
          children: "Markdown"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Code__WEBPACK_IMPORTED_MODULE_3__.default, {
          code: `![notion avatar](${url})`
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: "mt-2 text-gray-500",
        children: ["*", t(`downloadTip`)]
      })]
    })
  });
}

/***/ })

};
;
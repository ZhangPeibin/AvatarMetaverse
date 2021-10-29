"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 1181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6577);
/* harmony import */ var _decoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(980);
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Header(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex py-5 px-5 sm:px-16 md:px-32",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__.default, {
        src: "/logo.gif",
        alt: "Notion Avatar Logo",
        width: 50,
        height: 50
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        className: "text-lg",
        children: ["NFT", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), "Avatar Metaverse"]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "absolute top-4  right-64",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Account__WEBPACK_IMPORTED_MODULE_2__.default, {
        address: props.address,
        localProvider: props.localProvider,
        userSigner: props.userSigner,
        mainnetProvider: props.mainnetProvider,
        price: props.price,
        web3Modal: props.web3Modal,
        loadWeb3Modal: props.loadWeb3Modal,
        logoutOfWeb3Modal: props.logoutOfWeb3Modal,
        blockExplorer: props.blockExplorer,
        minimized: undefined
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_decoration__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: "absolute top-0 right-0 w-24 sm:w-28 md:w-36"
    })]
  });
}

/***/ })

};
;
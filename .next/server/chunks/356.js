"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 7356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Address)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7129);
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_blockies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var eth_hooks_dapps_ens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2301);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



 // changed value={address} to address={address}

/*
  ~ What it does? ~

  Displays an address with a blockie image and option to copy address

  ~ How can I use? ~

  <Address
    address={address}
    ensProvider={mainnetProvider}
    blockExplorer={blockExplorer}
    fontSize={fontSize}
  />

  ~ Features ~

  - Provide ensProvider={mainnetProvider} and your address will be replaced by ENS name
              (ex. "0xa870" => "user.eth")
  - Provide blockExplorer={blockExplorer}, click on address and get the link
              (ex. by default "https://etherscan.io/" or for xdai "https://blockscout.com/poa/xdai/")
  - Provide fontSize={fontSize} to change the size of address text
*/



const {
  Text
} = antd__WEBPACK_IMPORTED_MODULE_0__.Typography;

const blockExplorerLink = (address, blockExplorer) => `${blockExplorer || "https://etherscan.io/"}${"address/"}${address}`;

function Address(props) {
  const address = props.value || props.address;
  const ens = (0,eth_hooks_dapps_ens__WEBPACK_IMPORTED_MODULE_3__/* .useLookupAddress */ .h)(props.ensProvider, address);

  if (!address) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Skeleton, {
        avatar: true,
        paragraph: {
          rows: 1
        }
      })
    });
  }

  let displayAddress = address.substr(0, 6) + "..." + address.substr(-4);
  const ensSplit = ens && ens.split(".");
  const validEnsCheck = ensSplit && ensSplit[ensSplit.length - 1] === "eth";

  if (validEnsCheck) {
    displayAddress = ens;
  } else if (props.size === "short") {
    displayAddress += "..." + address.substr(-4);
  } else if (props.size === "long") {
    displayAddress = address;
  }

  const etherscanLink = blockExplorerLink(address, props.blockExplorer);

  if (props.minimized) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
      style: {
        verticalAlign: "middle"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        style: {
          color: "#222222"
        },
        target: "_blank",
        href: etherscanLink,
        rel: "noopener noreferrer",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_blockies__WEBPACK_IMPORTED_MODULE_2___default()), {
          seed: address.toLowerCase(),
          size: 8,
          scale: 2
        })
      })
    });
  }

  let text;

  if (props.onChange) {
    text = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Text, {
      editable: {
        onChange: props.onChange
      },
      copyable: {
        text: address
      },
      type: "secondary",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
        target: "_blank",
        href: etherscanLink,
        rel: "noopener noreferrer",
        children: [displayAddress, "34"]
      })
    });
  } else {
    text = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Text, {
      type: "warning",
      copyable: {
        text: address
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        target: "_blank",
        href: etherscanLink,
        rel: "noopener noreferrer",
        children: displayAddress
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
    style: {
      color: "#222222",
      paddingLeft: 5,
      fontSize: props.fontSize ? props.fontSize : 28
    },
    children: displayAddress
  });
}

/***/ })

};
;
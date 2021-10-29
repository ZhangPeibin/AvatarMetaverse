"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 3682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Di": () => (/* binding */ AvatarStyleCount),
/* harmony export */   "vF": () => (/* binding */ CompatibleAgents),
/* harmony export */   "M4": () => (/* binding */ PalettePreset),
/* harmony export */   "$h": () => (/* binding */ DefaultBackgroundConfig),
/* harmony export */   "Lq": () => (/* binding */ ShapeStyleMapping),
/* harmony export */   "Pe": () => (/* binding */ SVGFilter),
/* harmony export */   "Rp": () => (/* binding */ INFURA_ID),
/* harmony export */   "V4": () => (/* binding */ BLOCKNATIVE_DAPPID),
/* harmony export */   "g5": () => (/* binding */ NETWORKS),
/* harmony export */   "IB": () => (/* binding */ NETWORK)
/* harmony export */ });
/* unused harmony export ETHERSCAN_KEY */
const AvatarStyleCount = {
  face: 10,
  nose: 10,
  mouth: 10,
  eyes: 10,
  eyebrows: 10,
  glasses: 10,
  hair: 30,
  accessories: 10,
  details: 10,
  beard: 10
};
const CompatibleAgents = ['quark', 'micromessenger', 'weibo', 'douban'];
const PalettePreset = ['#fa541c', '#faad14', '#fadb14', '#a0d911', '#52c41a', '#1890ff', '#2f54eb', '#722ed1', '#eb2f96', '#bfbfbf'];
const DefaultBackgroundConfig = {
  color: 'rgba(255, 0, 0, 0)',
  shape: 'none'
};
const ShapeStyleMapping = {
  circle: 'rounded-full',
  square: 'rounded-lg',
  none: ''
};
const SVGFilter = `<defs>
  <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
    <feMorphology operator="dilate" radius="20 20" in="SourceAlpha" result="morphology"/>
    <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
    <feComposite in="flood" in2="morphology" operator="in" result="composite"/>
    <feMerge result="merge">
          <feMergeNode in="composite" result="mergeNode"/>
      <feMergeNode in="SourceGraphic" result="mergeNode1"/>
      </feMerge>
  </filter>
</defs>`; // MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad"; // MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey

const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8"; // BLOCKNATIVE ID FOR Notify.js:

const BLOCKNATIVE_DAPPID = "0b58206a-f3c0-4701-a62f-73c7243e8c77";
const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://localhost:8545"
  },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://etherscan.io/"
  },
  kovan: {
    name: "kovan",
    color: "#7003DD",
    chainId: 42,
    rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://kovan.etherscan.io/",
    faucet: "https://gitter.im/kovan-testnet/faucet" // https://faucet.kovan.network/

  },
  rinkeby: {
    name: "rinkeby",
    color: "#e0d068",
    chainId: 4,
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    faucet: "https://faucet.rinkeby.io/",
    blockExplorer: "https://rinkeby.etherscan.io/"
  },
  ropsten: {
    name: "ropsten",
    color: "#F60D09",
    chainId: 3,
    faucet: "https://faucet.ropsten.be/",
    blockExplorer: "https://ropsten.etherscan.io/",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`
  },
  goerli: {
    name: "goerli",
    color: "#0975F6",
    chainId: 5,
    faucet: "https://goerli-faucet.slock.it/",
    blockExplorer: "https://goerli.etherscan.io/",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`
  },
  xdai: {
    name: "xdai",
    color: "#48a9a6",
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://dai.poa.network",
    faucet: "https://xdai-faucet.top/",
    blockExplorer: "https://blockscout.com/poa/xdai/"
  },
  matic: {
    name: "matic",
    color: "#2bbdf7",
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://explorer-mainnet.maticvigil.com//"
  },
  mumbai: {
    name: "mumbai",
    color: "#92D9FA",
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://mumbai-explorer.matic.today/"
  },
  localArbitrum: {
    name: "localArbitrum",
    color: "#50a0ea",
    chainId: 153869338190755,
    blockExplorer: "",
    rpcUrl: `http://localhost:8547`
  },
  localArbitrumL1: {
    name: "localArbitrumL1",
    color: "#50a0ea",
    chainId: 44010,
    blockExplorer: "",
    rpcUrl: `http://localhost:7545`
  },
  rinkebyArbitrum: {
    name: "Arbitrum Testnet",
    color: "#50a0ea",
    chainId: 421611,
    blockExplorer: "https://rinkeby-explorer.arbitrum.io/#/",
    rpcUrl: `https://rinkeby.arbitrum.io/rpc`
  },
  arbitrum: {
    name: "Arbitrum",
    color: "#50a0ea",
    chainId: 42161,
    blockExplorer: "https://explorer.arbitrum.io/#/",
    rpcUrl: `https://arb1.arbitrum.io/rpc`,
    gasPrice: 0
  },
  kovanOptimism: {
    name: "kovanOptimism",
    color: "#f01a37",
    chainId: 69,
    blockExplorer: "https://kovan-optimistic.etherscan.io/",
    rpcUrl: `https://kovan.optimism.io`,
    gasPrice: 0
  },
  optimism: {
    name: "optimism",
    color: "#f01a37",
    chainId: 10,
    blockExplorer: "https://optimistic.etherscan.io/",
    rpcUrl: `https://mainnet.optimism.io`
  },
  localAvalanche: {
    name: "localAvalanche",
    color: "#666666",
    chainId: 43112,
    blockExplorer: "",
    rpcUrl: `http://localhost:9650/ext/bc/C/rpc`,
    gasPrice: 225000000000
  },
  fujiAvalanche: {
    name: "fujiAvalanche",
    color: "#666666",
    chainId: 43113,
    blockExplorer: "https://cchain.explorer.avax-test.network/",
    rpcUrl: `https://api.avax-test.network/ext/bc/C/rpc`,
    gasPrice: 225000000000
  },
  mainnetAvalanche: {
    name: "mainnetAvalanche",
    color: "#666666",
    chainId: 43114,
    blockExplorer: "https://cchain.explorer.avax.network/",
    rpcUrl: `https://api.avax.network/ext/bc/C/rpc`,
    gasPrice: 25000000000
  },
  testnetHarmony: {
    name: "Harmony Testnet",
    color: "#00b0ef",
    chainId: 1666700000,
    blockExplorer: "https://explorer.pops.one/",
    rpcUrl: `https://api.s0.b.hmny.io`,
    gasPrice: 1000000000
  },
  mainnetHarmony: {
    name: "Harmony Mainnet",
    color: "#00b0ef",
    chainId: 1666600000,
    blockExplorer: "https://explorer.harmony.one/",
    rpcUrl: `https://api.harmony.one`,
    gasPrice: 1000000000
  }
}; // @ts-ignore

const NETWORK = chainId => {
  for (const n in NETWORKS) {
    // @ts-ignore
    if (NETWORKS[n].chainId === chainId) {
      // @ts-ignore
      return NETWORKS[n];
    }
  }
};

/***/ }),

/***/ 7968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaletteModal)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3682);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4145);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function PaletteModal({
  onSelect,
  onCancel,
  backgroundConfig = _const__WEBPACK_IMPORTED_MODULE_1__/* .DefaultBackgroundConfig */ .$h
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const {
    0: bgShape,
    1: setShape
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(backgroundConfig.shape);
  const {
    0: bgColor,
    1: setColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(backgroundConfig.color);

  const setBackgroundShape = shape => {
    if (shape === bgShape) {
      setShape('none');
      return;
    }

    setShape(shape);
  };

  const handleColorChange = e => {
    setColor(e.target.value);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Common__WEBPACK_IMPORTED_MODULE_3__.default, {
    onCancel: onCancel,
    onConfirm: () => {
      onSelect({
        shape: bgShape,
        color: bgColor
      });
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "text-xl bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        className: "py-4 w-full",
        children: t('chooseShape')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          type: "button",
          onClick: () => {
            setBackgroundShape('square');
          },
          className: `bg-gray-400 rounded w-8 h-8 focus:outline-none mr-6 ${bgShape === 'square' && 'ring-2 ring-offset-2 ring-gray-400'}`,
          children: ' '
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          type: "button",
          onClick: () => {
            setBackgroundShape('circle');
          },
          className: `bg-gray-400 rounded-full w-8 h-8 focus:outline-none ${bgShape === 'circle' && 'ring-2 ring-offset-2 ring-gray-400'}`,
          children: ' '
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
        className: "py-4",
        children: t('paletteTitle')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "grid gap-2 p-1 sm:gap-4 justify-items-center justify-between grid-rows-2 grid-cols-5",
        children: _const__WEBPACK_IMPORTED_MODULE_1__/* .PalettePreset.map */ .M4.map((color, index) =>
        /*#__PURE__*/

        /* eslint-disable */
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          type: "button",
          onClick: () => {
            setColor(color);
          },
          className: "w-12 h-10 sm:w-20 sm:h-12 rounded outline-none select-none border-3 border-solid border-black focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-gray-50",
          style: {
            background: color
          },
          children: ' '
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
          className: "py-4",
          children: t('customColor')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          defaultValue: backgroundConfig.color,
          onChange: handleColorChange,
          className: "ml-2 border-gray-400 border-1 rounded bg-gray-2=100",
          type: "color"
        })]
      })]
    })
  });
}

/***/ })

};
;
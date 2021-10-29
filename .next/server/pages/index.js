(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,916,616,176,293,450,194,682,572,829,770,210];
exports.modules = {

/***/ 9555:
/***/ ((module) => {

const ERC20ABI = [{
  constant: true,
  inputs: [],
  name: "name",
  outputs: [{
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "_spender",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "totalSupply",
  outputs: [{
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "_from",
    type: "address"
  }, {
    name: "_to",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "decimals",
  outputs: [{
    name: "",
    type: "uint8"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    name: "balance",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "symbol",
  outputs: [{
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "_to",
    type: "address"
  }, {
    name: "_value",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [{
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }, {
    name: "_spender",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  payable: true,
  stateMutability: "payable",
  type: "fallback"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    name: "value",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    name: "from",
    type: "address"
  }, {
    indexed: true,
    name: "to",
    type: "address"
  }, {
    indexed: false,
    name: "value",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}];
const DAIABI = [{
  inputs: [{
    internalType: "uint256",
    name: "chainId_",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "src",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "guy",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: true,
  inputs: [{
    indexed: true,
    internalType: "bytes4",
    name: "sig",
    type: "bytes4"
  }, {
    indexed: true,
    internalType: "address",
    name: "usr",
    type: "address"
  }, {
    indexed: true,
    internalType: "bytes32",
    name: "arg1",
    type: "bytes32"
  }, {
    indexed: true,
    internalType: "bytes32",
    name: "arg2",
    type: "bytes32"
  }, {
    indexed: false,
    internalType: "bytes",
    name: "data",
    type: "bytes"
  }],
  name: "LogNote",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "src",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "dst",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}, {
  constant: true,
  inputs: [],
  name: "DOMAIN_SEPARATOR",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "PERMIT_TYPEHASH",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }, {
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "usr",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "usr",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "burn",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "decimals",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "guy",
    type: "address"
  }],
  name: "deny",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "usr",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "mint",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "src",
    type: "address"
  }, {
    internalType: "address",
    name: "dst",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "move",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "nonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "holder",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "nonce",
    type: "uint256"
  }, {
    internalType: "uint256",
    name: "expiry",
    type: "uint256"
  }, {
    internalType: "bool",
    name: "allowed",
    type: "bool"
  }, {
    internalType: "uint8",
    name: "v",
    type: "uint8"
  }, {
    internalType: "bytes32",
    name: "r",
    type: "bytes32"
  }, {
    internalType: "bytes32",
    name: "s",
    type: "bytes32"
  }],
  name: "permit",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "usr",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "pull",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "usr",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "push",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "guy",
    type: "address"
  }],
  name: "rely",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "totalSupply",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "dst",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    internalType: "address",
    name: "src",
    type: "address"
  }, {
    internalType: "address",
    name: "dst",
    type: "address"
  }, {
    internalType: "uint256",
    name: "wad",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "version",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: true,
  inputs: [{
    internalType: "address",
    name: "",
    type: "address"
  }],
  name: "wards",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}]; // Mainnet DAI, Optimism and Arbitrium Rollup Contracts with local addresses

module.exports = {
  1: {
    contracts: {
      DAI: {
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        abi: DAIABI
      },
      UNI: {
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        abi: ERC20ABI
      }
    }
  }
};

/***/ }),

/***/ 5726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6577);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Footer() {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)(`common`);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("footer", {
    className: "flex flex-col items-center pb-4",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: "/icon/line.svg",
      width: "125",
      height: "54"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "flex justify-center mt-10 text-lg",
      children: t(`coffee`)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "text-gray-500 mt-3 px-6 text-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
        className: "hover:underline",
        children: "BSC Address:"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "text-gray-500 px-6 text-center",
      children: `0x53A4D41194054f08a2B9D7301E4936F7F8dd334A `
    })]
  });
}

/***/ }),

/***/ 4035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/pages/components/Header/index.tsx
var Header = __webpack_require__(1181);
// EXTERNAL MODULE: ./src/pages/components/Footer/index.tsx
var Footer = __webpack_require__(5726);
// EXTERNAL MODULE: ./src/pages/components/AvatarEditor/index.tsx
var AvatarEditor = __webpack_require__(8050);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/const.ts
var src_const = __webpack_require__(3682);
;// CONCATENATED MODULE: external "web3modal"
const external_web3modal_namespaceObject = require("web3modal");
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_namespaceObject);
;// CONCATENATED MODULE: ./src/web3Modal.ts

function obtainWeb3Modal() {
  const web3Modal = new (external_web3modal_default())({
    network: "mainnet",
    // Optional. If using WalletConnect on xDai, change network to "xdai" and add RPC info below for xDai chain.
    cacheProvider: true,
    // optional
    theme: "dark",
    // optional. Change to "dark" for a dark theme.
    providerOptions: {// walletconnect: {
      //   package: WalletConnectProvider, // required
      //   options: {
      //     bridge: "https://polygon.bridge.walletconnect.org",
      //     infuraId: INFURA_ID,
      //     rpc: {
      //       1: `https://mainnet.infura.io/v3/${INFURA_ID}`, // mainnet // For more WalletConnect providers: https://docs.walletconnect.org/quick-start/dapps/web3-provider#required
      //       42: `https://kovan.infura.io/v3/${INFURA_ID}`,
      //       100: "https://dai.poa.network", // xDai
      //     },
      //   },
      // },
      // portis: {
      //   display: {
      //     logo: "https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",
      //     name: "Portis",
      //     description: "Connect to Portis App",
      //   },
      //   package: Portis,
      //   options: {
      //     id: "6255fb2b-58c8-433b-a2c9-62098c05ddc9",
      //   },
      // },
      // fortmatic: {
      //   package: Fortmatic, // required
      //   options: {
      //     key: "pk_live_5A7C91B2FC585A17", // required
      //   },
      // },
    }
  });
  return web3Modal;
}
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(4879);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
// EXTERNAL MODULE: ../../node_modules/eth-hooks/index.js + 15 modules
var eth_hooks = __webpack_require__(269);
;// CONCATENATED MODULE: ./src/useUserProviderAndSigner.ts





const syncBurnerKeyFromStorage = () => {
  if (false) {}
};
/**
 *  Gets user provider/signer from injected provider or local provider
 *  Use your injected provider from 🦊 Metamask
 *  If you don't have it then instantly generate a 🔥 burner wallet from a local provider
 *
 ~ Features ~
 - Specify the injected provider from Metamask
 - Specify the local provider
 - Usage examples:
 const tx = Transactor(userSigner, gasPrice)
 * @param injectedProviderOrSigner (TEthersProviderOrSigner) :: injected provider/signer from metamask etc..
 * @param localProvider (TEthersProvider) local provider to generate a burner wallet from
 * @returns (TProviderAndSigner)
 */


const useUserProviderAndSigner = (injectedProviderOrSigner, localProvider) => {
  const {
    0: signer,
    1: setSigner
  } = (0,external_react_.useState)();
  const {
    0: provider,
    1: setProvider
  } = (0,external_react_.useState)();
  const {
    0: providerNetwork,
    1: setProviderNetwork
  } = (0,external_react_.useState)(); // @ts-ignore

  const burnerSigner = (0,eth_hooks/* useBurnerSigner */.mL)(localProvider);
  (0,external_react_.useMemo)(() => {
    if (injectedProviderOrSigner) {
      console.log('🦊 Using injected provider');
      void parseProviderOrSigner(injectedProviderOrSigner).then(result => {
        if (result != null) setSigner(result.signer);
      });
    } else if (!localProvider) {
      setSigner(undefined);
    } else {
      syncBurnerKeyFromStorage();
      console.log('🔥 Using burner signer', burnerSigner); // @ts-ignore

      setSigner(burnerSigner);
    }
  }, [injectedProviderOrSigner, localProvider, burnerSigner]);
  (0,external_react_.useMemo)(() => {
    if (signer) {
      const result = parseProviderOrSigner(signer);
      void result.then(r => {
        setProvider(r.provider);
        setProviderNetwork(r.providerNetwork);
      });
    }
  }, [signer]);
  return {
    signer,
    provider,
    providerNetwork
  };
};
const parseProviderOrSigner = async providerOrSigner => {
  let signer = undefined;
  let provider;
  let providerNetwork;

  if (providerOrSigner && (providerOrSigner instanceof providers_namespaceObject.JsonRpcProvider || providerOrSigner instanceof providers_namespaceObject.Web3Provider)) {
    const accounts = await providerOrSigner.listAccounts();

    if (accounts && accounts.length > 0) {
      // @ts-ignore
      signer = providerOrSigner.getSigner();
    } // @ts-ignore


    provider = providerOrSigner;
    providerNetwork = await providerOrSigner.getNetwork();
  }

  if (!signer && providerOrSigner instanceof external_ethers_.Signer) {
    signer = providerOrSigner;
    provider = signer.provider;
    providerNetwork = provider && (await provider.getNetwork());
  }

  return {
    signer,
    provider,
    providerNetwork
  };
};
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: external "bnc-notify"
const external_bnc_notify_namespaceObject = require("bnc-notify");
var external_bnc_notify_default = /*#__PURE__*/__webpack_require__.n(external_bnc_notify_namespaceObject);
;// CONCATENATED MODULE: ./src/Transactor.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  ethers
} = __webpack_require__(4879); // this should probably just be renamed to "notifier"
// it is basically just a wrapper around BlockNative's wonderful Notify.js
// https://docs.blocknative.com/notify


const callbacks = {};
const DEBUG = true;
function Transactor(providerOrSigner, gasPrice, etherscan) {
  if (typeof providerOrSigner !== "undefined") {
    // eslint-disable-next-line consistent-return
    return async (tx, callback) => {
      let signer;
      let network;
      let provider;

      if (ethers.Signer.isSigner(providerOrSigner) === true) {
        provider = providerOrSigner.provider;
        signer = providerOrSigner;
        network = providerOrSigner.provider && (await providerOrSigner.provider.getNetwork());
      } else if (providerOrSigner._isProvider) {
        provider = providerOrSigner;
        signer = providerOrSigner.getSigner();
        network = await providerOrSigner.getNetwork();
      }

      console.log("network", network);
      var options = null;
      var notify = null;
      options = {
        dappId: src_const/* BLOCKNATIVE_DAPPID */.V4,
        // GET YOUR OWN KEY AT https://account.blocknative.com
        system: "ethereum",
        networkId: network.chainId,
        // darkMode: Boolean, // (default: false)
        transactionHandler: txInformation => {
          if (DEBUG) console.log("HANDLE TX", txInformation);
          const possibleFunction = callbacks[txInformation.transaction.hash];

          if (typeof possibleFunction === "function") {
            possibleFunction(txInformation.transaction);
          }
        }
      };
      notify = external_bnc_notify_default()(options);
      let etherscanNetwork = "";

      if (network.name && network.chainId > 1) {
        etherscanNetwork = network.name + ".";
      }

      let etherscanTxUrl = "https://" + etherscanNetwork + "etherscan.io/tx/";

      if (network.chainId === 100) {
        etherscanTxUrl = "https://blockscout.com/poa/xdai/tx/";
      }

      try {
        let result;

        if (tx instanceof Promise) {
          if (DEBUG) console.log("AWAITING TX", tx);
          result = await tx;
        } else {
          if (!tx.gasPrice) {
            tx.gasPrice = gasPrice || ethers.utils.parseUnits("4.1", "gwei");
          }

          if (!tx.gasLimit) {
            tx.gasLimit = ethers.utils.hexlify(120000);
          }

          if (DEBUG) console.log("RUNNING TX", tx);
          result = await signer.sendTransaction(tx);
        }

        if (DEBUG) console.log("RESULT:", result); // console.log("Notify", notify);

        if (callback) {
          callbacks[result.hash] = callback;
        } // if it is a valid Notify.js network, use that, if not, just send a default notification


        if (notify && [1, 3, 4, 5, 42, 100].indexOf(network.chainId) >= 0) {
          const {
            emitter
          } = notify.hash(result.hash);
          emitter.on("all", transaction => {
            return {
              onclick: () => window.open((etherscan || etherscanTxUrl) + transaction.hash)
            };
          });
        } else {
          external_antd_.notification.info({
            message: "Local Transaction Sent",
            description: result.hash,
            placement: "bottomRight"
          }); // on most networks BlockNative will update a transaction handler,
          // but locally we will set an interval to listen...

          if (callback) {
            const txResult = await tx;
            const listeningInterval = setInterval(async () => {
              console.log("CHECK IN ON THE TX", txResult, provider);
              const currentTransactionReceipt = await provider.getTransactionReceipt(txResult.hash);

              if (currentTransactionReceipt && currentTransactionReceipt.confirmations) {
                callback(_objectSpread(_objectSpread({}, txResult), currentTransactionReceipt));
                clearInterval(listeningInterval);
              }
            }, 500);
          }
        }

        if (typeof result.wait === "function") {
          await result.wait();
        }

        return result;
      } catch (e) {
        if (DEBUG) console.log(e); // Accounts for Metamask and default signer on all networks

        let message = e.data && e.data.message ? e.data.message : e.error && JSON.parse(JSON.stringify(e.error)).body ? JSON.parse(JSON.parse(JSON.stringify(e.error)).body).error.message : e.data ? e.data : JSON.stringify(e);

        if (!e.error && e.message) {
          message = e.message;
        }

        console.log("Attempt to clean up:", message);

        try {
          let obj = JSON.parse(message);

          if (obj && obj.body) {
            let errorObj = JSON.parse(obj.body);

            if (errorObj && errorObj.error && errorObj.error.message) {
              message = errorObj.error.message;
            }
          }
        } catch (e) {//ignore
        }

        external_antd_.notification.error({
          message: "Transaction Error",
          description: message
        });

        if (callback && typeof callback === "function") {
          callback(e);
        }
      }
    };
  }
}
;// CONCATENATED MODULE: ./src/contracts/hardhat_contracts.json
const hardhat_contracts_namespaceObject = JSON.parse('{"80001":{"mumbai":{"name":"mumbai","chainId":"80001","contracts":{"AvatarNFT":{"address":"0x77702659F04679201070B843a9CB08ef9E4c2d4b","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}}}}}');
// EXTERNAL MODULE: ./src/contracts/external_contracts.js
var external_contracts = __webpack_require__(9555);
var external_contracts_default = /*#__PURE__*/__webpack_require__.n(external_contracts);
;// CONCATENATED MODULE: external "nft.storage"
const external_nft_storage_namespaceObject = require("nft.storage");
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(4333);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/index.tsx
function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const {
  ethers: pages_ethers
} = __webpack_require__(4879);

const client = new external_nft_storage_namespaceObject.NFTStorage({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4YjFDRUJDMDc5Mzk4NWNGNzM2NzNiNDI1MTVlOTQ0NzM4MmM3RGYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNTQ1NjMxMDQ3NiwibmFtZSI6ImF2YXRhciJ9.Z6c19_0kTBDYYji-GrMZVAogvTgcXfYuUg7wVLolLvQ"
});
const targetNetwork = src_const/* NETWORKS.mumbai */.g5.mumbai; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)
// 😬 Sorry for all the console logging

const pages_DEBUG = true;
const NETWORKCHECK = true;
const scaffoldEthProvider = new pages_ethers.providers.StaticJsonRpcProvider("https://rpc.scaffoldeth.io:48544");
const poktMainnetProvider = new pages_ethers.providers.StaticJsonRpcProvider("https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406");
const mainnetInfura = new pages_ethers.providers.StaticJsonRpcProvider("https://mainnet.infura.io/v3/" + src_const/* INFURA_ID */.Rp);
const localProviderUrl = targetNetwork.rpcUrl; // as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env

const localProviderUrlFromEnv = localProviderUrl;
if (pages_DEBUG) console.log("🏠 Connecting to provider:", localProviderUrlFromEnv);
let web3Modal;
let localProvider = new pages_ethers.providers.StaticJsonRpcProvider(localProviderUrlFromEnv);

const Home = () => {
  const mainnetProvider = poktMainnetProvider && poktMainnetProvider._isProvider ? poktMainnetProvider : scaffoldEthProvider && scaffoldEthProvider._network ? scaffoldEthProvider : mainnetInfura;
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(`common`);
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)();
  const {
    0: injectedProvider,
    1: setInjectedProvider
  } = (0,external_react_.useState)();
  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider); // @ts-ignore

  const userSigner = userProviderAndSigner.signer;
  const contractConfig = {
    deployedContracts: hardhat_contracts_namespaceObject || {},
    externalContracts: (external_contracts_default()) || {}
  };
  const gasPrice = (0,eth_hooks/* useGasPrice */.Fh)(targetNetwork, "fast");
  const transactor = Transactor(userSigner, gasPrice); // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  // @ts-ignore

  const localChainId = localProvider && localProvider._network && localProvider._network.chainId;
  const selectedChainId = userSigner && userSigner.provider // @ts-ignore
  && userSigner.provider._network // @ts-ignore
  && userSigner.provider._network.chainId;
  console.log("localChainId:" + localChainId);
  console.log("_network:" + localProvider._network);
  const writeContracts = (0,eth_hooks/* useContractLoader */.vA)(userSigner, contractConfig, localChainId); // @ts-ignore

  (0,external_react_.useEffect)(() => {
    async function getWalletAddress() {
      console.log(userSigner);

      if (userSigner) {
        // @ts-ignore
        const newAddress = await userSigner.getAddress();
        console.log(newAddress); // @ts-ignore

        setAddress(newAddress);
      }
    }

    getWalletAddress();
  }, [userSigner]);

  const logoutOfWeb3Modal = async () => {
    // @ts-ignore
    await web3Modal.clearCachedProvider(); // @ts-ignore

    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
      // @ts-ignore
      await injectedProvider.provider.disconnect();
    }

    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const loadWeb3Modal = (0,external_react_.useCallback)(async () => {
    // await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const p = new pages_ethers.providers.Web3Provider(provider);
    setInjectedProvider(p);
    provider.on("chainChanged", chainId => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new pages_ethers.providers.Web3Provider(provider));
    });
    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new pages_ethers.providers.Web3Provider(provider));
    });
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
  }, [setInjectedProvider]);
  (0,external_react_.useEffect)(() => {
    if (!web3Modal) {
      web3Modal = obtainWeb3Modal();
    }

    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);
  let networkDisplay;

  if (NETWORKCHECK && localChainId && selectedChainId && localChainId !== selectedChainId) {
    const networkSelected = (0,src_const/* NETWORK */.IB)(selectedChainId);
    const networkLocal = (0,src_const/* NETWORK */.IB)(localChainId);

    if (selectedChainId === 1337 && localChainId === 80001) {
      networkDisplay = /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          zIndex: 2,
          position: "absolute",
          right: 130,
          top: 60,
          padding: 16
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Alert, {
          message: "Wrong Network ID",
          type: "error",
          showIcon: true,
          description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["You have ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "chain id 1337"
            }), " for localhost and you need to change it to ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "31337"
            }), " to work with HardHat.", /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "(MetaMask -> Settings -> Networks -> Chain ID -> 31337)"
            })]
          }),
          closable: false
        })
      });
    } else {
      networkDisplay = /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          zIndex: 2,
          position: "absolute",
          top: 60,
          right: 130
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Alert, {
          showIcon: true,
          message: "Wrong Network",
          type: "error",
          description: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["You have ", /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: networkSelected && networkSelected.name
            }), " selected and you need to be on ", networkLocal.name]
          }),
          closable: false
        })
      });
    }
  } else {
    networkDisplay = /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        zIndex: 2,
        position: "absolute",
        top: 40,
        right: 170,
        padding: 16,
        color: targetNetwork.color
      },
      children: targetNetwork.name
    });
  } // @ts-ignore


  const mintingNFT = async imageURL => {
    const file = (0,utils/* blobToFile */.hl)((0,utils/* dataURItoBlob */.OP)(imageURL), `notion-avatar-${new Date().getTime()}.png`);
    const metadata = await client.store({
      name: `avatar`,
      description: 'Pin is not delicious beef!',
      image: file
    });
    console.log(metadata);
    const URI = metadata.url; // @ts-ignore

    const tx = await transactor(writeContracts.AvatarNFT.mint(address, URI), update => {
      console.log("📡 Transaction Update:", update);

      if (update && (update.status === "confirmed" || update.status === 1)) {
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(" ⛽️ " + update.gasUsed + "/" + (update.gasLimit || update.gas) + " @ " + parseFloat(update.gasPrice) / 1000000000 + " gwei");
      }
    });

    if (tx) {
      const receipt = await tx.wait();
      let tokenId = null;

      for (const event of receipt.events) {
        if (event.event !== 'Transfer') {
          continue;
        }

        tokenId = event.args.tokenId.toString();
        break;
      }

      console.log("awaiting metamask/web3 confirm result...", tokenId); // @ts-ignore

      const txresult = await transactor(writeContracts.AvatarNFT.tokenURI(tokenId));
      console.log("awaiting readContracts confirm result...", txresult);
    }
  }; // @ts-ignore


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-152x152.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: t(`siteTitle`)
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: t(`siteDescription`)
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#fffefc"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileImage",
        content: "/favicon/ms-icon-144x144.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#fffefc"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: t(`siteDescription`),
        name: "description"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: t(`siteTitle`)
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: t(`siteTitle`)
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: t(`siteDescription`)
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://i.imgur.com/F5R0K03.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:image",
        content: "https://i.imgur.com/F5R0K03.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:site",
        content: "@phillzou"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:title",
        content: t(`siteTitle`)
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:description",
        content: t(`siteDescription`)
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header.default, {
      address: address,
      localProvider: localProvider,
      userSigner: userSigner,
      mainnetProvider: mainnetProvider,
      price: "",
      web3Modal: web3Modal,
      loadWeb3Modal: loadWeb3Modal,
      logoutOfWeb3Modal: logoutOfWeb3Modal,
      blockExplorer: "blockExplorer"
    }), networkDisplay, /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "my-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(AvatarEditor.default, {
        mintingNFT: mintingNFT
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer.default, {})]
  });
}; // @ts-ignore


async function getStaticProps({
  locale
}) {
  return {
    props: pages_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common', 'footer']))
  };
}
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 2202:
/***/ ((module) => {

"use strict";
module.exports = require("aes-js");

/***/ }),

/***/ 953:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8140:
/***/ ((module) => {

"use strict";
module.exports = require("bech32");

/***/ }),

/***/ 2416:
/***/ ((module) => {

"use strict";
module.exports = require("bn.js");

/***/ }),

/***/ 8929:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 6417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 8080:
/***/ ((module) => {

"use strict";
module.exports = require("elliptic");

/***/ }),

/***/ 4879:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 807:
/***/ ((module) => {

"use strict";
module.exports = require("html2canvas");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7129:
/***/ ((module) => {

"use strict";
module.exports = require("react-blockies");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8139:
/***/ ((module) => {

"use strict";
module.exports = require("scrypt-js");

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 2439:
/***/ ((module) => {

"use strict";
module.exports = require("ws");

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [577,301,269,145,980,356,170,968,417,828,779,97,181], () => (__webpack_exec__(4035)));
module.exports = __webpack_exports__;

})();
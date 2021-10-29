exports.id = 97;
exports.ids = [97];
exports.modules = {

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SelectionWrapper({
  className = ``,
  tooltip,
  children,
  switchConfig
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    role: "button",
    tabIndex: 0,
    onClick: switchConfig,
    onKeyDown: switchConfig,
    className: `tooltip ${className} outline-none select-none rounded-lg border-3 border-solid border-black focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-gray-50`,
    "data-tip": tooltip,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "w-10 h-10 md:w-14 md:h-14  flex justify-center items-center",
      children: children
    })
  });
}

/***/ }),

/***/ 8050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AvatarEditor)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3682);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4333);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(807);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SelectionWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(370);
/* harmony import */ var _Modal_Download__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(779);
/* harmony import */ var _Modal_Embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3828);
/* harmony import */ var _Modal_Palette__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7968);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-ignore
 // @ts-ignore
// @ts-ignore














function AvatarEditor(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: config,
    1: setConfig
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_objectSpread({}, (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .getRandomStyle */ .BV)()));
  const {
    0: preview,
    1: setPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: imageType,
    1: setImageType
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('png');
  const {
    0: showDownloadModal,
    1: setDownloadModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: showEmbedModal,
    1: setEmbedModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: showPaletteModal,
    1: setPaletteModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: flip,
    1: setFlip
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: background,
    1: setBackground
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_const__WEBPACK_IMPORTED_MODULE_0__/* .DefaultBackgroundConfig */ .$h); // default placeholder for compatible modal

  const {
    0: imageDataURL,
    1: setImageDataURL
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('/logo.gif');
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common'); // hack

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (router.asPath !== router.route) {
      var _params$flip, _params$color, _params$shape;

      const {
        query
      } = router; // query string to number

      const params = Object.keys(query).reduce((prev, next) => Object.assign(prev, {
        [next]: query[next]
      }), {});
      setConfig(_objectSpread(_objectSpread({}, config), params));
      setFlip(Boolean(Number((_params$flip = params.flip) !== null && _params$flip !== void 0 ? _params$flip : 0)));
      console.log(params);
      setBackground({
        color: (_params$color = params.color) !== null && _params$color !== void 0 ? _params$color : 'rgba(255, 0, 0, 0)',
        shape: (_params$shape = params.shape) !== null && _params$shape !== void 0 ? _params$shape : 'none'
      });
    }
  }, [router]);

  const generatePreview = async flipped => {
    const groups = await Promise.all(Object.keys(_const__WEBPACK_IMPORTED_MODULE_0__/* .AvatarStyleCount */ .Di).map(async type => {
      /* eslint-disable */
      const svgRaw = (await __webpack_require__(4043)(`./${type}/${config[type]}.svg`)).default;
      return `\n<g id="notion-avatar-${type}" ${type === 'face' ? 'fill="#ffffff"' : ''} ${flipped ? 'transform="scale(-1,1) translate(-1080, 0)"' : ''}>\n
      ${svgRaw.replace(/<svg.*(?=>)>/, '').replace('</svg>', '')}
    \n</g>\n`;
    }));
    const previewSvg = `<svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${_const__WEBPACK_IMPORTED_MODULE_0__/* .SVGFilter */ .Pe}
      <g id="notion-avatar" filter="url(#filter)">
        ${groups.join('\n\n')}
      </g>
      </svg>`.trim().replace(/(\n|\t)/g, '');
    setPreview(previewSvg);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    generatePreview(flip);
  }, [config, flip]);

  const switchConfig = type => {
    const newIdx = (config[type] + 1) % (_const__WEBPACK_IMPORTED_MODULE_0__/* .AvatarStyleCount */ .Di[type] + 1);
    config[type] = newIdx;
    setConfig(_objectSpread({}, config));
  };

  const mintingNFT = async () => {
    const dom = document.querySelector('#avatar-preview');
    const canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(dom, {
      logging: false,
      scale: window.devicePixelRatio,
      width: dom.offsetWidth,
      height: dom.offsetHeight
    });
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isNeedCompatible = _const__WEBPACK_IMPORTED_MODULE_0__/* .CompatibleAgents.some */ .vF.some(agent => userAgent.indexOf(agent) >= 0); // base64 only support png svg for now, maybe more change it to Map

    let imageURL;

    if (imageType === 'png') {
      imageURL = canvas.toDataURL();
    } else {
      const svgElement = dom.querySelector('svg');

      if (!svgElement) {
        // not generate for some reason
        return;
      }

      const svg = new XMLSerializer().serializeToString(svgElement);
      imageURL = `data:image/svg+xml;base64,${window.btoa(svg)}`;
    } //上面获取到了DataUrl


    props.mintingNFT(imageURL);
  };

  const downloadAvatar = async () => {
    const dom = document.querySelector('#avatar-preview');
    const canvas = await html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(dom, {
      logging: false,
      scale: window.devicePixelRatio,
      width: dom.offsetWidth,
      height: dom.offsetHeight
    });
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isNeedCompatible = _const__WEBPACK_IMPORTED_MODULE_0__/* .CompatibleAgents.some */ .vF.some(agent => userAgent.indexOf(agent) >= 0); // base64 only support png svg for now, maybe more change it to Map

    let imageURL;

    if (imageType === 'png') {
      imageURL = canvas.toDataURL();
    } else {
      const svgElement = dom.querySelector('svg');

      if (!svgElement) {
        // not generate for some reason
        return;
      }

      const svg = new XMLSerializer().serializeToString(svgElement);
      imageURL = `data:image/svg+xml;base64,${window.btoa(svg)}`;
    } // compatible for browsers which don't surpport dwonload attribution


    if (isNeedCompatible) {
      setImageDataURL(imageURL);
      setDownloadModal(true);
      return;
    }

    const a = document.createElement('a');
    a.href = imageURL;
    a.download = `notion-avatar-${new Date().getTime()}.${imageType}`;
    a.click();
  };

  const onOpenPaletteModal = () => {
    setPaletteModal(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [showDownloadModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Modal_Download__WEBPACK_IMPORTED_MODULE_8__.default, {
      onCancel: () => {
        setDownloadModal(false);
      },
      image: imageDataURL
    }), showEmbedModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Modal_Embed__WEBPACK_IMPORTED_MODULE_9__.default, {
      onCancel: () => {
        setEmbedModal(false);
      },
      config: _objectSpread(_objectSpread({}, config), {}, {
        flip: Number(flip),
        color: background.color,
        shape: background.shape
      }),
      imageType: imageType
    }), showPaletteModal && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Modal_Palette__WEBPACK_IMPORTED_MODULE_10__.default, {
      onCancel: () => {
        setPaletteModal(false);
      },
      onSelect: background => {
        setBackground(_objectSpread({}, background));
        setPaletteModal(false);
      },
      backgroundConfig: background
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "flex justify-center items-center flex-col",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        style: {
          backgroundColor: background.shape === 'none' ? _const__WEBPACK_IMPORTED_MODULE_0__/* .DefaultBackgroundConfig.color */ .$h.color : background.color
        },
        id: "avatar-preview",
        className: `w-48 h-48 md:w-72 md:h-72 ${_const__WEBPACK_IMPORTED_MODULE_0__/* .ShapeStyleMapping */ .Lq[background.shape]}`,
        dangerouslySetInnerHTML: {
          __html: preview
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "w-5/6 md:w-2/3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex justify-between items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: "text-lg my-5",
            children: t('choose')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
              "data-tip": t('flip'),
              className: "w-8 h-8 sm:w-12 sm:h-12 tooltip",
              onClick: () => {
                setFlip(!flip);
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                width: 30,
                height: 30,
                src: flip ? '/icon/flip-left.svg' : '/icon/flip-right.svg'
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
              "data-tip": t('background'),
              className: "w-8 h-8 sm:w-12 sm:h-12 tooltip ml-2",
              onClick: onOpenPaletteModal,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                width: 30,
                height: 30,
                src: "/icon/palette.svg"
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: "grid gap-y-4 justify-items-center justify-between grid-rows-2 grid-cols-5 lg:flex",
          children: Object.keys(_const__WEBPACK_IMPORTED_MODULE_0__/* .AvatarStyleCount */ .Di).map(type => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_SelectionWrapper__WEBPACK_IMPORTED_MODULE_7__.default, {
              switchConfig: () => {
                switchConfig(type);
              },
              tooltip: t(type),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                src: `/avatar/part/${type}/${type}-${config[type]}.svg`,
                width: 30,
                height: 30
              })
            })
          }, type))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex flex-col gap-x-2 md:flex-row mt-8 justify-center  w-full select-none",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
            onClick: () => {
              setConfig((0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .getRandomStyle */ .BV)());
            },
            type: "button",
            className: "mb-3 mr-6 md:mb-0 focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-gray-50 outline-none flex items-center justify-center w-full md:w-60 border-3 border-black text-black font-bold py-2 px-4 rounded-full",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
              src: "/icon/dice.svg",
              alt: t('random'),
              width: 28,
              height: 28
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
              className: "ml-3",
              children: t('random')
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
            onClick: mintingNFT,
            type: "button",
            className: "mb-3 md:mb-0 focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-gray-50 outline-none flex items-center justify-center w-full md:w-60 border-3 border-black text-black font-bold py-2 px-4 rounded-full",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
              className: "ml-3",
              children: t('Minting NFT')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
              type: "button",
              onClick: downloadAvatar,
              className: "focus:ring-2 ml-6 focus:ring-offset-2 focus:ring-black hover:bg-gray-50 outline-none select-none flex items-center justify-center md:w-52 border-3 border-black text-black font-bold py-2 px-4 rounded-full rounded-r-none flex-grow",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                src: "/icon/download.svg",
                alt: t('download'),
                width: 28,
                height: 28
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                className: "ml-3",
                children: t('download')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "border-3 border-black rounded-full flex items-center rounded-l-none border-l-0 relative",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("select", {
                className: "appearance-none focus:outline-none select-none bg-transparent h-full w-20 pl-4 pr-7",
                onChange: e => setImageType(e.target.value),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("option", {
                  value: "png",
                  children: ".PNG"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("option", {
                  value: "svg",
                  children: ".SVG"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("svg", {
                width: "10px",
                height: "6px",
                viewBox: "0 0 10 6",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                className: "absolute right-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("g", {
                  stroke: "none",
                  strokeWidth: "1",
                  fill: "none",
                  fillRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("g", {
                    id: "a",
                    transform: "translate(1.000000, 1.000000)",
                    stroke: "#000000",
                    strokeWidth: "2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("polyline", {
                      points: "8 0 4 4 0 0"
                    })
                  })
                })
              })]
            })]
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 4333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BV": () => (/* binding */ getRandomStyle),
/* harmony export */   "OP": () => (/* binding */ dataURItoBlob),
/* harmony export */   "hl": () => (/* binding */ blobToFile)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3682);

const getRandomStyle = () => {
  const config = Object.keys(_const__WEBPACK_IMPORTED_MODULE_0__/* .AvatarStyleCount */ .Di).reduce((prev, next) => Object.assign(prev, {
    [next]: Math.floor(Math.random() * (_const__WEBPACK_IMPORTED_MODULE_0__/* .AvatarStyleCount */ .Di[next] + 1))
  }), {}); // for harmony

  config.beard = 0;
  config.details = 0;
  config.accessories = 0;
  return config;
};
function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new ArrayBuffer(byteString.length); // create a view into the buffer

  var ia = new Uint8Array(ab); // set the bytes of the buffer to the correct values

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  } // write the ArrayBuffer to a blob, and you're done


  var blob = new Blob([ab], {
    type: mimeString
  });
  return blob;
} // @ts-ignore

function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

/***/ }),

/***/ 1973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 0</title>\r\n    <g id=\"Accessories/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"></g>\r\n</svg>");

/***/ }),

/***/ 4741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 1</title>\r\n    <g id=\"Accessories/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(270.000000, 695.000000)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"64\" id=\"Path\"></line>\r\n            <circle id=\"Oval\" fill=\"#FFFFFF\" cx=\"24\" cy=\"88\" r=\"24\"></circle>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 10</title>\r\n    <g id=\"Accessories/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(331.000000, 402.000000)\" stroke=\"#000000\">\r\n            <path d=\"M282,125 C279,98 272,73 209,73 C146,73 135.024573,103.117647 132.201043,121.941176 C129.377514,140.764706 155,196 204,196 C253,196 285,152 282,125 Z\" id=\"Path\" stroke-width=\"8\" fill=\"#0C0C0C\"></path>\r\n            <path d=\"M0,348 C77.1868597,283.810541 138.18686,225.810541 183,174 C227.81314,122.189459 267.146474,64.189459 301,0\" id=\"Path\" stroke-width=\"12\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 2</title>\r\n    <g id=\"Accessories/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(270.000000, 695.000000)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <line x1=\"24\" y1=\"0\" x2=\"24\" y2=\"48\" id=\"Path\"></line>\r\n            <path d=\"M24,122 C37.254834,122 48,111.254834 48,98 C48,89.163444 40,71.163444 24,44 C8,71.163444 0,89.163444 0,98 C0,111.254834 10.745166,122 24,122 Z\" id=\"Oval\" fill=\"#FFFFFF\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 3</title>\r\n    <g id=\"Accessories/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(244.000000, 709.000000)\" fill=\"#FFFFFF\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <path d=\"M60,0 C93.137085,0 120,26.862915 120,60 C120,93.137085 93.137085,120 60,120 C26.862915,120 0,93.137085 0,60 C0,26.862915 26.862915,0 60,0 Z M60,20 C37.90861,20 20,37.90861 20,60 C20,82.09139 37.90861,100 60,100 C82.09139,100 100,82.09139 100,60 C100,37.90861 82.09139,20 60,20 Z\" id=\"Combined-Shape\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 4</title>\r\n    <g id=\"Accessories/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <polygon id=\"Path-2\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\" points=\"300 691 250 761 300 831 350 761\"></polygon>\r\n        <polygon id=\"Path-2\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\" points=\"300 726 275 761 300 796 325 761\"></polygon>\r\n        <line x1=\"300\" y1=\"726\" x2=\"300\" y2=\"691\" id=\"Path-3\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\"></line>\r\n        <line x1=\"300\" y1=\"831\" x2=\"300\" y2=\"796\" id=\"Path-3\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\"></line>\r\n        <line x1=\"325\" y1=\"761\" x2=\"350\" y2=\"761\" id=\"Path-4\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\"></line>\r\n        <line x1=\"250\" y1=\"761\" x2=\"275\" y2=\"761\" id=\"Path-4\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\"></line>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 5</title>\r\n    <g id=\"Accessories/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M269,593 C280.045695,593 289,584.045695 289,573 C289,561.954305 280.045695,553 269,553 C257.954305,553 249,561.954305 249,573\" id=\"Path\" stroke=\"#000000\" stroke-width=\"8\"></path>\r\n        <path d=\"M242,623 C253.045695,623 262,614.045695 262,603 C262,591.954305 253.045695,583 242,583 C230.954305,583 222,591.954305 222,603\" id=\"Path\" stroke=\"#000000\" stroke-width=\"8\" transform=\"translate(242.000000, 603.000000) rotate(-32.000000) translate(-242.000000, -603.000000) \"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 6</title>\r\n    <g id=\"Accessories/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M281,720 C288.333333,736.666667 295.666667,742.666667 303,738 C314,731 300.685557,703.463464 300.685557,697.308048 C300.685557,691.152631 308.938123,687.771131 312.938123,691.142601 C316.938123,694.514071 320.748656,704.392476 323,717 C328,745 315,757 300,758 C284.006216,759.066252 271.672883,743.732919 263,712 L281,720 Z\" id=\"Path-87\" stroke=\"#000000\" stroke-width=\"8\" fill=\"#FFFFFF\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 7</title>\r\n    <g id=\"Accessories/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(276.000000, 687.000000)\" stroke=\"#000000\" stroke-width=\"8\">\r\n            <rect id=\"Rectangle\" fill=\"#FFFFFF\" transform=\"translate(28.000000, 28.000000) rotate(-330.000000) translate(-28.000000, -28.000000) \" x=\"8\" y=\"8\" width=\"40\" height=\"40\"></rect>\r\n            <rect id=\"Rectangle\" x=\"16\" y=\"16\" width=\"24\" height=\"24\"></rect>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 8</title>\r\n    <g id=\"Accessories/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <line x1=\"294\" y1=\"695\" x2=\"294\" y2=\"743\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\"></line>\r\n        <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\" cx=\"294\" cy=\"755\" r=\"12\"></circle>\r\n        <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#FFFFFF\" cx=\"294\" cy=\"815\" r=\"48\"></circle>\r\n        <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"12\" cx=\"294\" cy=\"779\" r=\"12\"></circle>\r\n        <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"12\" cx=\"294\" cy=\"791\" r=\"24\"></circle>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Accessories/ 9</title>\r\n    <g id=\"Accessories/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(262.000000, 695.000000)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <line x1=\"32\" y1=\"0\" x2=\"32\" y2=\"48\" id=\"Path\"></line>\r\n            <circle id=\"Oval\" fill=\"#FFFFFF\" cx=\"32\" cy=\"72\" r=\"24\"></circle>\r\n            <path d=\"M0,256 L64,256 C59.8709677,149.333333 49.2731183,96 32.2064516,96 C15.1397849,96 4.40430108,149.333333 0,256 Z\" id=\"Path\" fill=\"#FFFFFF\"></path>\r\n            <line x1=\"32\" y1=\"256\" x2=\"32\" y2=\"156\" id=\"Path\"></line>\r\n            <line x1=\"16\" y1=\"256\" x2=\"16\" y2=\"208\" id=\"Path\"></line>\r\n            <line x1=\"48\" y1=\"256\" x2=\"48\" y2=\"208\" id=\"Path\"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 0</title>\r\n    <g id=\"Beard/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"></g>\r\n</svg>");

/***/ }),

/***/ 8690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 1</title>\r\n    <g id=\"Beard/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(365.000000, 654.000000)\" stroke=\"#000000\">\r\n            <path d=\"M22,0 C48,64 71,96 91,96 C121,96 115,47 167,47 C219,47 210,72 262,72 C286.700743,72 329,54 353,47 C369,42.3333333 387,41 407,43 C393.666667,175.666667 334.333333,242 229,242 C69.6666667,242 -6.33333333,161.333333 1,0 L22,0 Z M324,85 C308.372818,69.9446471 296.164856,90.0896483 249,90.351705 C201.835144,90.6137616 166.573326,68.2991479 157,93 C147.426674,117.700852 181.981237,140.31964 255.653458,140.351729 C329.325678,140.383517 339.627182,100.055353 324,85 Z\" id=\"Combined-Shape\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n            <path d=\"M184,105 C211.33038,111.666667 234.663714,115 254,115 C273.336286,115 290.002953,111.666667 304,105\" id=\"Path\" stroke-width=\"16\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 10</title>\r\n    <g id=\"Beard/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M385,651 C400.949347,693.922506 417.682633,729.624512 435.19986,758.106018 L435.257961,757.93037 L435.257961,757.93037 L435.382991,757.590097 C436.332315,755.121854 438.453635,752.057725 441.746952,748.397709 C445.047182,758.655798 447.875609,766.669675 450.232233,772.43934 C452.097947,777.007122 454.998032,783.424708 458.932488,791.692099 C462.241449,795.708652 465.576333,799.483371 468.937098,803.019711 C468.747704,801.751066 468.712602,800.556378 468.831416,799.433013 C469.109564,796.803169 470.365547,793.29441 472.599365,788.906733 C478.442132,797.961124 483.248326,804.969884 487.017949,809.933013 C490.647638,814.711903 496.463455,821.737819 504.465401,831.01076 C508.572484,833.217447 512.714195,835.101048 516.89077,836.663537 C516.545049,836.110965 516.247867,835.5577 516,835 C514.925962,832.583415 514.259295,828.916748 514,824 C523.58718,828.919949 531.253846,832.586615 537,835 C541.622781,836.941568 548.351518,839.478546 557.186211,842.610933 C564.771431,840.895593 570.683251,839.438661 574.924158,838.240012 C580.921598,836.544896 588.977973,833.839892 599.093282,830.124999 C598.568821,833.09366 597.949892,835.578556 597.236495,837.579687 C601.020483,836.642061 604.801869,835.576414 608.580373,834.382534 C617.277979,828.42916 623.771313,823.79084 628.061261,820.465325 C632.986989,816.64696 639.443418,811.120953 647.430546,803.887303 C648.452634,808.703627 648.757686,812.417901 648.345704,815.030125 C648.225732,815.790817 648.028088,816.565012 647.752769,817.352712 C669.261883,805.436827 690.678134,789.318484 712,769 C710.645087,779.947888 705.645087,789.947888 697,799 C655.842569,842.095192 585,869 525,865 C455.659793,860.37732 402.32646,789.043986 365,651 L385,651 Z M500.454782,828.750915 C500.081029,828.529966 499.707569,828.306327 499.3344,828.08 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 2</title>\r\n    <g id=\"Beard/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(371.133645, 672.093579)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <line x1=\"266.273341\" y1=\"38.9064208\" x2=\"266.273341\" y2=\"62.9064208\" id=\"Path\" transform=\"translate(266.273341, 50.906421) rotate(5.000000) translate(-266.273341, -50.906421) \"></line>\r\n            <line x1=\"292.365079\" y1=\"38.9064208\" x2=\"292.365079\" y2=\"62.9064208\" id=\"Path\" transform=\"translate(292.365079, 50.906421) scale(-1, 1) rotate(5.000000) translate(-292.365079, -50.906421) \"></line>\r\n            <line x1=\"239.557395\" y1=\"40.9064208\" x2=\"239.557395\" y2=\"64.9064208\" id=\"Path\" transform=\"translate(239.557395, 52.906421) rotate(8.000000) translate(-239.557395, -52.906421) \"></line>\r\n            <line x1=\"319.081025\" y1=\"41.9064208\" x2=\"319.081025\" y2=\"65.9064208\" id=\"Path\" transform=\"translate(319.081025, 53.906421) scale(-1, 1) rotate(8.000000) translate(-319.081025, -53.906421) \"></line>\r\n            <line x1=\"211.425951\" y1=\"45.8073404\" x2=\"210.217288\" y2=\"63.4360151\" id=\"Path\" transform=\"translate(210.925951, 54.807340) rotate(16.000000) translate(-210.925951, -54.807340) \"></line>\r\n            <line x1=\"347.507476\" y1=\"50.9064208\" x2=\"347.507476\" y2=\"70.9064208\" id=\"Path\" transform=\"translate(347.507476, 60.906421) scale(-1, 1) rotate(16.000000) translate(-347.507476, -60.906421) \"></line>\r\n            <line x1=\"181.844559\" y1=\"48.1498621\" x2=\"181.525756\" y2=\"65.6629795\" id=\"Path\" transform=\"translate(182.025756, 56.662979) rotate(19.000000) translate(-182.025756, -56.662979) \"></line>\r\n            <line x1=\"151.490065\" y1=\"56.7191175\" x2=\"153.222458\" y2=\"74.354276\" id=\"Path\" transform=\"translate(152.696414, 65.497522) rotate(22.000000) translate(-152.696414, -65.497522) \"></line>\r\n            <line x1=\"122.837706\" y1=\"71.6204191\" x2=\"126.780408\" y2=\"96.0484158\" id=\"Path\" transform=\"translate(124.837706, 84.120419) rotate(22.000000) translate(-124.837706, -84.120419) \"></line>\r\n            <line x1=\"9.58948596\" y1=\"-1.01442282\" x2=\"5.14322409\" y2=\"11.2015813\" id=\"Path\" transform=\"translate(7.500000, 5.000000) rotate(70.000000) translate(-7.500000, -5.000000) \"></line>\r\n            <line x1=\"13.9927886\" y1=\"28.4091214\" x2=\"12.0235844\" y2=\"42.5908786\" id=\"Path\" transform=\"translate(13.004093, 35.351932) rotate(70.000000) translate(-13.004093, -35.351932) \"></line>\r\n            <line x1=\"20.9941812\" y1=\"53.2957181\" x2=\"18.8556925\" y2=\"72.0949718\" id=\"Path\" transform=\"translate(19.994181, 62.795718) rotate(70.000000) translate(-19.994181, -62.795718) \"></line>\r\n            <line x1=\"28.866355\" y1=\"80.9064208\" x2=\"28.866355\" y2=\"100.906421\" id=\"Path\" transform=\"translate(28.866355, 90.906421) rotate(70.000000) translate(-28.866355, -90.906421) \"></line>\r\n            <line x1=\"46.1997712\" y1=\"108.632477\" x2=\"50.981151\" y2=\"128.886179\" id=\"Path\" transform=\"translate(48.481151, 118.386179) rotate(70.000000) translate(-48.481151, -118.386179) \"></line>\r\n            <line x1=\"66.8244792\" y1=\"131.559139\" x2=\"74.1692845\" y2=\"150.617497\" id=\"Path\" transform=\"translate(70.669285, 140.617497) rotate(70.000000) translate(-70.669285, -140.617497) \"></line>\r\n            <line x1=\"86.8992094\" y1=\"152.384454\" x2=\"97.8335007\" y2=\"167.428388\" id=\"Path\" transform=\"translate(92.333501, 159.428388) rotate(70.000000) translate(-92.333501, -159.428388) \"></line>\r\n            <line x1=\"114.53737\" y1=\"164.254546\" x2=\"129.592672\" y2=\"175.956143\" id=\"Path\" transform=\"translate(122.092672, 169.956143) rotate(70.000000) translate(-122.092672, -169.956143) \"></line>\r\n            <line x1=\"146.238529\" y1=\"168.970245\" x2=\"160.954313\" y2=\"178.099239\" id=\"Path\" transform=\"translate(153.454313, 173.099239) rotate(70.000000) translate(-153.454313, -173.099239) \"></line>\r\n            <line x1=\"174.944456\" y1=\"168.32313\" x2=\"191.788254\" y2=\"177.489712\" id=\"Path\" transform=\"translate(183.288254, 172.489712) rotate(70.000000) translate(-183.288254, -172.489712) \"></line>\r\n            <line x1=\"204.9014\" y1=\"169.192791\" x2=\"223.711207\" y2=\"173.460538\" id=\"Path\" transform=\"translate(214.271259, 171.040294) rotate(70.000000) translate(-214.271259, -171.040294) \"></line>\r\n            <line x1=\"234.714972\" y1=\"164.529202\" x2=\"250.464074\" y2=\"165.163612\" id=\"Path\" transform=\"translate(242.733894, 164.396280) rotate(70.000000) translate(-242.733894, -164.396280) \"></line>\r\n            <line x1=\"260.929106\" y1=\"154.234055\" x2=\"276.136923\" y2=\"153.384181\" id=\"Path\" transform=\"translate(268.630203, 154.095799) rotate(70.000000) translate(-268.630203, -154.095799) \"></line>\r\n            <line x1=\"286.892662\" y1=\"141.146548\" x2=\"301.056215\" y2=\"139.152378\" id=\"Path\" transform=\"translate(294.049495, 140.363996) rotate(70.000000) translate(-294.049495, -140.363996) \"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 3</title>\r\n    <g id=\"Beard/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M711,764 L707,764 L706.345455,762.706777 C700.563636,751.423471 694.781818,743.854545 689,740 C680,734 658,735 618,735 L615.604952,734.995328 C576.5692,734.8448 541.74,731.16 529,739 C520.333333,744.333333 514.333333,752.666667 511,764 L462,764 L366,655 L383,655 C388.047581,663.07807 393.047581,668.411404 398,671 C406.445576,675.414446 431.388408,682.267492 438,687 C450.42707,695.895166 463.760404,707.895166 478,723 L506,723 L532,713 C566.333333,708.333333 598.666667,706 629,706 C659.333333,706 688,709.333333 715,716 L734,739 L747,739 C762.333333,758.333333 758,790 734,834 C698,900 652.613614,901.016753 640,905 C621,911 543.350864,912.626406 512,903 L510.10195,902.41143 C478.827156,892.616328 434.373138,873.798208 408,829 C390.238499,798.829779 376.339484,741.682276 366.302955,657.557493 L366,655 L461,769 L512,769 C527.554629,792.760871 543.887962,808.760871 561,817 C577.940917,825.156738 592.158427,817.724205 603.652528,794.702402 L604,794 L629,794 C631.666667,809.333333 638.333333,817 649,817 C659.56,817 679.921,799.6849 710.083,765.0547 L711,764 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 4</title>\r\n    <g id=\"Beard/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(310.000000, 649.000000)\" stroke=\"#000000\">\r\n            <path d=\"M439,0 C465.509668,0 487,21.490332 487,48 C487,66.0774761 477.006672,81.8208853 462.243021,90.0072235 C467.67121,95.7398064 471,103.481163 471,112 C471,123.537778 464.893812,133.64938 455.736752,139.279489 C459.723257,146.274585 462,154.371411 462,163 C462,182.053279 450.898696,198.51371 434.811365,206.266014 C432.654213,230.777481 412.071936,250 387,250 C381.557152,250 376.325892,249.094086 371.448776,247.424815 C363.777046,263.720272 347.205784,275 328,275 C312.237495,275 298.249539,267.402249 289.498577,255.669192 C280.750461,267.402249 266.762505,275 251,275 C228.649868,275 209.867514,259.724525 204.523624,239.044259 C196.229053,245.889003 185.594614,250 174,250 C147.490332,250 126,228.509668 126,202 C126,201.552587 126.006121,201.106603 126.018285,200.662128 C119.424643,204.073448 111.937306,206 104,206 C77.490332,206 56,184.509668 56,158 C56,152.709881 56.8557864,147.619642 58.4364702,142.860172 C55.0775751,143.607053 51.5846764,144 48,144 C21.490332,144 0,122.509668 0,96 C0,77.3084849 10.6837461,61.1122925 26.2777205,53.1849404 C26.0939273,51.4832293 26,49.7525836 26,48 C26,21.490332 47.490332,0 74,0 C91.5693965,0 106.934084,9.43948364 115.299183,23.5235732 C123.303336,17.5417319 133.23806,14 144,14 C169.822842,14 190.883066,34.3911923 191.95701,59.9499159 C199.231458,55.1929431 208.726028,52 222,52 C274,52 265,77 317,77 C336.814256,77 367.952814,65.4173484 391.885877,57.2213362 C391.304216,54.2371224 391,51.154088 391,48 C391,21.490332 412.490332,0 439,0 Z M304,95.351705 C256.835144,95.6137616 221.573326,73.2991479 212,98 C202.426674,122.700852 236.981237,145.31964 310.653458,145.351729 C384.325678,145.383517 394.627182,105.055353 379,90 C363.372818,74.9446471 351.164856,95.0896483 304,95.351705 Z M95.762784,100.784655 L95.6897417,101.487596 C95.3104146,104.820544 94.5897387,108.049893 93.5635298,111.139828 C95.9882152,110.600109 98.483472,110.245706 101.032472,110.090234 C99.2503539,107.05212 97.4947828,103.948121 95.762784,100.784655 Z\" id=\"Combined-Shape\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n            <path d=\"M239,110 C266.33038,116.666667 289.663714,120 309,120 C328.336286,120 345.002953,116.666667 359,110\" id=\"Path\" stroke-width=\"16\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 5</title>\r\n    <g id=\"Beard/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(488.471351, 711.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <line x1=\"148.935635\" y1=\"0\" x2=\"148.935635\" y2=\"24\" id=\"Path\" transform=\"translate(148.935635, 12.000000) rotate(5.000000) translate(-148.935635, -12.000000) \"></line>\r\n            <line x1=\"175.027373\" y1=\"0\" x2=\"175.027373\" y2=\"24\" id=\"Path\" transform=\"translate(175.027373, 12.000000) scale(-1, 1) rotate(5.000000) translate(-175.027373, -12.000000) \"></line>\r\n            <line x1=\"122.219689\" y1=\"2\" x2=\"122.219689\" y2=\"26\" id=\"Path\" transform=\"translate(122.219689, 14.000000) rotate(8.000000) translate(-122.219689, -14.000000) \"></line>\r\n            <line x1=\"201.743319\" y1=\"3\" x2=\"201.743319\" y2=\"27\" id=\"Path\" transform=\"translate(201.743319, 15.000000) scale(-1, 1) rotate(8.000000) translate(-201.743319, -15.000000) \"></line>\r\n            <line x1=\"93.7932385\" y1=\"7\" x2=\"93.7932385\" y2=\"27\" id=\"Path\" transform=\"translate(93.793238, 17.000000) rotate(16.000000) translate(-93.793238, -17.000000) \"></line>\r\n            <line x1=\"230.16977\" y1=\"12\" x2=\"230.16977\" y2=\"32\" id=\"Path\" transform=\"translate(230.169770, 22.000000) scale(-1, 1) rotate(16.000000) translate(-230.169770, -22.000000) \"></line>\r\n            <line x1=\"63.7471773\" y1=\"6.59518528\" x2=\"63.4283745\" y2=\"24.1083027\" id=\"Path\" transform=\"translate(63.928374, 15.108303) rotate(19.000000) translate(-63.928374, -15.108303) \"></line>\r\n            <line x1=\"34.1523593\" y1=\"17.8126967\" x2=\"35.8847521\" y2=\"35.4478552\" id=\"Path\" transform=\"translate(35.358708, 26.591101) rotate(22.000000) translate(-35.358708, -26.591101) \"></line>\r\n            <line x1=\"5.5\" y1=\"32.7139984\" x2=\"9.44270186\" y2=\"57.1419951\" id=\"Path\" transform=\"translate(7.500000, 45.213998) rotate(22.000000) translate(-7.500000, -45.213998) \"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 6</title>\r\n    <g id=\"Beard/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M671.118678,718.2216 C669.299174,707.737669 688.858843,708.193492 698.41124,710.016784 C704.779504,711.232312 724.642424,716.246366 758,725.058946 C701.292121,727.490002 672.331681,725.210887 671.118678,718.2216 Z M648.881322,718.2216 C647.668319,725.210887 618.707879,727.490002 562,725.058946 C595.357576,716.246366 615.220496,711.232312 621.58876,710.016784 C631.141157,708.193492 650.700826,707.737669 648.881322,718.2216 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 7</title>\r\n    <g id=\"Beard/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M651.106921,708.217112 C643.242163,720.755018 634.814228,727.48805 625.823115,728.416207 C612.336446,729.808442 601.135926,726.699142 587.662471,729.083168 C578.680167,730.672519 571.053077,734.0505 564.7812,739.217112 C564.614336,727.262804 572.04428,718.587559 587.071034,713.191376 C596.791588,709.700676 608.026844,709.840979 623.035486,709.478749 C628.497372,709.346928 637.854517,708.926382 651.106921,708.217112 Z M671,708.217112 C684.252404,708.926382 693.609549,709.346928 699.071435,709.478749 C714.080077,709.840979 725.315333,709.700676 735.035887,713.191376 C750.062641,718.587559 757.492585,727.262804 757.325721,739.217112 C751.053844,734.0505 743.426754,730.672519 734.44445,729.083168 C720.970995,726.699142 709.770475,729.808442 696.283806,728.416207 C687.292693,727.48805 678.864757,720.755018 671,708.217112 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 8</title>\r\n    <g id=\"Beard/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M586,789 C595.011441,790.376344 603.793663,791.064516 612.346667,791.064516 C620.899671,791.064516 629.450782,790.376344 638,789 C632.278888,793.086246 627.194444,797.90345 622.746667,803.451613 C618.298889,808.999776 614.832223,814.849238 612.346667,821 C609.657401,814.455813 606.190734,808.606351 601.946667,803.451613 C597.702599,798.296875 592.387044,793.479671 586,789 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Beard/ 9</title>\r\n    <g id=\"Beard/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M591,787 L635,787 C630.333333,808.333333 633.666667,819 645,819 C656.333333,819 677.333333,803.333333 708,772 C706.096725,787.252619 703.763392,797.919286 701,804 C681.384138,847.163789 649,872 588,872 C571.270609,872 532,872 513,859 C503.782362,852.693195 484,841 474,812 C472.318666,807.124131 470.651999,796.457464 469,780 C500.392573,797.855208 521.392573,808.521874 532,812 C553.420148,819.023566 571.9567,819 580,819 C594.017959,819 597.684625,808.333333 591,787 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 0</title>\r\n    <g id=\"Details/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"></g>\r\n</svg>");

/***/ }),

/***/ 2651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 1</title>\r\n    <g id=\"Details/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M485,619 C507.09139,619 525,636.90861 525,659 C525,681.09139 507.09139,699 485,699 C462.90861,699 445,681.09139 445,659 C445,636.90861 462.90861,619 485,619 Z M767.292336,619.274106 C780,619 763.092776,698.242969 759.023679,696.8482 C743.301573,691.459118 732,676.549371 732,659 C732,638.501287 747.390789,619.703385 767.292336,619.274106 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 10</title>\r\n    <g id=\"Details/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M454,610 C468.243551,638.003262 476.910218,659.669928 480,675 C483.089782,690.330072 483.089782,711.663405 480,739\" id=\"Path\" stroke=\"#000000\" stroke-width=\"4\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 2</title>\r\n    <g id=\"Details/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M485,619 C507.09139,619 525,627.954305 525,639 C525,650.045695 507.09139,659 485,659 C462.90861,659 445,650.045695 445,639 C445,627.954305 462.90861,619 485,619 Z M768.257551,619.086322 C769.489678,619.029221 768.023293,658.926198 766.096923,658.783728 C746.80451,657.35691 732,649.0429 732,639 C732,628.585298 747.920969,620.029867 768.257551,619.086322 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 3</title>\r\n    <g id=\"Details/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M491.752948,639.020916 L486.914511,658.42683 M511.752948,639.020916 L506.914511,658.42683 M531.752948,639.020916 L526.914511,658.42683 M789.247052,639.020916 L794.085489,658.42683 M769.247052,639.020916 L774.085489,658.42683 M749.247052,639.020916 L754.085489,658.42683\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 4</title>\r\n    <g id=\"Details/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M438.627052,619 C436.62301,638.948361 439.422618,653.748361 447.025876,663.4 C454.629134,673.051639 462.287175,678.251639 470,679 C472.666667,693.666667 476.666667,705.666667 482,715 C487.333333,724.333333 494,732.333333 502,739\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 5</title>\r\n    <g id=\"Details/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(453.000000, 659.000000)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <path d=\"M0,0 C12,6.66666667 24,10 36,10 C48,10 60,6.66666667 72,0\" id=\"Path\"></path>\r\n            <path d=\"M289,-3.37685435e-12 C299.916502,5.03026124 308.103878,8.02711078 313.562129,8.9905486\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 6</title>\r\n    <g id=\"Details/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <polygon id=\"Path\" stroke=\"#000000\" stroke-width=\"4\" fill=\"#000000\" transform=\"translate(592.211883, 442.584103) rotate(-22.000000) translate(-592.211883, -442.584103) \" points=\"587.416001 449.784099 603.311666 453.984197 605.711883 417.284201 589.816218 413.084103 594.607547 444.217474 578.711883 440.017376 587.035582 472.084103\"></polygon>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 7</title>\r\n    <g id=\"Details/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M554,440 C578,434.666667 602,432 626,432 C650,432 674,434.666667 698,440\" id=\"Path\" stroke=\"#000000\" stroke-width=\"2\"></path>\r\n        <path d=\"M578,448 C594,445.333333 610,444 626,444 C642,444 658,445.333333 674,448\" id=\"Path\" stroke=\"#000000\" stroke-width=\"2\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 8</title>\r\n    <g id=\"Details/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,619 C527.104067,645.751191 524.104067,665.751191 523,679 C521.895933,692.248809 521.562599,712.248809 522,739\" id=\"Path\" stroke=\"#000000\" stroke-width=\"4\"></path>\r\n        <path d=\"M754.186173,619 C749.29024,645.751191 746.29024,665.751191 745.186173,679 C744.369307,688.802386 743.974346,702.300417 744.001291,719.494092\" id=\"Path\" stroke=\"#000000\" stroke-width=\"4\" transform=\"translate(749.093086, 669.247046) scale(-1, 1) translate(-749.093086, -669.247046) \"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Details/ 9</title>\r\n    <g id=\"Details/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M523.138691,666.607842 L451.314079,671.630308 C463.098831,668.13306 474.976591,665.965897 486.947359,665.128819 C498.918128,664.291741 510.981905,664.784749 523.138691,666.607842 Z M734.861309,666.607842 C749.483691,665.134021 760.412369,664.57364 767.647342,664.926697 L767.647342,664.926697 Z M522.022587,650.646817 L438.227207,656.506361 C452.007087,652.8696 465.879975,650.562924 479.845871,649.586333 C493.811768,648.609742 507.870673,648.963237 522.022587,650.646817 Z M735.977413,650.646817 C750.919604,649.423529 762.096932,648.92528 769.509399,649.15207 L769.509399,649.15207 Z M520.906484,634.685793 L425.140335,641.382414 C440.915342,637.60614 456.783359,635.159951 472.744383,634.043847 C488.705408,632.927744 504.759442,633.141725 520.906484,634.685793 Z M737.093516,634.685793 C752.493592,633.665689 764.019757,633.242297 771.672009,633.415616 L771.672009,633.415616 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"4\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 0</title>\r\n    <g id=\"Eyebrows/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(525.000000, 492.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <path d=\"M0,16 C12.8888889,5.33333333 27.8888889,0 45,0 C62.1111111,0 77.1111111,5.33333333 90,16\" id=\"Path\"></path>\r\n            <path d=\"M138,16 C150.888889,5.33333333 165.888889,0 183,0 C200.111111,0 215.111111,5.33333333 228,16\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 1</title>\r\n    <g id=\"Eyebrows/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(521.000000, 490.000000)\" stroke=\"#000000\" stroke-width=\"20\">\r\n            <path d=\"M0,16 C12.8888889,5.33333333 27.8888889,0 45,0 C62.1111111,0 77.1111111,5.33333333 90,16\" id=\"Path\"></path>\r\n            <path d=\"M146,16 C158.888889,5.33333333 173.888889,0 191,0 C208.111111,0 223.111111,5.33333333 236,16\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 10</title>\r\n    <g id=\"Eyebrows/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M757,487.2 C757,494.4 735.666667,494.4 717,494.4 C698.333333,494.4 661,498 661,494.4 C661,490.8 694.986112,480 717,480 L720.27013,480.0009 C740.767534,480.018 757,480.36 757,487.2 Z M561,480 C583.013888,480 617,490.8 617,494.4 C617,498 579.666667,494.4 561,494.4 C542.333333,494.4 521,494.4 521,487.2 C521,480.36 537.232466,480.018 557.72987,480.0009 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"16\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 2</title>\r\n    <g id=\"Eyebrows/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M570,485.718496 C590.574398,488.795594 605.574398,494.964927 615,504.226493 C600,498.618009 585,495.813767 570,495.813767 C555,495.813767 536.666667,498.618009 515,504.226493 L525,490.766132 C534.425602,484.323943 549.425602,482.641398 570,485.718496 Z M708,485.718496 C728.574398,482.641398 743.574398,484.323943 753,490.766132 L753,490.766132 L763,504.226493 C741.333333,498.618009 723,495.813767 708,495.813767 C693,495.813767 678,498.618009 663,504.226493 C672.425602,494.964927 687.425602,488.795594 708,485.718496 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"16\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 3</title>\r\n    <g id=\"Eyebrows/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(512.000000, 484.000000)\" stroke=\"#000000\" stroke-width=\"24\">\r\n            <path d=\"M152,14.0251712 C167.712271,3.95186377 182.349308,-0.695225271 195.911111,0.0839040908 C206.159229,0.672661315 219.876442,6.74452014 237.511111,14.0251712 C241.312508,15.5946162 247.475471,17.5862258 256,20\" id=\"Path\" transform=\"translate(204.000000, 10.000000) scale(-1, 1) translate(-204.000000, -10.000000) \"></path>\r\n            <path d=\"M0,14.0251712 C15.7122706,3.95186377 30.3493076,-0.695225271 43.9111111,0.0839040908 C54.1592293,0.672661315 67.8764421,6.74452014 85.5111111,14.0251712 C89.3125078,15.5946162 95.4754707,17.5862258 104,20\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 4</title>\r\n    <g id=\"Eyebrows/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(525.000000, 504.000000)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <path d=\"M0,12 C12.8888889,4 27.8888889,0 45,0 C62.1111111,0 77.1111111,4 90,12\" id=\"Path\"></path>\r\n            <path d=\"M138,12 C150.888889,4 165.888889,0 183,0 C200.111111,0 215.111111,4 228,12\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 5</title>\r\n    <g id=\"Eyebrows/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(517.000000, 471.000000)\" stroke=\"#000000\" stroke-width=\"24\">\r\n            <line x1=\"1\" y1=\"27.4172651\" x2=\"76.8548788\" y2=\"2\" id=\"Path\" transform=\"translate(38.927439, 14.708633) rotate(2.524843) translate(-38.927439, -14.708633) \"></line>\r\n            <line x1=\"166\" y1=\"27.4172651\" x2=\"241.854879\" y2=\"2\" id=\"Path\" transform=\"translate(203.927439, 14.708633) scale(-1, 1) rotate(2.524843) translate(-203.927439, -14.708633) \"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 6</title>\r\n    <g id=\"Eyebrows/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M620,495.140162 C589.850248,491.823271 565.234864,491.823271 546.153846,495.140162 C527.072829,498.457053 511.688213,505.410333 500,516 C517.257672,497.488903 532.642287,487.058984 546.153846,484.710243 C559.665405,482.361502 584.280789,485.838142 620,495.140162 Z M658,495.140162 C693.719211,485.838142 718.334595,482.361502 731.846154,484.710243 C745.357713,487.058984 760.742328,497.488903 778,516 C766.311787,505.410333 750.927171,498.457053 731.846154,495.140162 C712.765136,491.823271 688.149752,491.823271 658,495.140162 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"8\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 7</title>\r\n    <g id=\"Eyebrows/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(528.000000, 485.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <path d=\"M2,31 C13.6420073,23.1142473 23.8820073,17.5142473 32.72,14.2 C41.5579927,10.8857527 52.651326,8.48575274 66,7\" id=\"Path\" transform=\"translate(34.000000, 19.000000) rotate(12.000000) translate(-34.000000, -19.000000) \"></path>\r\n            <path d=\"M156,31 C167.642007,23.1142473 177.882007,17.5142473 186.72,14.2 C195.557993,10.8857527 206.651326,8.48575274 220,7\" id=\"Path\" transform=\"translate(188.000000, 19.000000) scale(-1, 1) rotate(12.000000) translate(-188.000000, -19.000000) \"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 8</title>\r\n    <g id=\"Eyebrows/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(530.000000, 490.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <path d=\"M64,10 C59.1947065,3.33333333 51.1947065,0 40,0 C28.8052935,0 15.4719602,3.33333333 0,10\" id=\"Path\"></path>\r\n            <path d=\"M218,10 C213.194706,3.33333333 205.194706,0 194,0 C182.805294,0 169.47196,3.33333333 154,10\" id=\"Path\" transform=\"translate(186.000000, 5.000000) scale(-1, 1) translate(-186.000000, -5.000000) \"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyebrows/ 9</title>\r\n    <g id=\"Eyebrows/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(502.000000, 462.000000)\" stroke=\"#000000\" stroke-width=\"24\">\r\n            <path d=\"M0,0 C0,0 23.2233275,2.61265093 76,22 C79.9624314,23.4555871 87.2957648,28.1222537 98,36\" id=\"Path\"></path>\r\n            <path d=\"M176,0 C176,0 199.223328,2.61265093 252,22 C255.962431,23.4555871 263.295765,28.1222537 274,36\" id=\"Path\" transform=\"translate(225.000000, 18.000000) scale(-1, 1) translate(-225.000000, -18.000000) \"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 0</title>\r\n    <g id=\"Eyes/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M570,516 C583.254834,516 594,526.745166 594,540 C594,553.254834 583.254834,564 570,564 C556.745166,564 546,553.254834 546,540 C546,526.745166 556.745166,516 570,516 Z M708,516 C721.254834,516 732,526.745166 732,540 C732,553.254834 721.254834,564 708,564 C694.745166,564 684,553.254834 684,540 C684,526.745166 694.745166,516 708,516 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 1</title>\r\n    <g id=\"Eyes/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Group\" transform=\"translate(546.000000, 509.000000)\">\r\n            <path d=\"M24,7 C37.254834,7 48,17.745166 48,31 C48,44.254834 37.254834,55 24,55 C10.745166,55 0,44.254834 0,31 C0,17.745166 10.745166,7 24,7 Z M162,7 C175.254834,7 186,17.745166 186,31 C186,44.254834 175.254834,55 162,55 C148.745166,55 138,44.254834 138,31 C138,17.745166 148.745166,7 162,7 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n            <g id=\"Path\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\">\r\n                <path d=\"M0,7 C8,2.33333333 16,0 24,0 C32,0 40,2.33333333 48,7\"></path>\r\n                <path d=\"M138,7 C146,2.33333333 154,0 162,0 C170,0 178,2.33333333 186,7\"></path>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 10</title>\r\n    <g id=\"Eyes/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Group\" transform=\"translate(520.000000, 512.000000)\">\r\n            <g transform=\"translate(140.000000, 0.000000)\">\r\n                <circle id=\"Oval\" fill=\"#000000\" cx=\"52\" cy=\"28\" r=\"24\"></circle>\r\n                <path d=\"M1,16 C24.2727273,8 41.7272727,4 53.3636364,4 C65,4 79.5454545,8 97,16\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"translate(49.000000, 10.000000) rotate(-4.000000) translate(-49.000000, -10.000000) \"></path>\r\n            </g>\r\n            <g>\r\n                <circle id=\"Oval\" fill=\"#000000\" transform=\"translate(46.000000, 28.000000) scale(-1, 1) translate(-46.000000, -28.000000) \" cx=\"46\" cy=\"28\" r=\"24\"></circle>\r\n                <path d=\"M1,16 C24.2727273,8 41.7272727,4 53.3636364,4 C65,4 79.5454545,8 97,16\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"translate(49.000000, 10.000000) scale(-1, 1) rotate(-4.000000) translate(-49.000000, -10.000000) \"></path>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 2</title>\r\n    <g id=\"Eyes/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M570,516 C587.673112,516 602,530.326888 602,548 C602,565.673112 587.673112,580 570,580 C552.326888,580 538,565.673112 538,548 C538,530.326888 552.326888,516 570,516 Z M708,516 C725.673112,516 740,530.326888 740,548 C740,565.673112 725.673112,580 708,580 C690.326888,580 676,565.673112 676,548 C676,530.326888 690.326888,516 708,516 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 3</title>\r\n    <g id=\"Eyes/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(533.944954, 540.730159)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <path d=\"M146.275229,-1.43884904e-13 C159.958467,9.35202544 170.38232,14.8216846 177.546789,16.4089776 C184.711258,17.9962705 196.232359,17.3885306 212.110092,14.5857578\" id=\"Path\" transform=\"translate(179.192661, 8.634921) scale(-1, 1) translate(-179.192661, -8.634921) \"></path>\r\n            <path d=\"M6.39488462e-14,-1.43884904e-13 C13.6832373,9.35202544 24.1070905,14.8216846 31.2715596,16.4089776 C38.4360288,17.9962705 49.9571297,17.3885306 65.8348624,14.5857578\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 4</title>\r\n    <g id=\"Eyes/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M570,516 C583.254834,516 594,526.745166 594,540 C594,553.254834 583.254834,564 570,564 C556.745166,564 546,553.254834 546,540 C546,526.745166 556.745166,516 570,516 Z M708,516 C721.254834,516 732,526.745166 732,540 C732,553.254834 721.254834,564 708,564 C694.745166,564 684,553.254834 684,540 C684,526.745166 694.745166,516 708,516 Z M562,526 C558.686292,526 556,528.686292 556,532 C556,535.313708 558.686292,538 562,538 C565.313708,538 568,535.313708 568,532 C568,528.686292 565.313708,526 562,526 Z M700,526 C696.686292,526 694,528.686292 694,532 C694,535.313708 696.686292,538 700,538 C703.313708,538 706,535.313708 706,532 C706,528.686292 703.313708,526 700,526 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 5</title>\r\n    <g id=\"Eyes/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Group\" transform=\"translate(538.000000, 507.000000)\">\r\n            <g transform=\"translate(138.000000, 0.000000)\">\r\n                <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" cx=\"32\" cy=\"32\" r=\"32\"></circle>\r\n                <path d=\"M4,18 C13.3333333,20.6666667 22.6666667,22 32,22 C41.3333333,22 50.6666667,20.6666667 60,18\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                <circle id=\"Oval\" fill=\"#000000\" cx=\"32\" cy=\"28\" r=\"10\"></circle>\r\n            </g>\r\n            <g transform=\"translate(0.000000, 1.000000)\">\r\n                <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" cx=\"32\" cy=\"32\" r=\"32\"></circle>\r\n                <path d=\"M4,18 C13.3333333,20.6666667 22.6666667,22 32,22 C41.3333333,22 50.6666667,20.6666667 60,18\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n                <circle id=\"Oval\" fill=\"#000000\" cx=\"32\" cy=\"28\" r=\"10\"></circle>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 6</title>\r\n    <g id=\"Eyes/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Group\" transform=\"translate(518.000000, 518.575690)\">\r\n            <circle id=\"Oval\" fill=\"#000000\" cx=\"48.2285714\" cy=\"20\" r=\"20\"></circle>\r\n            <path d=\"M0,22.4243101 C16,9.09097677 32,2.42431011 48,2.42431011 C64,2.42431011 80,9.09097677 96,22.4243101\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n            <circle id=\"Oval\" fill=\"#000000\" transform=\"translate(193.771429, 20.000000) scale(-1, 1) translate(-193.771429, -20.000000) \" cx=\"193.771429\" cy=\"20\" r=\"20\"></circle>\r\n            <path d=\"M146,22.4243101 C162,9.09097677 178,2.42431011 194,2.42431011 C210,2.42431011 226,9.09097677 242,22.4243101\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"translate(194.000000, 12.424310) scale(-1, 1) translate(-194.000000, -12.424310) \"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 7</title>\r\n    <g id=\"Eyes/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M570,516 C578.836556,516 586,526.745166 586,540 C586,553.254834 578.836556,564 570,564 C561.163444,564 554,553.254834 554,540 C554,526.745166 561.163444,516 570,516 Z M708,516 C716.836556,516 724,526.745166 724,540 C724,553.254834 716.836556,564 708,564 C699.163444,564 692,553.254834 692,540 C692,526.745166 699.163444,516 708,516 Z M568,527 C564.686292,527 562,529.686292 562,533 C562,536.313708 564.686292,539 568,539 C571.313708,539 574,536.313708 574,533 C574,529.686292 571.313708,527 568,527 Z M706,527 C702.686292,527 700,529.686292 700,533 C700,536.313708 702.686292,539 706,539 C709.313708,539 712,536.313708 712,533 C712,529.686292 709.313708,527 706,527 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 8</title>\r\n    <g id=\"Eyes/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M570,516 C578.836556,516 586,526.745166 586,540 C586,553.254834 578.836556,564 570,564 C561.163444,564 554,553.254834 554,540 C554,526.745166 561.163444,516 570,516 Z M708,516 C716.836556,516 724,526.745166 724,540 C724,553.254834 716.836556,564 708,564 C699.163444,564 692,553.254834 692,540 C692,526.745166 699.163444,516 708,516 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Eyes/ 9</title>\r\n    <g id=\"Eyes/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M570,507 C575.854822,507 581.122051,511.025253 584.779642,517.440484 L578,531 L589.369946,531.000208 C589.781247,533.557105 590,536.237678 590,539 C590,556.673112 581.045695,571 570,571 C558.954305,571 550,556.673112 550,539 C550,521.326888 558.954305,507 570,507 Z M708,507 C713.854822,507 719.122051,511.025253 722.779642,517.440484 L716,531 L727.369946,531.000208 C727.781247,533.557105 728,536.237678 728,539 C728,556.673112 719.045695,571 708,571 C696.954305,571 688,556.673112 688,539 C688,521.326888 696.954305,507 708,507 Z\" id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 0</title>\r\n    <g id=\"Face/-0\" stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 664.54834,859 532,859 C435.13263,859 351.668898,801.612202 313.752775,718.980575 L313.322946,718.989282 L312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 1</title>\r\n    <g id=\"Face/-1\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 664.54834,879 532,879 C435.13263,879 351.668898,801.612202 313.752775,718.980575 L313.322946,718.989282 L312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 10</title>\r\n    <g id=\"Face/-10\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 684.54834,899 592,899 C535.13263,899 351.668898,801.612202 313.752775,718.980575 L313.322946,718.989282 L312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 2</title>\r\n    <g id=\"Face/-2\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 664.54834,899 532,899 C432.699202,899 347.483933,816.242653 310.982017,718.993409 C267.268677,718.448846 232,682.843144 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 3</title>\r\n    <g id=\"Face/-3\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 704.54834,899 532,899 C402.610491,899 332.317998,816.086314 305.249034,718.717925 C264.225797,715.291578 232,680.909158 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 4</title>\r\n    <g id=\"Face/-4\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 764.54834,899 592,899 C462.715227,899 358.747776,816.220491 314.739381,718.954345 C313.831676,718.98455 312.917642,719 312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 5</title>\r\n    <g id=\"Face/-5\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 704.54834,859 532,859 C405.842528,859 335.866563,801.559592 307.358668,718.866959 C265.336704,716.464588 232,681.625396 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 6</title>\r\n    <g id=\"Face/-6\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 764.54834,899 532,899 C402.610491,899 332.317998,816.086314 305.249034,718.717925 C264.225797,715.291578 232,680.909158 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 7</title>\r\n    <g id=\"Face/-7\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 764.54834,919 572,919 C415.13263,919 351.668898,801.612202 313.752775,718.980575 L313.322946,718.989282 L312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 8</title>\r\n    <g id=\"Face/-8\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 724.54834,899 592,899 C492.560218,899 373.476049,816.010833 320.189513,718.584987 C317.498129,718.859681 314.765451,719 312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Face/ 9</title>\r\n    <g id=\"Face/-9\" stroke=\"none\" stroke-width=\"1\"  fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,379 C664.54834,379 772,486.45166 772,619 C772,751.54834 704.54834,919 592,919 C506.683174,919 378.324367,822.776611 321.205121,718.475443 C318.188736,718.821948 315.115161,719 312,719 C267.81722,719 232,683.18278 232,639 C232,599.134956 261.158843,566.080325 299.312086,560.00055 C325.599297,455.979213 419.809919,379 532,379 Z M295.858895,624.545187 L304.141105,655.454813\" id=\"Path\" stroke=\"#000000\" stroke-width=\"24\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 0</title>\r\n    <g id=\"Glasses/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"></g>\r\n</svg>");

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 1</title>\r\n    <g id=\"Glasses/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(293.311103, 479.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <circle id=\"Oval\" cx=\"272.688897\" cy=\"60\" r=\"60\"></circle>\r\n            <circle id=\"Oval\" cx=\"416.688897\" cy=\"60\" r=\"60\"></circle>\r\n            <path d=\"M368.688897,13 C360.688897,7.66666667 352.688897,5 344.688897,5 C336.688897,5 328.688897,7.66666667 320.688897,13\" id=\"Path\"></path>\r\n            <line x1=\"216.688897\" y1=\"36\" x2=\"1\" y2=\"79.3393577\" id=\"Path\" transform=\"translate(108.844448, 57.669679) rotate(1.361411) translate(-108.844448, -57.669679) \"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 10</title>\r\n    <g id=\"Glasses/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Group\" transform=\"translate(289.000000, 475.000000)\" fill=\"#000000\">\r\n            <rect id=\"Rectangle\" x=\"201\" y=\"0\" width=\"300\" height=\"23.4\"></rect>\r\n            <path d=\"M329.571429,0 L370.642857,0 L370.642857,50.7333333 C363.797619,41.4888889 356.952381,36.8666667 350.107143,36.8666667 C343.261905,36.8666667 336.416667,41.4888889 329.571429,50.7333333 L329.571429,0 Z\" id=\"Rectangle\"></path>\r\n            <path d=\"M209.035714,16.4666667 L226.635493,91.6470116 C228.329435,98.8829668 234.782715,104 242.214302,104 L295.809254,104 C302.413177,104 308.338607,99.9426587 310.726587,93.7856009 L340.714286,16.4666667 L340.714286,16.4666667 L209.035714,16.4666667 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\r\n            <path d=\"M359.5,16.4666667 L377.099778,91.6470116 C378.793721,98.8829668 385.247,104 392.678588,104 L446.273539,104 C452.877463,104 458.802893,99.9426587 461.190872,93.7856009 L491.178571,16.4666667 L491.178571,16.4666667 L359.5,16.4666667 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"translate(425.339286, 60.233333) scale(-1, 1) translate(-425.339286, -60.233333) \"></path>\r\n            <polygon id=\"Path\" stroke=\"#000000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" points=\"201 2 4 66 0 75 201 22\"></polygon>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 2</title>\r\n    <g id=\"Glasses/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M574.189838,502.353993 C586.612079,503.247679 601.018598,506.362134 617.409394,511.697357 C622.107339,513.226543 629.521032,514.112461 639.650474,514.355109 L640.336909,514.337568 C650.115498,514.071859 657.30038,513.191789 661.891553,511.697357 C678.282349,506.362134 692.688868,503.247679 705.11111,502.353993 C722.696433,501.088862 751.030506,503.214809 790.113329,508.731836 L791.300947,508.900056 L791.300947,529.629258 C786.297933,531.828279 783.752241,534.010301 783.663873,536.175322 C781.481852,589.634841 763.639862,606 723.65829,606 C685.15235,606 666.860184,585.095985 650.56058,541.630375 C648.424017,535.932875 644.892754,533.024776 639.966791,532.906078 L639.650474,532.90229 C634.559091,532.90229 630.922389,535.811651 628.740368,541.630375 C612.440763,585.095985 594.148598,606 555.642657,606 C515.661085,606 497.819095,589.634841 495.637074,536.175322 C495.548712,534.010446 493.003357,531.828573 488.00101,529.629702 L488,530 L289,550 L293,541 L487.999,509 L488,508.900056 C527.696939,503.258104 556.426885,501.076083 574.189838,502.353993 Z M564.611618,508.971486 C532.97231,506.789465 518.789172,513.335528 512.243109,520.972603 C505.697045,528.609677 493.695928,595.161324 551.51949,598.434355 C609.343052,601.707387 614.798105,534.06473 611.525073,526.427656 C608.252042,518.790581 596.250925,511.153507 564.611618,508.971486 Z M714.580942,508.971486 C682.941634,511.153507 670.940518,518.790581 667.667486,526.427656 C664.394454,534.06473 669.849507,601.707387 727.673069,598.434355 C785.496631,595.161324 773.495514,528.609677 766.949451,520.972603 C760.403387,513.335528 746.220249,506.789465 714.580942,508.971486 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"4\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 3</title>\r\n    <g id=\"Glasses/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(293.000000, 488.000000)\" stroke=\"#000000\" stroke-width=\"8\">\r\n            <path d=\"M197.493245,10.4280671 C174.636102,27.3582996 188.604356,103.544346 244.477372,103.544346 C300.350388,103.544346 337.149222,42.6997481 325.747213,20.1024857 C314.345204,-2.49477675 220.350388,-6.50216547 197.493245,10.4280671 Z\" id=\"Path\"></path>\r\n            <path d=\"M376.540864,10.4280671 C353.683721,27.3582996 367.651975,103.544346 423.524991,103.544346 C479.398007,103.544346 516.196841,42.6997481 504.794832,20.1024857 C493.392823,-2.49477675 399.398007,-6.50216547 376.540864,10.4280671 Z\" id=\"Path\" transform=\"translate(436.458153, 51.772173) scale(-1, 1) translate(-436.458153, -51.772173) \"></path>\r\n            <line x1=\"301.285714\" y1=\"5.44186047\" x2=\"392.714286\" y2=\"5.44186047\" id=\"Path\"></line>\r\n            <line x1=\"326.68254\" y1=\"21.1627907\" x2=\"367.31746\" y2=\"21.1627907\" id=\"Path\"></line>\r\n            <line x1=\"186.554557\" y1=\"30.8015819\" x2=\"1.25992802\" y2=\"69.9860126\" id=\"Path\" transform=\"translate(94.259928, 50.646655) rotate(1.361411) translate(-94.259928, -50.646655) \"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 4</title>\r\n    <g id=\"Glasses/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(289.000000, 479.000000)\" fill=\"#000000\" stroke=\"#000000\" stroke-width=\"4\">\r\n            <path d=\"M229.149255,4.2334278 C247.672154,8.12981325 283.261021,21.6236388 324.690343,35.0615291 L325.464481,35.3078466 C331.11768,37.0729902 339.032765,38.8353007 349.209737,40.594778 L349.209737,57.984989 C344.161954,60.5093754 341.061801,62.8807678 339.909277,65.0991662 C325.535839,92.7654109 298.479956,110.946086 257.050634,101.460516 C200.767297,88.5740028 181.801459,20.8331746 180.110466,9.76667675 C178.419474,-1.29982114 196.205221,-2.69651627 229.149255,4.2334278 Z M519.889534,9.76667675 C518.198541,20.8331746 499.232703,88.5740028 442.949366,101.460516 C401.520044,110.946086 374.464161,92.7654109 360.090723,65.0991662 C358.969348,62.9407245 356.004199,60.637447 351.195275,58.1893337 L350.790263,57.984989 L350.790263,40.594778 L352.195626,40.3492512 C362.16219,38.5895103 369.866867,36.8269363 375.309657,35.0615291 L377.788318,34.2552658 C418.155707,21.0877247 452.698304,8.05188555 470.850745,4.2334278 L472.809163,3.82763387 C504.498419,-2.63678054 521.546707,-1.07849118 519.889534,9.76667675 Z M213.93032,27.1568877 C197.020393,46.9184911 229.149255,89.6035544 261.278116,97.5081958 C293.406978,105.412837 334.836299,80.9084489 327.226832,57.984989 C319.617364,35.0615291 239.295211,8.97621262 213.93032,27.1568877 Z M486.06968,27.1568877 C460.704789,8.97621262 380.382636,35.0615291 372.773168,57.984989 C365.163701,80.9084489 406.593022,105.412837 438.721884,97.5081958 C470.850745,89.6035544 502.979607,46.9184911 486.06968,27.1568877 Z\" id=\"Combined-Shape\"></path>\r\n            <polygon id=\"Path\" points=\"199 30 4 62 0 71 199 51\"></polygon>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 5</title>\r\n    <g id=\"Glasses/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(289.000000, 500.000000)\" stroke=\"#000000\">\r\n            <path d=\"M339.818182,40.2109589 C338.074175,42.9080712 336.862054,47.8943725 336.181818,55.169863 L327.454545,55.169863 C324.545455,28.1013699 305.393939,14.0922374 270,13.1424658 C240.424242,11.2429224 222.727273,23.1150685 216.909091,48.7589041 L205.272727,48.7589041 L190,33.8 L190,10.2931507 C222.484848,2.22009132 249.151515,-1.10410959 270,0.320547945 C285.225486,1.36096427 303.25963,5.13798521 324.62746,9.93254373 L332.545455,11.7178082 C336.214681,12.54746 342.032863,13.4972317 350,14.5671233 L352.073632,14.2846662 C358.984501,13.3293325 364.111473,12.4737132 367.454545,11.7178082 L376.341511,9.71531602 C397.286215,5.02415827 415.005203,1.34520038 430,0.320547945 C450.64,-1.08986301 476.9824,2.15408219 509.0272,10.0523836 L510,10.2931507 L510,33.8 L494.727273,48.7589041 L483.090909,48.7589041 C477.272727,23.1150685 459.575758,11.2429224 430,13.1424658 C394.96,14.0827397 375.8392,27.8224932 372.6376,54.361726 L372.545455,55.169863 L363.818182,55.169863 L363.730382,54.2723496 C363.036013,47.4828217 361.853158,42.7956915 360.181818,40.2109589 C358.482529,37.5830034 355.216835,35.4868176 350.384736,33.9224017 L350,33.8 C344.956128,35.3768603 341.562189,37.5138466 339.818182,40.2109589 Z\" id=\"Path\" stroke-width=\"4\" fill=\"#000000\"></path>\r\n            <path d=\"M216.909091,48.4383562 C216.909091,85.4794521 234.606061,104 270,104 C305.393939,104 324.545455,87.6164384 327.454545,54.8493151\" id=\"Path\" stroke-width=\"6\"></path>\r\n            <path d=\"M372.545455,48.4383562 C372.545455,85.4794521 390.242424,104 425.636364,104 C461.030303,104 480.181818,87.6164384 483.090909,54.8493151\" id=\"Path\" stroke-width=\"6\" transform=\"translate(427.818182, 76.219178) scale(-1, 1) translate(-427.818182, -76.219178) \"></path>\r\n            <polygon id=\"Path\" stroke-width=\"4\" fill=\"#000000\" points=\"199 9 4 41 0 50 199 30\"></polygon>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 6</title>\r\n    <g id=\"Glasses/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(289.000000, 489.000000)\" fill=\"#000000\" stroke=\"#000000\" stroke-width=\"4\">\r\n            <path d=\"M507.197382,9.82478969 C513.43226,17.7007378 515.213654,62.5936419 486.711355,88.5842707 C469.404358,104.366146 429.38069,108.487745 402.985851,98.8230032 C386.082673,92.6337314 377.827731,74.7226245 375.444668,70.5905602 L375.374248,70.46959 C367.818365,57.6210186 359.693569,48.7969114 350.999861,43.9972684 C342.444422,48.7207266 334.439709,57.3419022 326.985986,69.8607952 L326.625752,70.46959 C324.338153,74.359588 316.088066,92.5712135 299.014149,98.8230032 C272.61931,108.487745 232.595642,104.366146 215.288645,88.5842707 C186.786346,62.5936419 188.56774,17.7007378 194.802618,9.82478969 C201.037496,1.94884159 243.790945,-3.56432208 278.528122,2.7364364 C313.265299,9.03719488 328.491531,25.281971 335.53272,27.9394703 C339.929408,29.5988766 344.89638,30.3949699 350.433636,30.3277503 L350.434736,30.3022547 L351,30.3179093 L351.565264,30.3022547 L351.566163,30.3277478 C357.1035,30.3949891 362.070539,29.5988966 366.46728,27.9394703 C373.508469,25.281971 388.734701,9.03719488 423.471878,2.7364364 C458.209055,-3.56432208 500.962504,1.94884159 507.197382,9.82478969 Z M209.053767,15.3379534 C189.458437,28.7270651 207.272374,75.1951589 225.977008,88.5842707 C244.681642,101.973382 289.216484,98.8230032 299.904846,91.7346499 C310.593209,84.6462966 334.642023,53.930099 326.625752,34.2402288 C318.60948,14.5503585 237.556067,1.16124678 209.053767,15.3379534 Z M492.946233,15.3379534 C464.443933,1.16124678 383.39052,14.5503585 375.374248,34.2402288 C367.357977,53.930099 391.406791,84.6462966 402.095154,91.7346499 C412.783516,98.8230032 457.318358,101.973382 476.022992,88.5842707 C494.727626,75.1951589 512.541563,28.7270651 492.946233,15.3379534 Z\" id=\"Combined-Shape\"></path>\r\n            <polygon id=\"Path\" points=\"199 20 4 52 0 61 199 41\"></polygon>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 7</title>\r\n    <g id=\"Glasses/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(289.000000, 502.000000)\" fill=\"#000000\" stroke=\"#000000\" stroke-width=\"4\">\r\n            <path d=\"M339.740368,39.6303745 C323.440763,83.0959855 305.148598,104 266.642657,104 C226.661085,104 208.819095,87.634841 206.637074,34.1753215 C206.548706,32.0103005 204.003015,29.8282793 199,27.6292579 L199,6.90005646 C238.696939,1.25810378 267.426885,-0.923917428 285.189838,0.353992852 C297.612079,1.2476793 312.018598,4.36213391 328.409394,9.69735669 C333.107339,11.2265431 340.521032,12.1124607 350.650474,12.3551095 L351.336909,12.3375684 C361.115498,12.0718595 368.30038,11.1917889 372.891553,9.69735669 C389.282349,4.36213391 403.688868,1.2476793 416.11111,0.353992852 C433.874063,-0.923917428 462.604008,1.25810378 502.300947,6.90005646 L502.300947,6.90005646 L502.300947,27.6292579 C497.297933,29.8282793 494.752241,32.0103005 494.663873,34.1753215 C492.481852,87.634841 474.639862,104 434.65829,104 C396.15235,104 377.860184,83.0959855 361.56058,39.6303745 C359.378558,33.8116513 355.741856,30.9022897 350.650474,30.9022897 L350.650474,30.9022897 C345.559091,30.9022897 341.922389,33.8116513 339.740368,39.6303745 Z\" id=\"Combined-Shape\"></path>\r\n            <polygon id=\"Path\" points=\"199 7 4 39 0 48 199 28\"></polygon>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 8</title>\r\n    <g id=\"Glasses/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(293.000000, 475.000000)\" stroke=\"#000000\">\r\n            <path d=\"M328.31869,48.9411765 C333.965749,25.4117647 327.377514,0 252.083396,0 C176.789279,0 173.024573,30.1176471 170.201043,48.9411765 C167.377514,67.7647059 157.024573,140.235294 227.612808,143.058824 C298.201043,145.882353 322.671631,72.4705882 328.31869,48.9411765 Z\" id=\"Path\" stroke-width=\"8\" fill=\"#0C0C0C\"></path>\r\n            <path d=\"M523.46091,48.9411765 C529.107969,25.4117647 522.519734,3.63797881e-12 447.225616,3.63797881e-12 C371.931498,3.63797881e-12 368.166792,30.1176471 365.343263,48.9411765 C362.519734,67.7647059 352.166792,140.235294 422.755028,143.058824 C493.343263,145.882353 517.813851,72.4705882 523.46091,48.9411765 Z\" id=\"Path\" stroke-width=\"8\" fill=\"#0C0C0C\" transform=\"translate(444.072807, 71.569037) scale(-1, 1) translate(-444.072807, -71.569037) \"></path>\r\n            <line x1=\"301.965749\" y1=\"7.52941176\" x2=\"391.377514\" y2=\"7.52941176\" id=\"Path\" stroke-width=\"8\"></line>\r\n            <path d=\"M301.965749,35.7647059 C317.212807,34.5098039 332.271631,33.8823529 347.14222,33.8823529 C362.012808,33.8823529 376.757907,34.5098039 391.377514,35.7647059\" id=\"Path\" stroke-width=\"8\"></path>\r\n            <line x1=\"217\" y1=\"40\" x2=\"1.3111035\" y2=\"83.3393577\" id=\"Path\" stroke-width=\"16\" transform=\"translate(109.155552, 61.669679) rotate(1.361411) translate(-109.155552, -61.669679) \"></line>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Glasses/ 9</title>\r\n    <g id=\"Glasses/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(289.000000, 466.000000)\" fill=\"#000000\" stroke=\"#000000\" stroke-width=\"4\">\r\n            <path d=\"M229.149255,5.21037268 C247.672154,10.005924 283.261021,26.6137093 324.690343,43.1526512 L325.464481,43.4558112 C331.11768,45.6282957 339.032765,47.7972932 349.209737,49.9628037 L349.209737,71.3661403 C344.161954,74.4730774 341.061801,77.3917142 339.909277,80.1220507 C325.535839,114.172813 298.479956,136.549029 257.050634,124.874482 C200.767297,109.014157 181.801459,25.6408303 180.110466,12.0205252 C178.419474,-1.59977987 196.205221,-3.31878925 229.149255,5.21037268 Z M470.850745,5.21037268 L472.809163,4.710934 C504.498419,-3.24526836 521.546707,-1.32737377 519.889534,12.0205252 C518.198541,25.6408303 499.232703,109.014157 442.949366,124.874482 C401.520044,136.549029 374.464161,114.172813 360.090723,80.1220507 C358.969348,77.4655071 356.004199,74.630704 351.195275,71.6176415 L350.790263,71.3661403 L350.790263,49.9628037 L352.195626,49.6606168 C362.16219,47.4947819 369.866867,45.3254601 375.309657,43.1526512 L377.788318,42.1603271 C418.155707,25.9541227 452.698304,9.91001298 470.850745,5.21037268 Z\" id=\"Combined-Shape\"></path>\r\n            <polygon id=\"Path\" points=\"199 43 4 75 0 84 199 64\"></polygon>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 0</title>\r\n    <g id=\"Hairstyle/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"></g>\r\n</svg>");

/***/ }),

/***/ 6608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 1</title>\r\n    <g id=\"Hairstyle/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M287.145773,564.824988 L328.116663,564.824988 L366,655 C383.576343,574.554316 392.364515,528.467337 392.364515,516.739062 C392.364515,505.010788 388.008266,481.271891 379.295767,445.522372 C393.491567,432.443591 404.392978,426.6028 412,428 C428.104379,430.95793 511.120052,457.788685 550.69367,460.998791 C604.369062,465.352796 671.588059,451.214009 697.999909,444.579207 C752.614423,430.859736 776.998449,384.728522 771.151988,306.185566 C744.360446,317.004973 718.309783,320.518315 693,316.725594 C655.035325,311.036511 598.649235,281.115006 554.702003,272.17357 C493.291099,259.679002 449.510289,258.16557 427.437429,265.136605 C385.349932,278.42865 355.621462,323.201887 338.252019,399.456316 C304.849244,410.402706 284.139523,426.431348 276.122857,447.542242 C268.106191,468.653136 271.780496,507.747385 287.145773,564.824988 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 10</title>\r\n    <g id=\"Hairstyle/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M372.389019,247.786108 C470.684335,198.180121 573.70651,196.436019 608.362378,256.461743 C610.594634,260.328124 612.477899,264.333125 614.022301,268.457607 C631.340767,263.485869 647,261 661,261 C682,261 743,269 760,290 C777,311 777,343 753,387 C737,416.333333 714,434 684,440 C625.671273,414 577.671273,401 540,401 C502.328727,401 464.662061,403.666667 427,409 C427.442658,419.124205 429.109325,429.457538 432,440 C434.890675,450.542462 438.890675,460.875795 444,471 C418.42303,487.163731 403.86212,499.704664 400.317272,508.622798 C395,522 390.731457,594.198681 386.316755,653.134075 L386.17725,655 L366.146153,655 L328.203914,564.824988 L287.169322,564.824988 C280.297784,539.338819 275.760795,517.438139 273.558355,499.122947 C267.794015,498.334154 260.905776,498.267484 252.894736,498.92407 L252,499 L242.594545,455.98087 L211.196591,446.233717 C244.398864,351.411239 298.129673,285.262036 372.389019,247.786108 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 11</title>\r\n    <g id=\"Hairstyle/-11\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M287.145773,564.824988 L328.116663,564.824988 L366,655 C368,609 370.666667,578.666667 374,564 C377.333333,549.333333 386,536 400,524 C404.686858,511.205454 408.020191,498.538788 410,486 C411.979809,473.461212 412.646475,460.794546 412,448 C431.277968,442.027683 448.944635,435.027683 465,427 C481.055365,418.972317 496.055365,409.638984 510,399 C541.018923,414.567133 564.018923,423.900467 579,427 C598.333333,431 625.666667,431 661,427 C677,435 690.333333,444.666667 701,456 C711.666667,467.333333 719.333333,477 724,485 C739.337022,483.068501 749.003689,474.068501 753,458 C758.994467,433.897248 749.308457,421.45399 753,385 C755.461029,360.69734 761.794362,334.364006 772,306 C756.671455,311.760083 745.671455,315.093417 739,316 C713.953321,319.403591 695.432317,316 684,316 C636.89228,316 645,282 615,272 C595,265.333333 574.900668,265.39119 554.702003,272.17357 C537.058392,259.349997 518.824391,250.958807 500,247 C481.175609,243.041193 457.508942,242.041193 429,244 C432.618992,252.559514 429.952325,263.892847 421,278 C407.571512,299.160729 404,300 392,311 C380,322 362,318 347,335 C337,346.333333 333,359.666667 335,375 C327.529566,375.74088 320.196232,377.74088 313,381 C305.803768,384.25912 299.470434,389.592453 294,397 C316.094259,401.247038 325.477218,404.098045 322.148877,405.553022 C298.10323,416.064523 271.638366,440.518688 265,458 C256.983334,479.110894 264.365258,514.719224 287.145773,564.824988 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 12</title>\r\n    <g id=\"Hairstyle/-12\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M287.145773,564.824988 L328.116663,564.824988 L366,655 C383.576343,574.554316 392.364515,528.467337 392.364515,516.739062 C392.364515,499.14665 355.591535,476.044745 379.295767,445.522372 C403,415 437.22161,410.877439 476,418 C525,427 543,431 583,429 C609.666667,427.666667 645.666667,418.666667 691,402 C642.333333,341.333333 575,313.333333 489,318 C360,325 288.147856,415.875901 276.122857,447.542242 C268.106191,468.653136 271.780496,507.747385 287.145773,564.824988 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 13</title>\r\n    <g id=\"Hairstyle/-13\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(266.170240, 340.000000)\" stroke=\"#000000\" stroke-width=\"12\">\r\n            <path d=\"M20.9755327,224.824988 L61.9464226,224.824988 L99.82976,315 C117.406103,234.554316 126.194275,188.467337 126.194275,176.739062 C126.194275,159.14665 89.4212949,136.044745 113.125527,105.522372 C124.789561,90.5033682 139.00015,81.8765075 155.047131,77.8362154 C171.611628,73.6656236 192.82976,42 154.82976,25 C116.82976,8 8.82976,56 0.829760002,115 C-2.50467269,139.591441 4.21058488,176.19977 20.9755327,224.824988 Z\" id=\"Path\" fill=\"#000000\"></path>\r\n            <path d=\"M156.82976,10 C170.163093,11.3333333 180.163093,18.3333333 186.82976,31 C193.496427,43.6666667 193.496427,57 186.82976,71\" id=\"Path\"></path>\r\n            <path d=\"M179.82976,4 C193.163093,5.33333333 203.163093,12.3333333 209.82976,25 C216.496427,37.6666667 216.496427,51 209.82976,65\" id=\"Path\"></path>\r\n            <path d=\"M202.82976,0 C216.163093,1.33333333 226.163093,8.33333333 232.82976,21 C239.496427,33.6666667 239.496427,47 232.82976,61\" id=\"Path\"></path>\r\n            <path d=\"M225.82976,0 C239.163093,1.33333333 249.163093,8.33333333 255.82976,21 C262.496427,33.6666667 262.496427,47 255.82976,61\" id=\"Path\"></path>\r\n            <path d=\"M248.82976,0 C262.163093,1.33333333 272.163093,8.33333333 278.82976,21 C285.496427,33.6666667 285.496427,47 278.82976,61\" id=\"Path\"></path>\r\n            <path d=\"M271.82976,0 C285.163093,1.33333333 295.163093,8.33333333 301.82976,21 C308.496427,33.6666667 308.496427,47 301.82976,61\" id=\"Path\"></path>\r\n            <path d=\"M294.82976,4 C308.163093,5.33333333 318.163093,12.3333333 324.82976,25 C331.496427,37.6666667 331.496427,51 324.82976,65\" id=\"Path\"></path>\r\n            <path d=\"M317.82976,6 C331.163093,7.33333333 341.163093,14.3333333 347.82976,27 C354.496427,39.6666667 354.496427,53 347.82976,67\" id=\"Path\"></path>\r\n            <path d=\"M355.82976,51 L352.82976,22 C366.163093,23.3333333 376.163093,30.3333333 382.82976,43 C387.885083,52.6051144 389.106963,62.5935731 386.495398,72.9653763 L355.82976,51 Z\" id=\"Path\" fill=\"#000000\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 14</title>\r\n    <g id=\"Hairstyle/-14\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M680,270 L679.806266,273.160795 L679.609741,276.222241 C676.345951,325.933738 670.441789,361.331655 661.897254,382.415992 L665,379 C669.818582,386.792186 673.818582,395.125519 677,404 C680.036808,412.471095 682.300877,421.360277 683.792209,430.667546 L684,432 L647.608374,403.073582 L646.227511,404.133406 C623.904333,421.217179 612.675037,427.272787 580,434 C546,441 506.08243,434.920906 459.455985,426.268797 L451.257015,424.759716 L448.245051,424.21248 L445.41424,423.708943 C415.372753,418.440663 400.260881,418.526982 379.295767,445.522372 C355.591535,476.044745 392.364515,499.14665 392.364515,516.739062 C392.364515,528.232771 383.924355,572.72458 367.044035,650.214489 L366,655 L328.116663,564.824988 L287.145773,564.824988 C271.780496,507.747385 268.106191,468.653136 276.122857,447.542242 L276.870382,445.586062 L277.654986,443.563497 C290.903153,409.703973 325.666429,336.148175 426,325 L435.080765,323.995517 C514.214015,315.281244 517.115218,315.984459 542.209426,309.027564 L547.418732,306.77818 C558.682042,301.897336 567.859264,297.801723 574.951761,294.49076 L579.663186,292.275583 C592.167897,286.37506 607.613502,278.949866 626,270 L613.81,288.755 L680,270 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 15</title>\r\n    <g id=\"Hairstyle/-15\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M287.145773,564.824988 L328.116663,564.824988 L366,655 C370.666667,589.394941 373,550.728275 373,539 C373,521.407588 342.295767,484.522372 366,454 C377.664033,438.980996 400.953019,418.040292 417,414 C433.564497,409.829408 298,383 268,471 C248,529.666667 254.381924,560.941663 287.145773,564.824988 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 16</title>\r\n    <g id=\"Hairstyle/-16\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M680,270 L679.806266,273.160795 L679.609741,276.222241 C676.345951,325.933738 670.441789,361.331655 661.897254,382.415992 L665,379 C669.818582,386.792186 673.818582,395.125519 677,404 C680.036808,412.471095 682.300877,421.360277 683.792209,430.667546 L684,432 L647.608374,403.073582 L646.227511,404.133406 C623.904333,421.217179 596,424 566,426 C536,428 482,398 432,417 L429.971262,417.77676 C397.704706,430.224906 374.714286,443.632653 361,458 C356.333333,428 357.666667,403.666667 365,385 C379.510786,348.063453 390,343 418,330 C438.058836,320.686969 480.244847,317.524486 511.786457,313.921997 L513.399437,313.238049 C525.910091,307.918682 535.498317,303.497614 542.163934,299.974359 C550.727737,295.447778 560.673092,289.122991 572,281 L565.694485,298.726128 L568.187462,297.600041 C570.620882,296.496371 572.875637,295.459949 574.951761,294.49076 L579.663186,292.275583 L586.160616,289.198266 C597.398123,283.857643 610.677918,277.458221 626,270 L613.81,288.755 L680,270 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 17</title>\r\n    <g id=\"Hairstyle/-17\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M689,291 C695,322.333333 698,353.666667 698,385 C698,416.333333 693.333333,434.666667 684,440 C640.666667,406 587.666667,389 525,389 C431,389 374.714286,443.632653 361,458 C356.333333,428 353.666667,417.666667 361,399 C375.510786,362.063453 397,357 425,344 C445.058836,334.686969 505.097784,322.392379 561,306 C598.268144,295.071747 640.93481,290.071747 689,291 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 18</title>\r\n    <g id=\"Hairstyle/-18\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M761,317 C805,388 810,450 809.87628,559 C809.820256,606.166783 801.152835,693.83345 783.874017,822 L683.874017,822 C720.956593,800.210827 746.623259,765.877494 760.874017,719 C782.250154,648.68376 783.874017,605 771.874017,552 C763.874017,516.666667 680.53461,482.720366 649,454 C627.976927,434.85309 609.643593,413.519756 594,390 C562,440 525.333333,478 484,504 C422,543 382.003665,540.91532 304,565 C252.666667,579 226.874017,595.666667 226.874017,639 C226.874017,682.333333 252.540684,711 303.874017,725 C313.306229,745.813537 324.306229,763.14687 336.874017,777 C345.12749,786.097578 363.460823,801.097578 391.874017,822 L202.874017,822 C155.937523,605.42859 180.063506,437.761923 227,347 C273.467129,257.145696 375,186 511,186 C647,186 717,246 761,317 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 19</title>\r\n    <g id=\"Hairstyle/-19\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M715,783 C769.666667,772.333333 820.666667,743.333333 868,696 C915.333333,648.666667 953.666667,558.666667 983,426 C929.666667,426.666667 880,414.333333 834,389 C765,351 741,280 661,241 C581,202 461,201 358,253 C255,305 227,380 204,480 C181,580 212,651 253,711 C280.333333,751 326.566025,785.776632 391.698074,815.329897 C380.566025,808.443299 366,794.666667 348,774 C330,753.333333 318,735 312,719 C258.666667,708.333333 232,682 232,640 C232,598 256,573 304,565 C360.331388,536.962528 403.56408,514.405827 433.698074,497.329897 C463.832069,480.253967 510.832069,447.5873 574.698074,399.329897 C565.822413,415.742124 557.155746,428.408791 548.698074,437.329897 C540.240402,446.251003 522.907069,460.584336 496.698074,480.329897 C531.566025,468.776632 557.666667,456.666667 575,444 C592.333333,431.333333 610.333333,416.333333 629,399 C656.534617,398.780069 693.201284,425.780069 739,480 C780.27108,528.859778 794.612271,600.08834 772,683 C764,712.333333 745,745.666667 715,783 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 54:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 2</title>\r\n    <g id=\"Hairstyle/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M636.531474,228.13477 C670.857169,243.665431 725.166891,296.973952 803.404132,362.491755 C816.410437,373.383557 842.942393,382.552972 883,390 C833,450 743,477.333333 613,472 C597.305444,471.356121 543.630254,458.087156 492.399654,439.221249 C490.674088,440.747431 489.403098,442.447013 488.585977,444.319039 C481.862828,459.721787 473.793564,504.295236 452,523 C430.206436,541.704764 398.15684,567.305201 392,580 C387.89544,588.463199 384.89544,616.463199 383,664 C365.62738,629.354885 351.294047,603.688218 340,587 C328.705953,570.311782 314.039287,563.645115 296,567 C252.289371,507.327044 242.173623,447.90566 265.652755,388.735849 C283.709479,343.23106 309.577414,319.996228 343.256562,319.031353 C343.002974,315.496838 343.314634,311.930931 344.17011,308.217487 C349.553099,284.851055 396,239 433,221 C470,203 527.562365,178.831697 636.531474,228.13477 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 20</title>\r\n    <g id=\"Hairstyle/-20\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M232,126 C292.220249,126 344.152059,161.487028 368.024158,212.689811 C410.238527,194.447151 459.304239,186 515,186 C629.125983,186 703.747536,236.594939 747,304 C779.083989,354 792.083989,420.666667 786,504 L782.3412,503.1612 C722.927067,489.4804 680.48,476.76 655,465 L653.4276,464.2712 C627.542533,452.223733 591.733333,433.133333 546,407 C523.282962,464.400495 502.949629,505.067161 485,529 C461,561 425.666667,593 379,625 C368.637704,603.721586 361.637704,590.721586 358,586 C352.543445,578.917621 333.32,563.08 300,567 C277.333333,569.666667 249,596 240,625 C216.02868,569.081696 198.509382,476.747877 207.442105,423.998542 C136.28321,412.281762 82,350.480143 82,276 C82,193.157288 149.157288,126 232,126 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 21</title>\r\n    <g id=\"Hairstyle/-21\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M232,126 C292.220249,126 344.152059,161.487028 368.024158,212.689811 C410.238527,194.447151 459.304239,186 515,186 C629.125983,186 703.747536,236.594939 747,304 C768.389326,337.333333 781.389326,393.666667 786,473 L680,473 L650,408 L650,473 L532,473 L500,392 L503,473 L385,473 C389.666667,493.666667 391,512.333333 389,529 C386,554 361.052092,589.961487 358,586 C352.543445,578.917621 333.32,563.08 300,567 C277.333333,569.666667 249,596 240,625 C216.02868,569.081696 198.509382,476.747877 207.442105,423.998542 C136.28321,412.281762 82,350.480143 82,276 C82,193.157288 149.157288,126 232,126 Z\" id=\"Combined-Shape\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 22</title>\r\n    <g id=\"Hairstyle/-22\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M425,201 C310,212 211,280 158,422 C105,564 161.287214,689.773572 175,784 C184.141857,846.817619 161.141857,921.484285 106,1008 C192.864732,1027.85309 254.864732,1035.51975 292,1031 C329.135268,1026.48025 373.468601,1000.48025 425,953 C420.886316,904.364395 414.552982,870.031062 406,850 C391.145409,815.210588 353.469806,793.84117 344,784 C326.351402,765.6593 313.018068,743.992633 304,719 C256,709.666667 232,683 232,639 C232,573 284,568 304,566 C324,564 340,568 354,587 C363.333333,599.666667 369,610.333333 371,619 C389.482917,586.176997 401.149584,559.510331 406,539 C410.850416,518.489669 410.850416,495.823003 406,471 C464.666667,471 506.666667,464 532,450 C557.333333,436 583,415.333333 609,388 C644.333333,398.666667 672.666667,414 694,434 C715.333333,454 740.333333,491 769,545 C767,451.666667 744.666667,379 702,327 C638,249 540,190 425,201 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 23</title>\r\n    <g id=\"Hairstyle/-23\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M425,196 C310,207 195,273 147,449 C99,625 172,871 181,929 C184.992032,954.726429 206.325365,982.726429 245,1013 C245.200048,1003.91039 246.866714,996.910389 250,992 C254.482715,984.974827 271.149382,995.641493 300,1024 C300.362042,1010.9005 301.362042,1004.23383 303,1004 C312.172314,1002.69058 329.838981,1012.69058 356,1034 C355.842315,1023.20358 356.842315,1017.87025 359,1018 C367.337025,1018.50135 381.003692,1028.83469 400,1049 C410,1020.33333 416,992 418,964 C422.08731,906.777664 371.10908,800.583946 359,788 C341.351402,769.6593 325.684735,746.6593 312,719 C258.666667,709.666667 232,683 232,639 C232,573 284,566 304,566 C324,566 333.617614,574.224729 349,588 C359.254924,597.183514 366.588257,609.516847 371,625 C398.333333,577.666667 416.333333,539.333333 425,510 C433.666667,480.666667 442.666667,442.333333 452,395 C478.180222,414.443429 496.846889,427.443429 508,434 C536.004641,450.463067 558.791358,457.829448 570,463 C576.596672,466.043048 541.16552,393.430455 546,395 C551.379054,396.746345 606.281754,478.779649 611,481 C628,489 649.949411,498.072787 675,504 C691.279294,507.851839 719.279294,511.851839 759,516 C765.666667,418 747.666667,343 705,291 C641,213 540,185 425,196 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 24</title>\r\n    <g id=\"Hairstyle/-24\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M781,289.497769 C798.103709,316.997454 825.17172,336.301089 841,364 C865.890626,407.557684 868.077011,462.61072 868,529 C867.9675,557.017942 882.693139,582.736765 881,600 C876.129956,649.654956 859.837727,658.601446 868,683 C875.333333,704.9207 892,713.587367 918,709 C879.594389,742.832207 847.927723,762.832207 823,769 C798.072277,775.167793 764.738944,778.128143 723,777.88105 C752.333333,741.246882 771.666667,693.702197 781,635.246996 C787.192253,596.464564 768.614679,548.940715 764,528.632681 C756,493.426708 705,479.809303 671,458.884998 C648.333333,444.935462 632.333333,425.339684 623,400.097666 C619.930775,398.204518 609.503486,418.456691 578,448.921044 C556.997676,469.230612 531.664342,481.851621 502,486.784071 C522,461.542053 533.666667,441.282012 537,426.003948 C540.333333,410.725884 536.333333,390.133711 525,364.227429 C527,394.783556 522.333333,421.02197 511,442.942671 C499.666667,464.863371 479.666667,482.466358 451,495.751631 C459.984865,482.167128 463.984865,464.564141 463,442.942671 C462.109292,423.388296 457.109292,400.803332 448,375.187779 C446.738771,415.491033 444.405438,444.386502 441,461.874185 C432.896469,503.487621 336,623.290251 357,653.182115 C371,673.110024 395.666667,683.049319 431,683 C409,700.333333 389,712.333333 371,719 C344,729 285.006413,721.830457 312,729.165808 C321.432212,749.904322 324.306229,752.229245 336.874017,766.032441 C349.254226,779.629619 251,793.931514 185,775 C141,762.378991 111.333333,743.447477 96,718.205458 C119.330285,723.999457 128.663618,723.999457 124,718.205458 C117.31189,709.896266 101.978557,695.282466 78,674.364058 C110.615651,683.475632 131.282317,681.15071 140,667.389289 C157.219175,640.207719 139.708942,582.818574 140,557.52815 C140.291796,532.173599 161.203267,500.097769 173,461.874185 C181.216606,435.25087 180.158048,400.228294 185,385.151734 C209,310.422073 252.196553,275.33175 292,247.649159 C316.914685,230.321438 337,180.890663 393,159.966358 C449,139.042053 472.944616,159.966358 512,159.966358 C529.495144,159.966358 548.056153,149.154015 564,151 C671.997018,163.503936 742.660193,227.854262 781,289.497769 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 25</title>\r\n    <g id=\"Hairstyle/-25\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M227,151 C291,143 344.152059,161.487028 368.024158,212.689811 C410.238527,194.447151 459.304239,186 515,186 C629.125983,186 703.747536,236.594939 747,304 C779.083989,354 792.083989,420.666667 786,504 L782.3412,503.1612 C722.927067,489.4804 699,484 661,460 C635.666667,444 602.333333,419.666667 561,387 C524.333333,437 495.333333,470 474,486 C442,510 357,547 304,565 C251,583 232,598 232,648 C232,681.333333 258.666667,705 312,719 C325.996223,746.033167 340.996223,769.366501 357,789 C373.003777,808.633499 393.003777,825.633499 417,840 C335.666667,855.333333 262.333333,855.333333 197,840 C131.666667,824.666667 79.3333333,791 40,739 C94.6666667,735 127.666667,710.333333 139,665 C169.469054,543.123784 93,519 93,379 C93,239 147.699952,160.912506 227,151 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 26</title>\r\n    <g id=\"Hairstyle/-26\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M487,151 C427,151 384.333333,172 359,214 C296.333333,203.333333 247.333333,240.333333 212,325 C195.310801,364.9911 183.123542,443.781562 177.139241,514.209636 C176.032219,527.237964 143.671718,580.842552 143,593 C142.125246,608.832205 166,573 162,601 C158,629 101.886181,702.105283 98,719 C89.1502686,757.47317 141.202125,724.54595 126.463139,765.684225 C100.36018,838.54071 79.9331748,911.175609 118,968 C187,1071 218,959 292,1006 C316.905043,1021.81807 332.783103,1042.82454 353,1053 C371.603237,1062.36328 397.269904,1068.36328 430,1071 C432.920062,1039.21323 430.253395,1011.87989 422,989 C418.708727,979.876001 410.708727,968.876001 398,956 C407.333333,928 413,900 415,872 C419.08731,814.777664 371.10908,800.583946 359,788 C341.351402,769.6593 325.684735,746.6593 312,719 C258.666667,709.666667 232,683 232,639 C232,573 286,566 311,566 C327.666667,566 343.666667,570 359,578 C374.333333,558 383.333333,533.333333 386,504 C388.666667,474.666667 426.666667,435 500,385 C536,409.666667 567.333333,427.333333 594,438 C637.34805,455.33922 687.324701,439.86525 708,461 C738,491.666667 759.333333,536.666667 772,596 C789.333333,459.333333 776,357.666667 732,291 C666,191 577,151 487,151 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 27</title>\r\n    <g id=\"Hairstyle/-27\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M469,157 C744,136 814,448 814,525 C814,602 789.644252,616.859223 788,639 C785.528757,672.27668 773.195423,693.27668 751,702 C763,642 765,594.333333 757,559 C749,523.666667 715.53461,470.720366 684,442 C662.976927,422.85309 632.976927,406.85309 594,394 L592.84354,395.787816 C574.012521,424.789816 565,457 540,472 C518.954181,484.627491 457.552319,502.442896 436,516 C406.059704,534.833412 324,689 392,769 C437.333333,822.333333 443,926 409,1080 L37,1080 C72.9628691,984.988198 82.9628691,900.654864 67,827 C54.8790322,771.072195 91.0558208,712.460647 108,637 C124.528113,563.392299 96,516 121,442 C146,368 194,178 469,157 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 28</title>\r\n    <g id=\"Hairstyle/-28\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M425,196 C369.371405,197.394264 321.704738,213.394264 282,244 C234,281 212.790628,318.280161 191,432 C159,599 246.355671,701.134025 256,759 C263.333333,803 249.666667,844.666667 215,884 C229.168594,885.535908 239.501927,885.535908 246,884 C252.498073,882.464092 260.498073,878.130759 270,871 C279.337124,874.971593 286.670457,879.304927 292,884 C297.329543,888.695073 303.99621,896.695073 312,908 C321.175649,895.20358 326.842315,888.870246 329,889 C337.337025,889.501352 351.003692,899.834686 370,920 C372.666667,905.333333 375,884 377,856 C381.08731,798.777664 371.10908,800.583946 359,788 C341.351402,769.6593 325.684735,746.6593 312,719 C258.666667,709.666667 232,683 232,639 C232,573 284,566 304,566 C324,566 380,521 400,484 C420,447 426.047642,421.940121 464,397 C499,374 545.893005,372.833094 570,379 C585.301554,382.914351 623.756286,392.061921 649,407 C694.695468,434.040495 738.610985,482.855197 745,501 C770,572 782,625 768,674 C754,723 728,772 702,797 C676,822 648,828 649,832 C650,836 652.171627,854.998729 669,864 C675.031969,867.226419 687.031969,873.893086 705,884 C705.553593,876.867438 706.22026,872.534104 707,871 C710.402492,864.30575 714.895035,863.144676 717,864 C725.989227,867.652653 717.46465,880.184372 722,889 C725.60597,896.009138 733.272637,903.675805 745,912 C743.128399,898.233341 746.795066,893.900008 756,899 C759.869726,901.144021 772.852634,925.699856 775,928 C782.361496,935.885243 795.544616,945.023979 802,949 C806.904247,952.02064 819.23758,961.02064 839,976 C859.00923,950.338628 872.00923,929.671961 878,914 C920.364208,803.174485 915.950142,695.600312 878,612 C809,460 843,407 782,298 C745.277286,232.380724 684,170 570,156 C494,146.666667 445.666667,160 425,196 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 29</title>\r\n    <g id=\"Hairstyle/-29\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M761,317 C805,388 820.125983,447 820.004537,556 C819.946997,603.166783 803.945484,729.83345 772,936 C756.845538,916.396149 746.221312,902.652622 740.127322,894.769421 C737.275241,891.079962 737.232801,867.490155 740,824 C726.582863,853.713368 718.718644,867.0751 716.407344,864.085196 C709.177716,854.73293 694.041934,839.371198 671,818 C713,782 740.333333,749 753,719 C781.211752,652.182692 778,605 766,552 C758,516.666667 680.53461,482.720366 649,454 C627.976927,434.85309 601.643593,412.186423 570,386 C535.260269,430.221458 508.926936,459.888125 491,475 C470.948368,491.902931 404,536 392,552 C380,568 366,596 381,696 C387.274253,737.828352 404.607586,817.828352 433,936 C405.41871,913.8889 385.815206,898.168716 374.189489,888.839449 C372.222584,887.26107 369.492755,870.647921 366,839 C357.880478,860.509922 352.880478,870.509922 351,869 C327.79041,850.363952 315.029602,841.316058 301,830 C297.231922,826.960727 294.231922,792.29406 292,726 C283.11512,783.588053 276.448453,810.588053 272,807 C256.702243,794.661068 234.702243,772.327735 206,740 C159.063506,523.42859 185.063506,407.761923 232,317 C278.467129,227.145696 379,176 515,176 C651,176 717,246 761,317 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 3</title>\r\n    <g id=\"Hairstyle/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M468,155 C494.413508,155 517.505024,169.223139 530.033478,190.428348 C542.638883,179.566707 559.052573,173 577,173 C607.278861,173 633.192307,191.690562 643.83239,218.163736 C650.523576,216.106563 657.632562,215 665,215 C699.786693,215 728.811394,239.670025 735.533019,272.468992 C768.002006,279.12141 793,314 793,343 C793,372 789.333333,379 782,405 C774.666667,431 761.666667,458.333333 743,487 L742.487847,486.071181 C738.468171,478.85706 732.305556,469.5 724,458 C719.654204,451.982745 713.183929,446.346749 708,441 C703.288148,442.688186 700.961321,443.835284 697.999909,444.579207 C634.162314,458.31332 585.060234,463.786515 550.69367,460.998791 L543.474261,460.399732 L540.29429,460.150618 C513.724479,458.137897 460.670673,455.9739 427,477 C388.41902,501.092406 375.286815,555.63188 372.093734,571.530134 L371.83052,572.876479 L371.66972,573.747986 C369.058511,588.2233 367.192111,614.492798 366.07052,652.556479 L366,655 L328.116663,564.824988 L287.145773,564.824988 L287.123625,564.742696 C285.105011,564.913266 283.062634,565 281,565 C241.235498,565 209,532.764502 209,493 C209,462.831845 227.554139,436.997241 253.873676,426.284928 C238.060403,413.079216 228,393.214474 228,371 C228,331.235498 260.235498,299 300,299 C301.933893,299 303.849978,299.076244 305.745413,299.225891 C302.046294,290.559511 300,281.018724 300,271 C300,231.235498 332.235498,199 372,199 C381.775632,199 391.096237,200.948197 399.594739,204.477513 C409.046897,175.744373 436.100894,155 468,155 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 30</title>\r\n    <g id=\"Hairstyle/-30\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M761,317 C805,388 820.125983,447 820.004537,556 C819.946997,603.166783 803.945484,773.166783 772,1066 L609,859 C645.320405,841.585441 670.320405,826.252108 684,813 C716,782 740.763406,753.438362 749,734 C774,675 778,605 766,552 C758,516.666667 680.53461,491.720366 649,463 C627.976927,443.85309 609.643593,419.85309 594,391 C570,427 542,458.666667 510,486 C490.019849,503.066379 412,543 400,559 C388,575 366,596 381,696 C387.274253,737.828352 404.607586,861.161685 433,1066 L206,860 C159.063506,643.42859 185.063506,407.761923 232,317 C278.467129,227.145696 379,176 515,176 C651,176 717,246 761,317 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 4</title>\r\n    <g id=\"Hairstyle/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M611.547059,230.462612 C698.094118,236.925225 725,287 724.588542,333.554902 C748.638568,343.002989 766,370.025589 766,401.886689 C766,419.541793 748.333333,441.912896 713,469 C658.648092,471.689594 614.775916,470.090396 581.383471,464.202407 C514.014286,452.323402 462.038862,412.237022 441,412 C419.961138,411.762978 402.482014,416.588965 384,454 C365.517986,491.411035 385.822655,520.524164 384,551 C376.5907,588.904446 370.755044,622.451207 366.493029,651.640282 L366,655 L328.116663,564.824988 L287.145773,564.824988 C265.130495,517.303157 245,413 269,379 C293,345 310,351 346,360 C354.615309,315.384317 393.523749,291.762537 430.724791,270.310819 L433,269 C466,250 525,224 611.547059,230.462612 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 5</title>\r\n    <g id=\"Hairstyle/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M623,264 C701.810134,298.151058 736.674249,344.123631 741,379 C743.95879,402.855244 738.292123,428.188578 724,455 C666,448.333333 620.333333,452 587,466 C520.819135,493.795963 452.819135,492.129296 383,461 C391.19759,494.978015 399,522 395,559 C392.333333,583.666667 384.333333,621.333333 371,672 C346.672242,617.194008 331.338909,585.527342 325,577 C318.661091,568.472658 305.994424,562.472658 287,559 C271.634723,501.922397 259,475 269,431 C279,387 315.912503,338.292045 358,325 C362.714614,323.511034 356.047947,314.177701 338,297 C388.266605,282.037882 424.375148,273.411755 446.325628,271.121621 C454.054785,270.315224 451.279576,260.274684 438,241 C508.793244,233.565961 570.459911,241.232628 623,264 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 6</title>\r\n    <g id=\"Hairstyle/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M279,719 L312,727 L361,805 C345.104968,795.793015 330.104968,783.793015 316,769 C301.895032,754.206985 289.561699,737.540318 279,719 Z M343,303 C367,222.333333 442.666667,202.333333 570,243 C761,304 782,471 782,496 C782,512.666667 778.333333,533.666667 771,559 L769.377742,556.788495 C742.968282,520.931086 720.842368,498.001587 703,488 C652.173973,459.509334 588.817434,464 549,464 C509.182566,464 428.104379,430.95793 412,428 C409.688334,427.575411 401.590927,431.429106 429,448 L430.116018,448.665115 C436.887544,452.645909 447.182205,457.757538 461,464 C447.596463,464.038164 432.312171,461.806007 415.147123,457.303529 L412.503541,456.598811 C395.711977,452.076418 384.642719,448.384272 379.295767,445.522372 L380.06813,448.7074 C388.26572,482.685415 392.364515,505.362636 392.364515,516.739062 C392.364515,528.232771 383.924355,572.72458 367.044035,650.214489 L366,655 C350.666667,619.666667 338.333333,596 329,584 C315,566 300.202254,555.429256 288,559 L287.245493,559.229979 C278.745889,561.917334 258.53666,571.367129 244,589 C238.749387,595.368958 233.08272,607.368958 227,625 L226.065502,623.594497 C212.50066,603.100798 205.145493,587.902633 204,578 C200.118123,544.441696 214.597053,517.355586 214,510 C210.524124,467.177849 188,403 244,358 L246.2348,356.214 C282.6516,327.271333 314.906667,309.533333 343,303 Z\" id=\"Shape\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 7</title>\r\n    <g id=\"Hairstyle/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M429,249 C452,238 567.078089,210.731301 629,239 C751.666667,295 808,414 798,596 C706.666667,504.666667 636.333333,456.666667 587,452 C583.849456,451.701976 580.427025,451.181996 576.732706,450.440062 L578.623143,452.186178 C595.446627,467.677375 615.572664,484.948764 639,504 C565.154464,479.561802 512.897321,455.171558 482.228571,430.829268 C471.250239,422.115586 460.817679,411.645571 450.930891,399.419222 C448.886906,440.886337 443.90983,479.746614 436,516 C428.08,552.3 405.1318,598.0743 367.1554,653.3229 L366,655 L328.116663,564.824988 L287.145773,564.824988 C261.048591,494.941663 255,439.333333 269,398 C283,356.666667 311.333333,337.666667 354,341 C365.105394,298.268435 390.105394,267.601768 429,249 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 8</title>\r\n    <g id=\"Hairstyle/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M589.5,149 C631.429764,149 667.646435,173.46066 684.658775,208.890741 C721.09813,214.498985 749,245.991077 749,284 C749,286.479516 748.88126,288.931299 748.649157,291.349973 C776.884031,307.885612 799.44561,330.956745 794,360 C786,402.666667 760.666667,438 718,466 L715.0861,463.567 C683.962033,437.635667 661.933333,421.113333 649,414 C615.112376,395.361807 560.361457,389 532,389 C494.328727,389 459.328727,395.666667 427,409 C427.442658,419.124205 429.109325,429.457538 432,440 C434.890675,450.542462 438.890675,460.875795 444,471 C418.42303,487.163731 403.86212,499.704664 400.317272,508.622798 C395.053173,521.866228 390.816933,592.760589 386.449154,651.362106 L386.17725,655 L366.146153,655 L328.203914,564.824988 L287.169322,564.824988 C281.896276,545.26754 277.997962,527.821458 275.474381,512.486743 C230.854476,504.457464 197,465.4323 197,418.5 C197,388.97181 210.401273,362.573655 231.453484,345.055871 C227.349851,337.983222 225,329.766029 225,321 C225,294.490332 246.490332,273 273,273 L273.516848,273.002725 L273.516848,273.002725 C278.783823,219.66548 323.776164,178 378.5,178 C395.981022,178 412.469019,182.251645 426.986338,189.77728 C440.350453,178.084255 457.847918,171 477,171 C490.487831,171 503.155028,174.513552 514.136247,180.675313 C533.28305,161.128247 559.975173,149 589.5,149 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Hairstyle/ 9</title>\r\n    <g id=\"Hairstyle/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M600.328004,173.378628 C706.51335,164.088614 796.476165,200.935719 801.265577,255.678942 C803.695286,283.450641 783.737843,310.49297 749.618561,331.611505 C765.063752,338.699548 774.521929,348.01487 775.46916,358.841774 C776.714595,373.077161 763.016568,387.294038 739.738901,398.89906 L740.480755,402.50703 C740.650616,403.32637 740.823745,404.157384 741,405 C746.333333,406.333333 749,411.666667 749,421 C749,430.333333 737,447 713,471 C701.666667,455.666667 690,445.333333 678,440 C666.920655,435.075847 654.532414,432.679571 640.835277,432.811173 C637.222979,442.406663 631.069509,450.272246 622.5,455.219854 C608.589242,463.251234 591.202794,461.924641 575.013121,453.322279 C570.690288,458.087969 565.680763,462.179157 560,465.458947 C538.447788,477.902122 511.612082,476.138657 486.418588,463.265159 L485.395785,464.617496 C480.437333,471.120347 474.397833,478.222483 465,486 C445.666667,502 416.333333,512 377,516 L391,672 L371,672 L325,562 L289,568 C273.634723,510.922397 239,431 256,379 C266.31189,347.457747 308.818577,301.919892 356,277 C356.84754,276.552353 357.701097,276.115198 358.559964,275.688267 C352.18227,272.103338 343.995473,268.20694 334,264 C351.648204,258 368.981537,255 386,255 C397.257459,255 408.50684,256.312688 419.748142,258.938063 L421.437432,258.728011 C421.992551,258.660372 422.539594,258.595072 423.078261,258.531995 C444.228158,216.299002 514.42929,180.893791 600.328004,173.378628 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"12\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 0</title>\r\n    <g id=\"Mouth/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M549,759 C576.33038,765.666667 599.663714,769 619,769 C638.336286,769 655.002953,765.666667 669,759\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 1</title>\r\n    <g id=\"Mouth/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M549,759 C575.12979,773.666667 603.12979,781 633,781 C662.87021,781 682.87021,773.666667 693,759\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 10</title>\r\n    <g id=\"Mouth/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M549,759 C576.33038,765.666667 599.663714,769 619,769 C638.336286,769 655.002953,765.666667 669,759 C656.33038,792.333333 632.997047,809 599,809 C565.002953,809 548.336286,792.333333 549,759 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 2</title>\r\n    <g id=\"Mouth/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M572,769 C585.775809,774.333333 599.109142,777 612,777 C624.890858,777 638.224191,774.333333 652,769\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 3</title>\r\n    <g id=\"Mouth/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(475.000000, 729.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <path d=\"M66,41.0869565 C93.79487,40.6243036 114.628203,38.8851732 128.5,35.8695652 C142.371797,32.8539572 161.538463,25.8974355 186,15\" id=\"Path\"></path>\r\n            <path d=\"M161,25.4347826 C161,49.7826087 153.5,65.4347826 138.5,72.3913043 C123.5,79.3478261 101.833333,68.9130435 73.5,41.0869565\" id=\"Path\"></path>\r\n            <path d=\"M2.14164194,45 C-1.3880481,36.6867754 -0.554714768,27.8534421 4.64164194,18.5 C9.83799864,9.14655793 17.3379986,2.97989127 27.1416419,0\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 4</title>\r\n    <g id=\"Mouth/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M549,778 C580.121822,764.84962 604.121822,756.516287 621,753 C637.878178,749.483713 661.878178,747.817046 693,748\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 5</title>\r\n    <g id=\"Mouth/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <circle id=\"Oval\" stroke=\"#000000\" stroke-width=\"16\" cx=\"621\" cy=\"768\" r=\"40\"></circle>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 6</title>\r\n    <g id=\"Mouth/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M595.535093,787 C583.017242,784.777583 569.106424,779.94425 553.80264,772.5 C538.498856,765.05575 532.537077,760.222417 535.917303,758 C559.764419,764.666667 583.611535,768 607.458651,768 C631.305768,768 655.152884,764.666667 679,758 C677.01274,762.833333 671.050961,767.666667 661.114663,772.5 C651.178364,777.333333 637.267547,782.166667 619.382209,787\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 7</title>\r\n    <g id=\"Mouth/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M559.810774,753.60177 C566.691716,738.132743 579.421458,738.132743 598,753.60177 L598.555602,753.14234 C616.832552,738.13429 629.377094,738.287434 636.189226,753.60177 C643.001358,768.916106 630.593059,783.900851 598.96433,798.556005 L598,799 C565.659574,784.20354 552.929833,769.070796 559.810774,753.60177 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\" fill=\"#000000\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 8</title>\r\n    <g id=\"Mouth/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <g id=\"Group\" transform=\"translate(518.000000, 729.000000)\" stroke=\"#000000\" stroke-width=\"16\">\r\n            <path d=\"M-3.69482223e-13,40.2906038 C11.1513858,37.2521964 19.1513858,34.588032 24,32.2981106 C28.8486142,30.0081891 35.9892516,25.8365332 45.4219123,19.7831427 C62.4309568,8.98264352 73.6236526,2.98203532 79,1.78131814 C84.3763474,0.580600965 91.3763474,2.51817509 100,7.59404051 C112,-1.12504304 123,-2.33602686 133,3.96108903 C143,10.2582049 145.333333,20.4304691 140,34.4778814 C145.333333,41.2593909 144.666667,48.0409003 138,54.8224097 C128,64.9946738 107,72.2605768 79,69.3542156 C66.6893996,68.0763924 52.3996983,62.8419921 34,54.8224097 C27.6667209,52.0620246 16.3333876,47.2180893 -3.69482223e-13,40.2906038 Z\" id=\"Path\"></path>\r\n            <path d=\"M12,43 C54.2826578,36.3890991 82.9493244,32.7224324 98,32 C113.050676,31.2775676 126.050676,32.9442342 137,37\" id=\"Path\"></path>\r\n        </g>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 8719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Mouth/ 9</title>\r\n    <g id=\"Mouth/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M532,760 C569.387146,756.771376 597.387146,753.438043 616,750 C634.612854,746.561957 658.946187,740.228624 689,731 L667,780 C644.19345,787.762145 627.19345,792.095479 616,793 C604.80655,793.904521 588.80655,792.237855 568,788 L532,760 Z\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 7862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 0</title>\r\n    <g id=\"Nose/-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <line x1=\"637\" y1=\"596\" x2=\"661.856189\" y2=\"682.499537\" id=\"Line\" stroke=\"#000000\" stroke-width=\"16\" transform=\"translate(649.428094, 639.249768) rotate(1.032339) translate(-649.428094, -639.249768) \"></line>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 1</title>\r\n    <g id=\"Nose/-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M633.532552,569.006852 C651.291821,622.395473 661.086671,652.555363 662.917104,659.486521 C664.747537,666.41768 663.749048,673.591123 659.921638,681.006852\" id=\"Line\" stroke=\"#000000\" stroke-width=\"16\" transform=\"translate(648.668966, 625.006852) rotate(-3.225647) translate(-648.668966, -625.006852) \"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 10</title>\r\n    <g id=\"Nose/-10\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M631,694.380659 C660.333333,687.46022 678,677.333333 684,664 C693,644 637.033407,606.392531 660.161467,579\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 2</title>\r\n    <g id=\"Nose/-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M692.893232,627.725033 C673.627879,639.855074 659.236623,647.263498 649.719463,649.950306 C640.202303,652.637114 625.722036,653.379465 606.278663,652.177361\" id=\"Line\" stroke=\"#000000\" stroke-width=\"16\" transform=\"translate(649.585948, 640.229885) rotate(-89.234993) translate(-649.585948, -640.229885) \"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 3243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 3</title>\r\n    <g id=\"Nose/-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M636.843465,595.910607 C654.994141,637.483681 663.279537,666.31686 661.699654,682.410144 C660.11977,698.503428 648.515798,703.474491 626.887739,697.323331\" id=\"Line\" stroke=\"#000000\" stroke-width=\"16\" transform=\"translate(644.388576, 647.892684) rotate(1.032339) translate(-644.388576, -647.892684) \"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 9436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 4</title>\r\n    <g id=\"Nose/-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M636.843426,596.000252 C661.659687,637.453214 673.277876,666.226337 671.697992,682.319621 C670.118108,698.412905 655.181344,703.444023 626.8877,697.412976\" id=\"Line\" stroke=\"#000000\" stroke-width=\"16\" transform=\"translate(649.363766, 647.939652) rotate(1.032339) translate(-649.363766, -647.939652) \"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 5</title>\r\n    <g id=\"Nose/-5\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M673,568 C662.55102,590.836147 657.326531,613.414126 657.326531,635.733939 C657.326531,669.213657 673,686.992054 670.061224,702.552554 C668.102041,712.92622 653.081633,714.756867 625,708.044495\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 6</title>\r\n    <g id=\"Nose/-6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M673,568 C662.55102,590.836147 657.326531,613.414126 657.326531,635.733939 C657.326531,669.213657 685.938776,657.439501 683,683 C681.040816,700.040333 661.707483,708.388498 625,708.044495\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 1142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 7</title>\r\n    <g id=\"Nose/-7\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M649,600 C669,606.666667 679,620 679,640 C679,660 669,673.333333 649,680\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 2686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 8</title>\r\n    <g id=\"Nose/-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M649,600 C682.333333,613.333333 699,630 699,650 C699,670 682.333333,680 649,680\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 6771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"1080px\" height=\"1080px\" viewBox=\"0 0 1080 1080\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Nose/ 9</title>\r\n    <g id=\"Nose/-9\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n        <path d=\"M631,694.380659 C663.848549,704.811956 684.630284,697.576454 693.345205,672.674154 C706.417587,635.320703 637.033407,606.392531 660.161467,579\" id=\"Path\" stroke=\"#000000\" stroke-width=\"16\"></path>\r\n    </g>\r\n</svg>");

/***/ }),

/***/ 4043:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./accessories/0.svg": 1973,
	"./accessories/1.svg": 4741,
	"./accessories/10.svg": 3438,
	"./accessories/2.svg": 9250,
	"./accessories/3.svg": 2027,
	"./accessories/4.svg": 8208,
	"./accessories/5.svg": 6186,
	"./accessories/6.svg": 2618,
	"./accessories/7.svg": 2216,
	"./accessories/8.svg": 2947,
	"./accessories/9.svg": 7334,
	"./beard/0.svg": 5002,
	"./beard/1.svg": 8690,
	"./beard/10.svg": 4090,
	"./beard/2.svg": 3426,
	"./beard/3.svg": 7791,
	"./beard/4.svg": 7919,
	"./beard/5.svg": 4912,
	"./beard/6.svg": 1604,
	"./beard/7.svg": 6326,
	"./beard/8.svg": 3819,
	"./beard/9.svg": 7469,
	"./details/0.svg": 4608,
	"./details/1.svg": 2651,
	"./details/10.svg": 8120,
	"./details/2.svg": 8492,
	"./details/3.svg": 7527,
	"./details/4.svg": 646,
	"./details/5.svg": 5020,
	"./details/6.svg": 2987,
	"./details/7.svg": 5694,
	"./details/8.svg": 1737,
	"./details/9.svg": 6273,
	"./eyebrows/0.svg": 3102,
	"./eyebrows/1.svg": 3232,
	"./eyebrows/10.svg": 6554,
	"./eyebrows/2.svg": 9599,
	"./eyebrows/3.svg": 6895,
	"./eyebrows/4.svg": 4092,
	"./eyebrows/5.svg": 6355,
	"./eyebrows/6.svg": 8691,
	"./eyebrows/7.svg": 6774,
	"./eyebrows/8.svg": 6375,
	"./eyebrows/9.svg": 5692,
	"./eyes/0.svg": 3928,
	"./eyes/1.svg": 1266,
	"./eyes/10.svg": 6206,
	"./eyes/2.svg": 3042,
	"./eyes/3.svg": 1896,
	"./eyes/4.svg": 7817,
	"./eyes/5.svg": 6697,
	"./eyes/6.svg": 8104,
	"./eyes/7.svg": 6028,
	"./eyes/8.svg": 5988,
	"./eyes/9.svg": 6923,
	"./face/0.svg": 1197,
	"./face/1.svg": 7870,
	"./face/10.svg": 6718,
	"./face/2.svg": 7096,
	"./face/3.svg": 9424,
	"./face/4.svg": 7203,
	"./face/5.svg": 1713,
	"./face/6.svg": 8511,
	"./face/7.svg": 931,
	"./face/8.svg": 3299,
	"./face/9.svg": 6049,
	"./glasses/0.svg": 8569,
	"./glasses/1.svg": 847,
	"./glasses/10.svg": 4166,
	"./glasses/2.svg": 1114,
	"./glasses/3.svg": 9801,
	"./glasses/4.svg": 9844,
	"./glasses/5.svg": 9329,
	"./glasses/6.svg": 7863,
	"./glasses/7.svg": 8927,
	"./glasses/8.svg": 9511,
	"./glasses/9.svg": 7501,
	"./hair/0.svg": 1740,
	"./hair/1.svg": 6608,
	"./hair/10.svg": 1105,
	"./hair/11.svg": 7055,
	"./hair/12.svg": 4731,
	"./hair/13.svg": 1544,
	"./hair/14.svg": 5730,
	"./hair/15.svg": 6699,
	"./hair/16.svg": 7059,
	"./hair/17.svg": 4459,
	"./hair/18.svg": 4704,
	"./hair/19.svg": 1763,
	"./hair/2.svg": 54,
	"./hair/20.svg": 3293,
	"./hair/21.svg": 9102,
	"./hair/22.svg": 248,
	"./hair/23.svg": 883,
	"./hair/24.svg": 7213,
	"./hair/25.svg": 3938,
	"./hair/26.svg": 1009,
	"./hair/27.svg": 29,
	"./hair/28.svg": 5406,
	"./hair/29.svg": 4532,
	"./hair/3.svg": 790,
	"./hair/30.svg": 1421,
	"./hair/4.svg": 1203,
	"./hair/5.svg": 9764,
	"./hair/6.svg": 9309,
	"./hair/7.svg": 5525,
	"./hair/8.svg": 3721,
	"./hair/9.svg": 8464,
	"./mouth/0.svg": 717,
	"./mouth/1.svg": 726,
	"./mouth/10.svg": 1778,
	"./mouth/2.svg": 6339,
	"./mouth/3.svg": 2921,
	"./mouth/4.svg": 545,
	"./mouth/5.svg": 5177,
	"./mouth/6.svg": 1101,
	"./mouth/7.svg": 7928,
	"./mouth/8.svg": 5668,
	"./mouth/9.svg": 8719,
	"./nose/0.svg": 7862,
	"./nose/1.svg": 9017,
	"./nose/10.svg": 5186,
	"./nose/2.svg": 9431,
	"./nose/3.svg": 3243,
	"./nose/4.svg": 9436,
	"./nose/5.svg": 1741,
	"./nose/6.svg": 6538,
	"./nose/7.svg": 1142,
	"./nose/8.svg": 2686,
	"./nose/9.svg": 6771
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4043;

/***/ })

};
;
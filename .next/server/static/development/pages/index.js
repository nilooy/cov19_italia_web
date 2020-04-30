module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout.js":
/*!*******************!*\
  !*** ./Layout.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
  integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}, "Covid19 italia"), __jsx("link", {
  rel: "shortcut icon",
  href: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
})), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/CardStat.js":
/*!********************************!*\
  !*** ./components/CardStat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\CardStat.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardStat = props => {
  return __jsx("div", {
    className: "card mb-3 border-default " + (props.darkMode ? "darkMode" : ""),
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-body text-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "card-title " + (props.darkMode ? "darkMode-text" : "text-dark"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, props.title), __jsx("h5", {
    className: "card-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, !props.dateField && __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    end: parseInt(props.text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 32
    }
  }), props.dateField && props.text)));
};

/* harmony default export */ __webpack_exports__["default"] = (CardStat);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer footer-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Made with \u2764 by Niloy"), __jsx("div", {
    className: "footer footer-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "text-white",
    href: "https://github.com/theprogboy/cov19_italia_api",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Api", " ", __jsx("img", {
    width: "20",
    src: "https://image.flaticon.com/icons/svg/1051/1051326.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), " ", "Datasource:", " ", __jsx("a", {
    className: "text-white",
    href: "https://github.com/pcm-dpc/COVID-19",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Protezione Civile")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/LeftSideBar.js":
/*!***********************************!*\
  !*** ./components/LeftSideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-live-clock */ "react-live-clock");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardStat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardStat */ "./components/CardStat.js");
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\LeftSideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const LeftSideBar = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    nuovi_positivi: 0,
    totale_casi: 0,
    deceduti: 0,
    casi_testati: 0,
    tamponi: 0,
    terapia_intensiva: 0,
    data: Date.now()
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/api/" + "stats").then(res => {
      const resData = res.data[0];
      setState({
        nuovi_positivi: resData.nuovi_positivi,
        totale_casi: resData.totale_casi,
        deceduti: resData.deceduti,
        casi_testati: resData.casi_testati,
        tamponi: resData.tamponi,
        terapia_intensiva: resData.terapia_intensiva,
        "l'ultimo_aggiornamento": formatDate(resData.data)
      });
    });
  }, []);

  const makeUpperCase = text => {
    let splitedText = text.split("_");
    let result = "";

    for (let i = 0; i < splitedText.length; i++) {
      result += " " + splitedText[i][0].toUpperCase() + splitedText[i].slice(1);
    }

    return result;
  };

  const formatDate = dateString => {
    return new Date(dateString).toLocaleString("it-IT", {
      timeZone: "UTC"
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray w-100 px-2 d-flex align-items-center  justify-content-between " + (props.darkMode ? "darkMode" : ""),
    style: {
      height: 90
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "logo_anim",
    src: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
    alt: "cov19",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "h5 mb-0 mx-2 font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Statistica"), __jsx("span", {
    className: "lightIcon",
    onClick: props.toggleDarkMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: !props.darkMode ? "https://image.flaticon.com/icons/svg/841/841641.svg" : "https://image.flaticon.com/icons/png/512/841/841539.png",
    width: "20",
    alt: "flaticon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }))), __jsx("p", {
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(react_live_clock__WEBPACK_IMPORTED_MODULE_2___default.a, {
    format: "D/MM/YYYY:HH:mm:ss",
    ticking: true,
    timezone: "Europe/Rome",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative customScrollbar " + (props.darkMode ? "bg-dark" : ""),
    style: {
      height: "calc(100% - 90px)",
      overflowY: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, Object.keys(state).map((key, index) => __jsx(_CardStat__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: makeUpperCase(key),
    text: state[key],
    key: index,
    dateField: key == "l'ultimo_aggiornamento" ? true : false,
    darkMode: props.darkMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSideBar);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapStylesDark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapStylesDark */ "./components/mapStylesDark.js");
/* harmony import */ var _mapStylesRetro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapStylesRetro */ "./components/mapStylesRetro.js");
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-undef */




const API_KEY = "AIzaSyDoGcqIxP_gv9Z8ZoAiR3hvMr9NcwZniDE";
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;
const MapComp = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
  defaultOptions: {
    styles: "retro"
  },
  defaultZoom: 6,
  defaultCenter: {
    lat: 41.8719,
    lng: 12.5674
  },
  options: {
    styles: props.darkMode ? _mapStylesDark__WEBPACK_IMPORTED_MODULE_2__["default"] : _mapStylesRetro__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, props.children)));

const Map = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isOpen: 0,
    infoIndex: null
  });

  const handleToggleOpen = index => {
    setState({
      isOpen: true,
      infoIndex: index
    });
  };

  const handleToggleClose = () => {
    setState({
      isOpen: false,
      infoIndex: null
    });
  };

  return __jsx(MapComp, {
    googleMapURL: MAP_URL,
    loadingElement: __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 23
      }
    }),
    containerElement: __jsx("div", {
      style: {
        height: `100vh`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }),
    center: {
      lat: 41.8719,
      lng: 12.5674
    },
    darkMode: props.darkMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, props.cordinates.map((item, index) => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    key: index,
    position: {
      lat: parseFloat(item.lat),
      lng: parseFloat(item.long)
    },
    options: {
      icon: {
        url: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
        scaledSize: new google.maps.Size(25, 25)
      }
    },
    onMouseOver: () => handleToggleOpen(index),
    onMouseOut: () => handleToggleClose(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, state.infoIndex === index && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
    onCloseClick: handleToggleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("h6", {
    style: {
      textAlign: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, item.denominazione_provincia), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Totale Casi:", " ", __jsx("span", {
    className: "text-danger",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, " ", item.totale_casi)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/RightSideBar.js":
/*!************************************!*\
  !*** ./components/RightSideBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\RightSideBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RightSideBar = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("province");

  const showProvince = (province, index) => __jsx("div", {
    key: index,
    className: "d-flex border-bottom  w-100 px-1 font-weight-bold text-secondary align-items-center " + (props.darkMode ? "border-info" : "border-gray"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "pl-3 " + (props.darkMode ? "darkMode-text" : "text-dark"),
    style: {
      fontSize: "12px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, province.denominazione_provincia || province.denominazione_regione), __jsx("div", {
    className: "pl-2",
    style: {
      width: 30,
      height: 30
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "badge badge-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, province.totale_casi)));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray px-2 row",
    style: {
      margin: "0 auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "col-md-6 col-sm-12 h5  font-weight-bold btn " + (state === "province" ? "btn-info" : "btn-outline-info"),
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      props.getData("province");
      setState("province");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Provincia"), __jsx("span", {
    className: "col-md-6 col-sm-12 h5 font-weight-bold btn " + (state === "regione" ? "btn-info" : "btn-outline-info"),
    style: {
      cursor: "pointer"
    },
    onClick: () => {
      props.getData("regione");
      setState("regione");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Regione")), __jsx("div", {
    className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative customScrollbar",
    style: {
      height: "calc(100% - 90px)",
      overflowY: "auto",
      overflowX: "hidden"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, props.data.map((item, index) => showProvince(item, index))));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSideBar);

/***/ }),

/***/ "./components/mapStylesDark.js":
/*!*************************************!*\
  !*** ./components/mapStylesDark.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#000000"
  }, {
    lightness: 13
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#144b53"
  }, {
    lightness: 14
  }, {
    weight: 1.4
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#08304b"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#0c4152"
  }, {
    lightness: 5
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b434f"
  }, {
    lightness: 25
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b3d51"
  }, {
    lightness: 16
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    color: "#146474"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#021019"
  }]
}]);

/***/ }),

/***/ "./components/mapStylesRetro.js":
/*!**************************************!*\
  !*** ./components/mapStylesRetro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  elementType: "geometry",
  stylers: [{
    color: "#ebe3cd"
  }]
}, {
  elementType: "labels.text.fill",
  stylers: [{
    color: "#523735"
  }]
}, {
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#f5f1e6"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#c9b2a6"
  }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#dcd2be"
  }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ae9e90"
  }]
}, {
  featureType: "landscape.natural",
  elementType: "geometry",
  stylers: [{
    color: "#dfd2ae"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#dfd2ae"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#93817c"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry.fill",
  stylers: [{
    color: "#a5b076"
  }]
}, {
  featureType: "poi.park",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#447530"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    color: "#f5f1e6"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry",
  stylers: [{
    color: "#fdfcf8"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry",
  stylers: [{
    color: "#f8c967"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#e9bc62"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry",
  stylers: [{
    color: "#e98d58"
  }]
}, {
  featureType: "road.highway.controlled_access",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#db8555"
  }]
}, {
  featureType: "road.local",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#806b63"
  }]
}, {
  featureType: "transit.line",
  elementType: "geometry",
  stylers: [{
    color: "#dfd2ae"
  }]
}, {
  featureType: "transit.line",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#8f7d77"
  }]
}, {
  featureType: "transit.line",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#ebe3cd"
  }]
}, {
  featureType: "transit.station",
  elementType: "geometry",
  stylers: [{
    color: "#dfd2ae"
  }]
}, {
  featureType: "water",
  elementType: "geometry.fill",
  stylers: [{
    color: "#b9d3c2"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#92998d"
  }]
}]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_LeftSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LeftSideBar */ "./components/LeftSideBar.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_RightSideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RightSideBar */ "./components/RightSideBar.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout */ "./Layout.js");
var _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Index = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: darkMode,
    1: setDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const getDarkMode = () => {
    if (localStorage.getItem("darkMode") == "true") setDarkMode(true);else setDarkMode(false);
  };

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getDarkMode();
    getData("province");
  }, []);

  const getData = route => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/api/" + route).then(res => {
      let data = res.data;
      data = data.filter(item => item.denominazione_provincia != "In fase di definizione/aggiornamento");
      setState(data);
    });
  };

  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid position-absolute h-100 bg-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row position-absolute w-100 h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    darkMode: darkMode,
    toggleDarkMode: toggleDarkMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "col-md-8 px-0 border-right border-left border-gray position-relative h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
    darkMode: darkMode,
    cordinates: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between px-1 py-1 " + (darkMode ? "darkMode" : ""),
    style: {
      overflowY: "scroll"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_components_RightSideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    darkMode: darkMode,
    getData: getData,
    data: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code\Personal\dev\covid19it\cov19ItaliaWeb\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-live-clock":
/*!***********************************!*\
  !*** external "react-live-clock" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-live-clock");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LeftSideBar.js":
/*!***********************************!*\
  !*** ./components/LeftSideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-live-clock */ "./node_modules/react-live-clock/lib/index.js");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardStat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardStat */ "./components/CardStat.js");


var _this = undefined,
    _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\LeftSideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var LeftSideBar = function LeftSideBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    nuovi_positivi: 0,
    totale_casi: 0,
    deceduti: 0,
    casi_testati: 0,
    tamponi: 0,
    terapia_intensiva: 0,
    data: Date.now()
  }),
      state = _useState[0],
      setState = _useState[1];

  var _setState = setState(false),
      _setState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_setState, 2),
      toolTip = _setState2[0],
      setToolTip = _setState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:8000/api/" + "stats").then(function (res) {
      var resData = res.data[0];
      setState({
        nuovi_positivi: resData.nuovi_positivi,
        totale_casi: resData.totale_casi,
        deceduti: resData.deceduti,
        casi_testati: resData.casi_testati,
        tamponi: resData.tamponi,
        terapia_intensiva: resData.terapia_intensiva,
        "l'ultimo_aggiornamento": formatDate(resData.data)
      });
      setToolTip(true);
      setTimeout(function () {}, timeout);
    });
  }, []);

  var makeUpperCase = function makeUpperCase(text) {
    var splitedText = text.split("_");
    var result = "";

    for (var i = 0; i < splitedText.length; i++) {
      result += " " + splitedText[i][0].toUpperCase() + splitedText[i].slice(1);
    }

    return result;
  };

  var formatDate = function formatDate(dateString) {
    return new Date(dateString).toLocaleString("it-IT", {
      timeZone: "UTC"
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray w-100 px-2 d-flex align-items-center  justify-content-between " + (props.darkMode ? "darkMode" : ""),
    style: {
      height: 90
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "logo_anim",
    src: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
    alt: "cov19",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "h5 mb-0 mx-2 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Statistica"), __jsx("span", {
    className: "lightIcon tooltip-c",
    onClick: props.toggleDarkMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: !props.darkMode ? "https://image.flaticon.com/icons/svg/841/841641.svg" : "https://image.flaticon.com/icons/png/512/841/841539.png",
    width: "20",
    alt: "flaticon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }), __jsx("span", {
    "class": "tooltiptext tooltiptext-show",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "Tooltip text"))), __jsx("p", {
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(react_live_clock__WEBPACK_IMPORTED_MODULE_3___default.a, {
    format: "D/MM/YYYY:HH:mm:ss",
    ticking: true,
    timezone: "Europe/Rome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative customScrollbar " + (props.darkMode ? "bg-dark" : ""),
    style: {
      height: "calc(100% - 90px)",
      overflowY: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, Object.keys(state).map(function (key, index) {
    return __jsx(_CardStat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: makeUpperCase(key),
      text: state[key],
      key: index,
      dateField: key == "l'ultimo_aggiornamento" ? true : false,
      darkMode: props.darkMode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSideBar);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.c70e75831513a29a40f9.hot-update.js.map
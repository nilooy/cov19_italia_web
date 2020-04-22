webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LeftSideBar.js":
/*!***********************************!*\
  !*** ./components/LeftSideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardStat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardStat */ "./components/CardStat.js");
var _this = undefined,
    _jsxFileName = "D:\\Code\\Practice\\cov19ItaliaWeb\\components\\LeftSideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LeftSideBar = function LeftSideBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios.get("http://localhost:8000/stats").then(function (res) {
      setState(res);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray w-100 px-2 d-flex align-items-center bg-white justify-content-between",
    style: {
      height: 90
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "h5 text-dark mb-0 mx-4 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Statistica")), __jsx("div", {
    className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative",
    style: {
      height: "calc(100% - 90px)",
      overflowY: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, Object.keys(state).map(function (key, index) {
    __jsx(_CardStat__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: key,
      text: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSideBar);

/***/ })

})
//# sourceMappingURL=index.js.58d500f4fb9975e9db1e.hot-update.js.map
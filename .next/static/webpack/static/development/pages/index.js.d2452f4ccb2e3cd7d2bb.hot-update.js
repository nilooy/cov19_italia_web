webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LeftSideBar.js":
/*!***********************************!*\
  !*** ./components/LeftSideBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardStat */ "./components/CardStat.js");
var _this = undefined,
    _jsxFileName = "D:\\Code\\Practice\\cov19ItaliaWeb\\components\\LeftSideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var LeftSideBar = function LeftSideBar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/stats").then(function (res) {
      var resData = res.data[0];
      setState({
        nuovi_positivi: resData.nuovi_positivi,
        totale_casi: resData.totale_casi,
        deceduti: resData.deceduti,
        casi_testati: resData.casi_testati,
        tamponi: resData.tamponi,
        terapia_intensiva: resData.terapia_intensiva,
        data: resData.data
      });
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "h5 text-dark mb-0 mx-4 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 42,
      columnNumber: 7
    }
  }, Object.keys(state).map(function (key, index) {
    return __jsx(_CardStat__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: key,
      text: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftSideBar);

/***/ })

})
//# sourceMappingURL=index.js.d2452f4ccb2e3cd7d2bb.hot-update.js.map
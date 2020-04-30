webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CardStat.js":
/*!********************************!*\
  !*** ./components/CardStat.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\CardStat.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CardStat = function CardStat(props) {
  return __jsx("div", {
    className: "card mb-3 border-default " + (props.darkMode ? "darkMode" : ""),
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "card-body text-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "card-title " + (props.darkMode ? "darkMode-text" : "text-dark"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, props.title), __jsx("h5", {
    className: "card-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, !props.dateField && __jsx(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    end: parseInt(props.text),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 32
    }
  }), props.dateField && props.text)));
};

/* harmony default export */ __webpack_exports__["default"] = (CardStat);

/***/ })

})
//# sourceMappingURL=index.js.6f534e749c048dd81fee.hot-update.js.map
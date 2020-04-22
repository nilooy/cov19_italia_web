webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/RightSideBar.js":
/*!************************************!*\
  !*** ./components/RightSideBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\Code\\Practice\\cov19ItaliaWeb\\components\\RightSideBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var RightSideBar = function RightSideBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("province"),
      state = _useState[0],
      setState = _useState[1];

  var showProvince = function showProvince(province, index) {
    return __jsx("div", {
      key: index,
      className: "d-flex border-bottom border-gray w-100 px-1 font-weight-bold text-secondary align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }
    }, __jsx("span", {
      className: "pl-3",
      style: {
        fontSize: "12px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, province.denominazione_provincia || province.denominazione_regione), __jsx("div", {
      className: "pl-2",
      style: {
        width: 30,
        height: 30
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "badge badge-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, province.totale_casi)));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray px-2 row",
    style: {
      margin: "0 auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "col-md-6 col-sm-12 h5 text-dark font-weight-bold btn " + (state === "province" ? "btn-info" : "btn-outline-info"),
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      props.getData("province");
      setState("province");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Provincia"), __jsx("span", {
    className: "col-md-6 col-sm-12 h5 text-dark font-weight-bold btn btn-outline-info",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return props.getData("regione");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Regione")), __jsx("div", {
    className: "w-100 d-flex flex-wrap align-items-start align-content-start position-relative",
    style: {
      height: "calc(100% - 90px)",
      overflowY: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, props.data.map(function (item, index) {
    return showProvince(item, index);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSideBar);

/***/ })

})
//# sourceMappingURL=index.js.501cbd20275fe087bd36.hot-update.js.map
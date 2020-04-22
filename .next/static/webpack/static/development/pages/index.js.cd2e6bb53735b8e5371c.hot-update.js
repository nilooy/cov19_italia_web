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
  var nameBadgeStyles = {
    fontSize: "0.8rem",
    height: 40,
    borderRadius: 20,
    cursor: "pointer"
  };

  var showProvince = function showProvince(province, index) {
    return __jsx("div", {
      key: index,
      className: "d-flex border-bottom border-gray w-100 px-1 font-weight-bold text-secondary align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
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
        lineNumber: 16,
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
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "badge badge-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, province.totale_casi)));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "border-bottom border-gray px-2 row",
    style: {
      height: 90
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "col-md-6 col-sm-12 h5 text-dark font-weight-bold",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return props.getData("province");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Provincia"), __jsx("span", {
    className: "col-md-6 col-sm-12 h5 text-dark font-weight-bold",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return props.getData("regione");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 47,
      columnNumber: 7
    }
  }, props.data.map(function (item, index) {
    return showProvince(item, index);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSideBar);

/***/ })

})
//# sourceMappingURL=index.js.cd2e6bb53735b8e5371c.hot-update.js.map
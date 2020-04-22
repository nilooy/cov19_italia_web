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
    }, province.denominazione_provincia), __jsx("div", {
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
    className: "col-md-6 col-sm-12 h5 text-dark mb-0 mx-4 font-weight-bold",
    style: {
      cursor: "pointer"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Provincia"), __jsx("span", {
    className: "col-md-6 col-sm-12 h5 text-dark mb-0 mx-4 font-weight-bold",
    style: {
      cursor: "pointer"
    },
    onClick: changeToRegion,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 46,
      columnNumber: 7
    }
  }, props.data.map(function (item, index) {
    return showProvince(item, index);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RightSideBar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LeftSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LeftSideBar */ "./components/LeftSideBar.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_RightSideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RightSideBar */ "./components/RightSideBar.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout */ "./Layout.js");
var _this = undefined,
    _jsxFileName = "D:\\Code\\Practice\\cov19ItaliaWeb\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      state = _useState[0],
      setState = _useState[1];

  var changeToRegion = function changeToRegion() {};

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getData("province");
  }, []);

  var getData = function getData(route) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/" + route).then(function (res) {
      var data = res.data;
      data = data.filter(function (item) {
        return item.denominazione_provincia != "In fase di definizione/aggiornamento";
      });
      setState(data);
    });
  };

  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid position-absolute h-100 bg-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row position-absolute w-100 h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "col-md-8 px-0 border-right border-left border-gray position-relative h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cordinates: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-1 py-1",
    style: {
      overflowY: "scroll"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_components_RightSideBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4d80fd07776eaeaa0559.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\index.js",{

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/province").then(function (res) {
      var data = res.data;
      data = data.filter(function (item) {
        return item.denominazione_provincia != "In fase di definizione/aggiornamento";
      });
      setState(data);
    });
  }, []);
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid position-absolute h-100 bg-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row position-absolute w-100 h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "col-md-8 px-0 border-right border-left border-gray position-relative h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cordinates: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_components_RightSideBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.86fa23eabf9990e2af99.hot-update.js.map
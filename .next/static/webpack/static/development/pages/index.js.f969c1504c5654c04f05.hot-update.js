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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_LeftSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LeftSideBar */ "./components/LeftSideBar.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_RightSideBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RightSideBar */ "./components/RightSideBar.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout */ "./Layout.js");
var _this = undefined,
    _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var getDarkMode = function getDarkMode() {
    if (localStorage.getItem("darkMode") == "true") return true;
    return false;
  };

  var toggleDarkMode = function toggleDarkMode() {
    localStorage.setItem("darkMode", !darkMode);
    getDarkMode();
    setDarkMode(!darkMode);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getData("province");
  }, []);

  var getData = function getData(route) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:8000/api/" + route).then(function (res) {
      var data = res.data;
      data = data.filter(function (item) {
        return item.denominazione_provincia != "In fase di definizione/aggiornamento";
      });
      setState(data);
    });
  };

  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "container-fluid position-absolute h-100 bg-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row position-absolute w-100 h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "col-md-2 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(_components_LeftSideBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    darkMode: darkMode,
    toggleDarkMode: toggleDarkMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("section", {
    className: "col-md-8 px-0 border-right border-left border-gray position-relative h-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
    darkMode: darkMode,
    cordinates: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_components_RightSideBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    darkMode: darkMode,
    getData: getData,
    data: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f969c1504c5654c04f05.hot-update.js.map
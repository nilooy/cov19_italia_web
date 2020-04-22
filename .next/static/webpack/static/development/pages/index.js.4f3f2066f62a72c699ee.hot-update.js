webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\Code\\Practice\\cov19ItaliaWeb\\components\\Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*global google*/


var MAP_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCSA62-dhozQFO_pcHIqDVRIQ_bv7tiXdQ&v=3.exp&libraries=geometry";
var MapComp = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(function (props) {
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultOptions: {
      styles: "retro"
    },
    defaultZoom: 5.8,
    defaultCenter: {
      lat: 41.8719,
      lng: 12.5674
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, props.children);
}));

var Map = function Map(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isOpen: 0,
    infoIndex: null
  }),
      state = _useState[0],
      setState = _useState[1];

  var handleToggleOpen = function handleToggleOpen(index) {
    setState({
      isOpen: true,
      infoIndex: index
    });
  };

  var handleToggleClose = function handleToggleClose() {
    setState({
      isOpen: false,
      infoIndex: null
    });
  };

  return __jsx(MapComp, {
    googleMapURL: MAP_URL,
    loadingElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 23
      }
    }),
    containerElement: __jsx("div", {
      style: {
        height: "100vh"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }),
    center: {
      lat: 41.8719,
      lng: 12.5674
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, props.cordinates.map(function (item, index) {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      position: {
        lat: parseFloat(item.lat),
        lng: parseFloat(item["long"])
      },
      options: {
        icon: {
          url: "https://image.flaticon.com/icons/svg/2659/2659980.svg",
          scaledSize: new google.maps.Size(25, 25)
        }
      },
      onMouseOver: function onMouseOver() {
        return handleToggleOpen(index);
      },
      onMouseOut: function onMouseOut() {
        return handleToggleClose();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, state.infoIndex === index && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
      onCloseClick: handleToggleClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx("h6", {
      style: {
        textAlign: "center"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, item.denominazione_provincia), __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, "Totale Casi:", " ", __jsx("span", {
      className: "text-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, " ", item.totale_casi)))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.4f3f2066f62a72c699ee.hot-update.js.map
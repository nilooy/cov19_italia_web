webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "D:\\Code\\Personal\\dev\\covid19it\\cov19ItaliaWeb\\components\\Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/*global google*/

 // import mapStyles from "./mapStyles";

var API_KEY = "AIzaSyDoGcqIxP_gv9Z8ZoAiR3hvMr9NcwZniDE";
var MAP_URL = "https://maps.googleapis.com/maps/api/js?key=".concat(API_KEY, "&v=3.exp&libraries=geometry");
var mapStyles = [{
  featureType: "all",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  featureType: "all",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#000000"
  }, {
    lightness: 13
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "administrative",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#144b53"
  }, {
    lightness: 14
  }, {
    weight: 1.4
  }]
}, {
  featureType: "landscape",
  elementType: "all",
  stylers: [{
    color: "#08304b"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#0c4152"
  }, {
    lightness: 5
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b434f"
  }, {
    lightness: 25
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.fill",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "road.arterial",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#0b3d51"
  }, {
    lightness: 16
  }]
}, {
  featureType: "road.local",
  elementType: "geometry",
  stylers: [{
    color: "#000000"
  }]
}, {
  featureType: "transit",
  elementType: "all",
  stylers: [{
    color: "#146474"
  }]
}, {
  featureType: "water",
  elementType: "all",
  stylers: [{
    color: "#021019"
  }]
}];
var MapComp = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(function (props) {
  var _jsx;

  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], (_jsx = {
    defaultOptions: {
      styles: "retro"
    },
    defaultZoom: 6,
    defaultCenter: {
      lat: 41.8719,
      lng: 12.5674
    }
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "defaultOptions", {
    styles: mapStyles
  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }), _jsx), props.children);
}));

var Map = function Map(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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
        lineNumber: 114,
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
        lineNumber: 115,
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
        lineNumber: 116,
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
      lineNumber: 112,
      columnNumber: 5
    }
  }, props.cordinates.map(function (item, index) {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
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
        lineNumber: 120,
        columnNumber: 9
      }
    }, state.infoIndex === index && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["InfoWindow"], {
      onCloseClick: handleToggleClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx("h6", {
      style: {
        textAlign: "center"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, item.denominazione_provincia), __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, "Totale Casi:", " ", __jsx("span", {
      className: "text-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 19
      }
    }, " ", item.totale_casi)))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=index.js.b1f9a78bc3b2a0a2ae49.hot-update.js.map
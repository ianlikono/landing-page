webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./components/sections/Header/Header.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headerStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./headerStyles */ "./components/sections/Header/headerStyles.ts");
/* harmony import */ var _utils_validateEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/validateEmail */ "./utils/validateEmail.ts");

var _jsxFileName = "/Users/likono/likono/landing-page/components/sections/Header/Header.tsx";







var styles = function styles(theme) {
  return {
    margin: {
      margin: theme.spacing.unit
    }
  };
};

var Header = function Header(props) {
  var classes = props.classes;
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["unstable_useMediaQuery"])("(min-width:1220.5px)");
  var nameInput = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      emailError = _useState2[0],
      setEmailError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      email = _useState4[0],
      setEmail = _useState4[1];

  var onRefButtonClicked = function onRefButtonClicked() {
    nameInput.current.focus();
  };

  var onSignUpClicked = function onSignUpClicked() {
    console.log(email);
  };

  var onBlurEmail = function onBlurEmail() {
    var valid = Object(_utils_validateEmail__WEBPACK_IMPORTED_MODULE_6__["default"])(email);

    if (!valid) {
      setEmailError(true);
    }
  };

  var onEmailInputChange = function onEmailInputChange(e) {
    setEmailError(false);
    setEmail(e.target.value);
    console.log(email);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["MainWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["Sections"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["HeaderH1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "ECOMMERCE REIMAGINED!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["SecondaryText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["SecondaryParagraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Start your online business free with no capital or risk investment and make your dreams come true.")), matches ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    role: "button",
    onClick: onRefButtonClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "Add",
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["ButtonText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Sign Up For Preview")))) : null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["FormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["FormHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["FormHeaderParagraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "It's Free For Life!!! Sign Up today and get notified once we launch!")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["FormInput"], {
    ref: nameInput,
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["FormInput"], {
    onChange: function onChange(e) {
      return onEmailInputChange(e);
    },
    value: email,
    name: "email",
    onBlur: onBlurEmail,
    error: emailError,
    placeholder: "Enter Email Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), emailError ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Please Enter a Valid Email") : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    role: "button",
    onClick: onSignUpClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "Add",
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_5__["ButtonText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Sign Up for preview")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Header));

/***/ })

})
//# sourceMappingURL=index.js.fbbb2dc1badf5e47538d.hot-update.js.map
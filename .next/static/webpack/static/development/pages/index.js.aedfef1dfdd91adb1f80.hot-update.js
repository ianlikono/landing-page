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
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _headerStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headerStyles */ "./components/sections/Header/headerStyles.ts");
/* harmony import */ var _utils_validateEmail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/validateEmail */ "./utils/validateEmail.ts");

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

  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useTransition"])(emailError, null, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });

  var onRefButtonClicked = function onRefButtonClicked() {
    nameInput.current.focus();
  };

  var onSignUpClicked = function onSignUpClicked() {
    console.log(email);
  };

  var onBlurEmail = function onBlurEmail() {
    var valid = Object(_utils_validateEmail__WEBPACK_IMPORTED_MODULE_7__["default"])(email);

    if (!valid) {
      setEmailError(true);
    }
  };

  var onEmailInputChange = function onEmailInputChange(e) {
    setEmail(e.target.value);
    console.log(email);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["MainWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["Sections"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["HeaderH1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "ECOMMERCE REIMAGINED!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["SecondaryText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["SecondaryParagraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Start your online business free with no capital or risk investment and make your dreams come true.")), matches ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    role: "button",
    onClick: onRefButtonClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "Add",
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["ButtonText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Sign Up For Preview")))) : null), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["FormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["FormHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["FormHeaderParagraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "It's Free For Life!!! Sign Up today and get notified once we launch!")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["FormInput"], {
    ref: nameInput,
    placeholder: "Enter Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["FormInput"], {
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
      lineNumber: 101
    },
    __self: this
  }), emailError ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].Error, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Please Enter a Valid Email") : null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    role: "button",
    onClick: onSignUpClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "Add",
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_6__["ButtonText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Sign Up for preview")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Header));

/***/ })

})
//# sourceMappingURL=index.js.aedfef1dfdd91adb1f80.hot-update.js.map
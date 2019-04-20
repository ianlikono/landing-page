webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./components/sections/Header/Header.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/Fab/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Dialog_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Dialog/Dialog */ "./components/sections/Dialog/Dialog.tsx");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _headerStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./headerStyles */ "./components/sections/Header/headerStyles.ts");
/* harmony import */ var _utils_validateEmail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/validateEmail */ "./utils/validateEmail.ts");




var _jsxFileName = "/Users/likono/likono/landing-page/components/sections/Header/Header.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation createUsersTable($createuserstableinput: CreateUsersTableInput!) {\n    createUsersTable(input: $createuserstableinput) {\n      id\n      name\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var userSignUp = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());

var styles = function styles(theme) {
  return {
    margin: {
      margin: theme.spacing.unit
    }
  };
};

var Header = function Header(props) {
  var classes = props.classes;
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["unstable_useMediaQuery"])("(min-width:1220.5px)");
  var nameInput = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      emailError = _useState2[0],
      setEmailError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      nameError = _useState4[0],
      setNameError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      modalOpen = _useState10[0],
      setModalOpen = _useState10[1];

  var onRefButtonClicked = function onRefButtonClicked() {
    nameInput.current.focus();
  };

  var onSignUpClicked =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(sgnUpUser) {
      var response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(name.length <= 0)) {
                _context.next = 4;
                break;
              }

              setNameError(true);
              _context.next = 15;
              break;

            case 4:
              if (!(email.length <= 0)) {
                _context.next = 8;
                break;
              }

              setEmailError(true);
              _context.next = 15;
              break;

            case 8:
              _context.next = 10;
              return sgnUpUser({
                variables: {
                  createuserstableinput: {
                    name: name,
                    email: email
                  }
                }
              });

            case 10:
              response = _context.sent;
              console.log(response);
              setModalOpen(true);
              setEmail("");
              setName("");

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSignUpClicked(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onBlurEmail = function onBlurEmail() {
    var valid = Object(_utils_validateEmail__WEBPACK_IMPORTED_MODULE_12__["default"])(email);

    if (!valid) {
      setEmailError(true);
    }
  };

  var onEmailInputChange = function onEmailInputChange(e) {
    setEmailError(false);
    setEmail(e.target.value);
  };

  var onNameInputChange = function onNameInputChange(e) {
    setNameError(false);
    setName(e.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["MainWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["Sections"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["HeaderH1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "ECOMMERCE REIMAGINED!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["SecondaryText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["SecondaryParagraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Start your online business free with no capital or risk investment and make your dreams come true.")), matches ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    role: "button",
    onClick: onRefButtonClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "Add",
    className: classes.margin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["ButtonText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Sign Up For Preview")))) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
    mutation: userSignUp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, function (sgnUpUser, _ref2) {
    var loading = _ref2.loading,
        error = _ref2.error;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["FormWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["FormHeader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["FormHeaderParagraph"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "It's Free For Life!!! Sign Up today and get notified once we launch!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["FormInput"], {
      onChange: function onChange(e) {
        return onNameInputChange(e);
      },
      value: name,
      name: "name",
      ref: nameInput,
      placeholder: "Enter Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }), nameError ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["Error"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "Please Enter your Name") : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["FormInput"], {
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
        lineNumber: 142
      },
      __self: this
    }), emailError ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["Error"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Please Enter a Valid Email") : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      role: "button",
      onClick: function onClick() {
        return onSignUpClicked(sgnUpUser);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default.a, {
      disabled: loading,
      variant: "extended",
      color: "primary",
      "aria-label": "Add",
      className: classes.margin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_headerStyles__WEBPACK_IMPORTED_MODULE_11__["ButtonText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Sign Up for preview")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: modalOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Header));

/***/ })

})
//# sourceMappingURL=index.js.7ce5f21371b498222208.hot-update.js.map
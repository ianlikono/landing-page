webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./components/sections/Header/Header.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/likono/likono/landing-page/components/sections/Header/Header.tsx";
// import * as React from "react";
// import { Wrapper } from "./styles";
// type Props = {
//   title?: string;
// };
// const Header: React.FunctionComponent<Props> = props => (
//   <Wrapper>
//     <h3>Header</h3>
//   </Wrapper>
// );
// export default Header;



var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

var MenuAppBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuAppBar, _React$Component);

  function MenuAppBar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuAppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuAppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      auth: true,
      anchorEl: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        auth: event.target.checked
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMenu", function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClose", function () {
      _this.setState({
        anchorEl: null
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuAppBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          auth = _this$state.auth,
          anchorEl = _this$state.anchorEl;
      var open = Boolean(anchorEl);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7___default.a, {
        position: "static",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "yaay"));
    }
  }]);

  return MenuAppBar;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles)(MenuAppBar));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/@material-ui/core/Backdrop/Backdrop.js":
false,

/***/ "./node_modules/@material-ui/core/Backdrop/index.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js":
false,

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
false,

/***/ "./node_modules/@material-ui/core/Fade/Fade.js":
false,

/***/ "./node_modules/@material-ui/core/Fade/index.js":
false,

/***/ "./node_modules/@material-ui/core/Grow/Grow.js":
false,

/***/ "./node_modules/@material-ui/core/Grow/index.js":
false,

/***/ "./node_modules/@material-ui/core/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/List/List.js":
false,

/***/ "./node_modules/@material-ui/core/List/ListContext.js":
false,

/***/ "./node_modules/@material-ui/core/List/index.js":
false,

/***/ "./node_modules/@material-ui/core/ListItem/ListItem.js":
false,

/***/ "./node_modules/@material-ui/core/ListItem/MergeListContext.js":
false,

/***/ "./node_modules/@material-ui/core/ListItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/Menu/Menu.js":
false,

/***/ "./node_modules/@material-ui/core/Menu/index.js":
false,

/***/ "./node_modules/@material-ui/core/MenuItem/MenuItem.js":
false,

/***/ "./node_modules/@material-ui/core/MenuItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/MenuList/MenuList.js":
false,

/***/ "./node_modules/@material-ui/core/MenuList/index.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/Modal.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/ModalManager.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/index.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/isOverflowing.js":
false,

/***/ "./node_modules/@material-ui/core/Modal/manageAriaHidden.js":
false,

/***/ "./node_modules/@material-ui/core/NoSsr/NoSsr.js":
false,

/***/ "./node_modules/@material-ui/core/NoSsr/index.js":
false,

/***/ "./node_modules/@material-ui/core/Popover/Popover.js":
false,

/***/ "./node_modules/@material-ui/core/Popover/index.js":
false,

/***/ "./node_modules/@material-ui/core/Portal/Portal.js":
false,

/***/ "./node_modules/@material-ui/core/Portal/index.js":
false,

/***/ "./node_modules/@material-ui/core/RootRef/RootRef.js":
false,

/***/ "./node_modules/@material-ui/core/RootRef/index.js":
false,

/***/ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/Toolbar/Toolbar.js":
false,

/***/ "./node_modules/@material-ui/core/Toolbar/index.js":
false,

/***/ "./node_modules/@material-ui/core/Typography/Typography.js":
false,

/***/ "./node_modules/@material-ui/core/Typography/index.js":
false,

/***/ "./node_modules/@material-ui/core/transitions/utils.js":
false,

/***/ "./node_modules/@material-ui/core/utils/ownerDocument.js":
false,

/***/ "./node_modules/@material-ui/core/utils/ownerWindow.js":
false,

/***/ "./node_modules/@material-ui/core/utils/reactHelpers.js":
false,

/***/ "./node_modules/@material-ui/icons/AccountCircle.js":
false,

/***/ "./node_modules/@material-ui/icons/Menu.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false,

/***/ "./node_modules/debounce/index.js":
false,

/***/ "./node_modules/dom-helpers/query/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
false,

/***/ "./node_modules/dom-helpers/style/index.js":
false,

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
false,

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
false,

/***/ "./node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/dom-helpers/util/camelize.js":
false,

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
false,

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
false,

/***/ "./node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
false,

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js":
false,

/***/ "./node_modules/react-event-listener/node_modules/warning/warning.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-transition-group/Transition.js":
false,

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
false,

/***/ "./node_modules/recompose/getDisplayName.js":
false,

/***/ "./node_modules/recompose/pure.js":
false,

/***/ "./node_modules/recompose/setDisplayName.js":
false,

/***/ "./node_modules/recompose/setStatic.js":
false,

/***/ "./node_modules/recompose/shallowEqual.js":
false,

/***/ "./node_modules/recompose/shouldUpdate.js":
false,

/***/ "./node_modules/recompose/wrapDisplayName.js":
false

})
//# sourceMappingURL=index.js.12bae55be30d16390d98.hot-update.js.map
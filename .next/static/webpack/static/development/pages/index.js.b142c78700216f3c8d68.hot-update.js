webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Header/styles.ts":
/*!**********************************************!*\
  !*** ./components/sections/Header/styles.ts ***!
  \**********************************************/
/*! exports provided: MainWrapper, Sections, Wrapper, Logo, HeaderH1, SecondaryText, SecondaryParagraph, ButtonText, FormWrapper, FormHeader, FormHeaderParagraph, FormInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sections", function() { return Sections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderH1", function() { return HeaderH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryText", function() { return SecondaryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryParagraph", function() { return SecondaryParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeader", function() { return FormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHeaderParagraph", function() { return FormHeaderParagraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInput", function() { return FormInput; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/images/header-bg.svg */ "./static/images/header-bg.svg");
/* harmony import */ var _static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/images/logo-full.png */ "./static/images/logo-full.png");
/* harmony import */ var _static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2__);



var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__MainWrapper",
  componentId: "sc-1c9ej89-0"
})(["margin-left:", ";"], function (props) {
  return props.theme.leftSpacing;
});
var Sections = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Sections",
  componentId: "sc-1c9ej89-1"
})(["display:flex;justify-content:center;flex-wrap:wrap;align-items:center;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1c9ej89-2"
})(["width:100%;height:110vh;margin-top:-20px;background:url(", ") no-repeat;background-size:cover;"], _static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1___default.a);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-1c9ej89-3"
})(["background:url(", ") no-repeat;background-position:-3.9rem 0px;background-size:24.3rem 16rem;width:16.4rem;height:16rem;"], _static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2___default.a);
var HeaderH1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__HeaderH1",
  componentId: "sc-1c9ej89-4"
})(["font-size:5.3rem;line-height:6.9rem;color:", ";font-family:", ";font-weight:300;width:56.4rem;height:auto;"], function (props) {
  return props.theme.colorTextPrimary;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});
var SecondaryText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__SecondaryText",
  componentId: "sc-1c9ej89-5"
})(["font-size:2rem;line-height:2.8rem;color:", ";font-family:", ";font-weight:400;width:37rem;height:auto;"], function (props) {
  return props.theme.colorTextPrimary;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});
var SecondaryParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__SecondaryParagraph",
  componentId: "sc-1c9ej89-6"
})(["text-align:left;line-height:2.8rem;font-size:2rem;"]);
var ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__ButtonText",
  componentId: "sc-1c9ej89-7"
})(["background-color:inherit;color:inherit;font-size:1.8rem;font-family:", ";font-weight:700;"], function (props) {
  return props.theme.fontFamilyPrimary;
});
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__FormWrapper",
  componentId: "sc-1c9ej89-8"
})(["width:40rem;height:35rem;margin:0;padding:0;border:none;border-radius:0.5rem;background-color:", ";box-shadow:", ";"], function (props) {
  return props.theme.colorTextPrimary;
}, function (props) {
  return props.theme.BoxShadow;
});
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__FormHeader",
  componentId: "sc-1c9ej89-9"
})(["font-size:2rem;line-height:2.8rem;color:", ";font-family:", ";font-weight:400;width:100%;height:auto;"], function (props) {
  return props.theme.colorTextDarkFaded;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});
var FormHeaderParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "styles__FormHeaderParagraph",
  componentId: "sc-1c9ej89-10"
})(["text-align:center;"]);
var FormInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "styles__FormInput",
  componentId: "sc-1c9ej89-11"
})(["font-size:2rem;font-family:", ";color:", ";border-radius:0.2em;border:none;position:relative;background:transparent;display:block;margin:2em auto;padding:0.5em 0.25em;text-align:center;box-shadow:0 0 1em 0.25em rgba(0,0,0,0.2);&:active{border:none;}&:focus{border:none;}"], function (props) {
  return props.theme.fontFamilyPrimary;
}, function (props) {
  return props.theme.colorTextDark;
});

/***/ })

})
//# sourceMappingURL=index.js.b142c78700216f3c8d68.hot-update.js.map
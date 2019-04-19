webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/sections/Header/headerStyles.ts":
/*!****************************************************!*\
  !*** ./components/sections/Header/headerStyles.ts ***!
  \****************************************************/
/*! exports provided: Sections, MainWrapper, Wrapper, Logo, HeaderH1, SecondaryText, SecondaryParagraph, ButtonText, FormWrapper, FormHeader, FormHeaderParagraph, FormInput, ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sections", function() { return Sections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWrapper", function() { return MainWrapper; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/images/header-bg.svg */ "./static/images/header-bg.svg");
/* harmony import */ var _static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/images/logo-full.png */ "./static/images/logo-full.png");
/* harmony import */ var _static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2__);



var Sections = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__Sections",
  componentId: "sc-822v9b-0"
})(["display:flex;justify-content:center;flex-wrap:wrap;align-items:center;width:100%;"]);
var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "headerStyles__MainWrapper",
  componentId: "sc-822v9b-1"
})(["margin-top:-20px;background:url(", ") no-repeat;background-size:cover;width:100%;height:110vh;display:flex;justify-content:center;"], _static_images_header_bg_svg__WEBPACK_IMPORTED_MODULE_1___default.a);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__Wrapper",
  componentId: "sc-822v9b-2"
})(["width:80%;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__Logo",
  componentId: "sc-822v9b-3"
})(["background:url(", ") no-repeat;background-position:-3.9rem 0px;background-size:24.3rem 16rem;width:16.4rem;height:16rem;"], _static_images_logo_full_png__WEBPACK_IMPORTED_MODULE_2___default.a);
var HeaderH1 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__HeaderH1",
  componentId: "sc-822v9b-4"
})(["font-size:5.3rem;line-height:6.9rem;color:", ";font-family:", ";font-weight:300;height:auto;text-align:center;"], function (props) {
  return props.theme.colorTextPrimary;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});
var SecondaryText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__SecondaryText",
  componentId: "sc-822v9b-5"
})(["font-size:2rem;line-height:2.8rem;color:", ";font-family:", ";font-weight:400;width:37rem;height:auto;"], function (props) {
  return props.theme.colorTextPrimary;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});
var SecondaryParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "headerStyles__SecondaryParagraph",
  componentId: "sc-822v9b-6"
})(["text-align:left;line-height:2.8rem;font-size:2rem;"]);
var ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__ButtonText",
  componentId: "sc-822v9b-7"
})(["background-color:inherit;color:inherit;font-size:1.8rem;font-family:", ";font-weight:700;"], function (props) {
  return props.theme.fontFamilyPrimary;
});
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__FormWrapper",
  componentId: "sc-822v9b-8"
})(["width:40rem;height:35rem;margin:0;padding:0;border:none;border-radius:0.5rem;background-color:", ";box-shadow:", ";display:flex;justify-content:center;align-items:center;flex-direction:column;"], function (props) {
  return props.theme.colorTextPrimary;
}, function (props) {
  return props.theme.BoxShadow;
});
var FormHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__FormHeader",
  componentId: "sc-822v9b-9"
})(["font-size:2rem;line-height:2.8rem;color:", ";font-family:", ";font-weight:400;width:100%;height:auto;"], function (props) {
  return props.theme.colorTextDarkFaded;
}, function (props) {
  return props.theme.fontFamilyPrimary;
});
var FormHeaderParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "headerStyles__FormHeaderParagraph",
  componentId: "sc-822v9b-10"
})(["text-align:center;"]);
var FormInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "headerStyles__FormInput",
  componentId: "sc-822v9b-11"
})(["font-size:2rem;font-family:", ";color:", ";border-radius:0.5rem;border:none;position:relative;background:transparent;display:block;margin-bottom:2rem;padding:0.5em 0.25em;box-shadow:0 0 1em 0.25em rgba(0,0,0,0.2);touch-action:manipulation;background-color:#fff;background-image:none;width:80%;&:active{border:none;}&:focus{border:none;outline:none !important;}"], function (props) {
  return props.theme.fontFamilyPrimary;
}, function (props) {
  return props.theme.colorTextDark;
});
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "headerStyles__ContentWrapper",
  componentId: "sc-822v9b-12"
})(["display:flex;max-width:56.4rem;justify-content:center;align-items:center;flex-direction:column;"]);

/***/ })

})
//# sourceMappingURL=index.js.5a9bf2807b1aae1a14ad.hot-update.js.map
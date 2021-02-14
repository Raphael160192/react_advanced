webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/pages/components/components.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/pages/components/components.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".components_error__39FqX {\r\n    color: white;\r\n    background-color: red;\r\n  }\r\n\r\n  .components_video__1okCZ{\r\n    margin-top: 75px;\r\n  }", "",{"version":3,"sources":["webpack://src/pages/components/components.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,qBAAqB;EACvB;;EAEA;IACE,gBAAgB;EAClB","sourcesContent":[".error {\r\n    color: white;\r\n    background-color: red;\r\n  }\r\n\r\n  .video{\r\n    margin-top: 75px;\r\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"error": "components_error__39FqX",
	"video": "components_video__1okCZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/pages/components/Video.js":
/*!***************************************!*\
  !*** ./src/pages/components/Video.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.module.css */ "./src/pages/components/components.module.css");
/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Raphael Gundim\\Desktop\\Curso Recode\\React-Advanced\\app5\\src\\pages\\components\\Video.js";

function Video() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "styles.video",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
      width: "560",
      height: "315",
      src: "https://www.youtube.com/embed/FOh88yUCDtY",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}
_c = Video;

var _c;

$RefreshReg$(_c, "Video");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9WaWRlby5qcyJdLCJuYW1lcyI6WyJWaWRlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDZCQUE2QixxQkFBcUIsOEJBQThCLE9BQU8sbUNBQW1DLHlCQUF5QixPQUFPLE9BQU8sMkdBQTJHLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxrQ0FBa0MscUJBQXFCLDhCQUE4QixPQUFPLGlCQUFpQix5QkFBeUIsT0FBTyxtQkFBbUI7QUFDamdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDZSxTQUFTQSxLQUFULEdBQWlCO0FBQzVCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSwyQkFDQTtBQUFRLFdBQUssRUFBQyxLQUFkO0FBQW9CLFlBQU0sRUFBQyxLQUEzQjtBQUFpQyxTQUFHLEVBQUMsMkNBQXJDO0FBQWlGLGlCQUFXLEVBQUMsR0FBN0Y7QUFBaUcsV0FBSyxFQUFDLDBGQUF2RztBQUFrTSxxQkFBZTtBQUFqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0Q7S0FOcUJBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjA4NzJmN2MyZjFmZDA0MmI5NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jb21wb25lbnRzX2Vycm9yX18zOUZxWCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbXBvbmVudHNfdmlkZW9fXzFva0Nae1xcclxcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvcGFnZXMvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lcnJvciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpZGVve1xcclxcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImVycm9yXCI6IFwiY29tcG9uZW50c19lcnJvcl9fMzlGcVhcIixcblx0XCJ2aWRlb1wiOiBcImNvbXBvbmVudHNfdmlkZW9fXzFva0NaXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbXBvbmVudHMubW9kdWxlLmNzcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW8oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R5bGVzLnZpZGVvXCI+XHJcbiAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0ZPaDg4eVVDRHRZXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9
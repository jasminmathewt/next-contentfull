webpackHotUpdate_N_E("pages/recipes/[slug]",{

/***/ "./pages/recipes/[slug].js":
/*!*********************************!*\
  !*** ./pages/recipes/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\projects\\next-contentful\\just-add-marmite\\pages\\recipes\\[slug].js";


var __N_SSG = true;
function RecipeDetails(_ref) {
  var reciepe = _ref.reciepe;
  console.log(reciepe);
  var _reciepe$fields = reciepe.fields,
      title = _reciepe$fields.title,
      slug = _reciepe$fields.slug,
      featuredImage = _reciepe$fields.featuredImage,
      ingradients = _reciepe$fields.ingradients,
      method = _reciepe$fields.method,
      cookingtime = _reciepe$fields.cookingtime;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "product-info",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "banner-img",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: 'https:' + featuredImage.fields.file.url,
        width: featuredImage.fields.file.details.image.width,
        height: featuredImage.fields.file.details.image.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info-details",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: cookingTime
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: slug
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: ingradients
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToReactComponents"])(method)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
_c = RecipeDetails;

var _c;

$RefreshReg$(_c, "RecipeDetails");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2llcGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGRzIiwidGl0bGUiLCJzbHVnIiwiZmVhdHVyZWRJbWFnZSIsImluZ3JhZGllbnRzIiwibWV0aG9kIiwiY29va2luZ3RpbWUiLCJmaWxlIiwidXJsIiwiZGV0YWlscyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjb29raW5nVGltZSIsImRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBc0RlLFNBQVNBLGFBQVQsT0FBa0M7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7QUFDL0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRCtDLHdCQUVtQkEsT0FBTyxDQUFDRyxNQUYzQjtBQUFBLE1BRXhDQyxLQUZ3QyxtQkFFeENBLEtBRndDO0FBQUEsTUFFbENDLElBRmtDLG1CQUVsQ0EsSUFGa0M7QUFBQSxNQUU3QkMsYUFGNkIsbUJBRTdCQSxhQUY2QjtBQUFBLE1BRWZDLFdBRmUsbUJBRWZBLFdBRmU7QUFBQSxNQUVIQyxNQUZHLG1CQUVIQSxNQUZHO0FBQUEsTUFFSUMsV0FGSixtQkFFSUEsV0FGSjtBQUcvQyxzQkFDRTtBQUFLLGFBQVMsRUFBRSxjQUFoQjtBQUFBLDRCQUNHO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDQSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBSSxXQUFXSCxhQUFhLENBQUNILE1BQWQsQ0FBcUJPLElBQXJCLENBQTBCQyxHQUFuRDtBQUNHLGFBQUssRUFBR0wsYUFBYSxDQUFDSCxNQUFkLENBQXFCTyxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDQyxLQURuRDtBQUVHLGNBQU0sRUFBR1IsYUFBYSxDQUFDSCxNQUFkLENBQXFCTyxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDRTtBQUZwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBT0c7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNDO0FBQUEsa0JBQU1YO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQSxrQkFBTVk7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFBLGtCQUFNWDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQUlDO0FBQUEsa0JBQU1FO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELGVBS0M7QUFBQSxrQkFBTVUsc0dBQXlCLENBQUNULE1BQUQ7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEO0tBdEJ1QlQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tzbHVnXS4yYWFlNjAyMTUyMzhjZDQ3ZWVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlcic7XG5cblxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19LRVlcbiAgfSlcbiAgLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGUgOiAncmVjaXBlJ1xuICB9KVxuICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoaXRlbT0+IHtcbiAgICByZXR1cm57XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogaXRlbS5maWxkcy5zbHVnIH0gXG4gICAgfVxuICB9KSpcbiAgcmV0dXJue1xuICAgIHBhdGhzXG4gICAgZmFsbGJhY2sgPSBmYWxzZVxuICB9XG59XG4qL1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGUgOiAncmVjaWVwZSdcbiAgfSlcbiAgY29uc29sZS5sb2cocmVzLml0ZW1zKTtcbiAgY29uc3QgcGF0aHMgPSByZXMuaXRlbXMubWFwKGl0ZW09PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7IHNsdWc6IGl0ZW0uZmllbGRzLnNsdWcgfSAsIC8vIFNlZSB0aGUgXCJwYXRoc1wiIHNlY3Rpb24gYmVsb3dcbiAgICB9XG4gIH0pXG4gIHJldHVybntcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ3JlY2lwZSdcbiAgfSlcbn0qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XG4gICAgY29uc3Qge2l0ZW1zfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGUgOiAncmVjaWVwZScsXG4gICAgJ2ZpZWxkcy5zbHVnJyA6IHBhcmFtcy5zbHVnXG5cbiAgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByZWNpZXBlOiBpdGVtc1swXSB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlRGV0YWlscyh7cmVjaWVwZX0pIHtcbiAgY29uc29sZS5sb2cocmVjaWVwZSk7XG4gIGNvbnN0IHt0aXRsZSxzbHVnLGZlYXR1cmVkSW1hZ2UsaW5ncmFkaWVudHMsbWV0aG9kLGNvb2tpbmd0aW1lfSA9IHJlY2llcGUuZmllbGRzXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9ICdwcm9kdWN0LWluZm8nID5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1pbWdcIj5cbiAgICAgICA8SW1hZ2Ugc3JjID0geydodHRwczonICsgZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgd2lkdGg9IHtmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2Uud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PSB7ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cbiAgICAgICAgLz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZGV0YWlsc1wiPlxuICAgICAgICA8ZGl2Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdj57Y29va2luZ1RpbWV9PC9kaXY+XG4gICAgICAgIDxkaXY+e3NsdWd9PC9kaXY+XG4gICAgICAgIDxkaXY+e2luZ3JhZGllbnRzfTwvZGl2PlxuICAgICAgICA8ZGl2Pntkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKG1ldGhvZCl9PC9kaXY+XG4gICAgICAgIFxuICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
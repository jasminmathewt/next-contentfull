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
      method = _reciepe$fields.method;
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
        lineNumber: 62,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info-details",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: slug
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: ingradients
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: method
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2llcGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGRzIiwidGl0bGUiLCJzbHVnIiwiZmVhdHVyZWRJbWFnZSIsImluZ3JhZGllbnRzIiwibWV0aG9kIiwiZmlsZSIsInVybCIsImRldGFpbHMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBc0RlLFNBQVNBLGFBQVQsT0FBa0M7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7QUFDL0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRCtDLHdCQUVPQSxPQUFPLENBQUNHLE1BRmY7QUFBQSxNQUV4Q0MsS0FGd0MsbUJBRXhDQSxLQUZ3QztBQUFBLE1BRWxDQyxJQUZrQyxtQkFFbENBLElBRmtDO0FBQUEsTUFFN0JDLGFBRjZCLG1CQUU3QkEsYUFGNkI7QUFBQSxNQUVmQyxXQUZlLG1CQUVmQSxXQUZlO0FBQUEsTUFFSEMsTUFGRyxtQkFFSEEsTUFGRztBQUcvQyxzQkFDRTtBQUFLLGFBQVMsRUFBRSxjQUFoQjtBQUFBLDRCQUNHO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDQSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBSSxXQUFXRixhQUFhLENBQUNILE1BQWQsQ0FBcUJNLElBQXJCLENBQTBCQyxHQUFuRDtBQUNHLGFBQUssRUFBR0osYUFBYSxDQUFDSCxNQUFkLENBQXFCTSxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDQyxLQURuRDtBQUVHLGNBQU0sRUFBR1AsYUFBYSxDQUFDSCxNQUFkLENBQXFCTSxJQUFyQixDQUEwQkUsT0FBMUIsQ0FBa0NDLEtBQWxDLENBQXdDRTtBQUZwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBT0c7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNDO0FBQUEsa0JBQU1WO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQSxrQkFBTUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFBLGtCQUFNRTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRCxlQUlDO0FBQUEsa0JBQU1DO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEO0tBcEJ1QlQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tzbHVnXS5iZTM3ODJlMTc5ZDdlMGNlY2EzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5cbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9TUEFDRV9JRCxcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZXG4gIH0pXG4gIC8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlIDogJ3JlY2lwZSdcbiAgfSlcbiAgY29uc3QgcGF0aHMgPSByZXMuaXRlbXMubWFwKGl0ZW09PiB7XG4gICAgcmV0dXJue1xuICAgICAgcGFyYW1zOiB7IHNsdWc6IGl0ZW0uZmlsZHMuc2x1ZyB9IFxuICAgIH1cbiAgfSkqXG4gIHJldHVybntcbiAgICBwYXRoc1xuICAgIGZhbGxiYWNrID0gZmFsc2VcbiAgfVxufVxuKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlIDogJ3JlY2llcGUnXG4gIH0pXG4gIGNvbnNvbGUubG9nKHJlcy5pdGVtcyk7XG4gIGNvbnN0IHBhdGhzID0gcmVzLml0ZW1zLm1hcChpdGVtPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczogeyBzbHVnOiBpdGVtLmZpZWxkcy5zbHVnIH0gLCAvLyBTZWUgdGhlIFwicGF0aHNcIiBzZWN0aW9uIGJlbG93XG4gICAgfVxuICB9KVxuICByZXR1cm57XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuLypleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6ICdyZWNpcGUnXG4gIH0pXG59Ki9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICAgIGNvbnN0IHtpdGVtc30gPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlIDogJ3JlY2llcGUnLFxuICAgICdmaWVsZHMuc2x1ZycgOiBwYXJhbXMuc2x1Z1xuXG4gIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcmVjaWVwZTogaXRlbXNbMF0gfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZURldGFpbHMoe3JlY2llcGV9KSB7XG4gIGNvbnNvbGUubG9nKHJlY2llcGUpO1xuICBjb25zdCB7dGl0bGUsc2x1ZyxmZWF0dXJlZEltYWdlLGluZ3JhZGllbnRzLG1ldGhvZH0gPSByZWNpZXBlLmZpZWxkc1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSAncHJvZHVjdC1pbmZvJyA+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaW1nXCI+XG4gICAgICAgPEltYWdlIHNyYyA9IHsnaHR0cHM6JyArIGZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgIHdpZHRoPSB7ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuICAgICAgICAgIGhlaWdodD0ge2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRldGFpbHNcIj5cbiAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXY+e3NsdWd9PC9kaXY+XG4gICAgICAgIDxkaXY+e2luZ3JhZGllbnRzfTwvZGl2PlxuICAgICAgICA8ZGl2PnttZXRob2R9PC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9
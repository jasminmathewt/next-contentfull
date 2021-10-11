webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RecipeCard.js":
/*!**********************************!*\
  !*** ./components/RecipeCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\projects\\next-contentful\\just-add-marmite\\components\\RecipeCard.js";


function RecipeCard(_ref) {
  var recipe = _ref.recipe;
  var _recipe$fields = recipe.fields,
      title = _recipe$fields.title,
      slug = _recipe$fields.slug,
      cookingTime = _recipe$fields.cookingTime,
      thumbnail = _recipe$fields.thumbnail;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "food-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 14
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "featured",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: 'https:' + thumbnail.fields.file.url,
        width: thumbnail.fields.file.details.image.width,
        height: thumbnail.fields.file.details.image.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "slug",
        children: slug
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cookingTime",
        children: [" Take approx ", cookingTime, " minuts to make"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: '/recipes/' + slug,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "cook",
        children: "Cook this"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 44
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
_c = RecipeCard;

var _c;

$RefreshReg$(_c, "RecipeCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVDYXJkLmpzIl0sIm5hbWVzIjpbIlJlY2lwZUNhcmQiLCJyZWNpcGUiLCJmaWVsZHMiLCJ0aXRsZSIsInNsdWciLCJjb29raW5nVGltZSIsInRodW1ibmFpbCIsImZpbGUiLCJ1cmwiLCJkZXRhaWxzIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUE4QjtBQUFBLE1BQVRDLE1BQVMsUUFBVEEsTUFBUztBQUFBLHVCQUNRQSxNQUFNLENBQUNDLE1BRGY7QUFBQSxNQUNsQ0MsS0FEa0Msa0JBQ2xDQSxLQURrQztBQUFBLE1BQzFCQyxJQUQwQixrQkFDMUJBLElBRDBCO0FBQUEsTUFDbkJDLFdBRG1CLGtCQUNuQkEsV0FEbUI7QUFBQSxNQUNMQyxTQURLLGtCQUNMQSxTQURLO0FBR3pDLHNCQUNJO0FBQUssYUFBUyxFQUFFLGNBQWhCO0FBQUEsNEJBQ0s7QUFBQSxnQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREwsZUFFSTtBQUFLLGVBQVMsRUFBRSxVQUFoQjtBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFJLFdBQVdHLFNBQVMsQ0FBQ0osTUFBVixDQUFpQkssSUFBakIsQ0FBc0JDLEdBQS9DO0FBQ0csYUFBSyxFQUFHRixTQUFTLENBQUNKLE1BQVYsQ0FBaUJLLElBQWpCLENBQXNCRSxPQUF0QixDQUE4QkMsS0FBOUIsQ0FBb0NDLEtBRC9DO0FBRUcsY0FBTSxFQUFHTCxTQUFTLENBQUNKLE1BQVYsQ0FBaUJLLElBQWpCLENBQXNCRSxPQUF0QixDQUE4QkMsS0FBOUIsQ0FBb0NFO0FBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFRSTtBQUFLLGVBQVMsRUFBRyxNQUFqQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCUjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLG9DQUE0Q0MsV0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFZSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxjQUFhRCxJQUF6QjtBQUFBLDZCQUErQjtBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkQ7S0FyQnFCSixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhNDlkZDE5MzQ2MGVkMTUyODZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZUNhcmQoe3JlY2lwZX0pIHtcclxuICAgIGNvbnN0IHt0aXRsZSAsIHNsdWcgLCBjb29raW5nVGltZSAsIHRodW1ibmFpbH0gPSByZWNpcGUuZmllbGRzXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJmb29kLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZmVhdHVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmMgPSB7J2h0dHBzOicgKyB0aHVtYm5haWwuZmllbGRzLmZpbGUudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg9IHt0aHVtYm5haWwuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgIGhlaWdodD0ge3RodW1ibmFpbC5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiaW5mb1wiPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdWdcIj57c2x1Z308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2luZ1RpbWVcIiA+IFRha2UgYXBwcm94IHtjb29raW5nVGltZX0gbWludXRzIHRvIG1ha2U8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmVjaXBlcy8nKyBzbHVnfT48YSBjbGFzc05hbWU9XCJjb29rXCI+Q29vayB0aGlzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9
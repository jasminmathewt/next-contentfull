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
      className: "cook",
      href: '/recipes/' + slug,
      children: "Cook this"
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

/***/ }),

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWNpcGVDYXJkLmpzIl0sIm5hbWVzIjpbIlJlY2lwZUNhcmQiLCJyZWNpcGUiLCJmaWVsZHMiLCJ0aXRsZSIsInNsdWciLCJjb29raW5nVGltZSIsInRodW1ibmFpbCIsImZpbGUiLCJ1cmwiLCJkZXRhaWxzIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUE4QjtBQUFBLE1BQVRDLE1BQVMsUUFBVEEsTUFBUztBQUFBLHVCQUNRQSxNQUFNLENBQUNDLE1BRGY7QUFBQSxNQUNsQ0MsS0FEa0Msa0JBQ2xDQSxLQURrQztBQUFBLE1BQzFCQyxJQUQwQixrQkFDMUJBLElBRDBCO0FBQUEsTUFDbkJDLFdBRG1CLGtCQUNuQkEsV0FEbUI7QUFBQSxNQUNMQyxTQURLLGtCQUNMQSxTQURLO0FBR3pDLHNCQUNJO0FBQUssYUFBUyxFQUFFLGNBQWhCO0FBQUEsNEJBQ0s7QUFBQSxnQkFBS0g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREwsZUFFSTtBQUFLLGVBQVMsRUFBRSxVQUFoQjtBQUFBLDZCQUNJLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFJLFdBQVdHLFNBQVMsQ0FBQ0osTUFBVixDQUFpQkssSUFBakIsQ0FBc0JDLEdBQS9DO0FBQ0csYUFBSyxFQUFHRixTQUFTLENBQUNKLE1BQVYsQ0FBaUJLLElBQWpCLENBQXNCRSxPQUF0QixDQUE4QkMsS0FBOUIsQ0FBb0NDLEtBRC9DO0FBRUcsY0FBTSxFQUFHTCxTQUFTLENBQUNKLE1BQVYsQ0FBaUJLLElBQWpCLENBQXNCRSxPQUF0QixDQUE4QkMsS0FBOUIsQ0FBb0NFO0FBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFRSTtBQUFLLGVBQVMsRUFBRyxNQUFqQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCUjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLG9DQUE0Q0MsV0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFZSSxxRUFBQyxnREFBRDtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUF1QixVQUFJLEVBQUUsY0FBYUQsSUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCRDtLQXJCcUJKLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGI1Y2ExNGE4YjA4M2RiMTVkOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlQ2FyZCh7cmVjaXBlfSkge1xyXG4gICAgY29uc3Qge3RpdGxlICwgc2x1ZyAsIGNvb2tpbmdUaW1lICwgdGh1bWJuYWlsfSA9IHJlY2lwZS5maWVsZHNcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImZvb2Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJmZWF0dXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYyA9IHsnaHR0cHM6JyArIHRodW1ibmFpbC5maWVsZHMuZmlsZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aD0ge3RodW1ibmFpbC5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0PSB7dGh1bWJuYWlsLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJpbmZvXCI+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2x1Z1wiPntzbHVnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb29raW5nVGltZVwiID4gVGFrZSBhcHByb3gge2Nvb2tpbmdUaW1lfSBtaW51dHMgdG8gbWFrZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY29va1wiIGhyZWY9eycvcmVjaXBlcy8nKyBzbHVnfT5Db29rIHRoaXM8L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==
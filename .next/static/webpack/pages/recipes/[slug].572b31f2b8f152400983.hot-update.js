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
  var _this = this;

  var reciepe = _ref.reciepe;
  console.log(reciepe);
  var _reciepe$fields = reciepe.fields,
      title = _reciepe$fields.title,
      slug = _reciepe$fields.slug,
      featuredImage = _reciepe$fields.featuredImage,
      ingradients = _reciepe$fields.ingradients,
      method = _reciepe$fields.method,
      cookingTime = _reciepe$fields.cookingTime;
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
        lineNumber: 39,
        columnNumber: 8
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info-details",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "recipe-title",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cookingTime",
        children: ["Takes about ", cookingTime, " minuts"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "slug",
        children: slug
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ingradinets",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Ingradinet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: ingradients.map(function (ingradient) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: ingradient
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "method",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Method"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToReactComponents"])(method)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2llcGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGRzIiwidGl0bGUiLCJzbHVnIiwiZmVhdHVyZWRJbWFnZSIsImluZ3JhZGllbnRzIiwibWV0aG9kIiwiY29va2luZ1RpbWUiLCJmaWxlIiwidXJsIiwiZGV0YWlscyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJpbmdyYWRpZW50IiwiZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUE4QmUsU0FBU0EsYUFBVCxPQUFrQztBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUMvQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFEK0Msd0JBRW1CQSxPQUFPLENBQUNHLE1BRjNCO0FBQUEsTUFFeENDLEtBRndDLG1CQUV4Q0EsS0FGd0M7QUFBQSxNQUVsQ0MsSUFGa0MsbUJBRWxDQSxJQUZrQztBQUFBLE1BRTdCQyxhQUY2QixtQkFFN0JBLGFBRjZCO0FBQUEsTUFFZkMsV0FGZSxtQkFFZkEsV0FGZTtBQUFBLE1BRUhDLE1BRkcsbUJBRUhBLE1BRkc7QUFBQSxNQUVJQyxXQUZKLG1CQUVJQSxXQUZKO0FBRy9DLHNCQUNFO0FBQUssYUFBUyxFQUFFLGNBQWhCO0FBQUEsNEJBQ0c7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNBLHFFQUFDLGlEQUFEO0FBQU8sV0FBRyxFQUFJLFdBQVdILGFBQWEsQ0FBQ0gsTUFBZCxDQUFxQk8sSUFBckIsQ0FBMEJDLEdBQW5EO0FBQ0csYUFBSyxFQUFHTCxhQUFhLENBQUNILE1BQWQsQ0FBcUJPLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NDLEtBRG5EO0FBRUcsY0FBTSxFQUFHUixhQUFhLENBQUNILE1BQWQsQ0FBcUJPLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NFO0FBRnBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFPRztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFBOEI7QUFBQSxvQkFBS1g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsbUNBQ2VLLFdBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFLQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUF1Qko7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBTUM7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQ0dFLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFBQyxVQUFVO0FBQUEsZ0NBQ3pCO0FBQUEsd0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEeUI7QUFBQSxXQUExQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkQsZUFjQztBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdDLHNHQUF5QixDQUFDVixNQUFELENBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEO0tBaEN1QlQsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tzbHVnXS41NzJiMzFmMmI4ZjE1MjQwMDk4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlcic7XG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZXG59KVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlIDogJ3JlY2llcGUnXG4gIH0pXG4gIGNvbnN0IHBhdGhzID0gcmVzLml0ZW1zLm1hcChpdGVtPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczogeyBzbHVnOiBpdGVtLmZpZWxkcy5zbHVnIH0gLCAvLyBTZWUgdGhlIFwicGF0aHNcIiBzZWN0aW9uIGJlbG93XG4gICAgfVxuICB9KVxuICByZXR1cm57XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICAgIGNvbnN0IHtpdGVtc30gPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlIDogJ3JlY2llcGUnLFxuICAgICdmaWVsZHMuc2x1ZycgOiBwYXJhbXMuc2x1Z1xuXG4gIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcmVjaWVwZTogaXRlbXNbMF0gfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZURldGFpbHMoe3JlY2llcGV9KSB7XG4gIGNvbnNvbGUubG9nKHJlY2llcGUpO1xuICBjb25zdCB7dGl0bGUsc2x1ZyxmZWF0dXJlZEltYWdlLGluZ3JhZGllbnRzLG1ldGhvZCxjb29raW5nVGltZX0gPSByZWNpZXBlLmZpZWxkc1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSAncHJvZHVjdC1pbmZvJyA+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaW1nXCI+XG4gICAgICAgPEltYWdlIHNyYyA9IHsnaHR0cHM6JyArIGZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxuICAgICAgICAgIHdpZHRoPSB7ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxuICAgICAgICAgIGhlaWdodD0ge2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS5oZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRldGFpbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWNpcGUtdGl0bGVcIj48aDI+e3RpdGxlfTwvaDI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2luZ1RpbWVcIj5cbiAgICAgICAgICBUYWtlcyBhYm91dCB7Y29va2luZ1RpbWV9IG1pbnV0c1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHVnXCI+e3NsdWd9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5ncmFkaW5ldHNcIj5cbiAgICAgICAgICA8aDQ+SW5ncmFkaW5ldDwvaDQ+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2luZ3JhZGllbnRzLm1hcChpbmdyYWRpZW50ID0+IChcbiAgICAgICAgICAgICAgPGxpPntpbmdyYWRpZW50fTwvbGk+ICAgICBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGhvZFwiPlxuICAgICAgICAgIDxoND5NZXRob2Q8L2g0PlxuICAgICAgICAgIHtkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKG1ldGhvZCl9XG4gICAgICAgIDwvZGl2PiAgICAgICBcbiAgICAgICA8L2Rpdj4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=
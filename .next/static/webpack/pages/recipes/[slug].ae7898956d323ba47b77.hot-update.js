webpackHotUpdate_N_E("pages/recipes/[slug]",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/env/data.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/helpers/validator.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/call-bind/callBound.js":
false,

/***/ "./node_modules/call-bind/index.js":
false,

/***/ "./node_modules/contentful-resolve-response/dist/esm/index.js":
false,

/***/ "./node_modules/contentful-sdk-core/dist/index.es-modules.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/contentful.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/create-contentful-api.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/create-global-options.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/asset-key.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/asset.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/content-type.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/entry.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/index.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/locale.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/space.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/entities/tag.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/mixins/stringify-safe.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/paged-sync.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/utils/normalize-select.js":
false,

/***/ "./node_modules/contentful/dist/es-modules/utils/validate-timestamp.js":
false,

/***/ "./node_modules/fast-copy/dist/fast-copy.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/get-intrinsic/index.js":
false,

/***/ "./node_modules/has-symbols/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/json-stringify-safe/stringify.js":
false,

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./node_modules/object-inspect/index.js":
false,

/***/ "./node_modules/p-throttle/index.js":
false,

/***/ "./node_modules/qs/lib/formats.js":
false,

/***/ "./node_modules/qs/lib/index.js":
false,

/***/ "./node_modules/qs/lib/parse.js":
false,

/***/ "./node_modules/qs/lib/stringify.js":
false,

/***/ "./node_modules/qs/lib/utils.js":
false,

/***/ "./node_modules/side-channel/index.js":
false,

/***/ "./pages/recipes/[slug].js":
/*!*********************************!*\
  !*** ./pages/recipes/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "F:\\projects\\next-contentful\\just-add-marmite\\pages\\recipes\\[slug].js";
console.log(process.env.CONTENTFUL_ACCESS_KEY + ';' + process.env.CONTENTFUL_SPACE_ID);

/*export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type : 'recipe'
  })
  console.log(res)
  return {


  }
  const paths = res.items.map(item=> {
    return{
      params: { slug: item.filds.slug } 
    }
  })
  return{
    paths
    //fallback = false
  }
}*/
var __N_SSG = true;
function RecipeDetails() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Recipe Details"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ 1:
false,

/***/ 2:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJDT05URU5URlVMX0FDQ0VTU19LRVkiLCJDT05URU5URlVMX1NQQUNFX0lEIiwiUmVjaXBlRGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBWixHQUFtQyxHQUFuQyxHQUF5Q0YsT0FBTyxDQUFDQyxHQUFSLENBQVlFLG1CQUFqRTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQyxhQUFULEdBQXlCO0FBQ3RDLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtLQU51QkEsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tzbHVnXS5hZTc4OTg5NTZkMzIzYmE0N2I3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCdcblxuXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19LRVkgKyc7JyArIHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfU1BBQ0VfSUQpIDtcblxuICBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5DT05URU5URlVMX0FDQ0VTU19LRVlcbiAgfSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogJ3JlY2lwZSdcbiAgfSlcbn1cbi8qZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlIDogJ3JlY2lwZSdcbiAgfSlcbiAgY29uc29sZS5sb2cocmVzKVxuICByZXR1cm4ge1xuXG5cbiAgfVxuICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoaXRlbT0+IHtcbiAgICByZXR1cm57XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogaXRlbS5maWxkcy5zbHVnIH0gXG4gICAgfVxuICB9KVxuICByZXR1cm57XG4gICAgcGF0aHNcbiAgICAvL2ZhbGxiYWNrID0gZmFsc2VcbiAgfVxufSovXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlRGV0YWlscygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgUmVjaXBlIERldGFpbHNcbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=
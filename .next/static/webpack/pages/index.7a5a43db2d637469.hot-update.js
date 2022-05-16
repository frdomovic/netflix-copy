"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Row.tsx":
/*!****************************!*\
  !*** ./components/Row.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Thumbnail */ \"./components/Thumbnail.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Row(param) {\n    var title = param.title, movies = param.movies;\n    var _this = this;\n    _s();\n    var rowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isMoved = ref[0], setIsMoved = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-40 space-y-0.5 md:space-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: 'text-[\"e5e5e5] w-56 cursor-pointer text-sm font-semibold transition duration-200 hover:text-white md:text-2xl',\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"group relative md:-ml-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {\n                        className: \"cursor:pointer absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 transition hover:scale-125 group-hover:opacity-100\",\n                        onClick: function() {\n                            return handleClick(\"left\");\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: rowRef,\n                        className: \"flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2\",\n                        children: movies.map(function(movie) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                movie: movie\n                            }, movie.id, false, {\n                                fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {\n                        className: \"cursor:pointer absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 transition hover:scale-125 group-hover:opacity-100\",\n                        onClick: function() {\n                            return handleClick(\"right\");\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/components/Row.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(Row, \"Xr7sqxeIGLqlMnzO46upQKbtpiY=\");\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvdy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBFO0FBQzNCO0FBQ0E7O0FBTWhDLFNBQVNNLEdBQUcsQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxLQUFLLEdBQVAsS0FBd0IsQ0FBdEJBLEtBQUssRUFBRUMsTUFBTSxHQUFmLEtBQXdCLENBQWZBLE1BQU07OztJQUN6QyxJQUFNQyxNQUFNLEdBQUdOLDZDQUFNLENBQWlCLElBQUksQ0FBQztJQUMzQyxJQUE4QkMsR0FBd0IsR0FBeEJBLCtDQUFRLENBQVUsS0FBSyxDQUFDLEVBVnhELE9BVWdCLEdBQWdCQSxHQUF3QixHQUF4QyxFQVZoQixVQVU0QixHQUFJQSxHQUF3QixHQUE1QjtJQUUxQixxQkFDRSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsK0JBQStCOzswQkFDNUMsOERBQUNDLElBQUU7Z0JBQ0RELFNBQVMsRUFBQywrR0FDOEI7MEJBRXZDTixLQUFLOzs7OztvQkFDSDswQkFDTCw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7a0NBQ3RDLDhEQUFDYixtRUFBZTt3QkFDZGEsU0FBUyxFQUFDLGdJQUN1RDt3QkFDakVFLE9BQU8sRUFBRTttQ0FBTUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzt5QkFBQTs7Ozs7NEJBQ2xDO2tDQUNGLDhEQUFDSixLQUFHO3dCQUNGSyxHQUFHLEVBQUVSLE1BQU07d0JBQ1hJLFNBQVMsRUFBQyxzRkFBc0Y7a0NBRS9GTCxNQUFNLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO2lEQUNoQiw4REFBQ2QsNkRBQVM7Z0NBQWdCYyxLQUFLLEVBQUVBLEtBQUs7K0JBQXRCQSxLQUFLLENBQUNDLEVBQUU7Ozs7cUNBQWtCO3lCQUMzQyxDQUFDOzs7Ozs0QkFDRTtrQ0FDTiw4REFBQ25CLG9FQUFnQjt3QkFDZlksU0FBUyxFQUFDLGdJQUN1RDt3QkFDakVFLE9BQU8sRUFBRTttQ0FBTUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzt5QkFBQTs7Ozs7NEJBQ25DOzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ1A7Q0FDRjtHQWxDdUJWLEdBQUc7QUFBSEEsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jvdy50c3g/YThjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi4vY29tcG9uZW50cy9UaHVtYm5haWwnXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIG1vdmllczogTW92aWVbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3coeyB0aXRsZSwgbW92aWVzIH06IFByb3BzKSB7XG4gIGNvbnN0IHJvd1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgY29uc3QgW2lzTW92ZWQsIHNldElzTW92ZWRdID0gdXNlU3RhdGU8Qm9vbGVhbj4oZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDAgc3BhY2UteS0wLjUgbWQ6c3BhY2UteS0yXCI+XG4gICAgICA8aDJcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LVtcImU1ZTVlNV0gdy01NiBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJhbnNpdGlvblxuICAgICAgZHVyYXRpb24tMjAwIGhvdmVyOnRleHQtd2hpdGUgbWQ6dGV4dC0yeGwnXG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIG1kOi1tbC0yXCI+XG4gICAgICAgIDxDaGV2cm9uTGVmdEljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3I6cG9pbnRlciBhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBsZWZ0LTIgei00MCBtLWF1dG8gaC05XG4gICAgICAgICAgdy05IG9wYWNpdHktMCB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTEyNSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ2xlZnQnKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17cm93UmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMC41IG92ZXJmbG93LXgtc2Nyb2xsIHNjcm9sbGJhci1oaWRlIG1kOnNwYWNlLXgtMi41IG1kOnAtMlwiXG4gICAgICAgID5cbiAgICAgICAgICB7bW92aWVzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICAgIDxUaHVtYm5haWwga2V5PXttb3ZpZS5pZH0gbW92aWU9e21vdmllfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENoZXZyb25SaWdodEljb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3I6cG9pbnRlciBhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCBsZWZ0LTIgei00MCBtLWF1dG8gaC05XG4gICAgICAgICAgdy05IG9wYWNpdHktMCB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTEyNSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJ3JpZ2h0Jyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNoZXZyb25MZWZ0SWNvbiIsIkNoZXZyb25SaWdodEljb24iLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiVGh1bWJuYWlsIiwiUm93IiwidGl0bGUiLCJtb3ZpZXMiLCJyb3dSZWYiLCJpc01vdmVkIiwic2V0SXNNb3ZlZCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwib25DbGljayIsImhhbmRsZUNsaWNrIiwicmVmIiwibWFwIiwibW92aWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Row.tsx\n");

/***/ })

});
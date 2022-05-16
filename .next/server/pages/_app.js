/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase.ts":
/*!*********************!*\
  !*** ./firebase.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAvxglXs_MKBfzLPB4pquuqUrRDlhd8Eyo\",\n    authDomain: \"netflix-6d700.firebaseapp.com\",\n    projectId: \"netflix-6d700\",\n    storageBucket: \"netflix-6d700.appspot.com\",\n    messagingSenderId: \"961039138000\",\n    appId: \"1:961039138000:web:a10d9b74f3f352338332d5\",\n    measurementId: \"G-M9XF93SEQP\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ1Y7QUFDdkMsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1LLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLCtCQUErQjtJQUMzQ0MsU0FBUyxFQUFFLGVBQWU7SUFDMUJDLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUNDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRUQsc0JBQXNCO0FBQ3RCLE1BQU1DLEdBQUcsR0FBRyxDQUFDWCxxREFBTyxFQUFFLENBQUNZLE1BQU0sR0FBR2QsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDLEdBQUdKLG9EQUFNLEVBQUU7QUFDeEUsTUFBTWMsRUFBRSxHQUFHWixnRUFBWSxFQUFFO0FBQ3pCLE1BQU1hLElBQUksR0FBR1osc0RBQU8sRUFBRTtBQUV0QixpRUFBZVMsR0FBRztBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UudHM/OTJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeUF2eGdsWHNfTUtCZnpMUEI0cHF1dXFVclJEbGhkOEV5bycsXG4gIGF1dGhEb21haW46ICduZXRmbGl4LTZkNzAwLmZpcmViYXNlYXBwLmNvbScsXG4gIHByb2plY3RJZDogJ25ldGZsaXgtNmQ3MDAnLFxuICBzdG9yYWdlQnVja2V0OiAnbmV0ZmxpeC02ZDcwMC5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnOTYxMDM5MTM4MDAwJyxcbiAgYXBwSWQ6ICcxOjk2MTAzOTEzODAwMDp3ZWI6YTEwZDliNzRmM2YzNTIzMzgzMzJkNScsXG4gIG1lYXN1cmVtZW50SWQ6ICdHLU05WEY5M1NFUVAnXG59XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKVxuY29uc3QgYXV0aCA9IGdldEF1dGgoKVxuXG5leHBvcnQgZGVmYXVsdCBhcHBcbmV4cG9ydCB7IGF1dGgsIGRiIH1cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImdldEZpcmVzdG9yZSIsImdldEF1dGgiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJsZW5ndGgiLCJkYiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.ts\n");

/***/ }),

/***/ "./hooks/useAuth.tsx":
/*!***************************!*\
  !*** ./hooks/useAuth.tsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    signUp: async ()=>{},\n    signIn: async ()=>{},\n    logout: async ()=>{},\n    error: null,\n    loading: false\n});\nconst AuthProvider = ({ children  })=>{\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: error1 , 1: useError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const { 0: initialLoading , 1: setInitialLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                // Logged in...\n                setUser(user);\n                setLoading(false);\n            } else {\n                // Not logged in...\n                setUser(null);\n                setLoading(true);\n                router.push(\"/login\");\n            }\n            setInitialLoading(false);\n        })\n    , [\n        _firebase__WEBPACK_IMPORTED_MODULE_4__.auth\n    ]);\n    const signUp = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((err)=>{\n            alert(err.message);\n        });\n    };\n    const signIn = async (email, password)=>{\n        setLoading(true);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, email, password).then((userCredential)=>{\n            setUser(userCredential.user);\n            router.push(\"/\");\n            setLoading(false);\n        }).catch((err)=>{\n            alert(err.message);\n        });\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            setUser(null);\n        }).catch((error)=>alert(error.message)\n        ).finally(()=>setLoading(false)\n        );\n    };\n    const memoedValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            user: user1,\n            signUp,\n            signIn,\n            loading,\n            logout,\n            error: error1\n        })\n    , [\n        user1,\n        loading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: memoedValue,\n        children: !initialLoading && children\n    }, void 0, false, {\n        fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/hooks/useAuth.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined);\n};\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkssVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQmpCLHNEQUFPLENBQUNPLDJDQUFJLENBQUMsQ0FDVm1CLElBQUksQ0FBQyxJQUFNO1lBQ1ZSLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDZCxDQUFDLENBQ0RVLEtBQUssQ0FBQyxDQUFDZixLQUFLLEdBQUtpQixLQUFLLENBQUNqQixLQUFLLENBQUNrQixPQUFPLENBQUM7UUFBQSxDQUFDLENBQ3RDQyxPQUFPLENBQUMsSUFBTWYsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUFBLENBQUM7S0FDcEM7SUFDRCxNQUFNZ0IsV0FBVyxHQUFHNUIsOENBQU8sQ0FDekIsSUFBTSxDQUFDO1lBQ0xJLElBQUksRUFBSkEsS0FBSTtZQUNKQyxNQUFNO1lBQ05DLE1BQU07WUFDTkcsT0FBTztZQUNQRixNQUFNO1lBQ05DLEtBQUssRUFBTEEsTUFBSztTQUNOLENBQUM7SUFBQSxFQUNGO1FBQUNKLEtBQUk7UUFBRUssT0FBTztLQUFDLENBQ2hCO0lBRUQscUJBQ0UsOERBQUNOLFdBQVcsQ0FBQzBCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixXQUFXO2tCQUNyQyxDQUFDYixjQUFjLElBQUlKLFFBQVE7Ozs7O2lCQUNQLENBQ3hCO0NBQ0Y7QUFFYyxTQUFTb0IsT0FBTyxHQUFHO0lBQ2hDLE9BQU9qQyxpREFBVSxDQUFDSyxXQUFXLENBQUM7Q0FDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBdXRoLnRzeD9mYmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbk91dCxcbiAgVXNlcixcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcblxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7XG4gIENoaWxkcmVuLFxuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZSdcbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cbmludGVyZmFjZSBJQXV0aCB7XG4gIHVzZXI6IFVzZXIgfCBudWxsXG4gIHNpZ25VcDogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD5cbiAgc2lnbkluOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPlxuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD5cbiAgZXJyb3I6IHN0cmluZyB8IG51bGxcbiAgbG9hZGluZzogYm9vbGVhblxufVxuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUF1dGg+KHtcbiAgdXNlcjogbnVsbCxcbiAgc2lnblVwOiBhc3luYyAoKSA9PiB7fSxcbiAgc2lnbkluOiBhc3luYyAoKSA9PiB7fSxcbiAgbG9nb3V0OiBhc3luYyAoKSA9PiB7fSxcbiAgZXJyb3I6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxufSlcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IEF1dGhQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCB1c2VFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaW5pdGlhbExvYWRpbmcsIHNldEluaXRpYWxMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PlxuICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgLy8gTG9nZ2VkIGluLi4uXG4gICAgICAgICAgc2V0VXNlcih1c2VyKVxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm90IGxvZ2dlZCBpbi4uLlxuICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH1cblxuICAgICAgICBzZXRJbml0aWFsTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pLFxuICAgIFthdXRoXVxuICApXG4gIGNvbnN0IHNpZ25VcCA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBzZXRVc2VyKHVzZXJDcmVkZW50aWFsLnVzZXIpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBhbGVydChlcnIubWVzc2FnZSlcbiAgICAgIH0pXG4gIH1cbiAgY29uc3Qgc2lnbkluID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgc2V0VXNlcih1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpXG4gICAgICB9KVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzaWduT3V0KGF1dGgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvci5tZXNzYWdlKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldExvYWRpbmcoZmFsc2UpKVxuICB9XG4gIGNvbnN0IG1lbW9lZFZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdXNlcixcbiAgICAgIHNpZ25VcCxcbiAgICAgIHNpZ25JbixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBsb2dvdXQsXG4gICAgICBlcnJvcixcbiAgICB9KSxcbiAgICBbdXNlciwgbG9hZGluZ11cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttZW1vZWRWYWx1ZX0+XG4gICAgICB7IWluaXRpYWxMb2FkaW5nICYmIGNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJhdXRoIiwiQXV0aENvbnRleHQiLCJ1c2VyIiwic2lnblVwIiwic2lnbkluIiwibG9nb3V0IiwiZXJyb3IiLCJsb2FkaW5nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRMb2FkaW5nIiwic2V0VXNlciIsInVzZUVycm9yIiwiaW5pdGlhbExvYWRpbmciLCJzZXRJbml0aWFsTG9hZGluZyIsInJvdXRlciIsInB1c2giLCJlbWFpbCIsInBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJmaW5hbGx5IiwibWVtb2VkVmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAuth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/x/Desktop/JOB/typescript/nextflix-copy/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVpQjtBQUMvQyxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsd0RBQVk7a0JBQ1gsNEVBQUNFLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFDZixDQUNoQjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlQXV0aCdcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/login */ \"./src/utilities/login.js\");\n/* harmony import */ var _utilities_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_login__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/signup */ \"./src/utilities/signup.js\");\n/* harmony import */ var _utilities_signup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_signup__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://newsify-rts-liva/./src/login.js?");

/***/ }),

/***/ "./src/utilities/login.js":
/*!********************************!*\
  !*** ./src/utilities/login.js ***!
  \********************************/
/***/ (() => {

eval("const signupDialog = document.querySelector('#signup-dialog');\r\nconst loginDialog = document.querySelector('#login-dialog');\r\nconst loginBtn = document.querySelector('#signup__login');\r\nconst dialogSignupBtn = document.querySelector('#login__signup-btn');\r\nconst loginSubmit = document.querySelector('#login-submit');\r\n\r\nfunction showLoginDialog() {\r\n    signupDialog.close();\r\n    loginDialog.showModal();\r\n};\r\n\r\nloginBtn.addEventListener('click', () => {\r\n    showLoginDialog();\r\n});\r\n\r\nloginDialog.addEventListener('click', e => {\r\n    if (e.target === loginSubmit) {\r\n        loginDialog.close();\r\n        location.assign('home.html');\r\n    }\r\n\r\n    else if (e.target === dialogSignupBtn) {\r\n        loginDialog.close();\r\n        signupDialog.showModal();\r\n    }\r\n\r\n    else if (e.target === e.currentTarget) {\r\n        loginDialog.close();\r\n    }\r\n});\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/login.js?");

/***/ }),

/***/ "./src/utilities/signup.js":
/*!*********************************!*\
  !*** ./src/utilities/signup.js ***!
  \*********************************/
/***/ (() => {

eval("const loginDialog = document.querySelector('#login-dialog');\r\nconst signupDialog = document.querySelector('#signup-dialog');\r\nconst signupBtn = document.querySelector('#signup-btn');\r\nconst dialogLoginBtn = document.querySelector('#signup__login-btn');\r\nconst signupSubmit = document.querySelector('#signup-submit');\r\n\r\nfunction showSignupDialog() {\r\n    loginDialog.close();\r\n    signupDialog.showModal();\r\n};\r\n\r\nsignupBtn.addEventListener('click', () => {\r\n    signupDialog.showModal();\r\n})\r\n\r\nsignupDialog.addEventListener('click', e => {\r\n    if (e.target === signupSubmit) {\r\n        signupDialog.close();\r\n        localStorage.setItem('loggedin', true);\r\n        location.assign('home.html');\r\n    }\r\n\r\n    else if (e.target === dialogLoginBtn) {\r\n        signupDialog.close();\r\n        loginDialog.showModal();\r\n    }\r\n\r\n    else if (e.target === e.currentTarget) {\r\n        signupDialog.close();\r\n    }\r\n});\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/signup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/login.js");
/******/ 	
/******/ })()
;
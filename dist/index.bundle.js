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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/slider */ \"./src/utilities/slider.js\");\n/* harmony import */ var _utilities_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_slider__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/splash */ \"./src/utilities/splash.js\");\n/* harmony import */ var _utilities_splash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_splash__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack://newsify-rts-liva/./src/index.js?");

/***/ }),

/***/ "./src/utilities/slider.js":
/*!*********************************!*\
  !*** ./src/utilities/slider.js ***!
  \*********************************/
/***/ (() => {

eval("const sliderRoll = document.querySelector('#slider__roll');\r\n\r\nconst next = document.querySelector('#slider__next');\r\nconst dots = document.querySelector('#slider__dots');\r\n\r\nArray.from(sliderRoll.children).forEach((index) => {\r\n    dots.innerHTML += `<div class=\"dot ${index == 0 ? 'fill' : ''}\"></div>`\r\n})\r\n\r\nlet currentIndex = 0;\r\nconst sliderWindowWidth = sliderRoll.offsetWidth;\r\n\r\nfunction sliderDots() {\r\n    Array.from(dots.children).forEach((dot, index) => {\r\n        if (currentIndex === index) {\r\n            dot.classList.add('current-dot')\r\n        } else {\r\n            dot.classList.remove('current-dot')\r\n        }\r\n    })\r\n}\r\n\r\nnext.addEventListener('click', () => {\r\n    let newIndex = currentIndex\r\n\r\n    if (newIndex < sliderRoll.children.length - 1) {\r\n        newIndex = currentIndex + 1\r\n    }\r\n\r\n    else if (currentIndex = 2) {\r\n        location.assign('login.html');\r\n    }\r\n\r\n    const offset = newIndex * sliderWindowWidth\r\n    sliderRoll.animate([{ transform: `translateX(-${offset}px)` }], { duration: 500, fill: 'both' })\r\n    currentIndex = newIndex\r\n\r\n    sliderDots();\r\n});\r\n\r\nsliderDots();\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/slider.js?");

/***/ }),

/***/ "./src/utilities/splash.js":
/*!*********************************!*\
  !*** ./src/utilities/splash.js ***!
  \*********************************/
/***/ (() => {

eval("const splashScreen = document.querySelector('#splash-screen');\r\nconst onboarding = document.querySelector('#onboarding');\r\n\r\nfunction splashScreenHidden() {\r\n    splashScreen.style.display = 'none';\r\n}\r\n\r\nfunction onboardingHidden() {\r\n    onboarding.style.display = 'none';\r\n}\r\n\r\nonboardingHidden()\r\n\r\nfunction onboardingShow() {\r\n    onboarding.style.display = 'flex';\r\n}\r\n\r\nsetTimeout(function () {\r\n    splashScreenHidden();\r\n    onboardingShow();\r\n}, 5000);\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/splash.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
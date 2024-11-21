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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/slider */ \"./src/utilities/slider.js\");\n/* harmony import */ var _utilities_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utilities_slider__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities_splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/splash */ \"./src/utilities/splash.js\");\n/* harmony import */ var _utilities_splash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utilities_splash__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://newsify-rts-liva/./src/index.js?");

/***/ }),

/***/ "./src/utilities/slider.js":
/*!*********************************!*\
  !*** ./src/utilities/slider.js ***!
  \*********************************/
/***/ (() => {

eval("const sliderRoll = document.querySelector('#slider__roll');\n\nconst next = document.querySelector('#slider__next');\nconst dots = document.querySelector('#slider__dots');\n\nArray.from(sliderRoll.children).forEach((index) => {\n    dots.innerHTML += `<div class=\"dot ${index == 0 ? 'fill' : ''}\"></div>`\n})\n\nlet currentIndex = 0;\nconst sliderWindowWidth = sliderRoll.offsetWidth;\n\nfunction sliderDots() {\n    Array.from(dots.children).forEach((dot, index) => {\n        if (currentIndex === index) {\n            dot.classList.add('current-dot')\n        } else {\n            dot.classList.remove('current-dot')\n        }\n    })\n}\n\nnext.addEventListener('click', () => {\n    let newIndex = currentIndex\n\n    if (newIndex < sliderRoll.children.length - 1) {\n        newIndex = currentIndex + 1\n    }\n\n    else if (currentIndex = 2) {\n        location.assign('login.html');\n    }\n\n    const offset = newIndex * sliderWindowWidth\n    sliderRoll.animate([{ transform: `translateX(-${offset}px)` }], { duration: 500, fill: 'both' })\n    currentIndex = newIndex\n\n    sliderDots();\n});\n\nsliderDots();\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/slider.js?");

/***/ }),

/***/ "./src/utilities/splash.js":
/*!*********************************!*\
  !*** ./src/utilities/splash.js ***!
  \*********************************/
/***/ (() => {

eval("const splashScreen = document.querySelector('#splash-screen');\nconst onboarding = document.querySelector('#onboarding');\n\nfunction splashScreenHidden() {\n    splashScreen.style.display = 'none';\n}\n\nfunction onboardingHidden() {\n    onboarding.style.display = 'none';\n}\n\nonboardingHidden()\n\nfunction onboardingShow() {\n    onboarding.style.display = 'flex';\n}\n\nsetTimeout(function () {\n    splashScreenHidden();\n    onboardingShow();\n}, 5000);\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/splash.js?");

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
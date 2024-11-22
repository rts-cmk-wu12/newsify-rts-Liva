/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_category_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/category-toggle */ \"./src/utilities/category-toggle.js\");\n\n\n//# sourceURL=webpack://newsify-rts-liva/./src/settings.js?");

/***/ }),

/***/ "./src/utilities/category-toggle.js":
/*!******************************************!*\
  !*** ./src/utilities/category-toggle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json_sections_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/sections.json */ \"./src/json/sections.json\");\n\n\nconst categories = _json_sections_json__WEBPACK_IMPORTED_MODULE_0__.sections;\nconsole.log(categories);\n\nconst settingsContainer = document.querySelector('#settings-container');\nlet toggleStates = JSON.parse(localStorage.getItem('toggleStates')) || {};\n\nif (!localStorage.getItem('toggleStates')) {\n    toggleStates = categories.reduce((acc, _, index) => {\n        acc[`toggle-${index}`] = true;\n        return acc;\n    }, {});\n    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));\n}\n\nfunction saveToggleStates() {\n    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));\n}\n\ncategories.forEach((category, index) => {\n    const categoryToggleContainer = document.createElement('div');\n    const toggleId = `toggle-${index}`;\n\n    categoryToggleContainer.innerHTML = `\n    <div class=\"settings__category\">\n    <img src=\"icon/newsify-logo.svg\" alt=\"logo\" class=\"settings__logo\">\n            ${category}\n    </div>\n    <div class=\"toggle\">\n            <label class=\"switch\" id=\"${toggleId}\">\n                <input type=\"checkbox\" class=\"switch-input\" ${toggleStates[toggleId] ? 'checked' : ''}>\n                <span class=\"toggle-slider\"></span>\n            </label>\n        </div>`\n\n    categoryToggleContainer.classList.add('settings')\n    settingsContainer.append(categoryToggleContainer);\n\n    const checkbox = categoryToggleContainer.querySelector('input[type=\"checkbox\"]');\n    checkbox.addEventListener('change', () => {\n        toggleStates[toggleId] = checkbox.checked;\n        saveToggleStates();\n    });\n});\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/category-toggle.js?");

/***/ }),

/***/ "./src/json/sections.json":
/*!********************************!*\
  !*** ./src/json/sections.json ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"sections\":[\"arts\",\"automobiles\",\"books/review\",\"business\",\"fashion\",\"food\",\"health\",\"home\",\"insider\",\"magazine\",\"movies\",\"nyregion\",\"obituaries\",\"opinion\",\"politics\",\"realestate\",\"science\",\"sports\",\"sundayreview\",\"technology\",\"theater\",\"t-magazine\",\"travel\",\"upshot\",\"us\",\"world\"]}');\n\n//# sourceURL=webpack://newsify-rts-liva/./src/json/sections.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/settings.js");
/******/ 	
/******/ })()
;
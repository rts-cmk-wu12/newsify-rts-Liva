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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_home_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/home-articles */ \"./src/utilities/home-articles.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utilities_home_articles__WEBPACK_IMPORTED_MODULE_0__]);\n_utilities_home_articles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://newsify-rts-liva/./src/home.js?");

/***/ }),

/***/ "./src/utilities/fetch-api.js":
/*!************************************!*\
  !*** ./src/utilities/fetch-api.js ***!
  \************************************/
/***/ ((module) => {

eval("const API_KEY = 'DbhMGwHfGXAX7nagpwULKzKGGotHPTx4';\r\n\r\nconst API_URL = 'https://api.nytimes.com/svc/';\r\n\r\nconst endpoints = {\r\n    homeTopStories: 'topstories/v2/',\r\n    mostPopularByViews: 'mostpopular/v2/viewed/'\r\n}\r\n\r\nasync function fetchMostPopularByViews(days = 1) {\r\n    const url = new URL(`${days}.json`, API_URL + endpoints.mostPopularByViews);\r\n    url.searchParams.set('api-key', API_KEY);\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n\r\n    return data\r\n}\r\n\r\nasync function fetchHomeTopStories(section = 'home') {\r\n    const url = new URL(`${section}.json`, API_URL + endpoints.homeTopStories);\r\n    url.searchParams.set('api-key', API_KEY);\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n\r\n    return data\r\n}\r\n\r\nmodule.exports = {\r\n    fetchHomeTopStories,\r\n    fetchMostPopularByViews\r\n}\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/fetch-api.js?");

/***/ }),

/***/ "./src/utilities/home-articles.js":
/*!****************************************!*\
  !*** ./src/utilities/home-articles.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json_sections_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/sections.json */ \"./src/json/sections.json\");\n\r\n\r\nconst { saveArticle } = __webpack_require__(/*! ./save-article.js */ \"./src/utilities/save-article.js\");\r\nconst { fetchHomeTopStories } = __webpack_require__(/*! ./fetch-api.js */ \"./src/utilities/fetch-api.js\");\r\nconst homeNews = await fetchHomeTopStories();\r\n\r\nconst newsSections = [...new Set(homeNews.results.map(sections => sections.section))];\r\n\r\nconst homeNewsContainer = document.querySelector('#home-news-container');\r\n\r\nfunction truncate(text, length) {\r\n    if (text.length > length) {\r\n        return text.slice(0, length) + '...';\r\n    }\r\n\r\n    return text;\r\n}\r\n\r\nnewsSections.forEach(category => {\r\n    const matchingArticles = homeNews.results.filter(article => article.section === category);\r\n    const detailsElement = document.createElement('details');\r\n    detailsElement.innerHTML = `\r\n        <summary class=\"news__category\">\r\n            <img src=\"icon/newsify-logo.svg\" alt=\"logo\" class=\"news__logo\">\r\n            ${category}\r\n        </summary>`;\r\n\r\n    matchingArticles.forEach(article => {\r\n        const articleElement = document.createElement('article');\r\n        articleElement.innerHTML = `\r\n            <img src=\"img/placeholder.png\" alt=\"article cover\" class=\"news__article__cover\">\r\n            <section>\r\n                <h2 class=\"news__article__headline\">${article.title}</h2>\r\n                <p class=\"news__article__text\">${truncate(article.abstract, 90)}</p>\r\n            </section>`;\r\n        articleElement.classList.add('news__article');\r\n        detailsElement.append(articleElement);\r\n\r\n        articleElement.addEventListener('click', () => {\r\n            window.open(article.url);\r\n        });\r\n\r\n        const swipeAction = document.createElement('div');\r\n        swipeAction.className = 'swipe-action-add';\r\n\r\n        const bookmarkIcon = document.createElement('img');\r\n        bookmarkIcon.src = '/icon/bookmark-white.svg';\r\n        bookmarkIcon.alt = 'Bookmark';\r\n        bookmarkIcon.style.width = '2rem';\r\n        bookmarkIcon.style.height = '2rem';\r\n\r\n        swipeAction.appendChild(bookmarkIcon);\r\n        articleElement.appendChild(swipeAction);\r\n\r\n        articleElement.appendChild(swipeAction);\r\n\r\n\r\n        saveArticle(articleElement, article.title);\r\n    });\r\n\r\n    detailsElement.classList.add('news');\r\n    homeNewsContainer.append(detailsElement);\r\n\r\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/home-articles.js?");

/***/ }),

/***/ "./src/utilities/save-article.js":
/*!***************************************!*\
  !*** ./src/utilities/save-article.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveArticle: () => (/* binding */ saveArticle)\n/* harmony export */ });\nfunction saveArticle(articleElement, articleTitle) {\r\n    let startX, endX;\r\n  \r\n    if (!articleElement) return;\r\n  \r\n    articleElement.addEventListener('touchstart', e => {\r\n      startX = e.touches[0].clientX;\r\n    });\r\n  \r\n    articleElement.addEventListener('touchmove', e => {\r\n      endX = e.touches[0].clientX;\r\n    });\r\n  \r\n    articleElement.addEventListener('touchend', () => {\r\n      if (startX - endX > 50) {\r\n        articleElement.classList.add('swiped');\r\n        localStorage.setItem(articleTitle, 'saved');\r\n      } else if (endX - startX > 50) {\r\n        articleElement.classList.remove('swiped');\r\n      }\r\n    });\r\n  \r\n    const swipeAction = articleElement.querySelector('.swipe-action');\r\n    if (swipeAction) {\r\n      swipeAction.addEventListener('click', () => {\r\n        articleElement.remove();\r\n      });\r\n    }\r\n  }\r\n  \n\n//# sourceURL=webpack://newsify-rts-liva/./src/utilities/save-article.js?");

/***/ }),

/***/ "./src/json/sections.json":
/*!********************************!*\
  !*** ./src/json/sections.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;
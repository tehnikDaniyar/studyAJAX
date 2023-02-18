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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_them102_task1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/them102/task1.js */ \"./src/js/modules/them102/task1.js\");\n/* harmony import */ var _modules_them102_task1_1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/them102/task1-1.js */ \"./src/js/modules/them102/task1-1.js\");\n/* harmony import */ var _modules_them102_task2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/them102/task2.js */ \"./src/js/modules/them102/task2.js\");\n/* harmony import */ var _modules_them103_task1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/them103/task1.js */ \"./src/js/modules/them103/task1.js\");\n/* harmony import */ var _modules_them103_task1_1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/them103/task1-1.js */ \"./src/js/modules/them103/task1-1.js\");\n\r\n(0,_modules_them102_task1_js__WEBPACK_IMPORTED_MODULE_0__.them102_1)();\r\n\r\n\r\n(0,_modules_them102_task1_1_js__WEBPACK_IMPORTED_MODULE_1__.them102_1_1)();\r\n\r\n\r\n(0,_modules_them102_task2_js__WEBPACK_IMPORTED_MODULE_2__.them102_2)();\r\n\r\n\r\n(0,_modules_them103_task1_js__WEBPACK_IMPORTED_MODULE_3__.them103_1)();\r\n\r\n\r\n(0,_modules_them103_task1_1_js__WEBPACK_IMPORTED_MODULE_4__.them103_1_1)();\n\n//# sourceURL=webpack://base-setting-for-gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/them102/task1-1.js":
/*!*******************************************!*\
  !*** ./src/js/modules/them102/task1-1.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"them102_1_1\": () => (/* binding */ them102_1_1)\n/* harmony export */ });\nconst them102_1_1 = () => {\r\n\tlet parent = document.querySelector(\"#them102_1-1_parent\");\r\n\tlet div = parent.querySelector(\"#them102_1-1_div\");\r\n\tparent.addEventListener('click', (event) => {\r\n\t\tif (event.target.textContent == '1') {\r\n\t\t\tfetch('./AJAX/them102/task1-1/page1.html')\r\n\t\t\t\t.then(response => response.text())\r\n\t\t\t\t.then(text => div.innerHTML = text);\r\n\t\t};\r\n\r\n\t\tif (event.target.textContent == '2') {\r\n\t\t\tfetch('./AJAX/them102/task1-1/page2.html')\r\n\t\t\t\t.then(response => response.text())\r\n\t\t\t\t.then(text => div.innerHTML = text);\r\n\t\t};\r\n\r\n\t\tif (event.target.textContent == '3') {\r\n\t\t\tfetch('./AJAX/them102/task1-1/page3.html')\r\n\t\t\t\t.then(response => response.text())\r\n\t\t\t\t.then(text => div.innerHTML = text);\r\n\t\t};\r\n\t})\r\n}\n\n//# sourceURL=webpack://base-setting-for-gulp/./src/js/modules/them102/task1-1.js?");

/***/ }),

/***/ "./src/js/modules/them102/task1.js":
/*!*****************************************!*\
  !*** ./src/js/modules/them102/task1.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"them102_1\": () => (/* binding */ them102_1)\n/* harmony export */ });\nconst them102_1 = () => {\r\n\tlet div = document.querySelector('#them102_1_div');\r\n\tlet button = document.querySelector('#them102_1_button');\r\n\r\n\tbutton.addEventListener('click', () => {\r\n\t\tfetch('./AJAX/them102/task1/AJAX1.html').then(response => response.text()).then(text => div.innerHTML = text);\r\n\t})\r\n};\n\n//# sourceURL=webpack://base-setting-for-gulp/./src/js/modules/them102/task1.js?");

/***/ }),

/***/ "./src/js/modules/them102/task2.js":
/*!*****************************************!*\
  !*** ./src/js/modules/them102/task2.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"them102_2\": () => (/* binding */ them102_2)\n/* harmony export */ });\nconst them102_2 = () => {\r\n\tlet counter = 0;\r\n\tlet arrPaths = [\r\n\t\t'./AJAX/them102/task2/page1.html',\r\n\t\t'./AJAX/them102/task2/page2.html',\r\n\t\t'./AJAX/them102/task2/page3.html',\r\n\t\t'./AJAX/them102/task2/page4.html',\r\n\t\t'./AJAX/them102/task2/page5.html'\r\n\t];\r\n\r\n\tlet parent = document.querySelector('#them102_2_parent');\r\n\tlet button = parent.querySelector('button');\r\n\tlet div = parent.querySelector('div');\r\n\r\n\tbutton.addEventListener('click', () => {\r\n\t\tfetch(arrPaths[counter])\r\n\t\t\t.then(response => response.text())\r\n\t\t\t.then(text => div.innerHTML = text);\r\n\t\tcounter == 4 ? counter = 0 : counter++;\r\n\t})\r\n}\n\n//# sourceURL=webpack://base-setting-for-gulp/./src/js/modules/them102/task2.js?");

/***/ }),

/***/ "./src/js/modules/them103/task1-1.js":
/*!*******************************************!*\
  !*** ./src/js/modules/them103/task1-1.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"them103_1_1\": () => (/* binding */ them103_1_1)\n/* harmony export */ });\nconst them103_1_1 = () => {\r\n\tlet parent = document.querySelector('#them103_1-1_parent');\r\n\tlet button = parent.querySelector('button');\r\n\tlet div = parent.querySelector('div');\r\n\r\n\tbutton.addEventListener('click', () => {\r\n\t\tfetch(\"/them103_1-1/?num1=1&num2=2\")\r\n\t\t\t.then(response => response.text())\r\n\t\t\t.then(text => div.innerHTML = text);\r\n\t});\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://base-setting-for-gulp/./src/js/modules/them103/task1-1.js?");

/***/ }),

/***/ "./src/js/modules/them103/task1.js":
/*!*****************************************!*\
  !*** ./src/js/modules/them103/task1.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"them103_1\": () => (/* binding */ them103_1)\n/* harmony export */ });\nconst them103_1 = () => {\r\n\tlet parent = document.querySelector('#them103_1_parent');\r\n\tlet div = parent.querySelector('div');\r\n\tlet button = parent.querySelector('button');\r\n\r\n\tbutton.addEventListener('click', () => {\r\n\t\tfetch('/handler/?num=3').then(response => response.text()).then(text => div.innerHTML = text);\r\n\t});\r\n\r\n\r\n}\n\n//# sourceURL=webpack://base-setting-for-gulp/./src/js/modules/them103/task1.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fontfaceobserver/fontfaceobserver.standalone.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener(\"scroll\",b,!1):a.attachEvent(\"scroll\",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener(\"DOMContentLoaded\",function c(){document.removeEventListener(\"DOMContentLoaded\",c);a()}):document.attachEvent(\"onreadystatechange\",function k(){if(\"interactive\"==document.readyState||\"complete\"==document.readyState)document.detachEvent(\"onreadystatechange\",k),a()})};function t(a){this.a=document.createElement(\"div\");this.a.setAttribute(\"aria-hidden\",\"true\");this.a.appendChild(document.createTextNode(a));this.b=document.createElement(\"span\");this.c=document.createElement(\"span\");this.h=document.createElement(\"span\");this.f=document.createElement(\"span\");this.g=-1;this.b.style.cssText=\"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;\";this.c.style.cssText=\"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;\";\nthis.f.style.cssText=\"max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;\";this.h.style.cssText=\"display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;\";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}\nfunction u(a,b){a.a.style.cssText=\"max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:\"+b+\";\"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+\"px\";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||\"normal\";this.weight=c.weight||\"normal\";this.stretch=c.stretch||\"normal\"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))(?:\\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}\nfunction K(){if(null===E){var a=document.createElement(\"div\");try{a.style.font=\"condensed 100px sans-serif\"}catch(b){}E=\"\"!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:\"\",\"100px\",b].join(\" \")}\nB.prototype.load=function(a,b){var c=this,k=a||\"BESbswy\",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(\"\"+n+\"ms timeout exceeded\")):document.fonts.load(L(c,'\"'+c.family+'\"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(\"\"+n+\"ms timeout exceeded\"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},\nb)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(\"\"+\nn+\"ms timeout exceeded\"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement(\"div\");d.dir=\"ltr\";u(e,L(c,\"sans-serif\"));u(p,L(c,\"serif\"));u(q,L(c,\"monospace\"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,\nL(c,'\"'+c.family+'\",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'\"'+c.family+'\",serif'));A(q,function(a){h=a;v()});u(q,L(c,'\"'+c.family+'\",monospace'))})})}; true?module.exports=B:(undefined);}());\n\n\n//# sourceURL=webpack:///./node_modules/fontfaceobserver/fontfaceobserver.standalone.js?");

/***/ }),

/***/ "./src/_data/fontdata.json":
/*!*********************************!*\
  !*** ./src/_data/fontdata.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"STIX Two Text\\\",\\\"selector\\\":\\\"stix-two-text\\\",\\\"style\\\":\\\"Regular\\\"},{\\\"name\\\":\\\"STIX Two Text Italic\\\",\\\"selector\\\":\\\"stix-two-text-italic\\\",\\\"style\\\":\\\"Italic\\\"},{\\\"name\\\":\\\"STIX Two Text Bold\\\",\\\"selector\\\":\\\"stix-two-text-bold\\\",\\\"style\\\":\\\"Bold\\\"},{\\\"name\\\":\\\"STIX Two Text Bold Italic\\\",\\\"selector\\\":\\\"stix-two-text-bold-italic\\\",\\\"style\\\":\\\"Bold Italic\\\"}]\");\n\n//# sourceURL=webpack:///./src/_data/fontdata.json?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/img sync recursive \\.(png|jpg|svg)$":
/*!*************************************************!*\
  !*** ./src/img ?external sync \.(png|jpg|svg)$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/img sync recursive \\\\.(png|jpg|svg)$\";\n\n//# sourceURL=webpack:///./src/img_?");

/***/ }),

/***/ "./src/js/assets.js":
/*!**************************!*\
  !*** ./src/js/assets.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * This file automatically requires every supported image in `src/img`.\n */\nconst requireAll = r => r.keys().forEach(r);\n\nrequireAll(__webpack_require__(\"./src/img sync recursive \\\\.(png|jpg|svg)$\"));\n\n//# sourceURL=webpack:///./src/js/assets.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ \"./src/js/assets.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/fontdata.json */ \"./src/_data/fontdata.json\");\nvar _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../_data/fontdata.json */ \"./src/_data/fontdata.json\", 1);\n/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fontfaceobserver */ \"./node_modules/fontfaceobserver/fontfaceobserver.standalone.js\");\n/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_2__);\n// Copyright 2019 Google LLC\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//     https://www.apache.org/licenses/LICENSE-2.0\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n\n\nconst fontTimeOut = 5000; // In milliseconds\n\nconst fontClasses = _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1__.map(f => f.selector); // Generic: throttle\n\nconst throttle = (fn, wait) => {\n  let last, queue;\n  return function runFn() {\n    const now = Date.now();\n    queue = clearTimeout(queue);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (!last || now - last >= wait) {\n      fn.apply(null, args);\n      last = now;\n    } else {\n      queue = setTimeout(runFn.bind(null, ...args), wait - (now - last));\n    }\n  };\n}; // Set up FontFaceObserver\n\n\nlet observers = [];\n\nfor (const fd of _data_fontdata_json__WEBPACK_IMPORTED_MODULE_1__) {\n  const font = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_2___default.a(fd.name);\n  observers.push(font.load(null, fontTimeOut));\n}\n\nPromise.all(observers).then(() => {\n  // All fonts have loaded\n  document.documentElement.classList.add(\"fonts-loaded\");\n}, () => {\n  // One or more fonts didn't load\n  document.documentElement.classList.add(\"fonts-failed\");\n}); // Interactive controls (sliders that tweak axes)\n\nconst interactives = document.querySelectorAll(\".interactive-controls\");\n\nfor (const interactive of interactives) {\n  const area = interactive.querySelector(\".interactive-controls-text\");\n  const styles = interactive.querySelector(\".interactive-controls-styles\");\n  const sliders = interactive.querySelectorAll(\".interactive-controls-slider\");\n  const instances = interactive.querySelector(\".interactive-controls-instances\");\n\n  const varset = (name, value) => {\n    area.style.setProperty(\"--\".concat(name), value);\n  };\n\n  for (const slider of sliders) {\n    // Apply initial axis value to text area\n    varset(slider.name, slider.value);\n\n    slider.oninput = e => {\n      // Set new axis value to text area\n      varset(e.target.name, e.target.value); // Unselect named instance dropdown\n      // Optionally, see if current axes match instance and select that\n\n      if (instances) {\n        instances.selectedIndex = -1;\n      }\n    };\n  }\n\n  if (instances) {\n    instances.onchange = e => {\n      const axes = JSON.parse(e.target.options[e.target.selectedIndex].value);\n\n      for (const axis in axes) {\n        // Set new axis value on slider\n        interactive.querySelector(\"[name=\".concat(axis, \"]\")).value = axes[axis]; // Apply new axis value to text area\n\n        varset(axis, axes[axis]);\n      }\n    };\n  }\n\n  if (styles) {\n    styles.onchange = e => {\n      area.classList.remove(...fontClasses);\n      area.classList.add(e.target.value);\n    };\n  } // Alignment controls for type tester\n  // Add active class to the current button (highlight it)\n\n\n  const buttonContainer = interactive.querySelector(\".interactive-controls-buttons\");\n  const buttons = buttonContainer.querySelectorAll(\"button\");\n\n  for (const button of buttons) {\n    button.addEventListener(\"click\", function () {\n      // Update button class\n      buttonContainer.querySelector(\".active\").classList.remove(\"active\");\n      this.classList.add(\"active\"); // Apply new alignment\n\n      area.classList.remove(\"align-left\", \"align-centre\", \"align-right\");\n      area.classList.add(this.value);\n    });\n  }\n} // Watch if .am-i-in-view elements are visible on screen\n// and apply a class accordingly\n\n\nif (\"IntersectionObserver\" in window) {\n  // eslint-disable-next-line compat/compat\n  const obs = new IntersectionObserver(els => {\n    els.forEach(el => {\n      el.intersectionRatio > 0 ? el.target.classList.add(\"in-view\") : el.target.classList.remove(\"in-view\");\n    });\n  });\n  const elements = document.querySelectorAll(\".am-i-in-view\");\n  elements.forEach(el => {\n    obs.observe(el);\n  });\n} // Character grid\n\n\nconst grid = document.querySelector(\".character-grid\");\nconst gridzoom = document.querySelector(\".character-grid-zoom\");\nconst gridtoggle = document.querySelector(\".character-grid-toggle\");\ngrid.onmousemove = throttle(e => {\n  if (e.target.tagName === \"LI\") {\n    gridzoom.innerHTML = e.target.innerHTML;\n  }\n}, 100);\n\nif (gridtoggle) {\n  gridtoggle.onchange = e => {\n    grid.classList.remove(...fontClasses);\n    grid.classList.add(e.target.value);\n  };\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/main.js ./src/css/main.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/markboulton/Documents/Dev/specimen-builder/src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! /Users/markboulton/Documents/Dev/specimen-builder/src/css/main.css */\"./src/css/main.css\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/css/main.css?");

/***/ })

/******/ });
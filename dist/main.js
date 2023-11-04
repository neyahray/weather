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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ \"./src/service.js\");\n\nasync function main1() {\n  let weatherImage = document.querySelector('.weather-img-main');\n  let weatherCelcius = document.querySelector('.celcius-value');\n  let weatherRain = document.querySelector('.rain-value');\n  let weatherWind = document.querySelector('.wind-value');\n  let weatherSnow = document.querySelector('.snow-cm-value');\n  let weatherCloud = document.querySelector('.cloud-cover-value');\n  let currentWeather = await (0,_service__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)();\n  weatherCelcius.innerText = 'Сейчас: ' + currentWeather.temperature_2m;\n  weatherRain.innerText = 'Дождь: ' + (currentWeather.rain ? 'Да' : 'Нет');\n  weatherWind.innerText = 'Скорость ветра: ' + currentWeather.windspeed_10m + 'км/ч';\n  weatherSnow.innerText = 'Уровень снега: ' + currentWeather.snowfall + 'см';\n  weatherCloud.innerText = 'Облачность: ' + currentWeather.cloudcover + '%';\n  let date = new Date();\n  if (date.getHours >= 0 && date.getHours <= 12) {\n    weatherImage.src = 'assets/солнце.png';\n  } else if (date.getHours > 12 && date.getHours < 0) {\n    weatherImage.src = 'assets/луна.png';\n  }\n  if (weatherRain === 1) {\n    weatherImage.src = 'assets/дождь.png';\n  } else {\n    if (weatherCloud >= '30%' && weatherCloud <= '60%') {\n      weatherImage.src = 'assets/солнечно.png';\n    } else if (weatherCloud > '60%') {\n      weatherImage.src = 'assets/облако.png';\n    } else if (weatherCloud < '30%') {\n      weatherImage.src = 'assets/солнце.png';\n    }\n  }\n  if (weatherSnow >= 3) {\n    weatherImage.src = 'assets/снег.png';\n  }\n}\nmain1();\n\n//\nasync function main2() {\n  let forecastList = document.querySelector('.forecast-list');\n  let dailyTemperature = document.querySelectorAll('.daily-temperature');\n  let dailyDate = document.querySelectorAll('.daily-date');\n  let dailytWeather = await getdailyWeather();\n  for (let i = 0; i < result.length; i++) {\n    dailyTemperature[0].innerHTML = dailytWeather[0].apparent_temperature_max;\n  }\n}\nmain2();\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather),\n/* harmony export */   getDailyWeather: () => (/* binding */ getDailyWeather),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   getWeekWeather: () => (/* binding */ getWeekWeather)\n/* harmony export */ });\nasync function getWeather() {\n  try {\n    let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,rain,snowfall,cloudcover,windspeed_10m&hourly=temperature_2m');\n    let result = await response.json();\n    return result;\n  } catch (e) {\n    return String(e);\n  }\n}\n;\nasync function getCurrentWeather() {\n  let circle = document.querySelector('.circle');\n  let loader = document.querySelector('.loader');\n  let id = setInterval(changeColor, 500);\n  function changeColor() {\n    if (loader.className !== 'loader') {\n      clearInterval(id);\n    } else {\n      const randomColor = \"#\" + ((1 << 24) * Math.random() | 0).toString(16);\n      circle.style.borderColor = randomColor;\n      circle.style.borderTopColor = '#fff';\n    }\n    ;\n  }\n  ;\n  let response = await getWeather();\n  let current = null;\n  if (typeof response === 'string') {\n    current = response;\n  } else {\n    current = response.current;\n    loader.className += ' disabled';\n  }\n  return current;\n}\n;\n\n//\nasync function getWeekWeather() {\n  try {\n    let response2 = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,rain_sum,snowfall_sum,windspeed_10m_max&timezone=auto');\n    let result2 = await response2.json();\n    return result2;\n  } catch (e) {\n    return String(e);\n  }\n}\n;\nasync function getDailyWeather() {\n  let response2 = await getWeather();\n  let current2 = null;\n  if (typeof response2 === 'string') {\n    current2 = response2;\n  } else {\n    current2 = response2.current2;\n    loader.className += ' disabled';\n  }\n  return current2;\n}\n;\n\n//# sourceURL=webpack://weather/./src/service.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
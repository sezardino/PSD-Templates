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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/counter.js":
/*!**************************************!*\
  !*** ./src/js/components/counter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const counter = () => {
  const counter = document.querySelector('.counter');
  const count = counter.textContent.split('.').reduce((a, b) => a + b);
  let value = +count;
  let timerId = setInterval(() => {
    value -= Math.floor(count / 20);
    const stringValue = value.toString();
    counter.textContent = `${stringValue.slice(0, -3)}.${stringValue.slice(-3)}`;

    if (value <= 0) {
      counter.textContent = 0;
      clearInterval(timerId);
    }
  }, 1000);
};

/* harmony default export */ __webpack_exports__["default"] = (counter);

/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const form = () => {
  const form = document.querySelector('form');
  const formInput = form.querySelector('input');
  const submitButton = form.querySelector('button');
  const indicator = form.querySelector('.form__indicator');

  const checkValidity = () => {
    const value = formInput.value;
    formInput.setCustomValidity(' ');
    let validity = true;

    if (!value.includes('@')) {
      validity = false;
      form.classList.add('form--error');
      indicator.textContent = "Whoops, make sure it's an email";
    }

    if (value.length === 0) {
      form.classList.add('form--error');
      validity = false;
      indicator.textContent = 'Line is too short!';
    }

    return validity;
  };

  const submitButtonHandler = evt => {
    const validity = checkValidity();

    if (!validity) {
      evt.preventDefault();
      return;
    } else {
      form.classList.add('form--success');
      indicator.textContent = 'You are subscribe';
      form.reset();
    }
  };

  const submitHandler = evt => {
    evt.preventDefault();
  };

  submitButton.addEventListener('click', submitButtonHandler);
  form.addEventListener('submit', submitHandler);
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const menu = () => {
// 	const menuOpenBtn = document.querySelector('.header__hamburger');
// 	const menuCloseBtn = document.querySelector('.header__close');
// 	const menu = document.querySelector('nav');
// 	const header = document.querySelector('.header');
// 	const menuOpenBtnHandler = () => {
// 		menu.classList.add('nav--active');
// 		header.classList.add('header--active');
// 	};
// 	const menuCloseBtnHandler = () => {
// 		menu.classList.remove('nav--active');
// 		header.classList.remove('header--active');
// 	};
// 	menuOpenBtn.addEventListener('click', menuOpenBtnHandler);
// 	menuCloseBtn.addEventListener('click', menuCloseBtnHandler);
// };
class Menu {
  constructor({
    openMenuBtnSelector,
    menuCloseBtnSelector,
    menuSelector,
    headerSelector,
    activeMenuClass,
    activeHeaderClass
  }) {
    this.menuOpenBtn = document.querySelector(openMenuBtnSelector);
    this.menuCloseBtn = document.querySelector(menuCloseBtnSelector);
    this.menu = document.querySelector(menuSelector);
    this.header = document.querySelector(headerSelector);
    this.menuActiveClass = activeMenuClass;
    this.headerActiveClass = activeHeaderClass;
    this.init();
  }

  menuOpenBtnHandler(evt) {
    evt.preventDefault();
    this.menu.classList.add(this.menuActiveClass);
    this.header.classList.add(this.headerActiveClass);
  }

  menuCloseBtnHandler(evt) {
    evt.preventDefault();
    this.menu.classList.remove(this.menuActiveClass);
    this.header.classList.remove(this.headerActiveClass);
  }

  init() {
    this.menuOpenBtn.addEventListener('click', evt => this.menuOpenBtnHandler(evt));
    this.menuCloseBtn.addEventListener('click', evt => this.menuCloseBtnHandler(evt));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/js/components/popup.js":
/*!************************************!*\
  !*** ./src/js/components/popup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const popup = () => {
// 	const popup = document.querySelector('.popup');
// 	const popupClose = document.querySelector('.popup__close');
// 	let wasOpened = false;
// 	const marginRight = window.innerWidth - document.body.clientWidth;
// 	const openPopup = () => {
// 		wasOpened = true;
// 		popup.classList.add('popup--active');
// 		document.body.style.overflow = 'hidden';
// 		document.body.style.marginRight = marginRight + 'px';
// 	};
// 	const closePopup = () => {
// 		popup.classList.remove('popup--active');
// 		document.body.style.overflow = '';
// 		document.body.style.marginRight = '';
// 	};
// 	const mouseHandler = (evt) => {
// 		if (evt.pageY < 100 && !wasOpened) {
// 			openPopup();
// 		}
// 	};
// 	setTimeout(() => {
// 		openPopup();
// 	}, 30000);
// 	popupClose.addEventListener('click', closePopup);
// 	setTimeout(() => {
// 		document.addEventListener('mousemove', mouseHandler);
// 	}, 5000);
// };
class Popup {
  constructor({
    popupSelector,
    popupOpenTrigger,
    popupCloseTrigger,
    popupActiveClass
  }) {
    this.popup = document.querySelector(popupSelector);
    this.popupOpen = document.querySelector(popupOpenTrigger);
    this.popupClose = document.querySelector(popupCloseTrigger);
    this.popupActiveClass = popupActiveClass;
    this.marginRight = window.innerWidth - document.body.clientWidth;
    this.wasOpened = false;
    this.init();
  }

  openPopup() {
    this.wasOpened = true;
    this.popup.classList.add(this.popupActiveClass);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = this.marginRight + 'px';
  }

  closePopup() {
    this.popup.classList.remove('popup--active');
    document.body.style.overflow = '';
    document.body.style.marginRight = '';
  }

  mouseHandler(evt) {
    if (evt.pageY < 100 && !this.wasOpened) {
      this.openPopup();
    }
  }

  init() {
    setTimeout(() => {
      this.openPopup();
    }, 30000);

    try {
      this.popupOpen.addEventListener('click', () => this.openPopup());
    } catch (error) {}

    this.popupClose.addEventListener('click', () => this.closePopup());
    setTimeout(() => {
      document.addEventListener('mousemove', evt => this.mouseHandler(evt));
    }, 5000);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
class Tabs {
  constructor({
    tabsContainerSelector,
    tabsSelector,
    contentSelector,
    tabActiveSelector,
    contentActiveSelector
  }) {
    this.tabsContainer = document.querySelector(tabsContainerSelector);
    this.tabs = document.querySelectorAll(tabsSelector) || [];
    this.tabSelector = tabsSelector.slice(1);
    this.content = document.querySelectorAll(contentSelector) || [];
    this.tabActiveClass = tabActiveSelector;
    this.contentActiveClass = contentActiveSelector;
    this.init();
  }

  clearActive() {
    this.tabs.forEach(item => {
      item.classList.remove(this.tabActiveClass);
    });
    this.content.forEach(item => {
      item.classList.remove(this.contentActiveClass);
    });
  }

  findIndex(value) {
    let index;
    this.tabs.forEach((item, i) => {
      if (item === value) {
        index = i;
      }
    });
    return index;
  }

  addActive(index) {
    this.tabs[index].classList.add(this.tabActiveClass);
    this.content[index].classList.add(this.contentActiveClass);
  }

  tabsContainerHandler(evt) {
    const target = evt.target;

    if (target.classList.contains(this.tabSelector)) {
      this.clearActive();
      const index = this.findIndex(target);
      this.addActive(index);
    }
  }

  init() {
    this.tabsContainer.addEventListener('click', evt => this.tabsContainerHandler(evt));
  }

}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form */ "./src/js/components/form.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/counter */ "./src/js/components/counter.js");
/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popup */ "./src/js/components/popup.js");





Object(_components_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_components_counter__WEBPACK_IMPORTED_MODULE_3__["default"])();
new _components_menu__WEBPACK_IMPORTED_MODULE_1__["default"]({
  openMenuBtnSelector: '.header__hamburger',
  menuCloseBtnSelector: '.header__close',
  menuSelector: 'nav',
  headerSelector: '.header',
  activeMenuClass: 'nav--active',
  activeHeaderClass: 'header--active'
});
new _components_tabs__WEBPACK_IMPORTED_MODULE_2__["default"]({
  tabsContainerSelector: '.tabs',
  tabsSelector: '.tabs__item',
  contentSelector: '.content__item',
  tabActiveSelector: 'tabs__item--active',
  contentActiveSelector: 'content__item--active'
});
new _components_tabs__WEBPACK_IMPORTED_MODULE_2__["default"]({
  tabsContainerSelector: '.questions',
  tabsSelector: '.questions__button',
  contentSelector: '.questions__text',
  tabActiveSelector: 'questions__button--active',
  contentActiveSelector: 'questions__text--shown'
});
new _components_popup__WEBPACK_IMPORTED_MODULE_4__["default"]({
  popupSelector: '.popup',
  popupOpenTrigger: null,
  popupCloseTrigger: '.popup__close',
  popupActiveClass: 'popup--active'
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
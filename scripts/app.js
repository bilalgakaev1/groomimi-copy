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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

    "use strict";


    document.addEventListener('DOMContentLoaded', function () {
      // Wrapper for two row carousel
      if (window.innerWidth > 991) {
        var galleryItem = $('#js-gallery a');
    
        for (var i = 0; i < galleryItem.length; i += 2) {
          galleryItem.slice(i, i + 2).wrapAll("<div class='gallery__twocolums'></div>");
        }
    
        var gallery_dogs = new Flickity('#js-gallery', {
          freeScroll: false,
          pageDots: false,
          groupCells: 4,
          wrapAround: true
        });
      } // BEGIN: Table Tabs
    
    
      $('#js-tabs').on('click', 'input', function () {
        var indexTab = $(this).val();
        console.log($(this).val());
    
        if ($(this).val() === 4 || $(this).val() === 5) {
          $('.tables').addClass('tables__hide');
        } else {
          $('.tables').removeClass('tables__hide');
        } // Скрываем все таблицы
    
    
        $('table').hide(); // Открываем, ту которую нужно
    
        return $('#js-table-' + indexTab).show();
      }); // Faq
    
      $('.faq').on('click', function () {
        return $(this).find('.faq__text').toggle();
      }); // Master
    
      $('.master').on('click', 'a', function () {
        var el = $(this).parent('.master').find('span');
    
        if (el.css('display') === 'none') {
          $(this).html('Скрыть');
          el.show();
          el.addClass('fadeIn');
        } else {
          $(this).html('Узнать больше');
          el.removeClass('fadeIn');
          el.hide();
        }
      });
      $('.review__toolbar').on('click', '.btn__arrow', function (e) {
        e.preventDefault();
        var el = $(this).closest('.review').find('#review__spoiler');
    
        if (el.css('display') === 'none') {
          $(this).html('Скрыть');
          el.show();
          el.addClass('fadeIn');
        } else {
          $(this).html('Подробнее');
          el.removeClass('fadeIn');
          el.hide();
        }
      }); // Gallery
    
      $('a#js-modal-order').on('click', function () {
        $('.modal').hide();
        $('div#' + $(this).attr('id')).show();
      });
      $('.modal__close').on('click', function () {
        $('.modal').hide();
      }); // END: Table Tabs
      // BEGIN: Carousel
    
      $('#js-certs, .gallery, #js-reviews').magnificPopup({
        type: 'image',
        delegate: 'a'
      });
      var certs = new Flickity('#js-certs', {
        freeScroll: false,
        pageDots: false,
        wrapAround: true,
        contain: true
      });
      var certs = new Flickity('#js-reviews', {
        freeScroll: false,
        pageDots: false,
        wrapAround: true,
        contain: true
      });
    
      if (window.innerWidth <= 991) {
        var gallery_dogs = new Flickity('#js-gallery', {
          freeScroll: false,
          pageDots: false,
          wrapAround: true
        });
        var gallery_works = new Flickity('#js-gallery-salon', {
          freeScroll: false,
          pageDots: false,
          wrapAround: true
        });
      } // END: Carousel
    
    
      $('input[type=tel]').mask('+7 (000) 000-00-00', {
        placeholder: "+7 (___) ___-__-__"
      });
    });
    
    /***/ }),
    
    /***/ "./resources/assets/sass/app.scss":
    /*!****************************************!*\
      !*** ./resources/assets/sass/app.scss ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    // removed by extract-text-webpack-plugin
    
    /***/ }),
    
    /***/ "./resources/assets/sass/dashboard.scss":
    /*!**********************************************!*\
      !*** ./resources/assets/sass/dashboard.scss ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    // removed by extract-text-webpack-plugin
    
    /***/ }),
    
    /***/ 0:
    /*!******************************************************************************************************************!*\
      !*** multi ./resources/assets/js/app.js ./resources/assets/sass/app.scss ./resources/assets/sass/dashboard.scss ***!
      \******************************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! C:\laragon\www\gromimi.ru\resources\assets\js\app.js */"./resources/assets/js/app.js");
    __webpack_require__(/*! C:\laragon\www\gromimi.ru\resources\assets\sass\app.scss */"./resources/assets/sass/app.scss");
    module.exports = __webpack_require__(/*! C:\laragon\www\gromimi.ru\resources\assets\sass\dashboard.scss */"./resources/assets/sass/dashboard.scss");
    
    
    /***/ })
    
    /******/ });
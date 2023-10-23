/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "_sendRequest",
    value: function _sendRequest(url, options) {
      return fetch(url, options).then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Что-то пошло не так...');
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "getAllCards",
    value: function getAllCards() {
      return this._sendRequest("".concat(this._url, "/cards"), {
        headers: this._headers
      });
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return this._sendRequest("".concat(this._url, "/users/me"), {
        headers: this._headers
      });
    }
  }, {
    key: "editProfile",
    value: function editProfile(name, about) {
      return this._sendRequest("".concat(this._url, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      });
    }
  }, {
    key: "editAvatar",
    value: function editAvatar(avatarUrl) {
      return this._sendRequest("".concat(this._url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatarUrl
        })
      });
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(name, link) {
      return this._sendRequest("".concat(this._url, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      });
    }
  }, {
    key: "setLikes",
    value: function setLikes(id, isLiked) {
      //поменять местами put и delete?
      var method = !isLiked ? 'PUT' : 'DELETE';
      var url = "".concat(this._url, "/cards/").concat(id, "/likes");
      return fetch(url, {
        method: method,
        headers: this._headers
      }).then(function (response) {
        if (!response.ok) {
          return response.json().then(function (err) {
            throw err;
          });
        }
        return response.json();
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return this._sendRequest("".concat(this._url, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: this._headers
      });
    }
  }]);
  return Api;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, templateSelector, handleCardClick, handleLikeClick, handleDeleteClick, currentUserId) {
    _classCallCheck(this, Card);
    this._name = data.name;
    this._link = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._isLiked = data.isLiked;
    this._ownerId = data.ownerId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._currentUserId = currentUserId;
  }

  // выбор класса шаблона для фотокарточки
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
      this._deleteButtonEl = cardTemplate.querySelector('.element__trash-button');
      if (this._ownerId !== this._currentUserId) {
        this._deleteButtonEl.style.display = 'none';
      }
      return cardTemplate;
    }

    // находим все элементы в одном свойстве
  }, {
    key: "_getElements",
    value: function _getElements() {
      this._image = this._newCard.querySelector('#element-image');
      this._text = this._newCard.querySelector('#element-text');
      this._likeButton = this._newCard.querySelector('.element__button');
      this._deleteButton = this._newCard.querySelector('.element__trash-button');
      this._likesNumber = this._newCard.querySelector('.element__likes');
    }

    // выбор названия и ссылки изображения из массива
  }, {
    key: "_setData",
    value: function _setData() {
      this._text.textContent = this._name;
      this._image.src = this._link;
      this._image.alt = "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435: ".concat(this._name);
    }

    // слушатель удаления изображения
  }, {
    key: "handleDeleteButton",
    value: function handleDeleteButton() {
      // проверить работает ли без
      this._newCard.remove();
      this._newCard = null;
    }

    // слушатель кнопки лайка
  }, {
    key: "_handleLikeButton",
    value: function _handleLikeButton() {
      this._likeButton.classList.toggle('element__button_active');
    }
  }, {
    key: "_openImagePopup",
    value: function _openImagePopup() {
      this._handleCardClick(this._name, this._link);
    }

    // все слушатели
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this = this;
      // удаление изображения
      this._deleteButton.addEventListener('click', this.handleDeleteButton.bind(this));
      // кнопка лайка
      this._likeButton.addEventListener('click', this._handleLikeButton.bind(this));

      // открытие изображения
      this._image.addEventListener('click', function () {
        _this._openImagePopup();
      });
    }
  }, {
    key: "getView",
    value: function getView() {
      this._newCard = this._getTemplate();
      this._getElements();
      this._setData();
      this._setListeners();
      return this._newCard;
    }
  }]);
  return Card;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// класс с валидацией
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);
    this._config = config;
    this._formElement = formElement;
    this._inputSelector = this._config.inputSelector;
    this._submitButtonSelector = this._config.submitButtonSelector;
    this._disabledButtonClass = this._config.disabledButtonClass;
    this._inputErrorClass = this._config.inputErrorClass;
    this._errorClass = this._config.errorClass;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._button = this._formElement.querySelector(this._submitButtonSelector);
  }

  // спрятать текст ошибки
  _createClass(FormValidator, [{
    key: "_hideInputError",
    value: function _hideInputError(input) {
      var span = this._formElement.querySelector("#".concat(input.id, "-error"));
      span.textContent = '';
      input.classList.remove(this._inputErrorClass);
    }

    // показать текст ошибки
  }, {
    key: "_showInputError",
    value: function _showInputError(input) {
      input.classList.add(this._inputErrorClass);
      var span = this._formElement.querySelector("#".concat(input.id, "-error"));
      span.textContent = input.validationMessage;
      span.classList.add(this._errorClass);
    }

    // функция проверки валидность
  }, {
    key: "_isValid",
    value: function _isValid(input) {
      if (!input.validity.valid) {
        // если невалидна показываем ошибку
        this._showInputError(input);
      } else {
        // если валидна прячем ошибку
        this._hideInputError(input);
      }
    }

    // функция активации кнопки
  }, {
    key: "_activateButton",
    value: function _activateButton() {
      this._button.classList.remove(this._disabledButtonClass);
      this._button.disabled = false;
    }

    // функция деактивации кнопки
  }, {
    key: "_deactivateButton",
    value: function _deactivateButton() {
      this._button.classList.add(this._disabledButtonClass);
      this._button.disabled = true;
    }

    // функция проверки валидности инпутов
  }, {
    key: "_hasInvalidValue",
    value: function _hasInvalidValue() {
      return this._inputs.some(function (input) {
        return !input.validity.valid;
      });
    }

    // функция активации кнопки при валидации
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidValue()) {
        this._deactivateButton();
      } else {
        this._activateButton();
      }
    }

    // функция поиска всех инпутов внутри формы
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._toggleButtonState();
      this._formElement.addEventListener('reset', function () {
        _this._deactivateButton();
      });

      // перебор массива с проверкой на валидность
      this._inputs.forEach(function (input) {
        input.addEventListener('input', function () {
          _this._isValid(input);
          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      window.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      window.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._closeButton.addEventListener('click', function () {
        return _this.close();
      });
      this._popup.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupDelete.js":
/*!***************************************!*\
  !*** ./src/components/PopupDelete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// import Popup from './Popup.js';

// class PopupDelete extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._deleteButton = this._popup.querySelector('.popup__delete-button');
//   }

//   open(submitForm) {
//     this._submitHandler = submitForm;
//     super.open();
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._deleteButton.addEventListener('click', () => {
//       Promise.resolve(this._submitHandler())
//         .then(() => {
//           super.close();
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     });
//   }
// }

// export default PopupDelete;


var PopupDelete = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDelete, _Popup);
  var _super = _createSuper(PopupDelete);
  function PopupDelete(popupSelector, submitForm) {
    var _this;
    _classCallCheck(this, PopupDelete);
    _this = _super.call(this, popupSelector);
    _this._submitForm = submitForm;
    _this._form = _this._popup.querySelector('.popup__form');
    _this._deleteButton = _this._form.querySelector('.popup__delete-button');
    return _this;
  }
  _createClass(PopupDelete, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupDelete.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (event) {
        event.preventDefault();
        _this2._deleteButton.textContent = "".concat(_this2._deleteButton.textContent, "...");
        _this2._submitForm({
          card: _this2._card,
          id: _this2._id
        });
      });
    }
  }, {
    key: "open",
    value: function open(_ref) {
      var card = _ref.card,
        id = _ref.cardID;
      _get(_getPrototypeOf(PopupDelete.prototype), "open", this).call(this);
      this._card = card;
      this._cardID = id;
    }
  }]);
  return PopupDelete;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupDelete);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector,
      submitForm = _ref.submitForm;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._submitForm = submitForm;
    _this._form = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._form.querySelectorAll('.popup__input');
    _this._saveButton = _this._form.querySelector('.popup__save-button');
    _this._button = _this._saveButton.textContent;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._inputValues = {};
      this._inputList.forEach(function (input) {
        _this2._inputValues[input.name] = input.value;
      });
      return this._inputValues;
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(data) {
      this._inputList.forEach(function (input) {
        if (input.name === 'info') {
          input.value = data.info;
        } else {
          input.value = data[input.name];
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }, {
    key: "showPreloader",
    value: function showPreloader() {
      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      isLoading ? this._saveButton.textContent = 'Сохранение...' : this._saveButton.textContent = this._button;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this._form.getAttribute('name');
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this3._submitForm(_this3._getInputValues());
      });
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._popupFullImage = _this._popup.querySelector('.popup__full-image');
    _this._popupImageText = _this._popup.querySelector('.popup__image-text');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      // открытие изображения
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._popupFullImage.src = link;
      this._popupFullImage.alt = name;
      this._popupImageText.textContent = name;
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, container) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);
  return Section;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref, avatarSelector) {
    var profileNameSelector = _ref.profileNameSelector,
      profileDescriptionSelector = _ref.profileDescriptionSelector;
    _classCallCheck(this, UserInfo);
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
    this._avatarSelector = avatarSelector;
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name,
        about: this._about,
        id: this._id
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about,
        avatar = _ref2.avatar,
        _id = _ref2._id;
      this._name = name;
      this._about = about;
      this._avatar = avatar;
      this._id = _id;
      this._profileName.textContent = name;
      this._profileDescription.textContent = about;
      this._avatarSelector.style.backgroundImage = "url(".concat(this._avatar, ")");
    }
  }]);
  return UserInfo;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPopup: () => (/* binding */ addPopup),
/* harmony export */   addPopupButton: () => (/* binding */ addPopupButton),
/* harmony export */   avatarForm: () => (/* binding */ avatarForm),
/* harmony export */   avatarPopup: () => (/* binding */ avatarPopup),
/* harmony export */   descriptionInput: () => (/* binding */ descriptionInput),
/* harmony export */   editPopup: () => (/* binding */ editPopup),
/* harmony export */   editPopupButton: () => (/* binding */ editPopupButton),
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   imageNameInput: () => (/* binding */ imageNameInput),
/* harmony export */   imageUrlInput: () => (/* binding */ imageUrlInput),
/* harmony export */   initialCards: () => (/* binding */ initialCards),
/* harmony export */   nameInput: () => (/* binding */ nameInput),
/* harmony export */   optionsApi: () => (/* binding */ optionsApi),
/* harmony export */   popupAddCardForm: () => (/* binding */ popupAddCardForm),
/* harmony export */   popupProfileForm: () => (/* binding */ popupProfileForm),
/* harmony export */   profileAvatar: () => (/* binding */ profileAvatar),
/* harmony export */   validationConfig: () => (/* binding */ validationConfig)
/* harmony export */ });
var editPopupButton = document.querySelector('.profile__edit-button');
var addPopupButton = document.querySelector('.profile__add-button');
var editPopup = document.querySelector('#popup-profile');
var popupProfileForm = editPopup.querySelector('#popup-profile-form');
var nameInput = popupProfileForm.querySelector('#name-input');
var descriptionInput = popupProfileForm.querySelector('#description-input');
var addPopup = document.querySelector('#popup-element');
var popupAddCardForm = addPopup.querySelector('#popup-element-form');
var imageNameInput = popupAddCardForm.querySelector('#image-name-input');
var imageUrlInput = popupAddCardForm.querySelector('#image-url-input');
var elements = document.querySelector('.elements');
var profileAvatar = document.querySelector('#profile-avatar');
var avatarPopup = document.querySelector('.popup__edit-avatar');
var avatarForm = avatarPopup.querySelector('#avatar-form');
var validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error'
};
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var optionsApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '6509c90e-d66c-4b62-a862-55254e2f046d',
    'Content-Type': 'application/json'
  }
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_PopupDelete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupDelete.js */ "./src/components/PopupDelete.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");










var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.optionsApi);
var cardsSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.initialCards,
  renderer: createCard
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.elements);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description'
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatar);
var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  popupSelector: '#popup-element',
  submitForm: submitAddForm
});
var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  popupSelector: '#popup-profile',
  submitForm: submitEditForm
});
var popupEditAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  popupSelector: '.popup__edit-avatar',
  submitForm: submitAvatarForm
});
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"]('#popup-image');

// const popupDelete = new PopupDelete('.popup__delete-form');

var popupDelete = new _components_PopupDelete_js__WEBPACK_IMPORTED_MODULE_7__["default"]('.popup__delete-form', function (_ref) {
  var card = _ref.card,
    id = _ref.cardID;
  api.deleteCardID(id).then(function () {
    card.removeCard();
    deletePopupCard.close();
  }).catch(function (error) {
    return console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 ".concat(error));
  }).finally(function () {
    return deletePopupCard.submitBtn.textContent = 'да';
  });
});
deletePopupCard.setEventListeners();

//функция создания карточки
function createCard(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"](data, '#element-template', openImagePopup, function () {
    api.setLikes(data.id, data.isLiked);
  }, function () {
    return popupDelete.open(function () {
      api.deleteCard(id).then(function () {
        card.handleDeleteButton();
        popupDelete.close();
      }).catch(function (err) {
        console.log(err);
      });
    });
  }, userInfo.getUserInfo().id);
  return card.getView();
}

//функция редактирования профиля
function submitEditForm(formData) {
  var name = formData['name'];
  var about = formData['description'];
  console.log(about);
  popupEditProfile.showPreloader();
  api.editProfile(name, about).then(function (res) {
    userInfo.setUserInfo(res);
    popupEditProfile.close();
  }).catch(function (err) {
    console.log(err);
  });
}

//функция редактирования аватара
function submitAvatarForm(inputs) {
  console.log(inputs);
  var avatarUrl = inputs['avatar-url'];
  popupEditAvatar.showPreloader();
  api.editAvatar(avatarUrl).then(function (data) {
    userInfo.setUserInfo(data);
    popupEditAvatar.close();
  }).catch(function (err) {
    return console.log(err);
  });
}

//функция добавления изображения
function submitAddForm(inputs) {
  var imageName = inputs['image-name'];
  var imageUrl = inputs['image-url'];
  popupAddCard.showPreloader();
  api.addNewCard(imageName, imageUrl).then(function (data) {
    var card = createCard(data);
    cardsSection.addItem(card);
    popupAddCard.close();
  }).catch(function (err) {
    return console.log(err);
  });
}

//функция открытия изображения
function openImagePopup(name, link) {
  popupWithImage.open(name, link);
}

//функция открытия попапа профиля
function openEditPopup() {
  var userElement = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = userElement.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.descriptionInput.value = userElement.about;
  popupEditProfile.open();
}

//функция валидации формы
function validateForm(config, form) {
  var formValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](config, form);
  formValidator.enableValidation();
}
validateForm(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupProfileForm);
validateForm(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.popupAddCardForm);
validateForm(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.validationConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarForm);
cardsSection.renderItems();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.addPopupButton.addEventListener('click', function () {
  popupAddCard.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.editPopupButton.addEventListener('click', openEditPopup);
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatar.addEventListener('click', function () {
  popupEditAvatar.open();
});
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatar.setEventListeners();
popupDelete.setEventListeners();
Promise.all([api.getUser().then(function (user) {
  userInfo.setUserInfo(user);
  var backgroundImage = "url(".concat(user.avatar, ")");
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatar.computedStyleMap.backgroundImage = backgroundImage;
}).catch(function (err) {
  return console.log(err);
})]);
Promise.all([api.getAllCards().then(function (cards) {
  // const { id: userId } = userInfo.getUserInfo();
  cards.reverse().forEach(function (card) {
    // const isLiked = card.likes.some(user => {
    //   user._id === userId;
    // });
    var cardEl = createCard(card);
    cardsSection.addItem(cardEl);
  });
  cardsSection.renderItems();
}).catch(function (err) {
  return console.log(err);
})]);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
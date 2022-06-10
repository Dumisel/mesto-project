import '../pages/index.css';
import {addCard, renderCard, saveCard} from './card.js';
import {openPopup, closePopup, submitEditForm} from './modal.js';
import {enableValidation, disableValidation} from './validate.js';

//основные переменные
export const titleInput = document.querySelector('#title');
export const linkInput = document.querySelector('#link');
export const cardTitle = document.querySelector('.card__title');
export const cardImage = document.querySelector('.card__image');

export const nameInput = document.querySelector('#name');
export const aboutInput = document.querySelector('#about');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');

export const popups = document.querySelectorAll('.popup');
export const editPopup = document.querySelector('#popup-user');
export const addPopup = document.querySelector('#popup-card');
export const imagePopup = document.querySelector('#popup-image');
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');

const formAdd = document.querySelector('#cardform');
const formEdit = document.querySelector('#userform');

export const cardsContainer = document.querySelector('.cards');
export const image = imagePopup.querySelector('.image__item');
export const imageCaption = imagePopup.querySelector('.image__caption');

export const cardTemplate = document.querySelector('#card-template').content;

//массив карточек при загрузке страницы
const initialCards = [
  {
    title: 'Байкал',
    link: 'https://images.unsplash.com/photo-1602256976419-c82585fe73a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    title: 'Красноярск',
    link: 'https://images.unsplash.com/photo-1630475915483-7e492dcccf18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    title: 'Юрюнг-Хая',
    link: 'https://images.unsplash.com/photo-1597875099375-8f99c789ebb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
  },
  {
    title: 'Саяны',
    link: 'https://images.unsplash.com/photo-1570102353350-4fac3b6a436f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    title: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1604762093652-261bfb6ac4de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80'
  },
  {
    title: 'Алтай',
    link: 'https://images.unsplash.com/photo-1593948360735-4ddb6f0dde7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }
  ];


//валидация
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

//слушатели
initialCards.forEach (function (item) {
  renderCard(item);
});

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
  })
})

addButton.addEventListener ('click', function () {
  disableValidation(addPopup, validationSettings);
  openPopup(addPopup, validationSettings);
});

formAdd.addEventListener('submit', saveCard);

editButton.addEventListener ('click', function () {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  disableValidation(editPopup, validationSettings);
  openPopup(editPopup, validationSettings);
});

formEdit.addEventListener('submit', submitEditForm);

enableValidation(validationSettings);

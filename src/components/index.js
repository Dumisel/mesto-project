import '../pages/index.css';
import {renderCard, saveCard} from './card.js';
import {openPopup, closePopup, submitEditForm, submitAvatarForm} from './modal.js';
import {enableValidation, disableValidation} from './validate.js';
import {getInitialCards, getProfileInfo} from './api.js';

//основные переменные
export const titleInput = document.querySelector('#title');
export const linkInput = document.querySelector('#link');
export const cardTitle = document.querySelector('.card__title');
export const cardImage = document.querySelector('.card__image');

export const nameInput = document.querySelector('#name');
export const aboutInput = document.querySelector('#about');
export const avatarInput = document.querySelector('#avatar');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const profileAvatar = document.querySelector('.profile__avatar');

export const popups = document.querySelectorAll('.popup');
export const editPopup = document.querySelector('#popup-user');
export const addPopup = document.querySelector('#popup-card');
export const avatarPopup = document.querySelector('#popup-avatar');
export const imagePopup = document.querySelector('#popup-image');
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const changeAvatarButton = document.querySelector('.profile__avatar-overlay');

export const profileSaveButton = document.querySelector('#save');
export const cardCreateButton = document.querySelector('#create');
export const avatarSaveButton = document.querySelector('#save-avatar');

export const formAdd = document.querySelector('#cardform');
export const formEdit = document.querySelector('#userform');
export const formAvatar = document.querySelector('#avatarform');

export const cardsContainer = document.querySelector('.cards');
export const image = imagePopup.querySelector('.image__item');
export const imageCaption = imagePopup.querySelector('.image__caption');

export const cardTemplate = document.querySelector('#card-template').content;

//валидация
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

enableValidation(validationSettings);

//слушатели на модальные окна
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
  linkInput.value = "";
  titleInput.value = "";
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

changeAvatarButton.addEventListener("click", () => {
  avatarInput.value = "";
  disableValidation(avatarPopup, validationSettings);
  openPopup(avatarPopup, validationSettings);
});

formAvatar.addEventListener("submit", submitAvatarForm);




//преобразование данных для отрисовки страницы
export let profileID;
Promise.all([getInitialCards(), getProfileInfo()])
  .then(([cards, profileInfo]) => {
    cards.reverse().forEach((card) => {
      renderCard(card, profileInfo);
      setProfileInfo(profileInfo);
      profileID = profileInfo;
    });
  })
  .catch((err) => {
    console.log(err);
  })

const setProfileInfo = (profileInfo) => {
  profileName.textContent = profileInfo.name;
  profileAbout.textContent = profileInfo.about;
  profileAvatar.src = profileInfo.avatar;
}

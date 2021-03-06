import {popups, profileSaveButton, profileName, profileAbout, nameInput, aboutInput, editPopup} from './index.js';
import {profileAvatar, avatarInput, avatarSaveButton, avatarPopup} from './index.js';
import {editProfileInfo, changeAvatar} from './api.js';

export const openPopup = (popups) => {
  popups.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

export const closePopup = (popups) => {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export const submitEditForm = (evt) => {
  evt.preventDefault();
  profileSaveButton.textContent = "Сохранение...";
  editProfileInfo()
  .then((res) => {
    profileName.textContent = `${nameInput.value}`;
    profileAbout.textContent = `${aboutInput.value}`;
    closePopup(editPopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    profileSaveButton.textContent = "Сохранить";
  })
}

export const submitAvatarForm = (evt) => {
  evt.preventDefault();
  avatarSaveButton.textContent = "Сохранение...";
  changeAvatar()
  .then((res) => {
    profileAvatar.src = `${avatarInput.value}`
    closePopup(avatarPopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    avatarSaveButton.textContent = "Сохранить";
  });
}







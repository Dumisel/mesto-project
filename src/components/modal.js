export function openPopup(popups){
  popups.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

export function closePopup (popups){
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export function submitEditForm (evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileAbout.textContent = `${aboutInput.value}`;
  closePopup (editPopup);
}

import {popups, profileName, profileAbout, nameInput, aboutInput, editPopup} from './index.js';







export function openPopup(popups){
  popups.classList.add('popup_opened');

  document.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape' && popups.classList.contains('popup_opened')) {
      popups.classList.remove('popup_opened');
    }
  });

  document.addEventListener('mousedown', function(evt){
    if (evt.target.classList.contains('popup_opened')) {
      popups.classList.remove('popup_opened');
    }
  })
}

export function closePopup (popups){
  popups.classList.remove('popup_opened');
}

export function submitEditForm (evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileAbout.textContent = `${aboutInput.value}`;
  closePopup (editPopup);
};

import {profileName, profileAbout, nameInput, aboutInput, editPopup} from './index.js'






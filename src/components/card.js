export function addCard(title, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = title;
  cardElement.querySelector('.card__title').textContent = title;


  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });

  cardElement.querySelector('.card__delete').addEventListener('click', function (evt) {
    const deleteCard = evt.target.closest('.card');
    deleteCard.remove();
  });

  cardElement.querySelector('.card__image').addEventListener('click', function () {
    openPopup(imagePopup);
    image.src = link;
    image.alt = title;
    imageCaption.textContent = title;
  });

  return cardElement;
}

export function renderCard (card) {
  const cardItem = addCard(card.title, card.link);
  cardsContainer.prepend(cardItem);
}

export function saveCard (evt) {
  evt.preventDefault();
  const link = `${linkInput.value}`;
  const title = `${titleInput.value}`;
  linkInput.value = "";
  titleInput.value = "";
  renderCard( {link,title} );
  closePopup (addPopup);
};

import {cardTemplate, imageCaption, image, cardsContainer, linkInput, titleInput, imagePopup, addPopup} from './index.js';
import {openPopup, closePopup} from './modal.js'

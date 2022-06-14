import {cardTemplate, profileID, image, imageCaption, cardsContainer, linkInput, titleInput, imagePopup, addPopup, cardCreateButton} from './index.js';
import {openPopup, closePopup} from './modal.js';
import {postCard, addLike, deleteLike, deleteCard} from './api.js';

const addCard = (card, profileInfo) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;
  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__likes-meter').textContent = `${card.likes.length}`;
  cardElement.setAttribute('id', card._id);

  const cardID = cardElement.getAttribute('id');

  if (card.likes.some((like) => profileInfo._id === like._id)) {
    cardElement.querySelector('.card__like').classList.add('card__like_active');
  }

  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    if (evt.target.classList.contains('card__like_active')) {
      deleteLike(cardID)
      .then((res) => {
        evt.target.classList.remove('card__like_active');
      })
      .catch((err) => {
          console.log(err);
      });
    } else {
      addLike(cardID)
      .then((res) => {
        cardElement.querySelector('.card__likes-meter').textContent = res.likes.length;
        evt.target.classList.add('card__like_active');
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });

  if (profileInfo._id === card.owner._id) {
    cardElement.querySelector('.card__delete').classList.add('card__delete_active');
  }

  cardElement.querySelector('.card__delete').addEventListener('click', function (evt) {
    const removeCard = evt.target.closest('.card');
    removeCard.remove();
    deleteCard(cardID);
  });

  cardElement.querySelector('.card__image').addEventListener('click', function () {
    openPopup(imagePopup);
    image.src = card.link;
    image.alt = card.name;
    imageCaption.textContent = card.name;
  });

  return cardElement;
}

export const renderCard = (card, profileInfo) => {
  const cardItem = addCard(card, profileInfo);
  cardsContainer.prepend(cardItem);
}

export const saveCard = (evt) => {
  evt.preventDefault();
  cardCreateButton.textContent = "Создание...";
  const link = `${linkInput.value}`;
  const name = `${titleInput.value}`;
  postCard({link, name})
  .then((res) => {
    renderCard(res, profileID);
    closePopup(addPopup);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    cardCreateButton.textContent = "Создать";
  })
}

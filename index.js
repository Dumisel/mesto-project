const popup = document.querySelectorAll('.popup');
const editPopup = document.querySelector('#popup-user');
const addPopup = document.querySelector('#popup-card');
const imagePopup = document.querySelector('#popup-image');
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const closeButton = document.querySelectorAll('.popup__close');

const nameInput = document.querySelector('#name');
const aboutInput = document.querySelector('#about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const titleInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');
const cardTitle = document.querySelector('.card__title');
const cardImage = document.querySelector('.card__image');

const cardsContainer = document.querySelector('.cards');

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

nameInput.value = profileName.textContent;
aboutInput.value = profileAbout.textContent;

function openPopup(popup){
  popup.classList.add('popup_opened');
}

editButton.addEventListener ('click', function () {
  openPopup(editPopup);
});

addButton.addEventListener ('click', function () {
  openPopup(addPopup);
});

function closePopup (popup){
  popup.classList.remove('popup_opened');
}

closeButton.forEach(function (item) {
  item.addEventListener('click', function (evt) {
     let parentPopup = evt.target.closest('.popup');
     closePopup(parentPopup);
  });
});

const formEdit = document.querySelector('#userform');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileAbout.textContent = `${aboutInput.value}`;
  editPopup.classList.remove('popup_opened');
};

formEdit.addEventListener('submit', formSubmitHandler);

function addCard(title, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = link;
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
    const image = imagePopup.querySelector('.image__item');
    const imageCaption = imagePopup.querySelector('.image__caption');
    image.src = link;
    imageCaption.textContent = title;
  });

  return cardElement;
}

const cardElement = addCard();

function renderCard (card, container) {
  const cardItem = addCard(title, link);
  cardsContainer.prepend(cardItem);
}

const formAdd = document.querySelector('#cardform');

function formSaveHandler (evt) {
  evt.preventDefault();
  link = `${linkInput.value}`;
  title = `${titleInput.value}`;
  renderCard();
  addPopup.classList.remove('popup_opened');
};

formAdd.addEventListener('submit', formSaveHandler);

initialCards.forEach (function (item) {
  renderCard();
  document.querySelector('.card__image').src = item.link;
  document.querySelector('.card__title').textContent = item.title;
});








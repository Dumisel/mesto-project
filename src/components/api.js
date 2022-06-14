import {nameInput, aboutInput, avatarInput, titleInput, linkInput} from './index.js'

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-11',
  headers: {
    authorization: '3323871e-2de4-4e5d-8272-c4a879828412',
    'Content-Type': 'application/json'
  }
}

export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {headers: config.headers})
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((profileInfo) => {
    return profileInfo;
  })
  .catch((err) => {
    console.log(err);
  })
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {headers: config.headers})
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((cards) => {
    return cards;
  })
  .catch((err) => {
    console.log(err);
  })
}

export const editProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
    method: 'PATCH',
    body: JSON.stringify({
      name: nameInput.value,
      about: aboutInput.value
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  })
}

export const changeAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: avatarInput.value,
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  })
}

export const postCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
    method: 'POST',
    body: JSON.stringify({
      name: titleInput.value,
      link: linkInput.value
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.log(err);
  })
}

export const deleteCard = (cardID) => {
  return fetch(`${config.baseUrl}/cards/${cardID}`, {
    headers: config.headers,
    method: "DELETE"
  })
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch((err) => {
    console.log(err);
  })
}

export const addLike = (cardID) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    headers: config.headers,
    method: "PUT"
  })
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.log(err);
  })
}

export const deleteLike = (cardID) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    headers: config.headers,
    method: "DELETE"
  })
  .then(res => {
    if (res.ok) {
      return res.json();
      } return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
  return res;
})
  .catch((err) => {
    console.log(err);
  })
}

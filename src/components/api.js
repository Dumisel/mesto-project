import {nameInput, aboutInput, avatarInput, titleInput, linkInput} from './index.js'

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-11',
  headers: {
    authorization: '3323871e-2de4-4e5d-8272-c4a879828412',
    'Content-Type': 'application/json'
  }
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
}

export const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {headers: config.headers})
  .then(checkResponse)
  }


export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {headers: config.headers})
  .then(checkResponse)
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
  .then(checkResponse)
}

export const changeAvatar = () => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    headers: config.headers,
    method: "PATCH",
    body: JSON.stringify({
      avatar: avatarInput.value,
    })
  })
  .then(checkResponse)
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
  .then(checkResponse)
}

export const deleteCard = (cardID) => {
  return fetch(`${config.baseUrl}/cards/${cardID}`, {
    headers: config.headers,
    method: "DELETE"
  })
  .then(checkResponse)
}

export const addLike = (cardID) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    headers: config.headers,
    method: "PUT"
  })
  .then(checkResponse)
}

export const deleteLike = (cardID) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    headers: config.headers,
    method: "DELETE"
  })
  .then(checkResponse)
}

export const BASE_URL = 'http://localhost:3001';

export const getPoints = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const savePoint = (title, description, date) => {
  return fetch(`${BASE_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      description: description,
      date: date,
    }
    )
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

export const deletePoint = (data) => {
  return fetch(`${BASE_URL}/` + data, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(checkResponse)
  .then((res) => {
    return res;
  })
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}
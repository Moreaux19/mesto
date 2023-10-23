class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _sendRequest(url, options) {
    return fetch(url, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Что-то пошло не так...');
      })
      .catch(error => {
        console.log(error);
      });
  }

  getAllCards() {
    return this._sendRequest(`${this._url}/cards`, {
      headers: this._headers
    });
  }

  getUser() {
    return this._sendRequest(`${this._url}/users/me`, {
      headers: this._headers
    });
  }

  editProfile(name, about) {
    return this._sendRequest(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }

  editAvatar(avatarUrl) {
    return this._sendRequest(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    });
  }

  addNewCard(name, link) {
    return this._sendRequest(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    });
  }

  setLikes(cardId, isLiked) {
    //поменять местами put и delete?
    const method = !isLiked ? 'PUT' : 'DELETE';
    const url = `${this._url}/cards/${cardId}/likes`;

    return fetch(url, {
      method: method,
      headers: this._headers
    }).then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    });
  }

  deleteCard(cardId) {
    return this._sendRequest(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }
}
export default Api;

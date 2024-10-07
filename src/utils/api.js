export class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getEvents() {
    return fetch(`${this._baseUrl}/events/list/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkError);
  }

  getFeedbacks() {
    return fetch(`${this._baseUrl}/review/list/`, {
      method: "GET",
    }).then(this._checkError);
  }

  addFeedback(values) {
    return fetch(`${this._baseUrl}/review/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author_name: values.name,
        email: values.email,
        text: values.comment,
      }),
    }).then(this._checkError);
  }

  contactUs(values) {
    return fetch(`${this._baseUrl}/contact/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author_name: values.name,
        email: values.email,
        phone: values.phone,
        text: values.comment,
      }),
    }).then(this._checkError);
  }
}

export const api = new Api({
  baseUrl: "http://85.209.148.182/api",
  // baseUrl: "https://moto-therapy-test.god-it.ru/api",
});

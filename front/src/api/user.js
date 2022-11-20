import { axios } from "../libs/axios";

export function registro(data) {
  data.username = data.email.substring(0, data.email.indexOf("@"));
  const url = "http://localhost:8000/register";
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.text();
    })
    .then((result) => {
      return result;
    });
}

/*export function Google(){
  const url = 'http://localhost:8000/';
  const params = {
      headers: {
          "Content-Type": "application/json"
      }
  };

  return fetch(url, params).then(response =>{
      return response.json();
  })
}*/

export function iniciar_sesion(data) {
  const url = "http://localhost:8000/login";
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.text();
    })
    .then((result) => {
      return result;
    });
}

export function registroAdmin(data) {
  const url = "http://localhost:8000/register/admin";
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function miPerfil(id) {
  const url = "http://localhost:8000/profile/" + id;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function perfilAdmin(id) {
  const url = "http://localhost:8000/admin/user/" + id;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function editarPerfil(id, data) {
  const url = "http://localhost:8000/user/" + id + "/update";
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function editarPerfilAdmin(id, data) {
  const url = "http://localhost:8000/admin/" + id + "/update";
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

export function eliminarUsuario(id) {
  const url = "http://localhost:8000/user/" + id + "/delete";
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

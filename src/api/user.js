import { axios } from "../libs/axios";

export function registro(data) {
  const url = "https://payphonecol.herokuapp.com/registro";
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
  const url = 'https://payphonecol.herokuapp.com/';
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
  const url = "https://payphonecol.herokuapp.com/login";
  const params = {
    mode: "no-cors",
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
  const url = "https://payphonecol.herokuapp.com/registro";
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
  const url = "https://payphonecol.herokuapp.com/profile/" + id;
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
  const url = "https://payphonecol.herokuapp.com/admin/user/" + id;
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
  const url = "https://payphonecol.herokuapp.com/user/" + id + "/update";
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
  const url = "https://payphonecol.herokuapp.com/admin/" + id + "/update";
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
  const url = "https://payphonecol.herokuapp.com/user/" + id + "/delete";
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

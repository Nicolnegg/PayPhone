export function buscarCategoria() {
  const url = "https://payphonecol.herokuapp.com/categories";
  const params = {
    modo: "no-cors",
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

export function buscarAdmin() {
  const url = "https://payphonecol.herokuapp.com/admin";
  const params = {
    modo: "no-cors",
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

export function buscarAnuncios() {
  const url = "https://payphonecol.herokuapp.com/categories";
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

export function infoAnuncio(id) {
  const url = "https://payphonecol.herokuapp.com/post/" + id;
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

export function perfilAdmin(id) {
  const url = "https://payphonecol.herokuapp.com/admin/profile/" + id;
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

export function buscarAnunciosPorCategoria(id) {
  const url = "https://payphonecol.herokuapp.com/categories/" + id;
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

export function buscarAnunciosPorPalabra(palabra) {
  const url = "https://payphonecol.herokuapp.com/search?keyword=" + palabra;
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

export function buscarAdminPorPalabra(palabra) {
  const url = "https://payphonecol.herokuapp.com/searchAdmin?keyword=" + palabra;
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

export function buscarRecomendaciones() {
  const url = "https://payphonecol.herokuapp.com/recomendados";
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

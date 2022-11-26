export function traerItemsCanasta(id) {
  const url = "https://payphonecol.herokuapp.com/carrito/" + id;
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

export function agregarItem(data) {
  const url = "https://payphonecol.herokuapp.com/agrega-producto";
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

export function eliminarItem(id, postId) {
  const url = "https://payphonecol.herokuapp.com/shopping/removeItem/" + id + "/" + postId;
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

export function cambiarCantidad(data) {
  const url = "https://payphonecol.herokuapp.com/shopping/changeQuantity";
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

export function traerSesion(id) {
  const url = "https://payphonecol.herokuapp.com/shopping/getSessionId/" + id;
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

export function terminarCompra(id) {
  const url = "https://payphonecol.herokuapp.com/factura-electronica/" + id;
  const params = {
    method: "GET",
    responseType: "blob",
  };

  return fetch(url, params)
    .then((response) => {
      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    })
    .then((result) => {
      return result;
    });
}

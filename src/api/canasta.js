export function traerItemsCanasta(id) {
  const url = "http://localhost:8000/carrito/" + id;
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
  const url = "http://localhost:8000/agrega-producto";
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
  const url = "http://localhost:8000/shopping/removeItem/" + id + "/" + postId;
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
  const url = "http://localhost:8000/shopping/changeQuantity";
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
  const url = "http://localhost:8000/shopping/getSessionId/" + id;
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
  const url = "http://localhost:8000/factura-electronica/" + id;
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

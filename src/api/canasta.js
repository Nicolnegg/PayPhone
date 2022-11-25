export function traerItemsCanasta(id){
    const url = '/shopping/getCartItems/' + id;
      const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function agregarItem(data) {
    const url = '/agrega-producto';
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function eliminarItem(id, postId) {
    const url = '/shopping/removeItem/' + id + '/' + postId;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function cambiarCantidad(data) {
    const url = '/shopping/changeQuantity';
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function traerSesion(id){
    const url = '/shopping/getSessionId/' + id;
      const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function terminarCompra(id){
    const url = '/shopping/endShoppingSession/' + id;
      const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }
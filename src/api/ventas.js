export function traerVentas(id) {
    const url = '/profile/' + id + '/sales';
    const params = {
      method: "GET",
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

  export function traerMisAnuncios(id) {
    const url = '/admin/post/' + id ;
    const params = {
      method: "GET",
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
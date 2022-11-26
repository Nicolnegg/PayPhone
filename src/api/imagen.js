export function subirImagen(formdata){
    const url = 'http://localhost:8000/image/upload';
      const params = {
          method: "POST",
          body: formdata,
        };
  
      return fetch(url, params).then(response =>{
        return response.json();
      })
      .then(result => {
        return result;
      })
  }

  export function unirImagen(id, data){
    const url = 'http://localhost:8000/post/' + id + '/addImage';
      const params = {
          method: "POST",
          body: JSON.stringify(data),
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

  export function imagenPersona(id, data){
    console.log("esto es id " + id)
    console.log("data " + data.thumbnailUrl)
    const url = 'http://localhost:8000/user/' + id + '/addImage';
      const params = {
          method: "POST",
          body: JSON.stringify(data),
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


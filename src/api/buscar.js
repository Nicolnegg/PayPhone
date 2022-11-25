export function buscarCategoria(){
    const url = '/categories';
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

  export function buscarAdmin(){
    const url = '/admin';
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

  export function buscarAnuncios(){
    const url = '/post/getAll';
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

    export function infoAnuncio(id){
        const url = '/post/' + id;
        const params = {
            method: "POST",
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


    export function perfilAdmin(id){
        const url = '/admin/profile/' + id;
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


  export function buscarAnunciosPorCategoria(id){
    const url = '/categories/' + id;
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

  export function buscarAnunciosPorPalabra(palabra){
    const url = '/search?keyword=' + palabra;
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

  export function buscarAdminPorPalabra(palabra){
    const url = '/searchAdmin?keyword=' + palabra;
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

  export function buscarRecomendaciones(){
    const url = '/recommendations';
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

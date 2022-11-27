export function getAllProducts(){
    const url = 'https://payphonecol.herokuapp.com/productos/1';
    const params = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params).then(response =>{
        return response.json();
    })
}
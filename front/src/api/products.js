export function getAllProducts(){
    const url = 'http://localhost:8000/productos/1';
    const params = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params).then(response =>{
        return response.json();
    })
}
export function verOrdenes(id){
    const url = 'http://localhost:8000/profile/' + id + '/orders';
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

export function relatedPosts(id){
    const url = 'http://localhost:8000/post/' + id + '/related';
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
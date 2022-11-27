export function verOrdenes(id){
    const url = 'https://payphonecol.herokuapp.com/profile/' + id + '/orders';
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
    const url = 'https://payphonecol.herokuapp.com/post/' + id + '/related';
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
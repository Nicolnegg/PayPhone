export function recoverPassword(data,action){
    let url = 'http://localhost:8000/recoveryPassword';
    if (action === "recuperar") {url += '/true'}
    else {url += '/false'}
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

export function resetPassword(id, data, token){
    const url = 'http://localhost:8000/resetPassword/' + id + '/' + token;
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
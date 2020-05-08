const api = 'http://localhost:3002/api/react-products';

export const ApiService = {
    get(endpoint){
        return fetch(`${api}${endpoint}`)
                .then(response => response.json());
    },
    post(endpoint, data){
        return fetch(`${api}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then( response => {
                if(response.status !== 200){
                    alert('Requisição não enviada');                    
                }else{
                    alert('Gravado com sucesso')
                    response.json();
                }
            }                              
        );
    },
    delete(endpoint, id){
        return fetch(`${api}${endpoint}?id=${id}`,  {
            method: 'DELETE'          
        })
        .then(response => response.json());
    }

}
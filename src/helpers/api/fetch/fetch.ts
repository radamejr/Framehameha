import 'isomorphic-fetch';

const env = process.env.NODE_ENV

let hostname = ''

env === 'development' ? hostname = 'http://localhost:3000/' : hostname = 'https://api.framehameha.com/'
const api = 'api/v1'
const makeDisplayMessage = (response: Response) => {
    return env === 'production' ? ['Unexpected error'] : [`${response.status} calling ${response.url} ${response}`]
}

const handleResponse = async (response: Response): Promise<string[] | null> => {
    try {
        const message = (await response.json()) as { displayMessage: string[]};
        return message.displayMessage ? message.displayMessage : makeDisplayMessage(response);
    }catch (e) {
        return makeDisplayMessage(response);
    }
}
export const fetchGet = <T>(address: string, id?: number | string): Promise<T> => {
    let url: string;
    id ? url = `${hostname}${api}${address}/${id}` : url = `${hostname}${api}${address}`;
    return new Promise((resolve, reject) => {
        fetchMethod('GET', url, null)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                const message = {
                    error: ['Failed to retrieve data']
                }
                reject(message)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}

export const fetchPost = <S, T>(address: string, data: S, id?: number | string): Promise<T> => {
    let url: string;
    id ? url = `${hostname}${api}${address}/${id}` : url = `${hostname}${api}${address}`;
    return new Promise((resolve, reject) => {
        fetchMethod('POST', url, data)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                const message = {
                    error: ['Failed to retrieve data']
                }
                reject(message)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}

export const fetchPut = <S, T>(address: string, data: S, id?: number | string): Promise<T> => {
    let url: string;
    id ? url = `${hostname}${api}${address}/${id}` : url = `${hostname}${api}${address}`;
    return new Promise((resolve, reject) => {
        fetchMethod('PUT', url, data)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                const message = {
                    error: ['Failed to retrieve data']
                }
                reject(message)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}

export const fetchDelete = <S, T>(
    address: string, 
    data: S, 
    character_id: number | string
    ): Promise<T> => {
    const url = `${hostname}${api}${address}/${character_id}`;
    return new Promise((resolve, reject) => {
        fetchMethod('DELETE', url, data)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                const message = {
                    error: ['Failed to delete.']
                }
                reject(message)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}
const fetchThen = (resolve: Function, reject: Function) => async (response: Response) => {    
    if (response.status === 200) {
        const value = await response.json();
        if(value.status === 200) {
            resolve(value);
        } else if (!value.status) {
            resolve(value);
        } else {
            reject({ error: await handleResponse(response)})
        }
        
    } else {
        reject({ error: await handleResponse(response)})
    }
}
const fetchMethod = <S>(method: string, address: string, data: S): Promise<Response> => {
    const headers: string[][] = [['Content-type', 'application/json']];
    const token = localStorage.getItem('state');
    if(token) {
        headers.push(['Authorization', `Basic ${token}`]);
    }
    const init = data
        ? {
            method: method,
            body: JSON.stringify(data),
            headers: headers,
          }
          :
          {
            method: method,
            headers: headers,
          }
    return fetch(address, init)
}
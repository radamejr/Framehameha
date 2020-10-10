import 'isomorphic-fetch';

const env = process.env.NODE_ENV

let hostname = ''

env === 'development' ? hostname = 'http://localhost:3000/' : hostname = 'https://api.framehameha.com/'
const api = 'api/v1'
const makeDisplayMessage = (response: Response) => {
    return env === 'production' ? 'Unexpected error' : `${response.status} calling ${response.url} ${response}`
}

const handleResponse = async (response: Response): Promise<string | null> => {
    try {
        const message = (await response.json()) as { displayMessage: string};
        return message.displayMessage ? message.displayMessage : makeDisplayMessage(response);
    }catch (e) {
        return makeDisplayMessage(response);
    }
}
export const fetchGet = <T>(address: string, user: boolean): Promise<T> => {
    let url: string;
    user ? url = `${hostname}${address}` :  url = `${hostname}${api}${address}`;
    return new Promise((resolve, reject) => {
        fetchMethod('GET', url, null)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                reject(err)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}

export const fetchPost = <S, T>(address: string, user: boolean, data: S): Promise<T> => {
    let url: string;
    user ? url = `${hostname}${address}` :  url = `${hostname}${api}${address}`;
    return new Promise((resolve, reject) => {
        fetchMethod('POST', url, data)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                reject(err)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}
const fetchThen = (resolve: Function, reject: Function) => async (response: Response) => {
    console.log(response)
    
    if (response.status === 200) {
        const value = await response.json();
        if(value.status === 200) {
            resolve(value);
        } else if (!value.status) {
            resolve(value);
        } else {
            reject({ displayMessage: await handleResponse(response)})
        }
        
    } else {
        reject({ displayMessage: await handleResponse(response)})
    }
}
const fetchMethod = <S>(method: string, address: string, data: S): Promise<Response> => {
    const headers: string[][] = [['Content-type', 'application/json']];
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
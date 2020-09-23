import 'isomorphic-fetch';

const env = process.env.NODE_ENV

let hostname = ''

env === 'development' ? hostname = 'http://localhost:3000/api/v1' : hostname = 'https://api.framehameha.com/api/v1/'

const makeDisplayMessage = (response: Response) => {
    return env === 'production' ? 'Unexpected error' : `${response.status} calling ${response.url}`
}

const handleResponse = async (response: Response): Promise<string | null> => {
    try {
        const message = (await response.json()) as { displayMessage: string};
        return message.displayMessage ? message.displayMessage : makeDisplayMessage(response);
    }catch (e) {
        return makeDisplayMessage(response);
    }
}
export const fetchGet = <T>(address: string): Promise<T> => {
    const url = `${hostname}${address}`;
    return new Promise((resolve, reject) => {
        fetchMethod('GET', url, null)
            .then(fetchThen(resolve, reject))
            .catch((err) => {
                reject(err)
                console.log(url)
                console.log(`Error retrieiving data from ${url}`);
            })
    })
}

export const fetchPost = <S, T>(address: string, data: S): Promise<T> => {
    const url = `${hostname}${address}`;
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
    if (response.ok) {
        const value = await response.json();
        resolve(value);
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
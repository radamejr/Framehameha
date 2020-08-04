import axios from 'axios';

export const apiGet = <T>(address: string): Promise<T> => {
    const url = `${address}`;
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(async (response) => {
            if (response.status === 200) {
                const value = await response.data
                resolve(value);
            }
        })
        .catch((error) => {
            console.log(`error accessing ${url}`, error);
            reject(error)
        })
    })
}
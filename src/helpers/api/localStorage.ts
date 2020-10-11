export const saveState = (token: string | undefined, id: string | undefined): void => {
    try {
        localStorage.setItem('state', token || '')
        localStorage.setItem('id', id || '')
    } catch (err) {
        console.log(err)
    }
}
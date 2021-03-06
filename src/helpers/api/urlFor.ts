
const env = process.env.NODE_ENV

let hostname = ''

env === 'development' ? hostname = 'http://localhost:3000/' : hostname = 'https://dbfztech-api.herokuapp.com/'

const charactersAPI = () => {
    return `${hostname}api/v1/characters/`;
}

const twitterSearchBasic = (char_tag: string) => {
  return `https://twitter.com/search?q=%23${char_tag}&src=typed_query`
}

const auth = (action: string | undefined) => {
  return `${hostname}${action}`
}

export {
  charactersAPI,
  twitterSearchBasic,
  auth
}

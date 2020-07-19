import { charactersAPI } from "./urlFor";
import axios from 'axios'

export const getCharacters = async () =>  {
    try {
        const response = await axios.get(charactersAPI());
        console.log(response.data)      
        return response.data;
          
          
      } catch (error) {
          console.error(error);
      }
}

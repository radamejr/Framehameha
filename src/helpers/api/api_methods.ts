import { charactersAPI } from "./urlFor"
import { apiGet } from "./api_requests";

export const getCharacters = () => {
    
    return apiGet(charactersAPI());
}
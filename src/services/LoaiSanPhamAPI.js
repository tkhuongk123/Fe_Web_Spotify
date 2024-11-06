import axios from "axios"
import { api } from "./config"

export const layDs = async() => {
    try {
        const response = await axios.get(`${api}/loaisanpham/layDs`);
        return response.data;
    } catch(error) {
        throw error;
    }
}

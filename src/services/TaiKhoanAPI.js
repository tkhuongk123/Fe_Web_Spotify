import axios from "axios"
import { api } from "./config"

export const LoginAPI = async({ tendangnhap, matkhau }) => {
    try {
        const response = await axios.post(`${api}/taikhoan/login`, {
            tendangnhap,
            matkhau,
        });
        return response.data;
    } catch(error) {
        throw error;
    }
}

import axios from "axios"
import { api } from "./config"

export const laySanPhamTheoLoai = async({ idloaisanpham }) => {
    try {
        const response = await axios.post(`${api}/sanpham/laySanPhamTheoLoai`, {
            idloaisanpham
        });
        return response.data;
    } catch(error) {
        throw error;
    }
}

export const laySanPhamTheoId = async ({id}) => {
    try {
        const response = await axios.post(`${api}/sanpham/laySanPhamTheoId`, {
            id
        });
        return response.data;
    } catch(error) {
        throw error;
    }
}

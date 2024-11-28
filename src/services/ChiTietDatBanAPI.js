import axios from "axios";
import { api } from "./config";

export const taoChiTiet = async ({ idmanguoidung , idban, ngaygio }) => {
  try {
    const response = await axios.post(`${api}/chitietdatban/taoChiTiet`, {
        idmanguoidung , idban, ngaygio
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const layDsChiTietDatBanTheoIdMaNguoiDung = async ({ idmanguoidung }) => {
    try {
      const response = await axios.post(`${api}/chitietdatban/layDsChiTietDatBanTheoIdMaNguoiDung`, {
        idmanguoidung
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const layDsChiTietDatBan = async () => {
    try {
      const response = await axios.get(`${api}/chitietdatban/layDsChiTietDatBan`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

import axios from "axios";
import { api } from "./config";

export const taoChiTiet = async ({ idmanguoidung, idban, ngaygio, trangthai }) => {
  try {
    const response = await axios.post(`${api}/chitietdatban/taoChiTiet`, {
      idmanguoidung, idban, ngaygio, trangthai
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

export const layDsChiTietDatBanTrongHangCho = async () => {
  try {
    const response = await axios.get(`${api}/chitietdatban/layDsChiTietDatBanTrongHangCho`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const layViTriBanTheoIdBan = async ({ idban }) => {
  try {
    const response = await axios.post(`${api}/chitietdatban/layViTriBanTheoIdBan`, {
      idban
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const capNhatTrangThaiChiTietDatBan = async ({ idmanguoidung, idban, trangthai }) => {
  try {
    const response = await axios.post(`${api}/chitietdatban/capNhatTrangThaiChiTietDatBan`, {
      idmanguoidung, idban, trangthai
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

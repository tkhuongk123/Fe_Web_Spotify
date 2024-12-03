import axios from "axios";
import { api } from "./config";

export const layDsBan = async () => {
  try {
    const response = await axios.get(`${api}/ban/layDsBan`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const layBanTheoViTri = async ({ vitri }) => {
  try {
    const response = await axios.post(`${api}/ban/layBanTheoViTri`, {
      vitri
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const capNhapTrangThaiBanTheoId = async ({ trangthai, id }) => {
  try {
    const response = await axios.post(`${api}/ban/capNhapTrangThaiBanTheoId`, {
      trangthai, id
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const them = async ({ vitri, soluong }) => {
  try {
    const response = await axios.post(`${api}/ban/themBan`, {
      vitri, soluong
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const xoa = async ({ id }) => {
  try {
    const response = await axios.post(`${api}/ban/xoaBan`, {
      id
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



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

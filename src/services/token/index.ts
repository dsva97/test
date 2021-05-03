import axios from "axios";
import { API_ROOT } from "../";
import { TokenData, TokenDto } from "./types";

const API = API_ROOT + "/api/Token/CrearToken";

export const request = async (data: TokenDto): Promise<TokenData> => {
  try {
    const response = await axios({
      method: "POST",
      url: API,
      data,
    });
    const result = response.data as TokenData;
    return result;
  } catch (e) {
    throw new Error("Error en la solicitud");
  }
};

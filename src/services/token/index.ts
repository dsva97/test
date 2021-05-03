import axios from "axios";
import { API_ROOT } from "../";
import { TokenData, TokenDto } from "./types";

const API = API_ROOT + "/api/Token/CrearToken";

const request = async (data: TokenDto): Promise<TokenData> => {
  try {
    const response = await axios.post(API, data);
    const result = response.data as TokenData;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Error en la solicitud");
  }
};

export default request;

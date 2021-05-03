import axios from "axios";
import { API_ROOT } from "..";
import { CursoDto } from "../../interfaces/courses";

const API_GET = API_ROOT + "/api/Curso/ConsultarCursos";
const GET_ALL = async () => {
  try {
    const response = await axios.get(API_GET);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Hubo un error en el request");
  }
};
const GET = async (id: number | string) => {
  try {
    const response = await axios.get(API_GET + "/" + id);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Hubo un error en el request");
  }
};

const API_POST = API_ROOT + "/api/Curso/AgregarCurso";
const POST = async (data: CursoDto) => {
  try {
    const response = await axios.post(API_POST, data);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Hubo un error en el request");
  }
};

const API_PUT = API_ROOT + "/api/Curso/ActualizarCurso";
const PUT = async (data: any) => {
  try {
    const response = await axios.post(API_PUT, data);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Hubo un error en el request");
  }
};

const API_DELETE = API_ROOT + "/api/Curso/EliminarCurso";
const DELETE = async (data: any) => {
  try {
    const response = await axios.post(API_DELETE, data);
    const result = response.data;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Hubo un error en el request");
  }
};

export const serviceCourse = {
  GET,
  GET_ALL,
  POST,
  PUT,
  DELETE,
};

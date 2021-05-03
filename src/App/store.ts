import { CursoDto } from "../interfaces/courses";

export interface IStore {
  usuario?: string;
  cursos?: CursoDto[];
  token?: string | number;
}

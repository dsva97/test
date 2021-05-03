export interface CursoHorariosDto {
  idhorariocurso: number;
  idcurso: number;
  dia: string;
  hora: string;
  cantidadalumno: number;
}
export interface CursoDto {
  idcurso: number;
  nombre: string;
  descripcion: string;
  iddocente: number;
  idusuario: string;
  fechainicio: Date | null;
  fechainserta: Date | null;
  fechactualiza: Date | null;
  detalle: CursoHorariosDto[];
}

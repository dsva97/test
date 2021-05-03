import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridSortCellParams,
} from "@material-ui/data-grid";
import { serviceCourse } from "../../../services/courses";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "Nombre", width: 130 },
  { field: "descripcion", headerName: "Descripción", width: 130 },
  {
    field: "iddocente",
    headerName: "iddocente",
    type: "number",
    width: 90,
  },
  {
    field: "fechainicio",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridSortCellParams) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
  {
    field: "fechainserta",
    headerName: "fechainserta",
  },
  {
    field: "fechactualiza",
    headerName: "fechactualiza",
  },
  {
    field: "detalle",
    headerName: "detalle",
  },
];

export function Table() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    serviceCourse.GET_ALL().then(setCourses).catch(console.error);
  }, []);
  return (
    <DataGrid rows={courses} columns={columns} pageSize={5} checkboxSelection />
  );
}

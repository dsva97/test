import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { CursoDto } from "../../../interfaces/courses";
import { serviceCourse } from "../../../services/courses";

import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { AppContext } from "../../../App";

const now = new Date();

let i = 0;

export const Form = () => {
  const { setStore } = useContext(AppContext);
  const [nombre, setNombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [iddocente, setiddocente] = useState(1);
  const [idusuario, setidusuario] = useState("");
  const [fechainicio, setInicio] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );
  const [fechainserta, setInserta] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );
  const [fechactualiza, setActualiza] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    i++;
    const data: CursoDto = {
      idcurso: i,
      nombre,
      descripcion,
      iddocente,
      idusuario,
      fechainicio,
      fechainserta,
      fechactualiza,
      detalle: [],
    };
    serviceCourse.POST(data).then((cursos) => {
      setStore({ cursos });
      console.log(cursos);
    });
  };

  const handleDateChangeInicio = (date: Date | null) => {
    setInicio(date);
  };
  const handleDateChangeInserta = (date: Date | null) => {
    setInserta(date);
  };
  const handleDateChangeActualiza = (date: Date | null) => {
    setActualiza(date);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre del curso"
        variant="outlined"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        label="Descripción del curso"
        variant="outlined"
        value={descripcion}
        onChange={(e) => setdescripcion(e.target.value)}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={fechainicio}
            onChange={handleDateChangeInicio}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={fechainserta}
            onChange={handleDateChangeInserta}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={fechactualiza}
            onChange={handleDateChangeActualiza}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  );
};

export default Form;

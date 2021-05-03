import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";

import classes from "./style.module.css";
import { AppContext } from "../../App";

const API_ROOT = process.env.REACT_APP_API as string;
const API = API_ROOT + "/api/Token/CrearToken";
interface ResponseApi {
  token: string;
  expiracion: string;
}

export const Login = () => {
  const [value, setValue] = useState("");
  const { store, setStore } = useContext(AppContext);
  const setLogin = () => {
    const body = JSON.stringify({
      idtoken: 0,
      usuario: value,
    });
    console.log(body);
    fetch(API, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json())
      .then((res: ResponseApi) => {
        console.log(res);
        const { token, expiracion } = res;
        setStore({ ...store, usuario: value, token, expiracion });
      })
      .catch(console.error);
  };
  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off">
        <h1>Colegio Los Shapis</h1>
        <p>Para acceder a los registros primero debes identificarte.</p>
        <TextField
          label="¿Cuál es tu nombre?"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={setLogin}>
          Ingresar
        </Button>
        <span>🕵</span>
      </form>
    </div>
  );
};

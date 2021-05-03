import React, { useContext, useState } from "react";
import serviceToken from "../../services/token";
import { Button, TextField } from "@material-ui/core";

import classes from "./style.module.css";
import { AppContext } from "../../App";

export const Login = () => {
  const [value, setValue] = useState("");
  const { store, setStore } = useContext(AppContext);
  const setLogin = () => {
    serviceToken({
      idtoken: 0,
      usuario: value,
    })
      .then((res) => {
        const { token, expiracion } = res;
        setStore({ ...store, usuario: value, token, expiracion });
        setValue("");
      })
      .catch(console.error);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLogin();
  };
  return (
    <div className={classes.container}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <h1>Colegio Los Shapis</h1>
        <p>Para acceder a los registros primero debes identificarte.</p>
        <TextField
          label="¿Cuál es tu nombre?"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Ingresar
        </Button>
        <span>🕵</span>
      </form>
    </div>
  );
};

import React, { useContext } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { IconButton } from "@material-ui/core";

import classes from "./style.module.css";
import { AppContext } from "../../../App";

export const Logout = () => {
  const { store, setStore } = useContext(AppContext);

  return (
    <div className={classes.container}>
      <h3>Hi {store?.usuario}!</h3>
      <IconButton aria-label="logout" onClick={() => setStore({})}>
        <PowerSettingsNewIcon />
      </IconButton>
    </div>
  );
};

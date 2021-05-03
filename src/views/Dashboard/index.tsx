import * as React from "react";
import { Logout } from "./Logout";
import { Table } from "./Table";
import { Form } from "./Form";

import classes from "./style.module.css";

export function Dashboard() {
  return (
    <div style={{ height: 400, width: "100%" }} className={classes.container}>
      <Logout />
      <Form />

      <Table />
    </div>
  );
}

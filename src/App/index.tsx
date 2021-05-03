import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useLocalStorage } from "use-hooks";

import { Login, Dashboard } from "../views";
import { PrivateRoute, IntoRoute } from "../components";

import { IStore } from "./store";

import "./global.css";

interface IContext {
  store?: IStore;
  setStore?: any;
}

export const AppContext = React.createContext<IContext>({});

const App = () => {
  const [store, setStore] = useLocalStorage<IStore>("store", {});
  return (
    <AppContext.Provider value={{ store, setStore }}>
      <BrowserRouter>
        <IntoRoute path="/login" component={<Login />} />
        <PrivateRoute path="/dashboard" component={<Dashboard />} />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useLocalStorage } from "use-hooks";

import { Login, Registry } from "../views";

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
        <Route exact path="/" component={Login} />
        <Route path="/registry" component={Registry} />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

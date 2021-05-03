import { useContext } from "react";
import { AppContext } from "../App";

export function useAuth() {
  const { store } = useContext(AppContext);
  return store?.usuario;
}

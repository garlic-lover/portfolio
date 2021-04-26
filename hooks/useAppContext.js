import { useContext } from "react";
import { store } from "../state/AppContext";

export default function useAppContext() {
  return useContext(store);
}

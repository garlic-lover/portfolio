import { createContext, useReducer } from "react";

const initialState = { openedPage: null };

const store = createContext(initialState);
const { Provider } = store;

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "openedPageChange":
        return { ...prevState, openedPage: action.openedPage };
      default:
        return prevState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, AppContextProvider };

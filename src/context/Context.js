/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  });
  return (
    <Context.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch,
    }}
    >
      {children}
    </Context.Provider>
  );
}

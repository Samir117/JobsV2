import React, { createContext, useContext, useReducer } from 'react';

// Define el estado inicial
const initialState = {
  isAdmin: false,
};

// Define las acciones que puedes realizar en el estado
const ACTIONS = {
  SET_IS_ADMIN: 'SET_IS_ADMIN',
};

// Define el reductor que maneja las acciones y actualiza el estado
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_ADMIN:
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

// Crea el contexto
const AuthContext = createContext();

// Proporciona un gancho personalizado para acceder al contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

// Proporciona un componente que envuelve tu aplicación con el contexto
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setAdmin = (isAdmin) => {
    dispatch({ type: ACTIONS.SET_IS_ADMIN, payload: isAdmin });
  };

  return (
    <AuthContext.Provider value={{ state, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

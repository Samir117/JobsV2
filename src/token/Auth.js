import { createStore } from 'redux';

// Acciones
export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const setRole = (isAdmin) => ({
  type: 'SET_ROLE',
  payload: isAdmin,
});

// Reductor
const initialState = {
  token: null,
  isAdmin: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_ROLE':
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

export default store;

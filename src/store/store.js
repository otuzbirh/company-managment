import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialAuthState = JSON.parse(localStorage.getItem('authState')) || {
  isAuthenticated: false,
  token: null,
  name: null,
  email: null,
  picture: null,
  tokenId: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setName: (state, action) => {
        state.name = action.payload
    },
    setEmail: (state, action) => {
        state.email = action.payload
    }, 
    setPicture: (state, action) => {
        state.picture = action.payload
    },
    setTokenId: (state, action) => {
        state.tokenId = action.payload
    }

  },
});

export const { setIsAuthenticated, setToken, setName, setPicture, setEmail, setTokenId } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

store.subscribe(() => {
  const authState = store.getState().auth;
  localStorage.setItem('authState', JSON.stringify(authState));
});

export default store;


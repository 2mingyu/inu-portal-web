import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice.tsx";

const store = configureStore({
    reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
  </Provider>
)

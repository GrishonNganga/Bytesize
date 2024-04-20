import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { LogSnagProvider } from '@logsnag/react';

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NotFound />} path="**" />
      </Routes>
    </Router>
  )
}


ReactDOM.createRoot(
  document.getElementById("app"),
).render(
  <React.StrictMode>
    <LogSnagProvider
      token={process.env.NODE_ENV !== "development" ? process.env.REACT_APP_LOGSNAG_API_KEY : null}
      project="bytesize"
    >
      <App />
    </LogSnagProvider>
  </React.StrictMode>
);

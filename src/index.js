import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

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
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"

import AuthProvider from "./Componants/AuthProvider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import routers from "./Componants/Routers/Routers";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={routers} />
    </AuthProvider>
  </React.StrictMode>
);

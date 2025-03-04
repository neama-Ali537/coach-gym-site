import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./App.css";

import Services from "./Componants/Services/Services";
import Home from "./Componants/Home/Home";
import About from "./Componants/About/About";
import Layout from "./Componants/Layout/Layout";
import MealPlan from "./Componants/MealPlan/MealPlan";
import AuthProvider from "./Componants/AuthProvider/AuthProvider";
import FeedBack from "./Componants/FeedBack/FeedBack";
import AdminPage from "./Componants/AdminPage/AdminPage";
import RenewPage from "./Componants/RenewPage/RenewPage";
import ClientPage from "./Componants/ClientPage/ClientPage";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "mealplan", element: <MealPlan /> },
      { path: "feedback", element: <FeedBack /> },
      { path: "adminpage", element: <AdminPage /> },
      { path: "renewpage", element: <RenewPage /> },
      { path: "clientpage", element: <ClientPage /> },
    ],
  },
]);
function App() {
  return (
    <>
    <AuthProvider>
        <RouterProvider router={routers} />
    </AuthProvider>
    
    </>
  );
}

export default App;

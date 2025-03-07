import { createHashRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Services from "../Services/Services";
import Home from "../Home/Home";
import About from "../About/About";
import MealPlan from "../MealPlan/MealPlan";
import FeedBack from "../FeedBack/FeedBack";
import AdminPage from "../AdminPage/AdminPage";
import RenewPage from "../RenewPage/RenewPage";
import ClientPage from "../ClientPage/ClientPage";

const routers = createHashRouter([
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

export default routers;
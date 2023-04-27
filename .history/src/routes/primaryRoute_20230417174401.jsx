import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../page/HomePage";
//import GamePage from "../page/gamePage";
//import ActorPage from "../page/ActorPage";
//import MapaPage from "../page/MapaPage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import AuthValidation from "./AuthValidation";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: '/',
        element: <AuthValidation />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
         
        ]
      },
      
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]);
import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../page/HomePage";
import GamePage from "../page/gamePage";
import ActorPage from "../page/ActorPage";
import MapaPage from "../page/MapaPage";
import LoginPage from "../page/LoginPage";

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
        index: true,
        element: <HomePage/>
      },
      {
        path: 'dragones',
        element: <GamePage/>
      },
      {
        path: 'actores',
        element: <ActorPage/>
      },
      {
        path: 'mapa',
        element: <MapaPage/>
      },
      {
        path: 'contacto',
        element: <h1>Contacto</h1>
      },
    ]
  },
]);
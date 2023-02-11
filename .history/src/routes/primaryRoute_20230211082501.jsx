import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../page/homePage";
import GamePage from "../page/gamePage";
import ActorPage from "../page/ActorPage";
import MapaPage from "../page/MapaPage";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
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
      }
    ]
  }
]);
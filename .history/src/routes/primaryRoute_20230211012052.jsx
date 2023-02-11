import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../page/homePage";
import GamePage from "../page/gamePage";
import ActoresPage from "../page/actoresPage";

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
        path: 'productos',
        element: <GamePage/>
      },
      {
        path: 'servicios',
        element: <ActoresPage/>
      },
      {
        path: 'nosotros',
        element: <h1>Nosotros</h1>
      },
      {
        path: 'contacto',
        element: <h1>Contacto</h1>
      }
    ]
  }
]);
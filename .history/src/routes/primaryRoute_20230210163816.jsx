import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../page/homePage";

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
        path: 'game',
        element: <GamePage/>
      },
      {
        path: 'servicios',
        element: <h1>Servicios</h1>
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
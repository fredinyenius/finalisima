import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/primaryRoute';

function App() {
 console.log(import.meta.env.VITE_API_URL)
  return (
    <RouterProvider router={primaryRoute} />
  );
}

export default App;
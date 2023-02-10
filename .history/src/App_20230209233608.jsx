import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/primaryRoute';
import { store } from './redux/store';

function App() {
 console.log(import.meta.env.VITE_API_URL)
  return (
    <Provider store={store}>

    <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;
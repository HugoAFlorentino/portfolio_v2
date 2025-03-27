import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout } from './components';
import { Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

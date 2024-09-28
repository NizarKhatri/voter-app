import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage';
import Layout from './components/layout/layout';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout username="test" />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;

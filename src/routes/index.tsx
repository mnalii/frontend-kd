import { useRoutes } from 'react-router-dom';
import Main from '../layouts/Main';

import HomePage from '../pages/HomePage';
import Login from '../pages/Login';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          element: <Login />,
          path: 'login',
        },
      ],
    },
  ]);
}

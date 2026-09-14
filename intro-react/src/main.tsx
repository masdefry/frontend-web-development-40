import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Home.tsx';
import ProfilePage from './pages/profile';
import ProductsPage from './pages/products/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from './pages/login/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/login', 
    element: <LoginPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);

import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Home.tsx';
import ProfilePage from './pages/profile';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Home />
    }, 
    {
        path: '/profile', 
        element: <ProfilePage />
    }
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);

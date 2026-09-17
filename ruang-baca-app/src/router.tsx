import AdminLayout from './pages/(admin)/layout.tsx';
import BooksManagementPage from './pages/(admin)/books/index.tsx';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    path: '/admin',
    children: [
      {
        element: <BooksManagementPage />,
        path: 'books-management',
      },
    ],
  },
]);
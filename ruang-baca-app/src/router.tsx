import AdminLayout from './pages/(admin)/layout.tsx';
import BooksManagementPage from './pages/(admin)/books/index.tsx';
import { createBrowserRouter } from 'react-router';
import CreateBook from './pages/(admin)/books/create/index.tsx';

export const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    path: '/admin',
    children: [
      {
        element: <BooksManagementPage />,
        path: 'books-management',
      },
      {
        element: <CreateBook />,
        path: 'books-management/create'
      }
    ],
  },
]);
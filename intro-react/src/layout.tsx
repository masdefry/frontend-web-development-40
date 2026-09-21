import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

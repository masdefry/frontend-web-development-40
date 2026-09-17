import { Outlet } from 'react-router';
import Sidebar from '../../components/(admin)/Sidebar';

export default function AdminLayout() {
  return (
    <>
      <div className='grid grid-cols-[20%_80%] gap-0'>
        <Sidebar />
        <div className='w-full col-start-2'>
          <Outlet />
        </div>
      </div>
    </>
  );
}

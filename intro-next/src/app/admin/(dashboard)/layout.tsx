'use client';

import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import { useAuthStore } from '@/stores/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  const { token } = useAuthStore();

  const { data } = useQuery({
    queryFn: async () => {
      const res = await axios.get(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/users/current',
        {
          headers: {
            'user-token': token,
          },
        },
      );
      console.log('>>>');
      console.log(res);
      return res?.data
    },
    queryKey: ['session-user', token],
    enabled: !!token,
  });
  console.log(data);

  return (
    <>
      <div className='drawer lg:drawer-open'>
        <input
          id='my-drawer-4'
          type='checkbox'
          className='drawer-toggle inline'
        />
        <div className='drawer-content'>
          {/* Navbar */}
          <Navbar />
          {/* Page content here */}
          <div className='p-4'>{children}</div>
        </div>

        <div className='drawer-side is-drawer-close:overflow-visible'>
          <label
            htmlFor='my-drawer-4'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <div className='flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64'>
            {/* Sidebar content here */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

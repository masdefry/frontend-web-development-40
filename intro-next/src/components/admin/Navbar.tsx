'use client'; 
import { HiMenuAlt1 } from 'react-icons/hi';
import { useUsernameStore } from '@/stores/useUsernameStore';

export default function Navbar() {
  const { username } = useUsernameStore();
  return (
    <nav className='navbar w-full bg-base-300'>
      <label
        htmlFor='my-drawer-4'
        aria-label='open sidebar'
        className='btn btn-square btn-ghost drawer-button'
      >
        {/* Sidebar toggle icon */}
        <HiMenuAlt1 />
      </label>
      <div className='px-4 ml-auto'>
        <div className='flex items-center gap-3'>
          <span className='text-gray-800'>{username}</span>
          <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </nav>
  );
}

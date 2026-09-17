import type { IconType } from 'react-icons';
import { BiBook } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';

interface NavMenus {
  label: string;
  title: string;
  url: string;
  icon: IconType;
}

const navMenus: NavMenus[] = [
  {
    label: 'books-management',
    title: 'Books Management',
    url: '/admin/books-management',
    icon: BiBook,
  },
  {
    label: 'employee-management',
    title: 'Employee Management',
    url: '/admin/employees-management',
    icon: BsPeople,
  },
];

export default function Sidebar() {
  return (
    <>
      <div className='bg-primary-500 h-screen'>
        {/* Section Header */}
        <header className='text-white p-3'>
          <h1 className='text-2xl font-bold'>RuangBaca</h1>
          <span>Library Admin</span>
        </header>

        {/* Section Navigations */}
        <nav className='flex flex-col'>
          {navMenus.map((menu) => {
            const Icon = menu?.icon;
            return (
              <div className='flex items-center gap-3 p-3 text-white'>
                <Icon className='text-lg' />
                <span className='text-lg'>{menu?.title}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}

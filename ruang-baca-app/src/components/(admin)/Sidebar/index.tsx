import type { IconType } from 'react-icons';
import { GoArrowSwitch } from 'react-icons/go';
import { LiaIdCardSolid } from 'react-icons/lia';
import { MdMenuBook, MdOutlineDashboard } from 'react-icons/md';

interface NavMenus {
  label: string;
  title: string;
  url: string;
  icon: IconType;
  image?: string;
}

const navMenus: NavMenus[] = [
  {
    label: 'dashboard',
    title: 'Dashboard',
    url: '/admin/',
    icon: MdOutlineDashboard,
    image: '/images/kucing.jpeg',
  },
  {
    label: 'books-management',
    title: 'Books Management',
    url: '/admin/books-management',
    icon: MdMenuBook,
  },
  {
    label: 'employees-management',
    title: 'Employees Management',
    url: '/admin/employees-management',
    icon: LiaIdCardSolid,
  },
  {
    label: 'borrowing-transactions',
    title: 'Borrowing Transactions',
    url: '/admin/borrowing-transactions',
    icon: GoArrowSwitch,
  },
];

export default function Sidebar() {
  return (
    <>
      <div className='col-start-1 bg-primary-500 h-screen fixed left-0 top-0 w-[20%]'>
        {/* Section Header */}
        <header className='text-white p-5 flex flex-col gap-0'>
          <h1 className='text-3xl font-extrabold'>RuangBaca</h1>
          <span className='text-sm text-primary-50'>Library Admin</span>
        </header>

        {/* Section Navigations */}
        <nav className='flex flex-col gap-5 mt-5'>
          {navMenus.map((menu) => {
            const Icon = menu?.icon;
            return (
              <div className='flex items-center gap-5 px-5 text-white'>
                <Icon className='text-2xl' />
                <span className='text-md'>{menu?.title}</span>
              </div>
            );
          })}
        </nav>

        <h1 className='absolute bottom-0'>Test</h1>
      </div>
    </>
  );
}

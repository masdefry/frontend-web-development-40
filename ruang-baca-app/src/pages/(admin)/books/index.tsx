import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks, type MdLibraryBooks } from 'react-icons/md';

export default function BooksManagementPage() {
  return (
    <>
      <div className='p-20'>
        {/* Section Header */}
        <header className='flex items-center justify-between '>
          <div>
            <h1 className='text-3xl font-bold'>Books Management</h1>
            <span>Oversee and organize the library books.</span>
          </div>
          <button className='btn bg-primary-500 text-white hover:bg-primary-700'>
            <IoAddOutline />
            Add New Book
          </button>
        </header>
        {/* Section Card Summary */}
        <div className='grid grid-cols-3 mt-10 gap-3'>
          <div className='border border-gray-300 rounded-xl flex items-center justify-center gap-3 py-5'>
            <MdOutlineLibraryBooks className='text-5xl' />
            <div>
              <span className='text-sm'>Total Books</span>
              <h2 className='text-3xl font-bold'>24,502</h2>
              <span className='text-xs'>+120 this month</span>
            </div>
          </div>
          <div className='border border-gray-300 rounded-xl flex items-center justify-center gap-3 py-5'>
            <MdOutlineLibraryBooks className='text-5xl' />
            <div>
              <span className='text-sm'>Total Books</span>
              <h2 className='text-3xl font-bold'>24,502</h2>
              <span className='text-xs'>+120 this month</span>
            </div>
          </div>
          <div className='border border-gray-300 rounded-xl flex items-center justify-center gap-3 py-5'>
            <MdOutlineLibraryBooks className='text-5xl' />
            <div>
              <span className='text-sm'>Total Books</span>
              <h2 className='text-3xl font-bold'>24,502</h2>
              <span className='text-xs'>+120 this month</span>
            </div>
          </div>
        </div>
        {/* Section Table Data */}
        <div className='overflow-x-auto'>
          <table className='table table-zebra'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className='border border-black'>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

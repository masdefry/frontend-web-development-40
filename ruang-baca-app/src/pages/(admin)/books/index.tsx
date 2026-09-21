import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';

interface Books {
  title: string;
  isbn: string;
  author: string;
  updated: Date;
  deleted: Date;
}
export default function BooksManagementPage() {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(
          'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books',
        );
        setBooks(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

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
          <div className='border border-gray-200 rounded-xl flex items-center justify-center gap-3 py-5'>
            <MdOutlineLibraryBooks className='text-6xl bg-blue-300 p-3 rounded-md text-blue-700' />
            <div>
              <span className='text-sm'>Total Books</span>
              <h2 className='text-3xl font-bold text-blue-700'>24,502</h2>
              <span className='text-xs text-blue-700'>+120 this month</span>
            </div>
          </div>
        </div>
        {/* Section Table Data */}
        <div className='mt-10'>
          <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((item, index) => (
                  <tr key={index}>
                    <th>{item?.isbn}</th>
                    <td>{item?.title}</td>
                    <td>{item?.author}</td>
                    <td>
                      <button>Update</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

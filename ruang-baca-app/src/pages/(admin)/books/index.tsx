import { IoAddOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { useGetBooks } from '../../../features/books-management/hooks/useGetBooks';
import { useDeleteBook } from '../../../features/create-book/hooks/useDeleteBook';
export default function BooksManagementPage() {
  const { books } = useGetBooks();
  const { handleDeleteBook } = useDeleteBook();

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
                      <div className='flex gap-3'>
                        <button className='btn btn-xs btn-success text-white'>
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteBook(item?.objectId)}
                          className='btn btn-xs btn-error text-white'
                        >
                          Delete
                        </button>
                      </div>
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

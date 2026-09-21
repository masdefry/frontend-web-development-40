import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface Book {
  objectId: string;
  title: string;
  author: string;
  isbn: string;
  imageUrl: string;
  created: Date;
  updated?: Date;
}
export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [getBooksLoading, setGetBooksLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(
          'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books',
        );
        setBooks(res?.data);
      } catch (error: unknown) {
        if (error instanceof Error) toast.error(error?.message);
      } finally {
        setGetBooksLoading(false);
      }
    };

    getBooks();
  }, []);

  return (
    <>
      {console.log('Render')}
      <h1>Books Management</h1>
      {getBooksLoading ? (
        <span className='loading loading-spinner loading-xl'></span>
      ) : (
        books?.map((item, index) => (
          <div key={index}>
            {item?.title}
            {item?.isbn}
            {item?.author}
          </div>
        ))
      )}
      <ToastContainer />
    </>
  );
}

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BooksPage() {
    const [books, setBooks] = useState<any[]>([])

  const getBooks = async () => {
    try {
      const res = await axios.get(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books',
      );
      setBooks(res?.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('useEffect Triggered');
    getBooks();
  }, []);

  return (
    <>
      {console.log('Render')}
      <h1>Books Management</h1>
      {
        books?.map((item) => (
            <div>
                {item?.title}
                {item?.isbn}
                {item?.author}
            </div>
        ))
      }
    </>
  );
}

import { useEffect, useState } from 'react';
import { getBooksApi } from '../../../api/books/getBooksApi';
import type { Book } from '../types';


export function useGetBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await getBooksApi();
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  return {
    books,
    abc: 123,
  };
}

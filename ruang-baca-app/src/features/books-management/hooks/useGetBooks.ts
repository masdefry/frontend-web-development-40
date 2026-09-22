import { useEffect, useState } from 'react';
import { getBooksApi } from '../../../api/books/getBooksApi';
import type { Book } from '../types';

export function useGetBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = async () => {
    try {
      console.log('getBooks Triggereddd');
      const res = await getBooksApi();
      setBooks(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getBooks();
  }, []);

  return {
    books,
    getBooks,
  };
}

import axios from 'axios';
import { toast } from 'react-toastify';

export function useDeleteBook(getBooks: () => Promise<void>) {

  const handleDeleteBook = async (objectId: string) => {
    console.log(objectId);
    try {
      await axios.delete(
        `https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books/${objectId}`,
      );

      toast.success(`Delete book with id = ${objectId} successful`);
      await getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleDeleteBook
  }
}

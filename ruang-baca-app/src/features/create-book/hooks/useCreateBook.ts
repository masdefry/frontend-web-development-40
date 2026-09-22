import { useForm } from 'react-hook-form';
import {
  createBookSchema,
  type CreateBookRequest,
} from '../validations/createBookSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { createBookApi } from '../../../api/books/createBookApi';

export function useCreateBook() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateBookRequest>({
    resolver: zodResolver(createBookSchema),
  });

  const handleCreateBook = async ({
    title,
    isbn,
    author,
    imageUrl,
  }: CreateBookRequest) => {
    try {
      await createBookApi({
        title,
        isbn,
        author,
        imageUrl,
      });
      reset();
      toast.success('Create new book successful');
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return {
    handleSubmit,
    handleCreateBook,
    register,
    isSubmitting,
    errors,
  };
}

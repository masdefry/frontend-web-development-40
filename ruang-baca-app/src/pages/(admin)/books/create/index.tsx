import { IoArrowBack } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import {
  createBookSchema,
  type CreateBookRequest,
} from '../../../../features/books-management/create/validations/createBookSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
export default function CreateBook() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
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
      await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/data/Books',
        { title, isbn, author, imageUrl },
      );
      reset();
      toast.success('Create new book successful');
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <div className='p-10'>
        {/* Section Header */}
        <div className='breadcrumbs text-sm'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>

        <div className='flex items-center gap-3'>
          <IoArrowBack className='text-xl' />
          <div>
            <h1 className='text-3xl font-bold'>Create New Book</h1>
            <p className='text-gray-500'>
              Add a new volume to the library catalog with essential
              bibliographic details.
            </p>
          </div>
        </div>

        {/* Section Form */}
        <div className='mt-10'>
          <div className='bg-gray-300 p-10 rounded-t-md'>
            <h1 className='text-2xl font-bold'>Book Information</h1>
            <p className='text-gray-500'>
              Core identification data for library ingestion.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleCreateBook)}
            className='p-10 shadow-md'
          >
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>ISBN</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='Type ISBN number'
                {...register('isbn')}
              />
              <p className='label'>{errors?.isbn?.message}</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Title</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='Type book title'
                {...register('title')}
              />
              <p className='label'>{errors?.title?.message}</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Author</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='Type author name'
                {...register('author')}
              />
              <p className='label'>{errors?.author?.message}</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Image URL</legend>
              <input
                type='text'
                className='input w-full'
                placeholder='Type image url'
                {...register('imageUrl')}
              />
              <p className='label'>{errors?.imageUrl?.message}</p>
            </fieldset>
            <div className='flex justify-end mt-5'></div>
            <button disabled={isSubmitting} type='submit' className='btn btn-primary'>
              Save as New Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// 1. Layouting
// 2. Setup useForm (includes setup register input)
// 3. Create validation schema at features/resources/validation/...Schema.ts
// Title doesnt have default value

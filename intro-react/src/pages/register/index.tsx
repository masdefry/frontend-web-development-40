import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  registerSchema,
  type RegisterRequest,
} from '../../features/register/validation/registerSchema';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterRequest) => {
    try {
      const res = await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/users/register',
        data
      );
      console.log(res)
      toast.success('Register successful');
    } catch (error: unknown) {
      console.log(error);
      if(error instanceof Error){
        toast.error(error?.response?.data?.message)
      }
    }
  };

  return (
    <>
      {/* 
        Form Input: 
        - Email
        - Username
        - Password
    */}
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold my-5'>FORM VALIDATION</h1>
        <form onSubmit={handleSubmit(handleRegister)} className='w-92'>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Email</legend>
            <input
              type='text'
              className='input w-full'
              placeholder='Type your email'
              {...register('email')}
            />
            <p className=' text-red-500'>{errors?.email?.message}</p>
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Username</legend>
            <input
              type='text'
              className='input w-full'
              placeholder='Type your username'
              {...register('username')}
            />
            <p className='text-red-500'>{errors?.username?.message}</p>
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Password</legend>
            <input
              type='password'
              className='input w-full'
              placeholder='Type your password'
              {...register('password')}
            />
            <p className='text-red-500 line-clamp-2'>
              {errors?.password?.message}
            </p>
          </fieldset>
          <button className='btn btn-success mt-10 w-full'>Register</button>
        </form>
      </div>
    </>
  );
}

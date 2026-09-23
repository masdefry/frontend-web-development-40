'use client';
import {
  LoginAdminRequest,
  loginSchema,
} from '@/features/login/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<LoginAdminRequest>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginAdminMutation, isPending } = useMutation({
    mutationFn: async () => {
      const {email, password} = getValues(); 
      await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/users/login',
        {login: email, password}
      );
    },
    onSuccess: (res) => {
      toast.success('Authentication user successful'); 
    }, 
    onError: (error) => {
      console.log(error); 
    }
  });

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='fieldset bg-base-200 border-base-300 rounded-box w-lg border p-10'>
          <h1 className='text-2xl font-bold'>Authentication User</h1>
          <span className='text-gray-500 text-sm'>
            Please enter your credentials to access admin dashboard
          </span>
          <form onSubmit={handleSubmit(() => loginAdminMutation())}>
            <fieldset className='fieldset mt-5'>
              <legend className='fieldset-legend'>Email Address</legend>
              <label className='input w-full'>
                <HiOutlineMail />
                <input
                  type='text'
                  className='grow w-full'
                  placeholder='admin@gmail.com'
                  {...register('email')}
                />
              </label>
              <p className='label'>{errors?.email?.message}</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>Password</legend>
              <label className='input w-full'>
                <RiLockPasswordLine />
                <input
                  type='password'
                  className='grow w-full'
                  placeholder='abc12345'
                  {...register('password')}
                />
              </label>
              <p className='label'>{errors?.password?.message}</p>
            </fieldset>
            <button disabled={isPending} className='btn bg-blue-800 text-white mt-4 w-full'>
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

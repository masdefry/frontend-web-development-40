import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { registerSchema } from "../../features/register/validation/registerSchema";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(registerSchema)
  });

  const handleRegister = (data) => {
    console.log(data); 
  }

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
            <p className='label text-red-500'>{errors?.email?.message}</p>
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Username</legend>
            <input
              type='text'
              className='input w-full'
              placeholder='Type your username'
              {...register('username')}
            />
            <p className='label'>{errors?.username?.message}</p>
          </fieldset>
          <fieldset className='fieldset w-full'>
            <legend className='fieldset-legend'>Password</legend>
            <input
              type='password'
              className='input w-full'
              placeholder='Type your password'
              {...register('password')}
            />
            <p className='label'>{errors?.password?.message}</p>
          </fieldset>
          <button className='btn btn-success mt-3 w-full'>Register</button>
        </form>
      </div>
    </>
  );
}

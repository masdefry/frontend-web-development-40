import { useRef } from 'react';

export default function UserefPage() {
  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputUsername?.current?.value);
    console.log(inputPassword?.current?.value);
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className='flex flex-col items-center gap-3 py-10'
      >
        <input
          type='text'
          placeholder='Type username'
          className='input'
          ref={inputUsername}
        />
        <input
          type='password'
          placeholder='Type password'
          className='input'
          ref={inputPassword}
        />
        <button className='btn btn-success w-52'>Submit</button>
      </form>
    </>
  );
}

'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (!response?.error) {
      router.push('./dashboard');
      router.refresh();
    } else {
      setErrorMessage('Invalid Credentials');
    }
  };

  return (
    <div className="bg-gray-900 lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl m-4">
      <form className="p-12 md:p-24" onSubmit={handleSubmit}>
        <p className='text-5xl m-3 text-gray-200'>Log into Account</p>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input 
          name="email"
          type="email"
          placeholder="Email"
          className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" 
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <input 
            name="password"
            type="password"
            placeholder="Password"
            className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full" 
          />
          </div>
        <button className="bg-gradient-to-b from-gray-700 to-gray-500 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Login</button>
      </form>
    </div>
  );
}

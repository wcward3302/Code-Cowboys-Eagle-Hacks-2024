'use client';

import { signOut } from 'next-auth/react';
import { PowerIcon } from '@heroicons/react/24/outline';


export default function Logout() {
  return (
    <button onClick={() => { signOut();}} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium  bg-gray-700 p-3 text-sm font-medium text-white hover:bg-sky-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3">
      <PowerIcon className="w-6" />
      <div className="hidden md:block">Sign Out</div>
    </button>
  );
}
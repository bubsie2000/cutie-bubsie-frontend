import React from 'react';
import Image from 'next/image';
import Character02 from 'public/Character_02.png';
import Link from 'next/link';
import type { Metadata } from 'next';
import SignUpForm from '../components/signupform';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'CutieBubsie sign up page.',
};

export default function SignUpPage() {
  return (
    <div className='flex-1 md:grid md:grid-cols-2 bg-blue-600 flex flex-col'>
      <Image className='object-cover object-top rounded-3xl w-1/2 mx-auto mt-8 mb-4 md:my-0 md:w-full md:h-full block bg-yellow-200 md:rounded-none' src={Character02} alt='Drawing of a girl holding a Nintendo Switch. The girl has light pink skin and purple hair up in two buns. She is wearing a Japanese sailor style uniform. ' />
      <div className="prose md:my-auto text-center max-w-none mb-8">
        <h1 className="text-pink-200 text-5xl md:text-7xl text-center">SIGN UP</h1>
        <SignUpForm />
        <Link href="/login" className="link text-yellow-200 hover:text-yellow-400 text-lg">Already have an account? Log In</Link>
      </div>
    </div>
  );
}

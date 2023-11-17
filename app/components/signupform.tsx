'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    // Sign Up
    const res = await fetch(
      'https://cutie-bubsie-backend-494f2a6fc9b8.herokuapp.com/user',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }
    );

    if (res.status === 201) {
      console.log(res.body);
      router.push('/login');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        required
        placeholder="First Name"
        className="input w-full max-w-xs block"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="Last Name"
        className="input w-full max-w-xs block"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        required
        placeholder="Email"
        className="input w-full max-w-xs block"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="Password"
        className="input w-full max-w-xs block"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="submit"
        value="SIGN UP"
        className="btn text-white btn-primary btn-wide mb-5"
      />
    </form>
  );
}

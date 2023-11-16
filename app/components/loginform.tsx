'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LogInForm() {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const user = {
            email, password
        }

        // Log In
    }

  return (
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          name="email"
          id="email"
              placeholder="Email"
            className="input input-bordered w-full max-w-xs block"
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs block"
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
        />
        <input type="submit" value="LOG IN" className="btn btn-secondary text-white btn-wide mb-5"/>
    </form>
  )
}

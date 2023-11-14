import React from 'react';
import LoginCover from 'public/Login_cover.png';
import Image from 'next/image';
import Link from 'next/link';

export default function LogIn() {
  return (
    <div className="md:grid md:grid-cols-2 bg-yellow-200 flex-1 flex flex-col mt-16">
      <Image
        className="w-full h-1/3 block md:h-full object-center object-cover"
        src={LoginCover}
        alt="Illustration of two yellow hills with a yellow sun in a pink sky above them. The pink sky contains three white clouds. The left yellow hill has a blue river flowing down it and a pink house. The pink house has a blue roof and door as well as yellow windows. The right hill has two blue pine trees on top of it. "
      />
      <div className="prose text-center mt-8 md:my-auto max-w-none">
        <h1 className="text-secondary text-5xl md:text-7xl">LOG IN</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs block"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs block"
          required
        />
        <input type="submit" value="LOG IN" className="btn btn-secondary text-white btn-wide mb-5"/>
        <Link href="/signup" className="link link-primary text-lg">
          Create an account
        </Link>
      </div>
    </div>
  );
}

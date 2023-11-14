import React from 'react';
import LoginCover from 'public/Login_cover.png';
import Image from 'next/image';
import Link from 'next/link';

export default function LogIn() {
  return (
    <div className="md:grid md:grid-cols-2 bg-yellow-200 flex-1">
      <Image
        className="hidden md:block h-full object-cover"
        src={LoginCover}
        alt="Illustration of two yellow hills with a yellow sun in a pink sky above them. The pink sky contains three white clouds. The left yellow hill has a blue river flowing down it and a pink house. The pink house has a blue roof and door as well as yellow windows. The right hill has two blue pine trees on top of it. "
      />
      <div className="prose flex flex-col justify-center items-center">
        <h1 className="text-secondary md:text-7xl">LOGIN</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          className="input input-bordered w-full max-w-xs rounded-2xl block"
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs rounded-2xl block"
        />
        <button className="btn btn-secondary rounded-full w-1/2 block">
          Log In
        </button>
        <Link href="/signup" className="link link-primary text-lg">
          Create an account
        </Link>
      </div>
    </div>
  );
}

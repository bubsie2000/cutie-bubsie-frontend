import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CBLogo from 'public/CutieBubsie_Logo.svg';
import { HiX, HiOutlineShoppingCart, HiUserCircle } from 'react-icons/hi';

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer min-h-screen">
      <input id="nav-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 fixed top-0 z-10">
          <div className="navbar-start">
            {/* Show Sidebar button */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="nav-sidebar"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-secondary">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block text-secondary hover:text-secondary-focus">
              <ul className="menu menu-horizontal">
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-2 mx-2 navbar-center">
            <Link href="/">
              <Image
                src={CBLogo}
                alt="CutieBubsie Logo"
                className="h-8 md:h-10 w-auto hover:scale-110 transition"
              />
            </Link>
          </div>
          <div className="navbar-end">
            <div className="flex-none hidden lg:block text-secondary">
              <ul className="menu menu-horizontal items-center content-center">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {/* Shopping Cart Button Icon */}
                <li>
                  <Link
                    href="/cart"
                    className="btn btn-ghost btn-square btn-secondary">
                    <HiOutlineShoppingCart className="w-7 h-7" />
                  </Link>
                </li>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar placeholder">
                    <HiUserCircle className=" w-12 h-12" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <Link href="/login">Log In</Link>
                    </li>
                    <li>
                      <Link href="/signup">Sign Up</Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      {/* Mobile sidebar */}
      <div className="drawer-side lg:hidden">
        <label
          htmlFor="nav-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        {/* Sidebar content here */}
        <div className="menu p-4 w-full sm:w-9/12 min-h-full bg-base-100 text-secondary">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={CBLogo}
                alt="CutieBubsie Logo"
                className="h-10 w-auto hover:scale-110 transition"
              />
            </Link>
            <label
              htmlFor="nav-sidebar"
              aria-label="close sidebar"
              className="btn btn-square btn-ghost">
              <HiX className="inline-block w-6 h-6 stroke-secondary" />
            </label>
          </div>
          <ul className="text-xl">
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/login">Log In</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

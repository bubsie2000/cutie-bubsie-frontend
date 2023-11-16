import React from 'react';
import LoginCover from 'public/Login_cover.png';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProductCard from '../components/productcard';

export const metadata: Metadata = {
  title: 'Shop',
};

export default function Shop() {
  return (
    <div className="py-6 px-8">
      <h1 className="text-primary text-5xl md:text-7xl text-center">SHOP</h1>

      <div className="mt-8 grid justify-items-center grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] md:grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

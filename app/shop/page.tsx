import React from 'react';
import LoginCover from 'public/Login_cover.png';
import Image from 'next/image';

export default function Shop() {
  return (
    <div>
      <h1 className="text-primary text-5xl md:text-7xl text-center">SHOP</h1>

      {/* Product Card Component Test */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={LoginCover} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">Shoes!</h2>
          <h3 className="text-primary">$5.50 AUD</h3>
          <div className="card-actions">
            <button className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import LoginCover from 'public/Login_cover.png';
import { BsBagPlusFill } from "react-icons/bs";

export default function ProductCard({ name="Shoes", cost="$5.50", image = 'public/Login_cover.png' }) {
    return (
        <div className="card w-56 md:w-72 bg-base-100">
        <figure className="">
          <Image src={LoginCover} alt="Shoes" className="aspect-square object-cover rounded-xl" />
        </figure>
        <div className="card-body items-center text-center pt-4">
          <h2 className="card-title text-secondary">{name}</h2>
          <h3 className="text-primary font-medium">{cost} AUD</h3>
          <div className="card-actions">
                    <button className="btn icon-btn btn-primary text-white w-52 md:w-64 h-6">
                    <BsBagPlusFill className="h-6 w-6" />BAG ME</button>
          </div>
        </div>
      </div>
  )
}

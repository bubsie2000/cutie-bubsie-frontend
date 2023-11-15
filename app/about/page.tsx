import React from 'react';
import Image from 'next/image';
import Character03 from 'public/Character_03.png'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

// About Page UI
export default function About() {
  return (
    <div className="bg-blue-600 flex-1 md:grid md:grid-cols-2 justify-items-center px-8 py-8 lg:py-12 lg:px-24">
      <h1 className="text-white text-5xl text-center md:hidden">
          HI, I'M BUBSIE!
        </h1>
        <Image className='w-10/12 m-auto' src={Character03} alt='Drawing of a black girl waving her left hand inside a light pink box with rounded corners. The girl has her hair packed in two buns and is wearing a yellow shirt with a light blue rectangle over the chest that has the word cutie written in all caps.' />
        <div className="container prose text-white my-auto lg:text-lg">
          <h1 className="text-white text-7xl text-center hidden md:block">
          HI, I'M BUBSIE!
        </h1>
        <p>I'm an artist and designer based in Australia. I've been drawing for as long as I can remember and most of my art is influenced and inspired by anime and manga.</p>
        <p>I love technology and view things like phones and tablets as extensions of ourselves so why not customise our tech to reflect our personalities and aesthetic sensibilities? This was the thought that sparked the creation of my digital products and that has grown beyond simple themeing to goods that have a practical use while being visually pleasing and cute.</p>
        </div>
    </div>
  );
}
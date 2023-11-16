import React from 'react';
import Image from 'next/image';
import WingedMail from 'public/Winged_mail.png';
import CordPhone from 'public/Corded_Phone.png';
import type { Metadata } from 'next';
import ContactForm from '../components/contactform';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="bg-pink-300 flex-1 flex flex-col content-around md:px-4">
      <h1 className="text-5xl md:text-7xl text-center text-white mt-8 md:mt-12">
        NEED TO GET IN TOUCH?
      </h1>
      <div className="md:grid md:grid-cols-4 my-auto">
        <Image
          className="w-1/2 md:w-full m-auto md:col-span-1 object-contain"
          src={WingedMail}
          alt="A light yellow envelope with a pink heart shaped sticker closing it and a pair of light blue wings on its sides."
        />
        <ContactForm />
        <Image
          className="w-1/2 m-auto md:w-full md:col-span-1 object-contain"
          src={CordPhone}
          alt="Drawing of a corded phone."
        />
      </div>
    </div>
  );
}

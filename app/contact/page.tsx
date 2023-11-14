import React from 'react';
import Image from 'next/image';
import WingedMail from 'public/Winged_mail.png';

export default function Contact() {
  return (
    <div className="bg-pink-300 flex-1">
      <h1 className="text-center text-7xl text-white">NEED TO GET IN TOUCH?</h1>
      <div className="md:flex">
        <Image
          className="max-w-xs"
          src={WingedMail}
          alt="A light yellow envelope with a pink heart shaped sticker closing it and a pair of light blue wings on its sides."
        />
        <div className="prose m-auto flex flex-col justify-center">
          <input
            type="text"
            placeholder="Name"
            className="input w-full max-w-xs rounded-2xl"
          />
          <input
            type="text"
            placeholder="Email"
            className="input w-full max-w-xs rounded-2xl"
          />
          <input
            type="text"
            placeholder="Order Number/Subject"
            className="input w-full max-w-xs block rounded-2xl"
          />
          <textarea
            className="textarea block rounded-2xl"
            placeholder="Message"></textarea>
          <button className="btn btn-secondary block rounded-full">SEND</button>
        </div>
      </div>
    </div>
  );
}

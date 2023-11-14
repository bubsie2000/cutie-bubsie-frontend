import React from 'react';
import Image from 'next/image';
import WingedMail from 'public/Winged_mail.png';
import CordPhone from 'public/Corded_Phone.png'

export default function Contact() {
  return (
    <div className="bg-pink-300 flex-1 flex flex-col content-around">
      <h1 className="text-5xl md:text-7xl text-center text-white mt-8 md:mt-12">NEED TO GET IN TOUCH?</h1>
      <div className="md:grid md:grid-cols-4 my-auto">
        <Image
          className="w-1/2 md:w-full m-auto md:col-span-1 object-contain"
          src={WingedMail}
          alt="A light yellow envelope with a pink heart shaped sticker closing it and a pair of light blue wings on its sides."
        />
        <form className="m-auto flex flex-col justify-center w-full md:col-span-2">
          <input
            type="text"
            placeholder="Name"
            className="input w-3/4 md:w-full max-w-md rounded-2xl"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input w-3/4 md:w-full max-w-md rounded-2xl"
            required
          />
          <input
            type="text"
            placeholder="Order Number/Subject"
            className="input w-3/4 md:w-full max-w-md block rounded-2xl"
            required
          />
          <textarea
            className="textarea textarea-md block w-3/4 md:w-full max-w-md rounded-2xl"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="SEND" className="btn btn-secondary text-white btn-wide mb-0"/>
        </form>
        <Image
          className="w-1/2 m-auto md:w-full md:col-span-1 object-contain"
          src={CordPhone}
          alt='Drawing of a corded phone.'
        />
      </div>
    </div>
  );
}

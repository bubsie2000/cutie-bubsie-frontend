import React from 'react';

export default function ContactForm() {
  return (
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
        required></textarea>
      <input
        type="submit"
        value="SEND"
        className="btn btn-secondary text-white btn-wide mb-0"
      />
    </form>
  );
}

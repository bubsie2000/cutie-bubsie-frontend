// app/page.tsx is the UI for the '/' URL aka the app homepage
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'CutieBubsie website homepage.',
};

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

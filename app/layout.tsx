import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar';
import { Children } from 'react';

export const metadata: Metadata = {
  title: 'Home',
  description: 'CutieBubsie website homepage.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar children={children} />
      </body>
    </html>
  );
}

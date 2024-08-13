import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter as FontSans } from 'next/font/google';

import { Header } from '@/components/layouts/Header';
import { cn } from '@/lib/utils/classNameUtils';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <div className="flex min-h-screen flex-col bg-background text-primary">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

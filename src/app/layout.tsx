import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter as FontSans, Redacted_Script as LoadingFont } from 'next/font/google';

import { Header } from '@/components/layouts/Header';
import { cn } from '@/lib/utils/classNameUtils';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const loadingFont = LoadingFont({
  weight: ['400'],
  subsets: ['latin'],
  display: 'block',
  variable: '--font-loading',
});

export const metadata: Metadata = {
  title: 'Pet Breed Explorer',
  description: 'Discover various breeds of cats and dogs with detailed information and images.',
  keywords: ['pet breeds', 'cats', 'dogs', 'animal breeds', 'pet explorer'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, loadingFont.variable)}>
        <div className="flex min-h-screen flex-col bg-background text-primary">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

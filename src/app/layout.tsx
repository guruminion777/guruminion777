import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Haris Afzal - Full-Stack Developer & Mobile Engineer',
  description: 'Full-stack developer specializing in Next.js, React, TypeScript, and React Native. Building scalable web and mobile solutions.',
  keywords: 'Full-Stack Developer, React Developer, Next.js, TypeScript, React Native, Mobile Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
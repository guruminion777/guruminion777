import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Dream - Full Stack Developer',
  description: 'Senior Full-Stack Developer with 8+ years of experience. React, Node.js, cloud-based systems. Supporting 10k+ users and event-driven platforms.',
  keywords: 'Full Stack Developer, React, Node.js, TypeScript, Next.js, NestJS, AWS, PostgreSQL, DevOps',
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
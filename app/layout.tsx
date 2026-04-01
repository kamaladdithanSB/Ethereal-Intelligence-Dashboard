import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import { IntelligenceProvider } from './context/IntelligenceContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'LUMINAL | Customer Intelligence Dashboard',
  description: 'High-end Customer Intelligence Analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} bg-background text-on-surface font-body selection:bg-primary/30 h-full w-full overflow-x-hidden relative`}>
        <IntelligenceProvider>
          <div className="fixed inset-0 bg-noise z-0"></div>
          
          <Sidebar />
          
          <main className="ml-64 min-h-screen p-8 relative z-10 flex flex-col gap-8 w-[calc(100%-16rem)] max-w-[1600px] overflow-hidden">
            {children}
          </main>
        </IntelligenceProvider>
      </body>
    </html>
  );
}

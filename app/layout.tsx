import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SideBar } from './components/navigation/SideBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Math Formula',
  description: 'Toutes formule de math du secondaire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-12 `}
      >
        <SideBar />
        <div className="md:block md:col-span-3 hidden">
          {/*décalage page et navbar */}
        </div>

        <main className="md:col-span-9 col-span-full">{children}</main>
      </body>
    </html>
  );
}

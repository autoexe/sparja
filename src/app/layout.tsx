import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Notification from '@/components/Notification';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

//const inter = Inter({ subsets: ['latin'] });

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Спаржа | Главная',
  description: 'Кафе правильного питания',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


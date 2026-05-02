import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Fire Protection System | GS Group',
  description:
    'Comprehensive fire detection, suppression, and safety engineering solutions for industrial and commercial environments. Certified fire safety consultancy, design, installation, and maintenance.',
  keywords:
    'fire protection, fire detection, fire suppression, fire alarm, sprinkler systems, FM200, civil defense approval, NFPA, Saudi Arabia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}

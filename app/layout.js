import './globals.css';
import { Manrope, Playfair_Display } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://naidi-paru-site.vercel.app'),
  title: 'Найди Пару — два пути к отношениям',
  description: 'Закрытая платформа знакомств для мужчин · Программа трансформации для женщин от Асем.',
  openGraph: {
    title: 'Найди Пару',
    description: 'Два пути к счастью: знакомства для мужчин и программа для женщин',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Найди Пару',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Найди Пару',
    description: 'Закрытая платформа знакомств',
  },
  icons: {
    icon: [
      { url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%23FF4D8D%22/%3E%3Cstop offset=%221%22 stop-color=%22%23A855F7%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22url(%23g)%22/%3E%3Cpath fill=%22white%22 d=%22M50 76L48 74Q21 52 21 34 21 23 30 23 37 23 42 28 46 24 50 24 54 24 58 28 63 23 70 23 79 23 79 34 79 52 52 74Z%22/%3E%3C/svg%3E' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0C0C1D',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

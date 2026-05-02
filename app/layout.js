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
  title: 'Агентство знакомств Асем Альмурзиевой',
  description: 'Закрытая система подбора пары для серьёзных отношений. 10 лет на рынке. 172 созданные пары.',
  openGraph: {
    title: 'Агентство знакомств Асем Альмурзиевой',
    description: 'Персональный подбор пары для мужчин-бизнесменов. 10 лет · 172 пары · 344 судьбы.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Агентство Асем Альмурзиевой',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Агентство знакомств Асем Альмурзиевой',
    description: 'Закрытая система подбора пары',
  },
  icons: {
    icon: [
      { url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23E5C158'/%3E%3Cstop offset='1' stop-color='%238B6914'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='18' fill='%2308080B'/%3E%3Ccircle cx='38' cy='50' r='20' fill='none' stroke='url(%23g)' stroke-width='5'/%3E%3Ccircle cx='62' cy='50' r='20' fill='none' stroke='url(%23g)' stroke-width='5'/%3E%3C/svg%3E" },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08080B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

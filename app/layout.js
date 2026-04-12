import './globals.css';

export const metadata = {
  title: 'Найди Пару — закрытая платформа знакомств',
  description: 'Серьёзные знакомства для мужчин. Программа для женщин от Асем.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

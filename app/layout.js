import './globals.css';

export const metadata = {
  title: 'Evangel Learning Institute | Learn English with Confidence',
  description: 'Build practical English skills and confidence with engaging learning at Evangel Learning Institute.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

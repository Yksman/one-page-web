import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    template: '%s | Your Product Name',
    default: 'Your Product Name - Revolutionary Software Solution',
  },
  description: 'Discover our innovative software solution that helps businesses streamline their operations and boost productivity.',
  openGraph: {
    title: 'Your Product Name - Revolutionary Software Solution',
    description: 'Discover our innovative software solution that helps businesses streamline their operations and boost productivity.',
    url: 'https://example.com',
    siteName: 'Your Product Name',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Product Name - Revolutionary Software Solution',
    description: 'Discover our innovative software solution that helps businesses streamline their operations and boost productivity.',
  },
  alternates: {
    canonical: 'https://example.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'VidArchive',
  description: 'A desktop utility application for downloading and managing media.',
  keywords: [
    'VidArchive',
    'Windows',
    'Desktop',
    'Utility',
    'Download',
    'Media',
    'yt-dlp',
    'FFmpeg'
  ],
  robots: {
    index: true,
    follow: true
  },
  authors: [{ name: 'Darshan S', url: 'https://darshans.site' }],
  creator: 'Darshan S',
  publisher: 'Darshan S',
  applicationName: 'VidArchive',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL!
  },
  openGraph: {
    title: 'VidArchive',
    description: 'A desktop utility application for downloading and managing media.',
    url: process.env.NEXT_PUBLIC_APP_URL!,
    siteName: 'VidArchive',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL!}/api/og`,
        width: 1200,
        height: 630,
        alt: 'VidArchive'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidArchive',
    description: 'A desktop utility application for downloading and managing media.',
    images: `${process.env.NEXT_PUBLIC_APP_URL!}/api/og`
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

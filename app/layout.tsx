import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Particles } from '@/components/ui/particles';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

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
  description: 'A desktop utility application for Windows for downloading media'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: 'radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)'
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="h-10 bg-transparent z-10 relative">
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL!}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 z-10"
            >
              <Button variant="outline" size="icon-sm">
                <Github />
              </Button>
            </a>
          </header>
          {children}
          <Particles className="absolute inset-0 z-0" quantity={100} ease={80} refresh />
        </ThemeProvider>
      </body>
    </html>
  );
}

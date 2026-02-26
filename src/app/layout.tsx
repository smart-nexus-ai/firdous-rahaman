import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio-url.vercel.app'),
  title: {
    default: 'Firdous Rahaman — IoT Developer & ML Engineer',
    template: '%s | Firdous Rahaman',
  },
  description:
    'IoT developer specializing in ESP32, embedded systems, machine learning, and Android development. Building smart connected systems.',
  keywords: [
    'IoT Developer',
    'ESP32',
    'Embedded Systems',
    'Machine Learning',
    'Android Developer',
    'Kotlin',
    'Firebase',
    'TensorFlow Lite',
    'Smart Systems',
    'Firdous Rahaman',
  ],
  authors: [{ name: 'Firdous Rahaman' }],
  creator: 'Firdous Rahaman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smart-nexus.vercel.app',
    siteName: 'Firdous Rahaman',
    title: 'Firdous Rahaman — IoT Developer & ML Engineer',
    description:
      'IoT developer specializing in ESP32, embedded systems, machine learning, and Android development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Firdous Rahaman Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Firdous Rahaman — IoT Developer & ML Engineer',
    description:
      'IoT developer specializing in ESP32, embedded systems, machine learning, and Android development.',
    creator: '@Firdous_TFG',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans bg-dark-950 text-white antialiased`}
      >
        <div className="relative min-h-screen flex flex-col">
          {/* Background grid */}
          <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0" />

          {/* Gradient orbs */}
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      </body>
    </html>
  );
}
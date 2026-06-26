import './globals.css';
import { fontPrimary, fontSecondary } from './fonts';

export const metadata = {
  metadataBase: new URL('https://your-deployed-url.vercel.app'),
  title: 'NovaFlow AI — Automate Everything, Instantly',
  description:
    'NovaFlow is an AI-driven data automation platform that builds, runs, and scales your workflows in minutes — no code required.',
  keywords: ['AI automation', 'data pipeline', 'workflow automation', 'no-code AI', 'NovaFlow'],
  openGraph: {
    title: 'NovaFlow AI — Automate Everything, Instantly',
    description: 'Build and scale AI-driven automation workflows in minutes.',
    url: 'https://your-deployed-url.vercel.app',
    siteName: 'NovaFlow AI',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaFlow AI',
    description: 'AI-driven data automation, built for scale.',
    images: ['/assets/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} ${fontSecondary.variable}`}>
        {children}
      </body>
    </html>
  );
}

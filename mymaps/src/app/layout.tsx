import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'MyMaps - Strategic Map Collection',
  description: 'Interactive geopolitical map viewer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/mymaps_matomo.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

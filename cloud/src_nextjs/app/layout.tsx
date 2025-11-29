import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Services Dashboard",
  description: "Cloud Services Dashboard - Manage your infrastructure, VPS, and AI services",
  openGraph: {
    type: "website",
    url: "https://diegonmarcos.github.io/cloud/",
    title: "Cloud Services Dashboard",
    description: "Cloud Services Dashboard - Manage your infrastructure, VPS, and AI services",
    images: [
      {
        url: "https://diegonmarcos.github.io/cloud/cloud_thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Cloud Services Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Services Dashboard",
    description: "Cloud Services Dashboard - Manage your infrastructure, VPS, and AI services",
    images: ["https://diegonmarcos.github.io/cloud/cloud_thumbnail.png"],
  },
};

// Theme initialization script to prevent flash
const themeScript = `
  (function() {
    var theme = localStorage.getItem('cloud-dashboard-theme') || 'blurred';
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

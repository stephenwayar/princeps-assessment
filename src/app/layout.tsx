import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "./globals.css";
import Providers from "@/providers";
import type { Metadata } from "next";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

export const metadata: Metadata = {
  title: "PCSL: Access Quick Loans to do More",
  description: "Access fast, reliable loans tailored for Nigerian civil servants, private workers, and NYSC youth corpers. Apply now and get approved in minutes!",
  icons: {
    icon: 'https://www.princepsfinance.com/favicon.ico',
  },
  openGraph: {
    title: "PCSL: Access Quick Loans to do More",
    description: "Access fast, reliable loans tailored for Nigerian civil servants, private workers, and NYSC youth corpers. Apply now and get approved in minutes!",
    images: 'https://www.princeps.africa/assets/images/logo.svg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PCSL: Access Quick Loans to do More",
    description: "Access fast, reliable loans tailored for Nigerian civil servants, private workers, and NYSC youth corpers. Apply now and get approved in minutes!",
    images: 'https://www.princeps.africa/assets/images/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <Providers>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
// cust-connect-new/app/layout.js (SERVER COMPONENT)

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutWrapper from '@/components/RootLayoutWrapper'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CustConnect", 
  description: "Campus Event & Club Management System",
};

export default function RootLayout({ children }) {
  return (
    // Added suppressHydrationWarning to handle extension-injected code
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutWrapper>
            {children}
        </RootLayoutWrapper>
      </body>
    </html>
  );
}
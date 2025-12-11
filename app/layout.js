// cust-connect-new/app/layout.js (SERVER COMPONENT)

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavbarWrapper from '@/components/NavbarWrapper'; // <-- Import the new wrapper
import RootLayoutWrapper from '@/components/RootLayoutWrapper'; // <-- Import the new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// METADATA MUST STAY HERE (Server Component)
export const metadata = {
  title: "CustConnect", 
  description: "Campus Event & Club Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Pass children to the new Client Wrapper */}
        <RootLayoutWrapper>
            {children}
        </RootLayoutWrapper>
      </body>
    </html>
  );
}
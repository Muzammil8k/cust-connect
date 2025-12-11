// cust-connect-new/components/RootLayoutWrapper.js (CLIENT COMPONENT)
'use client'; // <-- Now it can use client-side hooks

import Navbar from './Navbar'; 
import { usePathname } from 'next/navigation'; 

export default function RootLayoutWrapper({ children }) {
  // Get the current URL path using the client hook
  const pathname = usePathname(); 

  // Check if the current path is a public authentication page
  const isPublicPage = pathname === '/login' || pathname === '/register';

  return (
    // Conditional styling must be applied here to the client-side element
    <div className={`${!isPublicPage ? 'pt-16' : ''}`}>
        
        {/* CONDITIONAL RENDERING: Render the Navbar ONLY if it's NOT a public page */}
        {!isPublicPage && <Navbar />}
        
        {/* Render the current page content */}
        {children}
    </div>
  );
}
// cust-connect-new/app/page.js

// Import the 'redirect' function from Next.js navigation utilities
import { redirect } from 'next/navigation';

// This component will execute every time the root path (/) is accessed.
export default function HomePageRedirect() {
  
  // Immediately redirect the user to the Login page (/login)
  // This is the clean, correct way to make /login your landing page.
  redirect('/login');

  // NOTE: This return statement is technically unreachable due to the redirect, 
  // but Next.js components must still return valid JSX.
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-gray-600">Redirecting to Login...</p>
    </div>
  );
}
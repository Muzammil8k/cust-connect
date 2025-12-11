// cust-connect-new/components/Navbar.js (CORRECTED VERSION - Posts Included)
'use client'; 

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Function to determine if a link is active
  const isActive = (path) => 
    pathname === path ? 'border-b-2 border-white' : 'hover:text-gray-300';
  
  // MOCK LOGOUT HANDLER
  const handleLogout = () => {
    // Redirects back to the Login Page
    router.push('/login');
  };

  return (
    // Fixed, dark background
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Left side: Logo/App Name and Links */}
          <div className="flex items-center space-x-8">
            <Link href="/main" className="flex-shrink-0 text-xl font-bold text-blue-400">
              CustConnect
            </Link>
            
            {/* Navigation Links */}
            <Link 
              href="/main" 
              className={`px-3 py-2 text-sm font-medium transition duration-150 ${isActive('/main')}`}
            >
              Dashboard
            </Link>
            
            {/* --- POSTS LINK ADDED BACK --- */}
            <Link 
              href="/posts" 
              className={`px-3 py-2 text-sm font-medium transition duration-150 ${isActive('/posts')}`}
            >
              Posts
            </Link>
            {/* --------------------------- */}
            
            <Link 
              href="/profile" 
              className={`px-3 py-2 text-sm font-medium transition duration-150 ${isActive('/profile')}`}
            >
              Profile
            </Link>
          </div>

          {/* Right side: Only Logout remains */}
          <div className="flex items-center space-x-4">
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-150 cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
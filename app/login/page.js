// cust-connect-new/app/login/page.js
'use client'; // <-- 1. REQUIRED for client-side functionality (form submission)

import FormCard from '@/components/FormCard';
import { useRouter } from 'next/navigation'; // <-- 2. Import for redirection

export default function LoginPage() {
  const router = useRouter();

  // <-- 3. Submission Handler Function
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would collect form data, 
    // send it to an API, and validate credentials here.

    // *** REDIRECT TO MAIN APPLICATION PAGE (/main) ***
    console.log("Login simulated. Redirecting to main app...");
    router.push('/main'); 
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <FormCard title="Log In to CustConnect">
        {/* Attach the handler to the form's onSubmit event */}
        <form onSubmit={handleLoginSubmit} className="space-y-6"> 
          
          {/* UPDATED: Combined Username or Email Input Field */}
          <div>
            <label htmlFor="loginId" className="block text-sm font-medium text-gray-700 mb-1">
              Username or Email
            </label>
            <input
              id="loginId"
              name="loginId"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              placeholder="Your Username or Email"
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Sign In
            </button>
          </div>
          
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register Here
          </a>
        </p>
        
      </FormCard>
    </div>
  );
}
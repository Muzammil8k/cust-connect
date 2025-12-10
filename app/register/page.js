// cust-connect-new/app/register/page.js
'use client'; // This is required for client-side functionality (form submission, state, etc.)

import FormCard from '@/components/FormCard';
import { useRouter } from 'next/navigation'; // Import for redirection

export default function RegisterPage() {
  const router = useRouter();

  // MOCK SUBMISSION HANDLER: Redirects to /login
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send data to your backend here.

    // *** REDIRECT TO LOGIN PAGE ***
    console.log("Registration simulated. Redirecting to login...");
    router.push('/login'); 
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <FormCard title="Register New Account">
        {/* Attach the handler to the form's onSubmit event */}
        <form onSubmit={handleRegisterSubmit} className="space-y-4"> 

          {/* ... (All your input fields remain the same) ... */}
          {/* Full Name Input Field */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input id="fullName" name="fullName" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="John Doe"/>
          </div>

          {/* Username Input Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input id="username" name="username" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="johndoe123"/>
          </div>
          
          {/* Email Input Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="you@example.com"/>
          </div>
          
          {/* Password Input Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="••••••••"/>
          </div>

          {/* Phone Number Input Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input id="phone" name="phone" type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="e.g., +923001234567"/>
          </div>

          {/* Registration Number Input Field */}
          <div>
            <label htmlFor="regNo" className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
            <input id="regNo" name="regNo" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="BCS251102"/>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Create Account
            </button>
          </div>
          
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log In
          </a>
        </p>
        
      </FormCard>
    </div>
  );
}
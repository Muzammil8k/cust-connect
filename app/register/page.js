'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import FormCard from '@/components/FormCard';

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Extract values from form
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // 1. Backend Domain Restriction Check (Security Layer)
    const allowedDomains = ['@cust.pk', '@cust.edu.pk'];
    const isAllowed = allowedDomains.some(domain => email.endsWith(domain));

    if (!isAllowed) {
      alert("Registration restricted to @cust.pk or @cust.edu.pk emails only.");
      setLoading(false);
      return;
    }

    // 2. Supabase Sign Up Call
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          // These keys match the COALESCE logic in your SQL Trigger
          full_name: formData.get('fullName'),
          username: formData.get('username'),
          phone: formData.get('phone'),
          reg_num: formData.get('regNo'),
        }
      }
    });

    if (error) {
      alert(`Error: ${error.message}`);
      setLoading(false);
    } else {
      // Instant redirect to login without the alert popup
      router.push('/login');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <FormCard title="Register New Account">
        <form onSubmit={handleRegisterSubmit} className="space-y-4"> 

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input id="fullName" name="fullName" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="Muzammil Malik"/>
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input id="username" name="username" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="Malik8k"/>
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              pattern="^.+@(cust\.pk|cust\.edu\.pk)$"
              onInvalid={(e) => e.target.setCustomValidity("Please use university's email (@cust.pk or @cust.edu.pk)")}
              onInput={(e) => e.target.setCustomValidity("")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
              placeholder="you@cust.pk"
            />
          </div>
          
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="••••••••"/>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input id="phone" name="phone" type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="e.g., +923001234567"/>
          </div>

          {/* Registration Number */}
          <div>
            <label htmlFor="regNo" className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
            <input id="regNo" name="regNo" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150" placeholder="BCS251102"/>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
          
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            Log In
          </a>
        </p>
        
      </FormCard>
    </div>
  );
}
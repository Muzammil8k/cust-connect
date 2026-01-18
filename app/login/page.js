'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import FormCard from '@/components/FormCard';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error text

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); // Clear old errors

    const formData = new FormData(e.target);
    const email = formData.get('loginId').trim();
    const password = formData.get('password');

    // 1. Supabase Sign In call
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // SET THE ERROR MESSAGE INSTEAD OF ALERTING
      setErrorMessage("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      // Success: Instant redirect
      router.push('/main');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <FormCard title="Log In to CustConnect">
        <form onSubmit={handleLoginSubmit} className="space-y-6"> 
          
          <div>
            <label htmlFor="loginId" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="loginId"
              name="loginId"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              placeholder="you@cust.pk"
            />
          </div>

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

          {/* DISPLAY ERROR MESSAGE HERE IF IT EXISTS */}
          {errorMessage && (
            <div className="text-red-500 text-sm font-medium text-center bg-red-50 p-2 rounded-lg border border-red-200">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            Register Here
          </a>
        </p>
      </FormCard>
    </div>
  );
}
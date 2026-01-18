'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfile() {
      try {
        // 1. Get the currently logged-in user from Auth
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError || !user) throw authError;

        // 2. Fetch their detailed profile from your 'profiles' table
        const { data, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) throw profileError;

        // 3. Store the data (merging auth email with profile data)
        setUserProfile({
          ...data,
          email: user.email
        });
      } catch (error) {
        console.error('Error loading user data:', error.message);
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-blue-600 font-semibold animate-pulse">Loading Profile...</p>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-red-500 mb-4">Could not load profile data.</p>
        <Link href="/login" className="text-blue-600 underline">Return to Login</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center w-full">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl mt-10">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-6 border-b pb-3">
          User Profile & Settings
        </h1>

        <div className="space-y-4">
          
          {/* General Info Card - Using REAL data */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              {userProfile.full_name} ({userProfile.role})
            </p>
            <p className="text-sm text-gray-600">Username: {userProfile.username}</p>
            <p className="text-sm text-gray-600">Reg No: {userProfile.registration_number}</p>
          </div>

          {/* Contact Info - Using REAL data */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Contact Details</h3>
            <p className="text-sm text-gray-600">Email: {userProfile.email}</p>
            <p className="text-sm text-gray-600">Phone: {userProfile.phone_number}</p>
          </div>

          {/* Club Membership - Placeholder for now until you create the Club table */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Club Memberships</h3>
            <p className="text-sm text-gray-400 italic">No memberships found yet.</p>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <Link 
            href="/main" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200"
          >
            Back to Dashboard
          </Link>
        </div>
        
      </div>
    </div>
  );
}
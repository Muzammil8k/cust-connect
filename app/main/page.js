// cust-connect-new/app/main/page.js
// This file contains the content for your Main Application Dashboard.

import Link from 'next/link';

export default function MainApplicationPage() {
  return (
    // Consistent full-page container styling
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      
      {/* Consistent Header Style */}
      <h1 className="text-4xl font-extrabold text-green-600 mb-6 mt-10">
        ✅ Main Application Dashboard
      </h1>
      
      {/* Content Block with consistent styling */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
        <p className="text-lg text-gray-700 mb-4 font-semibold">
          This is the primary area for your logged-in users.
        </p>
        
        {/* Simple Posts Tab Demo (Dummy Content) */}
        <div className="mt-8 border-t pt-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Posts Tab (Demo Content)
            </h3>
            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <p className="text-gray-800 font-medium">Post Title: Important Event Updates</p>
                <p className="text-sm text-gray-600">This is the area where content specific to the Posts feature would be displayed.</p>
            </div>
        </div>

        {/* Mock Logout Button */}
        <div className="mt-8 text-center">
            <Link 
                href="/login" 
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
                Log Out
            </Link>
        </div>
      </div>
    </div>
  );
}
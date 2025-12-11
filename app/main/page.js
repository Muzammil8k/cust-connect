// cust-connect-new/app/main/page.js
'use client'; 

import DashboardCard from '@/components/DashboardCard';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- MOCK DATA FOR ALL VIEWS ---
const clubList = [
    { id: 1, name: "Photography Club", isClickable: true },
    { id: 2, name: "Debate Society", isClickable: true },
    { id: 3, name: "Gaming Guild", isClickable: true },
];

const eventData = [
    { id: 1, name: "Annual Tech Fest Planning", date: "Dec 20, 2025" },
    { id: 2, name: "Creative Writing Workshop", date: "Jan 5, 2026" },
    { id: 3, name: "E-Sports Tournament Signup", date: "Jan 15, 2026" },
    { id: 4, name: "Club Leader Training Session", date: "Feb 1, 2026" },
];

const postsData = [
    { id: 1, title: "Reminder: Club Application Deadline", date: "Today", content: "All forms must be submitted by 5 PM.", category: "System" },
    { id: 2, title: "New Photography Contest Announced", date: "3 hours ago", content: "The theme is 'Campus Life After Dark.'", category: "Events" },
    { id: 3, title: "General Maintenance Schedule", date: "Yesterday", content: "The server will undergo maintenance tonight.", category: "Alert" },
];

const joinedEvents = [
    { id: 101, name: "Hackathon 2026", date: "Feb 20, 2026" },
    { id: 102, name: "Inter-University Debate", date: "Mar 1, 2026" },
];


const dashboardData = {
  // Simplified role data for the demo
  student: {
    widgets: [
      { title: "My Clubs", content: clubList, type: "clubs", color: "blue" },
      { title: "Upcoming Events", content: eventData.slice(0, 2), type: "events", color: "blue" },
      { title: "Joined Events", content: joinedEvents, type: "joinedEvents", color: "blue" },
    ]
  },
  // We'll keep the other roles simple for now to focus on the student view layout
  leader: {
    widgets: [
      { title: "My Clubs", content: clubList, type: "clubs", color: "green" },
      { title: "Upcoming Events", content: eventData.slice(0, 2), type: "events", color: "green" },
      { title: "Club Requests (7)", content: ["7 new members pending approval"], type: "generic", color: "green" },
    ]
  },
  admin: {
    widgets: [
      { title: "System Alerts (2)", content: ["Server load high", "Pending club approvals (2)"], type: "generic", color: "red" },
      { title: "Total Users", content: ["5,432 Students Registered"], type: "generic", color: "red" },
      { title: "Upcoming Events", content: eventData.slice(0, 2), type: "events", color: "red" },
    ]
  },
};
// --- END MOCK DATA ---

export default function MainApplicationPage() {
  const [userRole, setUserRole] = useState('student'); 

  useEffect(() => {
    // Uses local storage to persist the role between pages (simulating a login session)
    const savedRole = localStorage.getItem('demoRole') || 'student';
    setUserRole(savedRole);
  }, []);

  const currentData = dashboardData[userRole] || dashboardData.student;
  
  // Placeholder function for clickable clubs
// Placeholder function for clickable clubs
  const handleClubClick = (clubName) => {
    // This action still gets logged to your browser's console, 
    // but nothing interrupts the user's experience.
    console.log(`DEMO: Clicked to manage club: ${clubName}`); 
  };


  // --- Helper function to render different widget types ---
  const renderWidgetContent = (widget) => {
if (widget.type === 'clubs') {
        return (
            <ul className="text-gray-700 divide-y divide-gray-300"> {/* Added DIVIDE */}
                {widget.content.map((club) => (
                    <li key={club.id} className="text-base font-medium py-3 px-2 -mx-2"> {/* Added padding/margin */}
                        {/* Make club name clickable if isClickable is true */}
                        {club.isClickable ? (
                            <button 
                                onClick={() => handleClubClick(club.name)}
                                // Added hover:bg-gray-100 for visual consistency
                                className="text-black transition duration-150 text-left cursor-pointer w-full hover:bg-gray-200 hover:rounded-md p-1 -m-1" 
                            >
                                {club.name}
                            </button>
                        ) : (
                            <span className="p-1 block">{club.name}</span> // Added padding to align
                        )}
                    </li>
                ))}
            </ul>
        );
    }
    
 if (widget.type === 'events' || widget.type === 'joinedEvents') {
        return (
            <ul className="text-gray-700 divide-y divide-gray-300"> {/* Use DIVIDE for clean lines */}
                {widget.content.map((event) => (
                    <li 
                        key={event.id} 
                        // --- FINAL CORRECTED STYLING ---
                        // Uses full padding/margin and clear hover effects
                        className="py-3 px-2 cursor-pointer transition duration-200 -mx-2 
                                   hover:bg-gray-200 hover:shadow-inner hover:rounded-md"
                        // --- END FINAL CORRECTED STYLING ---
                    >
                        <p className="font-semibold text-gray-800">{event.name}</p>
                        <p className="text-xs text-blue-600 font-medium">Date: {event.date}</p>
                    </li>
                ))}
            </ul>
        );
    }

    // Default rendering for generic widgets
    return (
        <ul className="space-y-2 text-gray-700">
            {widget.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm font-medium">{item}</li>
            ))}
        </ul>
    );
  };
  // --- End Helper Function ---


  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center w-full">
      
      {/* Main Container */}
      <div className="w-full max-w-7xl">
        
        {/* Dashboard Grid Layout (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {currentData.widgets.map((widget, index) => (
            <DashboardCard key={index} title={widget.title} color={widget.color}>
              {renderWidgetContent(widget)}
            </DashboardCard>
          ))}

        </div>
        
        {/* Posts Section (Below Widgets) */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Latest Campus Posts & Updates
            </h2>

            <div className="space-y-6">
                {postsData.map(post => (
                    <div key={post.id} className="p-4 border border-gray-100 rounded-lg transition duration-200 cursor-pointer 
                                   hover:shadow-xl hover:border-gray-300">
                        <div className="flex justify-between items-center mb-1">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${post.category === 'Alert' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {post.category}
                            </span>
                            <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{post.title}</h3>
                        <p className="text-sm text-gray-700">{post.content}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 text-center">
                <Link href="/posts" className="bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition duration-200">
                    View All Posts
                </Link>
            </div>
        </div>

        {/* Mock Logout Link */}
        <div className="mt-12 text-center w-full max-w-7xl">
            <Link href="/login" className="text-red-600 hover:underline font-medium">
                Log Out
            </Link>
        </div>
      </div>
    </div>
  );
}
// cust-connect-new/app/posts/page.js
import Link from 'next/link';

// Mock data, expanded from the dashboard
const allPostsData = [
    { id: 1, title: "Reminder: Club Application Deadline", date: "Today, 10:00 AM", content: "All forms must be submitted by 5 PM sharp. No exceptions will be made.", category: "System" },
    { id: 2, title: "New Photography Contest Announced", date: "3 hours ago", content: "The theme is 'Campus Life After Dark.' Submissions open next week.", category: "Events" },
    { id: 3, title: "General Maintenance Schedule", date: "Yesterday, 8:00 PM", content: "The server will undergo maintenance tonight from 12 AM to 2 AM. Expect downtime.", category: "Alert" },
    { id: 4, title: "Upcoming Club Leader Training", date: "Nov 15, 2025", content: "Mandatory training session for all newly elected club leaders next Saturday.", category: "Events" },
    { id: 5, title: "New Student Handbook Released", date: "Nov 10, 2025", content: "The updated handbook is now available on the student portal. Please review sections 3 and 4.", category: "System" },
];


export default function PostsPage() {
    return (
        <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center w-full">
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-8 mt-4 border-b pb-4">
                    Posts & Updates
                </h1>

                <div className="space-y-4">
                    {allPostsData.map(post => (
                        <div key={post.id} className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm cursor-pointer transition duration-200 
                                       hover:shadow-xl hover:border-gray-300">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${post.category === 'Alert' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                                    {post.category}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">Posted: {post.date}</p>
                            <p className="text-gray-700">{post.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/main" className="text-blue-600 hover:underline font-medium">
                        ← Back to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
// cust-connect-new/app/profile/page.js
import Link from 'next/link';

export default function ProfilePage() {
  // MOCK USER DATA
  const user = {
    fullName: "John Doe",
    username: "johndoe123",
    email: "john.doe@university.edu",
    phoneNumber: "+92 3XX XXXXXXX",
    regNumber: "2024-CST-001",
    memberOf: ["Photography Club", "Debate Society"],
    role: "Student",
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center w-full">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl mt-10">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-6 border-b pb-3">
          User Profile & Settings
        </h1>

        <div className="space-y-4">
          
          {/* General Info Card */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <p className="text-lg font-semibold text-gray-800 mb-2">{user.fullName} ({user.role})</p>
            <p className="text-sm text-gray-600">Username: {user.username}</p>
            <p className="text-sm text-gray-600">Reg No: {user.regNumber}</p>
          </div>

          {/* Contact Info */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Contact Details</h3>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phoneNumber}</p>
          </div>

          {/* Club Membership */}
          <div className="border p-4 rounded-lg">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Club Memberships</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {user.memberOf.map((club, index) => (
                <li key={index}>{club}</li>
              ))}
            </ul>
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
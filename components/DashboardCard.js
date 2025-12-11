// cust-connect-new/components/DashboardCard.js

export default function DashboardCard({ title, children, color = 'blue' }) {
  // Define consistent colors based on the role/type
  let headerColor = `bg-${color}-500`;
  let titleColor = `text-${color}-500`;

  // Override colors for the primary dashboard look
  if (color === 'blue') {
      headerColor = 'bg-blue-600';
      titleColor = 'text-blue-600';
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
      
      {/* Consistent Header Area */}
      <div className={`p-4 ${headerColor} text-white font-bold text-lg`}>
        {title}
      </div>
      
      {/* Content Area */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
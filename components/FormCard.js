// This component provides the consistent visual container for our forms

export default function FormCard({ title, children }) {
  return (
    // Reusable styling with consistent shadow, padding, and max-width
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
      
      {/* Consistent title styling (blue, bold) */}
      <h2 className="text-3xl font-extrabold text-blue-600 text-center mb-6">
        {title}
      </h2>
      
      {/* The content (form fields) passed into the component */}
      <div>
        {children}
      </div>
      
    </div>
  );
}
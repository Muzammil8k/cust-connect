// cust-connect-new/app/page.js

export default function Home() {
  return (
    // Tailwind: Center content, full height, light gray background
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      
      {/* Content box styling: white background, shadow, rounded corners */}
      <div className="text-center p-10 bg-white shadow-xl rounded-xl max-w-lg w-full transition duration-300 hover:shadow-2xl">
        
        {/* Title using a primary blue color (consistent color) */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
          New Project Base Ready
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-700 mb-6">
          This is your clean, consistent Next.js application using Tailwind CSS.
        </p>
        
        {/* Consistent Button Style */}
        <a 
          href="https://tailwindcss.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Begin Building
        </a>
      </div>
    </main>
  )
}
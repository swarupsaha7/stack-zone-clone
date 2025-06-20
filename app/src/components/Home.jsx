import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome Home
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This is the home page of your React application with routing
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <a href="https://vite.dev" target="_blank" className="group">
            <img 
              src={viteLogo} 
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
              alt="Vite logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank" className="group">
            <img 
              src={reactLogo} 
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 animate-spin" 
              alt="React logo" 
            />
          </a>
        </div>

        {/* Main Card */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
            >
              Count is {count}
            </button>
            <p className="text-gray-600 mb-4">
              This is the home page component
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 
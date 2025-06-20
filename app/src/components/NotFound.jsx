import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go Back Home
          </Link>
          
          <div className="text-gray-500">
            <p>Or try one of these pages:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="/about" className="text-blue-600 hover:text-blue-800 hover:underline">
                About
              </Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound 
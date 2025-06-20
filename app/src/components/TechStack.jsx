import React from 'react'

export default function TechStack() {
    return (

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl flex flex-col items-center justify-center text-center">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to find your stack?</h2>
                <p className="text-gray-400">
                    Fill out the form on the left to get your personalized tech stack recommendation.
                </p>
            </div>

            <div className="relative w-full aspect-square max-w-md">
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full bg-blue-500/10 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-blue-500/20 animate-ping"></div>
                </div>

                {/* Navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button className="w-12 h-12 rounded-full bg-gray-700/50 hover:bg-gray-700 transition flex items-center justify-center group">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="w-12 h-12 rounded-full bg-gray-700/50 hover:bg-gray-700 transition flex items-center justify-center group">
                        <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

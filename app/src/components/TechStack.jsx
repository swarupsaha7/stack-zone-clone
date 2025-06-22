import React, { useState } from 'react';

const LeftArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const RightArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);


export default function TechStack(props) {
    const { stackRecommendation } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!stackRecommendation || !stackRecommendation.result) {
        return (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl flex flex-col items-center justify-center text-center h-full">
                 <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to find your stack?</h2>
                    <p className="text-gray-400">
                        Fill out the form on the left to get your personalized tech stack recommendation.
                    </p>
                </div>
            </div>
        );
    }
    
    const { result: techGroups } = stackRecommendation;

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? techGroups.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === techGroups.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bg-[#2d3748] text-gray-300 p-8 rounded-lg max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Your Recommended Stack</h1>
                    <p>Here's a tech stack tailored to your project needs.</p>
                </div>
            </div>

            <div className="relative">
                <div className="overflow-hidden w-11/12 mx-auto">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {techGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="w-full flex-shrink-0 px-1">
                                <h2 className="text-2xl font-bold text-teal-400 mb-4 text-center">{group.type}</h2>
                                <div className="space-y-4">
                                    {group.tech.map((tech, techIndex) => (
                                        <div key={techIndex} className="bg-[#3c4a60] p-6 rounded-lg border border-gray-600/50">
                                            <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                                            <p className="text-gray-400 text-left leading-relaxed">{tech.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={goToPrevious} className="absolute top-1/2 -left-4 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full text-white transition">
                    <LeftArrowIcon />
                </button>
                <button onClick={goToNext} className="absolute top-1/2 -right-4 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 p-2 rounded-full text-white transition">
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    );
}

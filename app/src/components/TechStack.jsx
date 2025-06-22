import React, { useState } from 'react';

const parseStackRecommendation = (text) => {
    if (!text) return [];
    const technologies = [];
    const techRegex = /\d+\.\s\*\*(.*?)\*\*\s-\s(.*?)(?=\n\n?\d+\.|\n\n?\*\*|$)/gs;
    let match;
    while ((match = techRegex.exec(text)) !== null) {
        technologies.push({
            name: match[1].trim(),
            description: match[2].replace(/\n/g, ' ').trim(),
        });
    }
    return technologies;
};

export default function TechStack(props) {
    // const { stackRecommendation } = props;
    const stackRecommendation = {
        result: "For your Chat Application with OpenAI, here is a tailored technology stack recommendation:\n\n**Frontend:**\n1. **React.js** - React is a powerful and flexible JavaScript library for building user interfaces. It's highly efficient for rendering real-time updates, which is crucial for a chat application. Its component-based architecture aligns well with building complex UIs in a manageable way.\n\n2. **Next.js** - This React framework provides server-side rendering and static site generation, which can enhance performance and SEO. For a chat application, the performance benefits can be significant, especially when dealing with real-time data and interactions.\n\n3. **Tailwind CSS** - Tailwind is a utility-first CSS framework that allows you to build custom designs directly in your markup. It speeds up development without sacrificing the ability to create a unique and responsive design.\n\n**Backend:**\n1. **Node.js with Express.js** - Node.js is a powerful JavaScript runtime that enables server-side scripting. Coupled with Express.js, a minimalist web framework, it provides a robust and scalable backend for handling API requests, authentication, and real-time chat functionalities.\n\n2. **Socket.io** - For real-time communication features, Socket.io is a perfect choice. It enables bi-directional communication between the client and the server, allowing for real-time updates and instant messaging capabilities.\n\n**Database:**\n1. **MongoDB** - As a NoSQL database, MongoDB is well-suited for handling the dynamic data structures often required in chat applications. Its scalability and performance are ideal for real-time applications, and it integrates seamlessly with Node.js.\n\n**Authentication:**\n1. **Firebase Authentication** - Firebase Authentication provides an easy-to-use and secure way to handle user authentication. It supports various sign-in methods, including email/password, social media logins, and more, ensuring a smooth user experience.\n\n**Additional Technologies:**\n1. **OpenAI API** - To incorporate OpenAI functionalities like chatbots or language processing, you'll integrate the OpenAI API within your backend. Node.js provides excellent support for making asynchronous API calls.\n\n2. **Redux** - For state management in your React application, Redux can help manage the global state, especially when dealing with user sessions and real-time message updates.\n\n3. **Jest and Testing Library** - For testing your frontend and backend code, Jest along with Testing Library for React will help ensure your application is reliable and bug-free.\n\n4. **Docker** - For containerization and ease of deployment, Docker can help you create a consistent development environment and simplify the deployment process.\n\nThis stack leverages your advanced JavaScript expertise, ensuring a modern, scalable, and efficient chat application that meets your requirements."
    }
    const [copyButtonText, setCopyButtonText] = useState('Copy');

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
    
    const allTechs = parseStackRecommendation(stackRecommendation.result);

    const handleCopy = () => {
        navigator.clipboard.writeText(stackRecommendation.result);
        setCopyButtonText('Copied!');
        setTimeout(() => setCopyButtonText('Copy'), 2000);
    };

    return (
        <div className="bg-[#2d3748] text-gray-300 p-8 rounded-lg max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-white mb-2">Your Recommended Stack</h1>
            <p className="mb-6">Here's a tech stack tailored to your project needs.</p>
            <button onClick={handleCopy} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md mb-8 transition-all duration-200">
                {copyButtonText}
            </button>

            <div className="space-y-4">
                {allTechs.map((tech, index) => (
                    <div key={index} className="bg-[#3c4a60] p-6 rounded-lg border border-gray-600/50">
                        <h2 className="text-xl font-bold text-white mb-3">{tech.name}</h2>
                        <p className="text-gray-400 text-left leading-relaxed">{tech.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

import { useState } from 'react'
import TechStack from './TechStack'
import ProjectForm from './ProjectForm'

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-gray-300">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <ProjectForm />

                    {/* Right Column - Preview */}
                    <TechStack />
                </div>
            </div>
        </div>
    )
}

export default Home 
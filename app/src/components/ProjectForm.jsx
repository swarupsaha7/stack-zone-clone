import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { object, string, array } from 'yup'
import { useFormik } from 'formik'
import TechStack from './TechStack'

const featureOptions = [
    { key: 'realTimeChat', label: 'Real-time Chat' },
    { key: 'authentication', label: 'Authentication' },
    { key: 'payments', label: 'Payments' },
    { key: 'aiIntegration', label: 'AI Integration' },
    { key: 'fileUploads', label: 'File Uploads' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'adminDashboard', label: 'Admin Dashboard' },
    { key: 'offlineSupport', label: 'Offline Support' },
    { key: 'socialLogin', label: 'Social Login' },
    { key: 'pushNotifications', label: 'Push Notifications' },
]

const initialValues = {
    type: '',
    description: '',
    features: [],
    targetUsers: '',
    experienceLevel: '',
    preferences: ''
}
const schema = object({
    type: string().required('Enter your type'),
    description: string().required('Enter your description'),
    features: array().min(1, 'Select at least one feature').required('Select at least one feature'),
    targetUsers: string().required('Enter your target users'),
    experienceLevel: string().required('Enter your experience level'),
    preferences: string().required('Enter your preferences')
})

export default function ProjectForm() {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            console.log(values);
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-gray-300">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-white">Project Details</h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your project to get a tailored tech stack. Be specific about your project's goals,
                            target audience, and any unique functionalities. The more detail you provide, the better the AI
                            can tailor its recommendations.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Project Type</label>
                                <select name="type" value={values.type} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full bg-gray-700/50 rounded-lg border border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                >
                                    <option value="">Select project type</option>
                                    <option value="web">Web Application</option>
                                    <option value="mobile">Mobile Application</option>
                                    <option value="desktop">Desktop Application</option>
                                    <option value="api">API Service</option>
                                </select>
                                {touched.type && errors.type && (
                                    <div className="text-red-400 text-sm mt-1">{errors.type}</div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Project Description (Optional)</label>
                                <textarea name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}
                                    placeholder="Briefly describe your project, its main goals, and any unique aspects."
                                    className="w-full bg-gray-700/50 rounded-lg border border-gray-600 p-3 h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                ></textarea>
                                <p className="text-sm text-gray-500 mt-1">This helps us understand the context better. (10-500 characters)</p>
                                {touched.description && errors.description && (
                                    <div className="text-red-400 text-sm mt-1">{errors.description}</div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Required Features <span className="text-red-400">*</span></label>
                                <div className="space-y-2">
                                    {featureOptions.map(option => (
                                        <label key={option.key} className="flex items-center space-x-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                name="features"
                                                value={option.key}
                                                checked={values.features.includes(option.key)}
                                                onChange={e => {
                                                    if (e.target.checked) {
                                                        setFieldValue('features', [...values.features, option.key]);
                                                    } else {
                                                        setFieldValue('features', values.features.filter(f => f !== option.key));
                                                    }
                                                }}
                                                className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                                            />
                                            <span className="group-hover:text-white transition">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                                {touched.features && errors.features && (
                                    <div className="text-red-400 text-sm mt-1">{errors.features}</div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Target Users</label>
                                <input name="targetUsers" type="text" value={values.targetUsers} onChange={handleChange} onBlur={handleBlur}
                                    placeholder="e.g., Consumers, Enterprise, Internal"
                                    className="w-full bg-gray-700/50 rounded-lg border border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                                {touched.targetUsers && errors.targetUsers && (
                                    <div className="text-red-400 text-sm mt-1">{errors.targetUsers}</div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Developer Experience Level</label>
                                <select name="experienceLevel" value={values.experienceLevel} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full bg-gray-700/50 rounded-lg border border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                >
                                    <option value="">Select experience level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                                {touched.experienceLevel && errors.experienceLevel && (
                                    <div className="text-red-400 text-sm mt-1">{errors.experienceLevel}</div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Preferences (Optional)</label>
                                <input name="preferences" type="text" value={values.preferences} onChange={handleChange} onBlur={handleBlur} placeholder="e.g., JavaScript stack only, No-code tools"
                                    className="w-full bg-gray-700/50 rounded-lg border border-gray-600 p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                                {touched.preferences && errors.preferences && (
                                    <div className="text-red-400 text-sm mt-1">{errors.preferences}</div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Get Stack Recommendation
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Preview */}
                    <TechStack />
                </div>
            </div>
        </div>
    )
}
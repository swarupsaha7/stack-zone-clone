import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { object, string, array } from 'yup'
import { useFormik } from 'formik'


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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-8 px-2 text-gray-300">
            <div className="w-full max-w-2xl mx-auto">
                <div className="bg-[#181f2a] rounded-2xl shadow-2xl p-8 border border-gray-800">
                    <h2 className="text-3xl font-bold mb-4 text-white">Project Details</h2>
                    <p className="text-gray-400 mb-8 text-base leading-relaxed">
                        Tell us about your project to get a tailored tech stack. Be specific about your project's goals, target audience, and any unique functionalities. The more detail you provide, the better the AI can tailor its recommendations. <br />
                        <span className="text-gray-500 text-sm">For example, instead of "a social media app," try "a social media app for pet owners to share photos and tips, with real-time chat and event scheduling."</span>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-7">
                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">Project Type</label>
                            <div className="rounded-xl bg-[#232b3a] border border-gray-700 px-4 py-2">
                                <select name="type" value={values.type} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full bg-[#232b3a] text-gray-100 border-none rounded-lg p-3 shadow-lg transition duration-150 ease-in-out appearance-none cursor-pointer hover:bg-[#202736] hover:text-[#3edbf0] focus:ring-0 focus:border-transparent focus:outline-none"
                                    style={{ boxShadow: '0 2px 16px 0 rgba(62,219,240,0.05)' }}
                                >
                                    <option value="" className="bg-[#232b3a] text-gray-400">Select project type</option>
                                    <option value="web" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Web app</option>
                                    <option value="mobile" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Mobile app</option>
                                    <option value="api" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">API</option>
                                    <option value="ecommerce" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">E-commerce</option>
                                    <option value="saas" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">SaaS</option>
                                    <option value="ai" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">AI app</option>
                                    <option value="game" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Game</option>
                                    <option value="iot" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">IoT</option>
                                    <option value="desktop" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Desktop App</option>
                                </select>
                            </div>
                            {touched.type && errors.type && (
                                <div className="text-red-400 text-sm mt-1">{errors.type}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">Project Description <span className="text-gray-400 font-normal">(Optional)</span></label>
                            <div className="rounded-xl bg-[#232b3a] border border-gray-700 px-4 py-2">
                                <textarea name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}
                                    placeholder="Briefly describe your project, its main goals, and any unique aspects."
                                    rows={8}
                                    className="w-full bg-[#232b3a] text-gray-100 border-none rounded-lg p-3 shadow-lg transition duration-150 ease-in-out resize-none focus:ring-0 focus:border-transparent focus:outline-none hover:bg-[#202736] hover:text-[#3edbf0] h-48"
                                    style={{ boxShadow: '0 2px 16px 0 rgba(62,219,240,0.05)' }}
                                ></textarea>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">This helps us understand the context better. (10-500 characters)</p>
                            {touched.description && errors.description && (
                                <div className="text-red-400 text-sm mt-1">{errors.description}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">Required Features <span className="text-red-400">*</span></label>
                            <div className="rounded-xl bg-[#232b3a] border border-gray-700 px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {featureOptions.map(option => (
                                    <label key={option.key} className="flex items-center space-x-3 cursor-pointer group select-none">
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
                                            className="w-5 h-5 rounded border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800 accent-blue-500"
                                        />
                                        <span className="group-hover:text-white transition text-base">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                            {touched.features && errors.features && (
                                <div className="text-red-400 text-sm mt-1">{errors.features}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">Target Users</label>
                            <div className="rounded-xl bg-[#232b3a] border border-gray-700 px-4 py-2">
                                <input name="targetUsers" type="text" value={values.targetUsers} onChange={handleChange} onBlur={handleBlur}
                                    placeholder="e.g., Consumers, Enterprise, Internal"
                                    className="w-full bg-[#232b3a] text-gray-100 border-none rounded-lg p-3 shadow-lg transition duration-150 ease-in-out focus:ring-0 focus:border-transparent focus:outline-none hover:bg-[#202736] hover:text-[#3edbf0]"
                                    style={{ boxShadow: '0 2px 16px 0 rgba(62,219,240,0.05)' }}
                                />
                            </div>
                            {touched.targetUsers && errors.targetUsers && (
                                <div className="text-red-400 text-sm mt-1">{errors.targetUsers}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">Developer Experience Level</label>
                            <div className="rounded-xl bg-[#232b3a] border border-gray-700 px-4 py-2">
                                <select name="experienceLevel" value={values.experienceLevel} onChange={handleChange} onBlur={handleBlur}
                                    className="w-full bg-[#232b3a] text-gray-100 border-none rounded-lg p-3 shadow-lg transition duration-150 ease-in-out appearance-none cursor-pointer hover:bg-[#202736] hover:text-[#3edbf0] focus:ring-0 focus:border-transparent focus:outline-none"
                                    style={{ boxShadow: '0 2px 16px 0 rgba(62,219,240,0.05)' }}
                                >
                                    <option value="" className="bg-[#232b3a] text-gray-400">Select experience level</option>
                                    <option value="beginner" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Beginner</option>
                                    <option value="intermediate" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Intermediate</option>
                                    <option value="advanced" className="bg-[#232b3a] text-gray-100 hover:bg-[#202736]">Advanced</option>
                                </select>
                            </div>
                            {touched.experienceLevel && errors.experienceLevel && (
                                <div className="text-red-400 text-sm mt-1">{errors.experienceLevel}</div>
                            )}
                        </div>

                        <div>
                            <label className="block text-base font-semibold mb-2 text-gray-200">Preferences <span className="text-gray-400 font-normal">(Optional)</span></label>
                            <div className="rounded-xl bg-[#232b3a] border border-gray-700 px-4 py-2">
                                <input name="preferences" type="text" value={values.preferences} onChange={handleChange} onBlur={handleBlur} placeholder="e.g., JavaScript stack only, No-code tools"
                                    className="w-full bg-[#232b3a] text-gray-100 border-none rounded-lg p-3 shadow-lg transition duration-150 ease-in-out focus:ring-0 focus:border-transparent focus:outline-none hover:bg-[#202736] hover:text-[#3edbf0]"
                                    style={{ boxShadow: '0 2px 16px 0 rgba(62,219,240,0.05)' }}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Any specific technologies or approaches you prefer?</p>
                            {touched.preferences && errors.preferences && (
                                <div className="text-red-400 text-sm mt-1">{errors.preferences}</div>
                            )}
                        </div>

                        <button type="submit"
                            className="w-full bg-[#3edbf0] hover:bg-[#2ec4d6] text-white font-bold py-3 px-4 rounded-xl transition transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#181f2a] text-lg shadow-lg"
                        >
                            Get Stack Recommendation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Breast Cancer Awareness Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Essential information to help you stay informed and take control of your breast health
        </p>
        
        <div className="card max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">1 in 8</div>
              <div className="text-gray-600">Women lifetime risk</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">5-year survival when caught early</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">2.3M</div>
              <div className="text-gray-600">New cases annually worldwide</div>
            </div>
          </div>

          <Link to="/schedule" className="btn-primary text-lg">
            Schedule Your Screening
          </Link>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/schedule" className="card text-center hover:scale-105 transition-transform">
            <div className="text-2xl mb-2">📅</div>
            <div className="font-semibold text-gray-800">Schedule Appointment</div>
          </Link>
          <Link to="/resources" className="card text-center hover:scale-105 transition-transform">
            <div className="text-2xl mb-2">👥</div>
            <div className="font-semibold text-gray-800">Find Support Groups</div>
          </Link>
          <Link to="/education" className="card text-center hover:scale-105 transition-transform">
            <div className="text-2xl mb-2">📚</div>
            <div className="font-semibold text-gray-800">Educational Resources</div>
          </Link>
          <Link to="/assessment" className="card text-center hover:scale-105 transition-transform">
            <div className="text-2xl mb-2">🔍</div>
            <div className="font-semibold text-gray-800">Risk Assessment</div>
          </Link>
        </div>
      </section>

      {/* Support Section */}
      <section className="max-w-4xl mx-auto">
        <div className="card bg-gradient-primary text-white">
          <h2 className="text-3xl font-bold mb-4">24/7 Crisis Support Hotline</h2>
          <div className="text-2xl font-bold mb-4">1-800-227-2345</div>
          <p className="text-primary-100 mb-6">Free & Confidential Support Available</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:support@breastcare.org" className="bg-white text-primary-600 px-4 py-2 rounded-full font-semibold">
              support@breastcare.org
            </a>
            <Link to="/resources" className="bg-white text-primary-600 px-4 py-2 rounded-full font-semibold">
              Find Local Centers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
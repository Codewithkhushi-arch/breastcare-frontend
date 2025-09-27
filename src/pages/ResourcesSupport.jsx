import React from 'react'
import { Link } from 'react-router-dom'

const ResourcesSupport = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Resources & Support</h1>
        
        <div className="card mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">24/7 Crisis Support Hotline</h2>
          <div className="text-3xl font-bold text-primary-600 mb-4">1-800-227-2345</div>
          <p className="text-gray-600">Free & Confidential Support Available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-4">NGO Support</h3>
            <p className="text-gray-600 mb-4">
              Non-profit organizations providing financial assistance, resources, and advocacy.
            </p>
            <button className="btn-primary">Get Support</button>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Support Groups</h3>
            <p className="text-gray-600 mb-4">
              Connect with others who understand your experience through local and online communities.
            </p>
            <button className="btn-primary">Get Support</button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Forums</h2>
          <p className="text-gray-600 mb-6">
            Connect with others, share experiences, and find support from people who understand your journey.
          </p>
          <button className="btn-primary">Join Community</button>
        </div>
      </div>
    </div>
  )
}

export default ResourcesSupport
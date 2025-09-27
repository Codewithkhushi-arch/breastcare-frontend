import React from 'react'
import { Link } from 'react-router-dom'

const PreventionScreening = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Prevention & Screening</h1>
        
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Screening Schedule</h2>
          <p className="text-gray-600 mb-6">
            Follow evidence-based screening guidelines. Mammograms starting at 40, clinical exams, 
            and genetic counseling when appropriate.
          </p>
          <Link to="/schedule" className="btn-primary">Schedule Screening</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Self-Examination</h3>
            <p className="text-gray-600 mb-4">
              Learn proper self-examination techniques to detect changes early.
            </p>
            <Link to="/screening" className="btn-secondary">Learn Self-Exam</Link>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Healthy Lifestyle</h3>
            <p className="text-gray-600 mb-4">
              Maintain a healthy weight, exercise regularly, and limit alcohol consumption.
            </p>
            <Link to="/nutrition" className="btn-secondary">Lifestyle Tips</Link>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Early Detection Saves Lives</h2>
          <p className="text-primary-100 mb-6">
            Regular screenings are your best defense against breast cancer. 
            When detected early, the survival rate is over 99%.
          </p>
          <Link to="/schedule" className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
            Book Your Screening Today
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PreventionScreening
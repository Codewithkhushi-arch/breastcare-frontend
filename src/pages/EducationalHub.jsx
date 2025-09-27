import React from 'react'
import { Link } from 'react-router-dom'

const EducationalHub = () => {
  return (
    <div className="page-container">
      <h1 className="section-title">Educational Hub</h1>
      
      <div className="card">
        <p className="text-gray-600 text-center mb-8">
          Comprehensive resources and educational materials about breast cancer awareness, 
          prevention, and treatment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/screening" className="card text-center hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Screening Information</h3>
            <p className="text-gray-600">Learn about mammograms, ultrasounds, and self-exams</p>
          </Link>
          
          <Link to="/prevention" className="card text-center hover:scale-105">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Prevention Guide</h3>
            <p className="text-gray-600">Steps to reduce your breast cancer risk</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EducationalHub
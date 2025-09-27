import React from 'react'
import { Link } from 'react-router-dom'

const TreatmentOptions = () => {
  const treatments = [
    {
      number: "1",
      title: "Surgery",
      description: "Surgical removal of tumors, ranging from lumpectomy to mastectomy, depending on cancer stage and patient preference."
    },
    {
      number: "4",
      title: "Chemotherapy",
      description: "Systemic treatment using medications to destroy cancer cells throughout the body."
    },
    {
      number: "5",
      title: "Radiation Therapy",
      description: "High-energy beams target and destroy cancer cells in specific areas of the body."
    },
    {
      number: "6",
      title: "Targeted Therapy",
      description: "Treatments that target specific cancer cell characteristics, often with fewer side effects."
    }
  ]

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Treatment Options</h1>
        
        <div className="card mb-8">
          <p className="text-gray-600 text-center mb-8">
            Modern breast cancer treatment offers many effective options, often used in combination 
            for the best outcomes.
          </p>
          
          <div className="space-y-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {treatment.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{treatment.title}</h3>
                    <p className="text-gray-600">{treatment.description}</p>
                    <button className="text-primary-600 font-semibold mt-3 hover:text-primary-700">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help Understanding Your Options?</h2>
          <p className="text-gray-600 mb-6">
            Our medical team is here to help you understand which treatment options are right for you.
          </p>
          <Link to="/contact" className="btn-primary">Contact Our Team</Link>
        </div>
      </div>
    </div>
  )
}

export default TreatmentOptions
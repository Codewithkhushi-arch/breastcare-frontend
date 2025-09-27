import React from 'react'
import { Link } from 'react-router-dom'

const AboutBreastCancer = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Breast Cancer</h1>
        
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is Breast Cancer?</h2>
          <p className="text-gray-600 mb-4">
            Breast cancer occurs when cells in the breast tissue grow uncontrollably, forming a tumor 
            that can be felt as a lump or seen on imaging tests.
          </p>
          <p className="text-gray-600">
            There are different types of breast cancer, with some growing slowly and others spreading quickly. 
            Early detection significantly improves treatment outcomes.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Early Signs & Symptoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Lump or Thickening</h3>
              <p className="text-gray-600">A new lump in the breast or underarm area that feels different from surrounding tissue.</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Skin Changes</h3>
              <p className="text-gray-600">Dimpling, puckering, or redness of the breast skin, resembling an orange peel texture.</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Nipple Changes</h3>
              <p className="text-gray-600">Inverted nipple, unusual discharge, or changes in nipple appearance or sensation.</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">Size/Shape Changes</h3>
              <p className="text-gray-600">Unexplained changes in breast size, shape, or appearance that persist over time.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/screening" className="btn-primary">Learn More about Screening</Link>
        </div>
      </div>
    </div>
  )
}

export default AboutBreastCancer
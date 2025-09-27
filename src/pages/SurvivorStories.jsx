import React from 'react'
import { Link } from 'react-router-dom'

const SurvivorStories = () => {
  const stories = [
    {
      name: "Sarah Martinez",
      age: 45,
      yearsStrong: "5 Years Strong",
      story: "After my diagnosis, I focused on staying positive and maintaining my exercise routine. The support from my family and medical team was incredible.",
      verified: true
    },
    {
      name: "Maria Rodriguez",
      age: 52,
      yearsStrong: "7 Years Strong",
      story: "The hardest part was the uncertainty, but taking it one day at a time helped me through treatment and recovery.",
      verified: true
    }
  ]

  return (
    <div className="page-container">
      <h1 className="section-title">Survivor Stories</h1>
      
      <div className="card mb-8">
        <p className="text-gray-600 text-center mb-8 text-lg">
          Real stories from brave women who have faced breast cancer and emerged stronger.
        </p>
        
        <div className="space-y-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-primary-50 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                  <p className="text-gray-600">Age: {story.age} | {story.yearsStrong}</p>
                </div>
                {story.verified && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Verified Story
                  </span>
                )}
              </div>
              <p className="text-gray-700 italic text-lg">"{story.story}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Your Story</h2>
        <p className="text-gray-600 mb-6">
          Help inspire others by sharing your journey and experiences.
        </p>
        <button className="btn-primary">Share Your Story</button>
      </div>
    </div>
  )
}

export default SurvivorStories
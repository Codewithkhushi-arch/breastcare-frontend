import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const YourSchedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: '',
    notes: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment request submitted! We will contact you shortly to confirm.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Book Your Appointment</h1>
        
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                  <option value="evening">Evening (6 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Type of Appointment</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select appointment type</option>
                <option value="screening">Breast Cancer Screening</option>
                <option value="consultation">Consultation</option>
                <option value="follow-up">Follow-up Appointment</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="4"
                className="form-textarea"
                placeholder="Any specific concerns or questions?"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Schedule Appointment
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default YourSchedule
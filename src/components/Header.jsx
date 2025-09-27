import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Breast Cancer' },
    { path: '/schedule', label: 'Your Schedule' },
    { path: '/education', label: 'Educational Hub' },
    { path: '/prevention', label: 'Prevention & Screening' },
    { path: '/treatment', label: 'Treatment Options' },
    { path: '/resources', label: 'Resources & Support' },
    { path: '/research', label: 'Research & Innovation' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="logo-section">
          <div className="logo">♥</div>
          <div className="logo-text">
            <h1>BreastCare</h1>
            <p>Awareness & Support</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-right">
          {/* Donate Button */}
          <Link
            to="/schedule"
            className="btn-primary hidden md:flex"
          >
            Book Screening
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 mt-4 pt-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/schedule"
              className="btn-primary mx-4 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Screening
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
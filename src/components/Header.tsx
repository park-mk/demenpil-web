import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './Container'
import Button from './Button'
import { NAVIGATION_ITEMS, CONTACT_EMAIL } from '../utils/constants'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-navy'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-mint to-mint/70 rounded-lg flex items-center justify-center shadow-lg shadow-mint/20 group-hover:shadow-mint/40 transition-shadow">
              <span className="text-navy font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-display font-semibold text-pale group-hover:text-mint transition-colors">
              Demenpil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-mint ${
                  location.pathname === item.path ? 'text-mint' : 'text-pale'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button href={`mailto:${CONTACT_EMAIL}`} size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-pale hover:text-mint transition-colors focus:outline-none focus:ring-2 focus:ring-mint rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-colors hover:text-mint px-2 py-2 ${
                    location.pathname === item.path ? 'text-mint' : 'text-pale'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button href={`mailto:${CONTACT_EMAIL}`} size="md" className="w-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header

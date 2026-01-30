import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { COMPANY_NAME, NAVIGATION_ITEMS, FOOTER_DISCLAIMER, CONTACT_EMAIL } from '../utils/constants'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-deep to-deep/70 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-display font-semibold text-navy group-hover:text-deep transition-colors">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              AI-powered retinal analysis for early cognitive screening. Making dementia risk assessment accessible through standard fundus photography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-navy font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-deep transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-600 hover:text-deep transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-navy font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gray-600 hover:text-deep transition-colors text-sm block"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-gray-600 text-sm">
                Typical response time: 24-48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} {COMPANY_NAME}. All rights reserved.
            </div>
            <div className="text-gray-600 text-xs text-center md:text-right max-w-md">
              {FOOTER_DISCLAIMER}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

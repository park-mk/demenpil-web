import React from 'react'
import { useSEO } from '../utils/seo'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Feature from '../components/Feature'
import Container from '../components/Container'
import Badge from '../components/Badge'
import {
  KEY_BENEFITS,
  CONTACT_EMAIL,
} from '../utils/constants'

const Home: React.FC = () => {
  useSEO({
    title: 'Demenpil - Retina-Based Cognitive Screening',
    description: 'AI SaMD that estimates dementia/MCI risk in minutes from a single standard fundus image.',
  })

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Background with gradient and subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white" />
        
        {/* Animated Neural Network Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Animated connection lines */}
            <g stroke="#0792d5" strokeWidth="1" fill="none" opacity="0.4" filter="url(#glow)">
              <line x1="10%" y1="20%" x2="30%" y2="40%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="30%" y1="40%" x2="50%" y2="30%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="30%" x2="70%" y2="50%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="70%" y1="50%" x2="90%" y2="35%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite" />
              </line>
              <line x1="20%" y1="60%" x2="40%" y2="75%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.2s" repeatCount="indefinite" />
              </line>
              <line x1="40%" y1="75%" x2="60%" y2="65%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.7s" repeatCount="indefinite" />
              </line>
              <line x1="60%" y1="65%" x2="80%" y2="80%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.3s" repeatCount="indefinite" />
              </line>
              <line x1="15%" y1="45%" x2="35%" y2="55%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.9s" repeatCount="indefinite" />
              </line>
              <line x1="55%" y1="50%" x2="75%" y2="45%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.1s" repeatCount="indefinite" />
              </line>
              <line x1="25%" y1="25%" x2="45%" y2="35%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.6s" repeatCount="indefinite" />
              </line>
              <line x1="45%" y1="60%" x2="65%" y2="55%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.4s" repeatCount="indefinite" />
              </line>
              <line x1="35%" y1="30%" x2="55%" y2="45%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.8s" repeatCount="indefinite" />
              </line>
              <line x1="65%" y1="35%" x2="85%" y2="50%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.2s" repeatCount="indefinite" />
              </line>
              <line x1="12%" y1="70%" x2="28%" y2="85%">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.9s" repeatCount="indefinite" />
              </line>
              <line x1="50%" y1="70%" x2="70%" y2="75%">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.1s" repeatCount="indefinite" />
              </line>
            </g>
            {/* Animated nodes (neurons) */}
            <g fill="#0792d5" filter="url(#glow)">
              <circle cx="10%" cy="20%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30%" cy="40%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="50%" cy="30%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="70%" cy="50%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="90%" cy="35%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="20%" cy="60%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="40%" cy="75%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="60%" cy="65%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="80%" cy="80%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.9s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="15%" cy="45%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="55%" cy="50%" r="5">
                <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="75%" cy="45%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="25%" cy="25%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="45%" cy="35%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="65%" cy="35%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.9s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.9s" repeatCount="indefinite" />
              </circle>
              <circle cx="85%" cy="50%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="35%" cy="55%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="45%" cy="60%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="65%" cy="55%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="12%" cy="70%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="28%" cy="85%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="50%" cy="70%" r="4">
                <animate attributeName="r" values="3;5;3" dur="3.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="70%" cy="75%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.7s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.7s" repeatCount="indefinite" />
              </circle>
              <circle cx="35%" cy="30%" r="4">
                <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="55%" cy="45%" r="5">
                <animate attributeName="r" values="4;6;4" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>
        
        {/* Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white/80 z-10" />
          <img 
            src="/background.png" 
            alt="" 
            className="w-full h-full object-cover"
            style={{ 
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,1))',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,1))'
            }}
          />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-deep/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="mint" className="mb-6">
              AI-Powered Medical Screening
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
              Retina-Based Cognitive Screening
            </h1>
            <p className="text-2xl md:text-3xl text-deep font-display font-medium italic mb-10 leading-relaxed">
              One image. Early insight into cognitive health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/technology" size="lg">
                Learn How It Works
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem & Solution */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Badge variant="outline" className="mb-4">The Challenge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              The Accessibility Gap in Early Detection
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Traditional cognitive assessment pathways—MRI, PET scans, and CSF analysis—are costly, invasive, and often inaccessible in primary care settings.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              This creates a critical barrier to early intervention during the "golden time" when therapeutic strategies may be most effective.
            </p>
          </div>
          <div className="animate-slide-up">
            <Card className="border-2 border-deep/20 bg-white">
              <Badge variant="mint" className="mb-4">Our Approach</Badge>
              <h3 className="text-2xl font-bold text-navy mb-4">
                A Low-Barrier Screening Solution
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Demenpil proposes a non-invasive screening approach using a single standard fundus image—equipment already available in most primary care and ophthalmology clinics.
              </p>
              <p className="text-deep font-medium">
                Designed to complement, not replace, existing diagnostic pathways.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section>
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="mint" className="mb-4">Key Benefits</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Why Demenpil?
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            A scalable, accessible approach to early cognitive risk assessment
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {KEY_BENEFITS.map((benefit, index) => (
            <Feature
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              }
            />
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="mint" className="mb-4">The Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            How It Works
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From image capture to actionable insights in minutes
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <img 
            src="/example.png" 
            alt="How Demenpil Works - Retinal screening process" 
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </Section>

      {/* Partners & Collaborators */}
      <Section>
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="mint" className="mb-4">Partnerships</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Partners & Collaborators
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Working together to advance cognitive screening technology
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo0.png"
                alt="Seoul Bio Hub"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo1.png"
                alt="Partner 1"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo2.jpeg"
                alt="Partner 2"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo3.png"
                alt="Partner 3"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo4.png"
                alt="Partner 4"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo5.png"
                alt="Partner 5"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo6.png"
                alt="Partner 6"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo7.png"
                alt="Partner 7"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo8.png"
                alt="Partner 8"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/LOGO9.png"
                alt="Partner 9"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center p-4">
              <img 
                src="/patners/logo10.png"
                alt="Partner 10"
                className="max-h-20 max-w-full object-contain transition-transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-deep/5 to-transparent border-t border-deep/20">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Learn More?
          </h2>
          <p className="text-gray-600 text-xl mb-8 leading-relaxed">
            This website showcases the scientific foundation behind our innovative screening solution. For detailed IR materials, please contact us via email. To explore the technical background and research, visit the link below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`mailto:${CONTACT_EMAIL}`} size="lg">
              Request IR Materials
            </Button>
            <Button to="/technology" variant="ghost" size="lg">
              View Technology
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Home

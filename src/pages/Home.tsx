import React from 'react'
import { useSEO } from '../utils/seo'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Feature from '../components/Feature'
import Container from '../components/Container'
import Badge from '../components/Badge'
import {
  TAGLINES,
  KEY_BENEFITS,
  HOW_IT_WORKS_STEPS,
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient and subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep to-navy" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(120, 214, 198, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-mint/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge variant="mint" className="mb-6">
              AI-Powered Medical Screening
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-pale mb-6 leading-tight">
              Retina-Based Cognitive Screening
            </h1>
            <p className="text-xl md:text-2xl text-slate mb-4 leading-relaxed">
              One image. Early insight into cognitive health.
            </p>
            <p className="text-lg text-mint font-medium mb-10 italic">
              {TAGLINES.primary}
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
      <Section className="bg-deep/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Badge variant="outline" className="mb-4">The Challenge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
              The Accessibility Gap in Early Detection
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-4">
              Traditional cognitive assessment pathways—MRI, PET scans, and CSF analysis—are costly, invasive, and often inaccessible in primary care settings.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              This creates a critical barrier to early intervention during the "golden time" when therapeutic strategies may be most effective.
            </p>
          </div>
          <div className="animate-slide-up">
            <Card className="border-2 border-mint/20">
              <Badge variant="mint" className="mb-4">Our Approach</Badge>
              <h3 className="text-2xl font-bold text-pale mb-4">
                A Low-Barrier Screening Solution
              </h3>
              <p className="text-slate text-lg leading-relaxed mb-4">
                Demenpil proposes a non-invasive screening approach using a single standard fundus image—equipment already available in most primary care and ophthalmology clinics.
              </p>
              <p className="text-mint font-medium">
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
          <h2 className="text-4xl md:text-5xl font-bold text-pale mb-6">
            Why Retinal Screening?
          </h2>
          <p className="text-slate text-xl max-w-3xl mx-auto leading-relaxed">
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
      <Section className="bg-deep/50">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="mint" className="mb-4">The Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-pale mb-6">
            How It Works
          </h2>
          <p className="text-slate text-xl max-w-3xl mx-auto leading-relaxed">
            From image capture to actionable insights in minutes
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint to-mint/70 flex items-center justify-center text-navy font-bold text-2xl shadow-lg shadow-mint/20">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-pale mb-3">{step.title}</h3>
                    <p className="text-slate text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Evidence Teaser */}
      <Section>
        <Card className="bg-gradient-to-br from-deep to-deep/50 border-2 border-mint/20 max-w-4xl mx-auto text-center">
          <Badge variant="mint" className="mb-4">Research Foundation</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
            Grounded in Science
          </h2>
          <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mint flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate text-lg">Retinal biomarkers correlate with neurodegenerative changes observed in cognitive decline</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mint flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate text-lg">Multiple peer-reviewed studies demonstrate feasibility of retinal imaging for cognitive assessment</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mint flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate text-lg">Emerging evidence supports the retina-brain axis as a non-invasive window into neurological health</p>
            </div>
          </div>
          <Button to="/technology" size="lg">
            See Technology Details
          </Button>
        </Card>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-mint/10 to-transparent border-t border-mint/20">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-pale mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-slate text-xl mb-8 leading-relaxed">
            Discover how Demenpil can support early cognitive screening in your practice or research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`mailto:${CONTACT_EMAIL}`} size="lg">
              Get in Touch
            </Button>
            <Button to="/about" variant="ghost" size="lg">
              About Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Home

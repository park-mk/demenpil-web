import React from 'react'
import { useSEO } from '../utils/seo'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Feature from '../components/Feature'
import { VALUES, TEAM_ROLES, CONTACT_EMAIL, DISCLAIMER } from '../utils/constants'

const About: React.FC = () => {
  useSEO({
    title: 'About Us - Demenpil',
    description: 'Learn about Demenpil\'s mission to make early cognitive screening accessible through AI-powered retinal analysis.',
  })

  return (
    <div>
      <PageHero
        title="About Demenpil"
        subtitle="Making early cognitive screening accessible in primary care through AI analysis of standard retinal photographs"
      />

      {/* Mission */}
      <Section>
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge variant="mint" className="mb-6">Our Mission</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
            Bridging the Accessibility Gap
          </h2>
          <p className="text-slate text-xl leading-relaxed mb-6">
            Our mission is to make early cognitive screening accessible and practical for primary care settings through AI-powered analysis of standard retinal photographs.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            By leveraging existing fundus imaging equipment and cutting-edge machine learning, we aim to provide clinicians with a non-invasive, low-cost screening tool that complements traditional diagnostic pathways and helps identify at-risk patients during the critical early intervention window.
          </p>
        </div>
      </Section>

      {/* What We Do */}
      <Section className="bg-deep/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
              AI-Powered SaMD Concept
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-4">
              Demenpil is developing Software as a Medical Device (SaMD) technology that analyzes standard fundus images to estimate cognitive decline risk.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-4">
              Our approach leverages the retina-brain axis—the anatomical and physiological connection between retinal and cerebral microvasculature—to detect early biomarkers associated with dementia and mild cognitive impairment.
            </p>
            <p className="text-mint font-medium text-lg">
              We complement, not replace, existing diagnostic tools like MRI, PET, and neuropsychological testing.
            </p>
          </div>
          <Card hover className="animate-slide-up">
            <h3 className="text-2xl font-bold text-pale mb-4">Key Focus Areas</h3>
            <ul className="space-y-3">
              {[
                'Standard fundus photography analysis',
                'Multi-biomarker extraction and integration',
                'Explainable AI for clinical transparency',
                'Seamless integration with existing workflows',
                'Privacy-first architecture',
                'Collaboration with clinical partners',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-mint flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="mint" className="mb-4">Our Values</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-pale mb-6">
            Principles That Guide Us
          </h2>
          <p className="text-slate text-xl max-w-3xl mx-auto leading-relaxed">
            Building trust through transparency, collaboration, and scientific rigor
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {VALUES.map((value, index) => (
            <Feature
              key={index}
              title={value.title}
              description={value.description}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-deep/50">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="mint" className="mb-4">Our Team</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-pale mb-6">
            Leadership & Advisors
          </h2>
          <p className="text-slate text-xl max-w-3xl mx-auto leading-relaxed">
            Experienced professionals driving innovation in medical AI
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TEAM_ROLES.map((member, index) => (
            <Card key={index} hover className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mint/20 to-mint/5 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pale mb-2">{member.role}</h3>
              <Badge variant="outline" className="text-xs">{member.name}</Badge>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <Card className="bg-gradient-to-br from-deep to-deep/50 border-2 border-mint/20 max-w-3xl mx-auto text-center">
          <Badge variant="mint" className="mb-6">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-pale mb-4">
            Let's Connect
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-6">
            Interested in learning more about Demenpil? We'd love to hear from you.
          </p>
          <div className="mb-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-mint text-xl font-medium hover:text-mint/80 transition-colors">
              {CONTACT_EMAIL}
            </a>
            <p className="text-slate text-sm mt-2">Typical response time: 24-48 hours</p>
          </div>
          <Button href={`mailto:${CONTACT_EMAIL}`} size="lg">
            Send Us a Message
          </Button>
        </Card>
      </Section>

      {/* Legal Notice */}
      <Section className="bg-deep/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-slate/30">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-slate flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-pale font-semibold mb-2">Important Notice</h3>
                <p className="text-slate text-sm leading-relaxed">
                  {DISCLAIMER} Demenpil is a concept demonstration and research platform. Any screening results shown are for illustrative purposes only and should not be used for medical decision-making.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default About

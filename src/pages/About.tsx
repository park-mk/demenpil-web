import React from 'react'
import { useSEO } from '../utils/seo'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Feature from '../components/Feature'
import { VALUES, CONTACT_EMAIL } from '../utils/constants'

const About: React.FC = () => {
  useSEO({
    title: 'About Us - Demenpil',
    description: 'Learn about Demenpil\'s mission to make early cognitive screening accessible through AI-powered retinal analysis.',
  })

  return (
    <div>
      <PageHero
        title="About Demenpil"
        subtitle="An AI-powered SaMD company developing retinal-based cognitive screening technology"
      />

      {/* Mission */}
      <Section>
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge variant="mint" className="mb-6">Our Mission</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Bridging the Accessibility Gap
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-6">
            Our mission is to make early cognitive screening accessible and practical for primary care settings through AI-powered analysis of standard retinal photographs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            By leveraging existing fundus imaging equipment and cutting-edge machine learning, we aim to provide clinicians with a non-invasive, low-cost screening tool that complements traditional diagnostic pathways and helps identify at-risk patients during the critical early intervention window.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="mint" className="mb-4">Our Values</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Principles That Guide Us
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Building trust through transparency, collaboration, and scientific rigor
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {VALUES.map((value, index) => {
            const icons = [
              // Stakeholder Symbiosis - people network
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>,
              // Privacy by Architecture - lock
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>,
              // Trustworthiness - check badge
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>,
              // Safety First - shield
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>,
            ]
            return (
              <Feature
                key={index}
                title={value.title}
                description={value.description}
                icon={icons[index]}
              />
            )
          })}
        </div>
      </Section>

      {/* Location */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="mint" className="mb-4">Location</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Visit Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Address */}
            <Card className="h-full">
              <h3 className="text-2xl font-bold text-navy mb-6">Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-deep flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      <span className="font-bold text-navy">SEOUL BIO HUB</span><br />
                      South Korea<br />
                      Seoul, Seongbuk-gu<br />
                      12 Oepaesan-ro 3-gil<br />
                      BT-IT Convergence Center, 4F
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-deep flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-deep text-lg hover:text-deep/80 transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.6426849257374!2d127.03440157636198!3d37.60433547197752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbdef269e01e7%3A0x1356d9e0d31e3745!2sBT-IT%20%EC%9C%B5%ED%95%A9%EC%84%BC%ED%84%B0!5e0!3m2!1sen!2skr!4v1737878400000!5m2!1sen!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Demenpil Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section className="bg-gray-50">
        <Card className="bg-gradient-to-br from-deep/10 to-deep/5 border-2 border-deep/20 max-w-3xl mx-auto text-center">
          <Badge variant="mint" className="mb-6">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Interested in learning more about Demenpil? We'd love to hear from you.
          </p>
          <div className="mb-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-deep text-xl font-medium hover:text-deep/80 transition-colors">
              {CONTACT_EMAIL}
            </a>
            <p className="text-gray-600 text-sm mt-2">Typical response time: 24-48 hours</p>
          </div>
          <Button href={`mailto:${CONTACT_EMAIL}`} size="lg">
            Send Us a Message
          </Button>
        </Card>
      </Section>
    </div>
  )
}

export default About

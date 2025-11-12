import React from 'react'
import Container from './Container'

interface PageHeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/50 to-navy pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pale mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  )
}

export default PageHero

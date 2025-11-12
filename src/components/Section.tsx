import React from 'react'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

const Section: React.FC<SectionProps> = ({ children, className = '', containerSize = 'xl', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}

export default Section

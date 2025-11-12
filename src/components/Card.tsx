import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false, style }) => {
  const hoverClasses = hover ? 'hover:shadow-2xl hover:shadow-mint/10 hover:-translate-y-1' : ''
  
  return (
    <div
      className={`bg-deep rounded-2xl p-6 shadow-lg shadow-black/20 transition-all duration-300 ${hoverClasses} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card

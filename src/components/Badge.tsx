import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'mint' | 'outline'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-gray-100 text-navy border border-gray-300',
    mint: 'bg-deep/10 text-deep border border-deep/30',
    outline: 'bg-transparent text-navy border-2 border-gray-300',
  }

  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge

import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'mint' | 'outline'
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-deep text-pale border border-slate',
    mint: 'bg-mint/10 text-mint border border-mint/30',
    outline: 'bg-transparent text-pale border-2 border-slate',
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

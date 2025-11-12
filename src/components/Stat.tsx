import React from 'react'

interface StatProps {
  value: string
  label: string
  description?: string
}

const Stat: React.FC<StatProps> = ({ value, label, description }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-mint mb-2">{value}</div>
      <div className="text-lg font-semibold text-pale mb-1">{label}</div>
      {description && <div className="text-sm text-slate">{description}</div>}
    </div>
  )
}

export default Stat

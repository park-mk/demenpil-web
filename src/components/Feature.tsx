import React from 'react'
import Card from './Card'

interface FeatureProps {
  title: string
  description: string
  icon?: React.ReactNode
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <Card hover>
      {icon && (
        <div className="mb-4 text-deep">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  )
}

export default Feature

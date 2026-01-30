import React from 'react'
import { useSEO } from '../../utils/seo'
import Section from '../../components/Section'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'

const BiologicalSignals: React.FC = () => {
  useSEO({
    title: 'Biological Signals in the Eye - Demenpil',
    description: 'What biological signals are in the eye?',
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Header with back button */}
      <Section className="pt-8 pb-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/technology" 
            className="inline-flex items-center text-deep hover:text-deep/80 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Technology
          </Link>
        </div>
      </Section>

      {/* Article Header */}
      <Section className="pt-8 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="default">Eye</Badge>
            <Badge variant="default">Biomarkers</Badge>
            <Badge variant="default">Signals</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Biological Signals in the Eye: What Can We Detect?
          </h1>

          {/* Meta info */}
          <p className="text-gray-500 text-lg mb-8">
            Demenpil Technology • January, 2026
          </p>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-deep">
            <p className="text-gray-800 text-lg italic mb-2">
              The retina is a window to the brain
            </p>
        
          </div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The human eye is a rich source of biological signals that reflect both ocular and systemic health. Through advanced imaging and AI analysis, we can now detect subtle changes in retinal structure, vasculature, and tissue composition that correlate with various health conditions, including neurodegenerative diseases.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vascular Biomarkers</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Retinal blood vessels provide critical information about cardiovascular and cerebrovascular health. Changes in vessel diameter, tortuosity, and branching patterns can indicate hypertension, diabetes, and increased stroke risk.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Arteriovenous ratio (AVR) reflects vascular health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Vessel tortuosity indicates microvascular damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Branching angles correlate with systemic disease</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Structural Changes</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The retinal nerve fiber layer (RNFL) and ganglion cell complex (GCC) thin progressively in neurodegenerative conditions. These structural changes can be detected years before cognitive symptoms appear.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced OCT imaging allows precise measurement of these layers, but standard fundus photography combined with AI can also detect subtle thickness variations through texture analysis and shadow patterns.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfusion Patterns</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The density and distribution of capillaries in the macula and peripapillary regions reflect tissue oxygenation and metabolic activity. Reduced perfusion is associated with cognitive decline.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The foveal avascular zone (FAZ) area increases in patients with vascular dementia and Alzheimer's disease, potentially due to reduced metabolic demand or primary vascular pathology.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tissue Composition</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Spectral analysis of fundus images reveals information about tissue composition, including the presence of deposits, hemorrhages, and edema. These features can indicate both ocular and systemic pathology.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default BiologicalSignals

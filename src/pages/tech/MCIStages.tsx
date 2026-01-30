import React from 'react'
import { useSEO } from '../../utils/seo'
import Section from '../../components/Section'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'

const MCIStages: React.FC = () => {
  useSEO({
    title: 'Stages of Cognitive Impairment - Demenpil',
    description: 'Understanding MCI: The gray zone between normal aging and dementia',
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
            <Badge variant="default">MCI</Badge>
            <Badge variant="default">Cognitive Decline</Badge>
            <Badge variant="default">Stages</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Stages of Cognitive Impairment and Mild Cognitive Impairment
          </h1>

          {/* Meta info */}
          <p className="text-gray-500 text-lg mb-8">
            Demenpil Technology • January, 2026
          </p>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-deep">
            <p className="text-gray-700 text-lg italic mb-2">
              "A journey of a thousand miles begins with a single step"
            </p>
            <p className="text-gray-500 text-sm">— Lao Tzu</p>
          </div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mild Cognitive Impairment (MCI) represents a transitional state between normal aging and dementia. Understanding the stages of cognitive decline is crucial for early intervention and disease management. This article explores the continuum from normal cognition through MCI to dementia, highlighting the importance of early detection.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Normal Cognitive Aging</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                As people age, some degree of cognitive change is expected and normal. Typical age-related changes include slightly slower processing speed and occasional memory lapses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                However, these changes do not significantly interfere with daily activities. Individuals maintain independence and can compensate for minor difficulties through strategies like list-making or using reminders.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mild Cognitive Impairment (MCI)</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                MCI involves noticeable cognitive changes that exceed normal age-related decline but do not significantly impair daily functioning. People with MCI and their families often notice memory or thinking problems.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">MCI Subtypes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-deep pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Amnestic MCI</h4>
                  <p className="text-gray-600">
                    Primarily affects memory. Individuals may forget recent conversations, appointments, or events. This type is most likely to progress to Alzheimer's disease.
                  </p>
                </div>
                <div className="border-l-4 border-deep pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Non-Amnestic MCI</h4>
                  <p className="text-gray-600">
                    Affects thinking skills other than memory, such as decision-making, language, or visual perception. May progress to other types of dementia.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Progression to Dementia</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Not everyone with MCI develops dementia. Studies suggest that approximately 10-15% of people with MCI progress to dementia each year, compared to 1-2% of the general population.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Factors that may influence progression include:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Severity and type of cognitive impairment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Presence of biomarkers (amyloid, tau)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Genetic risk factors (APOE ε4)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Vascular risk factors</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dementia Stages</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                When MCI progresses to dementia, symptoms become severe enough to interfere with daily life and independence. Dementia typically progresses through stages:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mild Dementia</h4>
                  <p className="text-gray-600 text-sm">
                    Noticeable memory loss, confusion about time and place, difficulty with complex tasks. May still live independently with some support.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Moderate Dementia</h4>
                  <p className="text-gray-600 text-sm">
                    Increasing memory loss, significant confusion, difficulty recognizing people, need assistance with daily activities.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Severe Dementia</h4>
                  <p className="text-gray-600 text-sm">
                    Profound memory loss, inability to communicate effectively, loss of physical abilities, requires full-time care.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Intervention Window</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                MCI represents a critical window for intervention. While no medications are currently approved specifically for MCI, lifestyle interventions—including exercise, cognitive training, social engagement, and management of vascular risk factors—may slow cognitive decline and delay or prevent progression to dementia.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default MCIStages

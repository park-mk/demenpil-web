import React from 'react'
import { useSEO } from '../../utils/seo'
import Section from '../../components/Section'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'

const EarlyDetection: React.FC = () => {
  useSEO({
    title: 'Early Detection - Demenpil',
    description: 'Why early detection matters in identifying MCI',
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
            <Badge variant="default">Early Detection</Badge>
            <Badge variant="default">Screening</Badge>
            <Badge variant="default">Intervention</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Why Early Detection Matters: The Evolution of Identifying MCI
          </h1>

          {/* Meta info */}
          <p className="text-gray-500 text-lg mb-8">
            Demenpil Technology • January, 2026
          </p>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-deep">
            <p className="text-gray-800 text-lg italic mb-2">
              Why now? and Why Demenpil?
            </p>
 
          </div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Early detection of cognitive decline is crucial for intervention, treatment planning, and improving patient outcomes. As disease-modifying therapies for Alzheimer's disease become available, the ability to identify individuals at risk before significant cognitive impairment occurs has never been more important. This article explores the rationale, methods, and challenges of early detection.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Early Intervention</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Neurodegenerative diseases like Alzheimer's begin decades before symptoms appear. By the time a patient receives a dementia diagnosis, substantial irreversible brain damage has already occurred.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Early detection offers several critical advantages:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Access to disease-modifying treatments that work best in early stages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Time for patients and families to plan for the future</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Opportunity to modify lifestyle factors that may slow progression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Enrollment in clinical trials testing new therapies</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Evolution of Detection Methods</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The approach to detecting cognitive decline has evolved significantly over the past decades:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Traditional Cognitive Testing</h4>
                  <p className="text-gray-600 text-sm">
                    Tools like the Mini-Mental State Examination (MMSE) and Montreal Cognitive Assessment (MoCA) have been standard but often miss subtle early changes.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Neuroimaging Advances</h4>
                  <p className="text-gray-600 text-sm">
                    MRI volumetrics, PET imaging for amyloid and tau, and functional connectivity mapping provide detailed views of brain changes but remain expensive and require specialized facilities.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Biomarker Discovery</h4>
                  <p className="text-gray-600 text-sm">
                    CSF analysis and, more recently, blood-based biomarkers offer biological confirmation of disease processes but face accessibility challenges.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">Digital and Remote Assessment</h4>
                  <p className="text-gray-600 text-sm">
                    Smartphone apps, wearables, and AI-based analysis of speech, gait, and daily activities enable continuous monitoring in real-world settings.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges in Population Screening</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                While early detection is desirable, widespread screening faces several hurdles:
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Cost and Accessibility</h4>
                  <p className="text-gray-600">
                    Advanced imaging and biomarker testing remain expensive and unavailable in many regions, limiting their use for routine screening.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">False Positives</h4>
                  <p className="text-gray-600">
                    Not everyone with positive biomarkers will develop dementia, raising concerns about unnecessary anxiety and medicalization of normal aging.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Limited Treatment Options</h4>
                  <p className="text-gray-600">
                    Until recently, few disease-modifying therapies were available, making early diagnosis less actionable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ethical Considerations</h4>
                  <p className="text-gray-600">
                    Disclosure of risk status raises questions about psychological impact, insurance implications, and employment discrimination.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of Retinal Imaging</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Retinal imaging offers a unique opportunity to address many of the challenges in early detection:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span><strong>Non-invasive and accessible:</strong> Standard fundus cameras are already widely available in primary care and optical clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span><strong>Low cost:</strong> Imaging is relatively inexpensive compared to brain scans or biomarker testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span><strong>Repeatable:</strong> Can be performed frequently to monitor changes over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span><strong>Objective:</strong> AI analysis removes subjective interpretation variability</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Directions</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The future of early detection will likely involve multi-modal approaches combining:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">1.</span>
                  <span>Accessible screening tools (retinal imaging, digital cognitive tests, blood biomarkers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">2.</span>
                  <span>Confirmatory testing for positive screens (advanced neuroimaging, CSF analysis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">3.</span>
                  <span>Personalized risk assessment incorporating genetics, lifestyle, and comorbidities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">4.</span>
                  <span>Longitudinal monitoring to track progression and treatment response</span>
                </li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                As new therapies demonstrate efficacy in slowing disease progression, the value of early detection will only increase, making scalable, accessible screening approaches essential.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default EarlyDetection

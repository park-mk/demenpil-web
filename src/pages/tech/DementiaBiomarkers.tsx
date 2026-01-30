import React from 'react'
import { useSEO } from '../../utils/seo'
import Section from '../../components/Section'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'

const DementiaBiomarkers: React.FC = () => {
  useSEO({
    title: 'Dementia Biomarkers - Demenpil',
    description: 'Understanding biomarkers, pathology, and the gap between them',
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
            <Badge variant="default">Dementia</Badge>
            <Badge variant="default">Biomarkers</Badge>
            <Badge variant="default">Pathology</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What Is Dementia? Biomarkers, Pathology, and the Gap Between Them
          </h1>

          {/* Meta info */}
          <p className="text-gray-500 text-lg mb-8">
            Demenpil Technology • January, 2026
          </p>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-deep">
            <p className="text-gray-700 text-lg italic mb-2">
              "Science is a way of thinking much more than it is a body of knowledge"
            </p>
            <p className="text-gray-500 text-sm">— Carl Sagan</p>
          </div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dementia is a clinical syndrome characterized by progressive cognitive decline. Understanding the biological basis of dementia requires knowledge of both its underlying pathology and the biomarkers that can detect disease presence and progression. This article explores the relationship between clinical symptoms, pathological changes, and measurable biomarkers.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Defining Dementia</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Dementia is not a single disease but a syndrome caused by various conditions affecting the brain. It involves decline in memory, thinking, behavior, and the ability to perform everyday activities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Alzheimer's disease is the most common cause of dementia, accounting for 60-80% of cases. Other causes include vascular dementia, Lewy body dementia, and frontotemporal dementia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Biomarkers</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Biomarkers are measurable indicators of disease presence or progression. In Alzheimer's disease, the core biomarkers reflect the defining pathological features:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-deep pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Amyloid-β (Aβ)</h4>
                  <p className="text-gray-600">
                    Accumulation of amyloid plaques in the brain is a hallmark of Alzheimer's. Can be measured via PET imaging or CSF analysis. Amyloid positivity often precedes symptoms by 10-20 years.
                  </p>
                </div>
                <div className="border-l-4 border-deep pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tau Protein</h4>
                  <p className="text-gray-600">
                    Neurofibrillary tangles composed of hyperphosphorylated tau correlate more closely with cognitive decline than amyloid. Tau PET and CSF p-tau are key biomarkers.
                  </p>
                </div>
                <div className="border-l-4 border-deep pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Neurodegeneration</h4>
                  <p className="text-gray-600">
                    Brain atrophy, glucose hypometabolism (FDG-PET), and neuronal loss markers (CSF total tau, NfL) indicate ongoing neuronal damage.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The AT(N) Framework</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The National Institute on Aging and Alzheimer's Association proposed the AT(N) framework to classify individuals based on biomarker status:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1 font-bold">A:</span>
                  <span>Amyloid biomarkers (PET or CSF Aβ42)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1 font-bold">T:</span>
                  <span>Tau biomarkers (PET or CSF p-tau)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1 font-bold">(N):</span>
                  <span>Neurodegeneration markers (MRI, FDG-PET, CSF total tau)</span>
                </li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                This framework allows researchers and clinicians to classify disease stage independent of clinical symptoms, enabling earlier and more precise diagnosis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Blood-Based Biomarkers</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Recent advances have made blood-based biomarkers increasingly viable for dementia screening:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Plasma Aβ42/40 ratio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Plasma p-tau181 and p-tau217</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>Neurofilament light chain (NfL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">•</span>
                  <span>GFAP (glial fibrillary acidic protein)</span>
                </li>
              </ul>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                While less invasive than lumbar puncture or PET imaging, blood biomarkers currently serve best as screening tools, with positive results requiring confirmation through more established methods.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Gap: Pathology vs. Symptoms</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                A critical challenge in dementia research is the disconnect between pathological changes and clinical symptoms. Key observations:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Asymptomatic Pathology:</span> Many individuals have significant amyloid burden but remain cognitively normal. This "preclinical" stage can last decades.
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Cognitive Reserve:</span> Higher education, mental stimulation, and social engagement may provide resilience against pathological damage.
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Mixed Pathologies:</span> Post-mortem studies reveal that most elderly individuals with dementia have multiple pathologies (Alzheimer's + vascular + Lewy body), complicating biomarker interpretation.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Retinal Biomarkers</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The retina, as an extension of the central nervous system, offers unique opportunities for non-invasive biomarker detection. Retinal changes associated with dementia include vessel alterations, RNFL thinning, and amyloid deposits—all potentially detectable through fundus photography and AI analysis.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default DementiaBiomarkers

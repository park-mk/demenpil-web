import React from 'react'
import { useSEO } from '../../utils/seo'
import Section from '../../components/Section'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'

const TrustworthyAI: React.FC = () => {
  useSEO({
    title: 'What Is Trustworthy AI - Demenpil',
    description: 'AI는 언제 신뢰할 수 있는가: 정확도와 불확실성에 대하여',
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
            <Badge variant="default">AI</Badge>
            <Badge variant="default">Trustworthiness</Badge>
            <Badge variant="default">Uncertainty</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What Is Trustworthy AI: Accuracy or Uncertainty?
          </h1>

          {/* Meta info */}
          <p className="text-gray-500 text-lg mb-8">
            Demenpil Technology • January, 2026
          </p>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-deep">
            <p className="text-gray-700 text-lg italic mb-2">
              "To know what you know and what you do not know, that is true knowledge"
            </p>
            <p className="text-gray-500 italic text-sm">—Confucius</p>
          </div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Trustworthy AI in healthcare requires more than high accuracy. It demands transparency, interpretability, and the ability to quantify uncertainty. This article explores how our multi-stage AI pipeline balances accuracy with uncertainty estimation, enabling clinicians to make informed decisions with confidence.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Stage Workflow</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our AI pipeline processes standard fundus photographs through five integrated stages, each designed to extract maximum clinical value while maintaining interpretability and trust.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The entire workflow—from image upload to risk score generation—completes in minutes, enabling efficient clinical integration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stage 1: Preprocessing & Quality Control</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Quality assessment and enhancement ensure consistent analysis across different imaging devices and conditions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>Automatic quality scoring (blur, contrast, illumination)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>Color normalization and artifact removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>Spatial calibration and field-of-view standardization</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stage 2: Anatomical Segmentation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Deep learning models identify and isolate key structures with precision comparable to expert clinicians.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Retinal Vessels</h4>
                  <p className="text-sm text-gray-600">Arteries, veins, capillaries</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Optic Disc</h4>
                  <p className="text-sm text-gray-600">Neuroretinal rim analysis</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Macula</h4>
                  <p className="text-sm text-gray-600">Foveal avascular zone</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">RNFL</h4>
                  <p className="text-sm text-gray-600">Nerve fiber layer thickness</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stage 3: Multi-Metric Extraction</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Quantitative biomarkers are extracted from segmented structures, creating a comprehensive feature vector for each image.
              </p>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <span className="font-semibold text-gray-900">Vessel Morphology:</span> Tortuosity, diameter, branching angles, density maps
                </li>
                <li className="text-gray-600">
                  <span className="font-semibold text-gray-900">Structural Metrics:</span> RNFL thickness proxies, GC-IPL volume estimates
                </li>
                <li className="text-gray-600">
                  <span className="font-semibold text-gray-900">Perfusion Indicators:</span> FAZ area, capillary density, avascular regions
                </li>
                <li className="text-gray-600">
                  <span className="font-semibold text-gray-900">Texture Features:</span> Fractal dimension, spatial frequency, entropy
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stage 4: Ensemble AI Estimation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Multiple trained models generate independent predictions, which are combined using ensemble methods for robust risk estimation.
              </p>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Model Architecture</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">CNN-based classifier</span>
                    <span className="text-deep font-semibold">35% weight</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Gradient boosting (XGBoost)</span>
                    <span className="text-deep font-semibold">30% weight</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Attention-based transformer</span>
                    <span className="text-deep font-semibold">25% weight</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Logistic regression baseline</span>
                    <span className="text-deep font-semibold">10% weight</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Final output: 0-100% risk score for cognitive decline (MCI/Alzheimer's)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stage 5: XAI Heatmap & Summary</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Explainable AI generates spatial heatmaps and clinical-style summaries, ensuring transparency and clinical interpretability.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Visualization Outputs</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-deep">→</span>
                    <span>Color-coded attention heatmap overlay</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-deep">→</span>
                    <span>Region-specific contribution scores</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-deep">→</span>
                    <span>Structured clinical report (PDF/JSON)</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-deep">→</span>
                    <span>Confidence intervals and uncertainty quantification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Trust Challenge</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                In medical AI, high accuracy alone is insufficient. Clinicians need to understand when the model is certain versus when it is guessing. Our approach addresses this through:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1 font-bold">1.</span>
                  <div>
                    <span className="font-semibold text-gray-900">Ensemble Diversity:</span> Different model architectures capture complementary patterns, and disagreement signals uncertainty.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1 font-bold">2.</span>
                  <div>
                    <span className="font-semibold text-gray-900">Calibration:</span> Predicted probabilities are calibrated to match real-world frequencies, ensuring meaningful confidence scores.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1 font-bold">3.</span>
                  <div>
                    <span className="font-semibold text-gray-900">Explainability:</span> Attention maps and feature importance allow clinicians to validate predictions against their own expertise.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Clinical Integration</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Trustworthy AI becomes truly useful when it integrates seamlessly into existing workflows. Our system provides:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>Real-time processing (under 2 minutes per image)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>DICOM/HL7 compatibility for EHR integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>Clinician-friendly reports with actionable recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep mt-1">✓</span>
                  <span>Audit trails and compliance documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default TrustworthyAI

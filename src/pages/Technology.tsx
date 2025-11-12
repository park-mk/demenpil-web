import React, { useState } from 'react'
import { useSEO } from '../utils/seo'
import Section from '../components/Section'
import Card from '../components/Card'
import Badge from '../components/Badge'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { CORE_BIOMARKERS, REFERENCES, DISCLAIMER } from '../utils/constants'

const Technology: React.FC = () => {
  const [showHeatmap, setShowHeatmap] = useState(false)

  useSEO({
    title: 'Technology - Demenpil',
    description: 'Explore the science behind Demenpil\'s retinal-based cognitive screening technology.',
  })

  return (
    <div>
      <PageHero
        title="Technology Overview"
        subtitle="Retina–Brain Axis, Core Biomarkers, and the AI Screening Pipeline"
      />

      {/* Retina-Brain Axis */}
      <Section>
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge variant="mint" className="mb-6">The Science</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
            The Retina–Brain Axis
          </h2>
          <div className="space-y-6 text-slate text-lg leading-relaxed">
            <p>
              The retina is embryologically and anatomically an extension of the central nervous system. As such, it shares structural, vascular, and biochemical characteristics with the brain, making it a unique non-invasive window into neurological health.
            </p>
            <p>
              Emerging research demonstrates that microvascular changes, neurodegeneration, and structural alterations in the retina often parallel pathological processes in the brain. In Alzheimer's disease and mild cognitive impairment (MCI), retinal thinning, reduced vascular density, and altered vessel morphology have been observed—correlating with cognitive decline and neuroimaging findings.
            </p>
            <p>
              By analyzing standard fundus photographs with advanced AI techniques, Demenpil aims to detect these subtle retinal biomarkers that may indicate increased risk for cognitive impairment. This approach leverages the accessibility of retinal imaging to provide an early screening tool that complements traditional neurological assessments.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Biomarkers */}
      <Section className="bg-deep/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="mint" className="mb-4">Biomarkers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
              Core Retinal Biomarkers
            </h2>
            <p className="text-slate text-xl leading-relaxed max-w-3xl mx-auto">
              Multi-dimensional features extracted from fundus images
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_BIOMARKERS.map((biomarker, index) => (
              <Card key={index} hover className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-pale font-medium text-sm">{biomarker}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* AI Pipeline */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="mint" className="mb-4">AI Pipeline</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
              From Image to Insight
            </h2>
            <p className="text-slate text-xl leading-relaxed max-w-3xl mx-auto">
              A multi-stage analysis workflow delivering interpretable risk scores
            </p>
          </div>

          {/* Pipeline Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                step: '01',
                title: 'Image Preprocessing',
                description: 'Quality assessment, normalization, and enhancement of input fundus images to ensure consistent analysis across different imaging devices and conditions.',
              },
              {
                step: '02',
                title: 'Anatomical Segmentation',
                description: 'Deep learning models identify and isolate key structures: retinal vessels, optic disc, macula, and foveal avascular zone (FAZ).',
              },
              {
                step: '03',
                title: 'Multi-Metric Extraction',
                description: 'Quantitative biomarker extraction including vessel tortuosity, diameter, density, RNFL thickness proxies, and perfusion-related features.',
              },
              {
                step: '04',
                title: 'Ensemble AI Estimation',
                description: 'Multiple trained models generate probability scores, which are combined using ensemble methods to produce a 0–100% risk estimate for cognitive decline.',
              },
              {
                step: '05',
                title: 'XAI Heatmap & Summary',
                description: 'Explainable AI generates spatial heatmaps highlighting regions contributing to the risk score, along with a clinical-style summary report.',
              },
            ].map((item, index) => (
              <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint/20 to-mint/5 border-2 border-mint/30 flex items-center justify-center">
                      <span className="text-mint font-bold text-lg">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-pale mb-2">{item.title}</h3>
                    <p className="text-slate leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Note */}
          <Card className="bg-mint/5 border border-mint/20">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-mint flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate leading-relaxed">
                <strong className="text-pale">Demo visualization only:</strong> All pipeline outputs, including risk scores and heatmaps, are illustrative concept demonstrations and not for clinical use.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Mock Visualization */}
      <Section className="bg-deep/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <Badge variant="mint" className="mb-4">Visualization Demo</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
              Explainable AI Output
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Example heatmap overlay showing regions of interest (illustrative only)
            </p>
          </div>

          <Card className="overflow-hidden">
            {/* Image container with toggle */}
            <div className="relative aspect-square bg-navy/50 rounded-xl overflow-hidden mb-4">
              {/* Placeholder for fundus image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-slate/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p className="text-slate text-sm">
                    {showHeatmap ? 'Heatmap Overlay Active' : 'Standard Fundus Image'}
                  </p>
                </div>
              </div>
              {showHeatmap && (
                <div className="absolute inset-0 bg-gradient-radial from-mint/20 via-transparent to-transparent" />
              )}
            </div>

            {/* Toggle button */}
            <div className="flex justify-center mb-4">
              <Button
                onClick={() => setShowHeatmap(!showHeatmap)}
                variant="ghost"
                size="sm"
              >
                {showHeatmap ? 'Hide Heatmap' : 'Show Heatmap Overlay'}
              </Button>
            </div>

            {/* Demo note */}
            <div className="bg-navy/30 rounded-xl p-4 border border-slate/20">
              <p className="text-slate text-sm text-center">
                <strong className="text-mint">Demo visualization — not for clinical use.</strong>
                <br />
                Actual implementation would display real fundus photographs with AI-generated attention maps.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* References */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="mint" className="mb-4">Research Foundation</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-pale mb-6">
              Selected References
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              Representative studies supporting the retina-brain connection in cognitive screening
            </p>
          </div>

          <Card>
            <ol className="space-y-4">
              {REFERENCES.map((reference, index) => (
                <li key={index} className="flex gap-3 text-slate leading-relaxed">
                  <span className="text-mint font-semibold flex-shrink-0">{index + 1}.</span>
                  <span>{reference}</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="bg-deep/30">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-slate/30">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-slate flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-pale font-semibold mb-2">Medical Disclaimer</h3>
                <p className="text-slate text-sm leading-relaxed">
                  {DISCLAIMER} All technology descriptions, biomarker analyses, and screening outputs presented on this site are for demonstration and research purposes only. Consult qualified healthcare professionals for medical advice and diagnosis.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Technology

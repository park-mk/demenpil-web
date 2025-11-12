export const COMPANY_NAME = 'Demenpil'
export const TAGLINE = 'AI SaMD that estimates dementia/MCI risk in minutes from a single standard fundus image.'

export const TAGLINES = {
  primary: 'Decode the Eye. Predict the Mind.',
  secondary: 'AI-Powered Retinal Intelligence.',
  tertiary: 'Where Vision Meets Neurology — With Precision.',
}

export const CONTACT_EMAIL = 'hello@demenpil.com'

export const DISCLAIMER = 'This site is for demonstration and informational purposes only and does not provide medical diagnosis.'

export const FOOTER_DISCLAIMER = 'Not a medical device. For demonstration and informational purposes only.'

export const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Technology', path: '/technology' },
]

export const KEY_BENEFITS = [
  {
    title: 'Non-Invasive & Low Cost',
    description: 'Standard fundus photography eliminates the need for expensive imaging modalities or invasive procedures.',
  },
  {
    title: 'Minute-Scale Assessment',
    description: 'Rapid analysis delivers preliminary screening results in minutes, enabling efficient clinical workflows.',
  },
  {
    title: 'Compatible with Standard Cameras',
    description: 'Works with existing fundus imaging equipment already deployed in primary care and ophthalmology clinics.',
  },
  {
    title: 'Cloud-Ready Workflow',
    description: 'Conceptual architecture supports secure, scalable deployment for multi-site screening programs.',
  },
  {
    title: 'XAI Heatmap Visualization',
    description: 'Explainable AI overlay highlights regions of interest, fostering trust and clinical understanding.',
  },
  {
    title: 'Complements Existing Modalities',
    description: 'Designed as a screening aid to complement—not replace—established diagnostic pathways.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Fundus Capture',
    description: 'Acquire a standard fundus photograph using existing clinical imaging equipment.',
  },
  {
    step: 2,
    title: 'Preprocess & Segmentation',
    description: 'Automated pipeline isolates key anatomical structures: vessels, optic disc, and macular region.',
  },
  {
    step: 3,
    title: 'Multi-Metric Extraction',
    description: 'Extract quantitative biomarkers related to vessel morphology, RNFL thickness, and perfusion proxies.',
  },
  {
    step: 4,
    title: 'Ensemble Estimation',
    description: 'AI model ensemble generates a 0–100% risk score for cognitive decline (concept demo).',
  },
  {
    step: 5,
    title: 'Visualization & Summary',
    description: 'Heatmap overlay and clinical-style summary provide interpretable, actionable insights (illustrative).',
  },
]

export const CORE_BIOMARKERS = [
  'RNFL thinning / volume change',
  'GC-IPL atrophy (macula)',
  'OCTA capillary density↓ & FAZ↑',
  'Vessel tortuosity / diameter / density',
  'Optic disc morphology features',
  'Peripapillary & macular vessel segmentation',
]

export const VALUES = [
  {
    title: 'Clinical Credibility',
    description: 'Grounded in peer-reviewed research and validated biomarkers.',
  },
  {
    title: 'Privacy by Design',
    description: 'Data security and patient confidentiality at the core of our architecture.',
  },
  {
    title: 'Explainability',
    description: 'Transparent AI with interpretable outputs for clinical decision support.',
  },
  {
    title: 'Partnership',
    description: 'Collaborating with clinicians, researchers, and healthcare systems.',
  },
]

export const TEAM_ROLES = [
  { role: 'CEO', name: 'Leadership' },
  { role: 'Strategic Advisor, Investor Relations (IR)', name: 'Advisory' },
  { role: 'Operating Partner (Advisory)', name: 'Advisory' },
  { role: 'Chief Technology Officer', name: 'Technology' },
  { role: 'Clinical Director', name: 'Medical' },
  { role: 'Head of Research', name: 'Research' },
]

export const REFERENCES = [
  'Ikram MK, et al. Retinal pathology as biomarker for cognitive impairment and Alzheimer\'s disease. J Neurol Neurosurg Psychiatry. 2012.',
  'Cheung CY, et al. Retinal vascular fractal dimension and its relationship with cognitive impairment. J Alzheimers Dis. 2014.',
  'Santos CY, et al. Pathophysiologic relationship between Alzheimer\'s disease, cerebrovascular disease, and cardiovascular risk: A review. J Alzheimers Dis. 2017.',
  'Bulut M, et al. Evaluation of optical coherence tomography angiographic findings in Alzheimer\'s type dementia. Br J Ophthalmol. 2018.',
  'Querques G, et al. Functional and morphological changes of the retinal vessels in Alzheimer\'s disease and mild cognitive impairment. Sci Rep. 2019.',
  'Yoon SP, et al. Retinal microvascular and neurodegenerative changes in Alzheimer\'s disease and mild cognitive impairment. Alzheimers Res Ther. 2019.',
  'Javaid FZ, et al. Retinal biomarkers for Alzheimer\'s disease: a systematic review. J Neurol. 2020.',
]

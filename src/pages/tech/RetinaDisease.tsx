import React from 'react'
import { useSEO } from '../../utils/seo'
import Section from '../../components/Section'
import Badge from '../../components/Badge'
import { Link } from 'react-router-dom'

const RetinaDisease: React.FC = () => {
  useSEO({
    title: 'Retinal Images and Disease Insights - Demenpil',
    description: 'How retinal images provide insights into over a thousand disease processes',
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
            <Badge variant="default">Retina</Badge>
            <Badge variant="default">Neuroscience</Badge>
            <Badge variant="default">Medical Imaging</Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Retinal images could provide insights into over a thousand disease processes
          </h1>

          {/* Meta info */}
          <p className="text-gray-500 text-lg mb-8">
            Demenpil Technology • January, 2026
          </p>

          {/* Quote */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-deep">
            <p className="text-gray-700 text-lg italic mb-2">
              "The future is already here — it's just not evenly distributed"
            </p>
            <p className="text-gray-500 italic text-sm">— William Gibson</p>
          </div>

          {/* Abstract */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              What if a single fundus photograph could predict systemic diseases? With advances in AI and medical imaging technology, the concept that "the eyes reveal whole-body health" is becoming increasingly real.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              As research rapidly expands on using fundus (retinal) images to predict disease risk over the coming years, the medical diagnostic paradigm is shifting from treatment-centered to prevention-centered care.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the Eye?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The retina is almost the only part of the human body where blood vessels can be directly observed. We can see how arteries, veins, and capillaries are distributed, assess vessel diameter and elasticity, and detect minute hemorrhages or deformities—all of it is visible. This means the retina serves as a microcosm of systemic vascular health.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Physicians have long used the eye to gauge disease progression in patients with diabetes, hypertension, and atherosclerosis. But now, with AI entering the field, the story is changing.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                AI discovers patterns humans might miss. By learning from millions of fundus images, it's identifying connections not only to ocular diseases but also to cardiovascular disease, kidney disease, neurodegenerative disorders, anemia, and endocrine conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fascinating Research Examples</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Several studies have shown that models using fundus images can predict 10-year cardiovascular disease risk with high accuracy. Other research has confirmed that retinal microvascular density correlates with cognitive decline. Some experiments have even attempted to predict anemia from fundus images alone.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The message is clear: the retina is not just part of the eye—it's a mirror reflecting whole-body health.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Neurodegenerative Diseases</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">Alzheimer's, MCI, Parkinson's:</span> Research on neurodegenerative diseases accelerated after 2020. Studies using OCT/OCTA and fundus images have observed reduced retinal nerve layer thickness and altered microvascular density in AD and MCI patient groups, with AI classification models reporting AUCs around 0.80. (e.g., "OCTA-based AD/MCI differentiation studies" circa 2020, "AI-retinal imaging neurodegeneration meta-analysis/reviews" 2025)
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">Parkinson's Disease:</span> While not as extensively standardized as AD data, recent studies (2020s) are accumulating research attempting to capture Parkinson's-related signals using fundus/vascular imaging features (vessel curvature, density, etc.). The general tone is "promising but contingent on data and external validation," with performance metrics varying widely across studies (frequently noted in reviews).
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-semibold">Multiple Sclerosis (MS):</span> In MS, research consistently uses OCTA to quantify microvascular indicators and compare vascular changes in disease groups. Reviews from the 2020s introduce OCTA as "a complementary indicator beyond structural atrophy (OCT) for observing vascular density," with recent studies discussing extensions like MS/NMOSD differentiation. (e.g., "OCTA biomarkers in MS" reviews 2020, "MS/NMOSD OCTA biomarkers" 2025)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Psychiatric Disorders</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">Schizophrenia and Bipolar Disorder:</span> Psychiatric illness research is based on observations that "retinal vascular abnormalities (microvascular and blood flow patterns) may accompany these conditions." For example, deep learning models using fundus/retinal vascular images for schizophrenia (SCZ) classification have reported AUCs around 0.98 (in cohorts often described as several hundred subjects), and similar model research for bipolar disorder has been published (including multi-center studies).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cardiovascular Disease</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">CVD Overall:</span> Cardiovascular applications represent one of the "best-documented" areas of fundus AI. A landmark 2018 study (e.g., "Predicting cardiovascular risk factors from fundus photographs") reported that certain risk factors like sex (AUC ~0.97) and smoking (AUC ~0.71) could be estimated from fundus images alone, with subsequent research expanding to event prediction and risk scoring.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">Ischemic Stroke / Cerebrovascular Events:</span> The fundus and cerebral vasculature share similar microvascular structures, leading to the frequent assertion that "the retina is a window to the brain." Recent studies have attempted to predict 5-10 year stroke incidence using fundus-based models, with external validation reporting AUCs around 0.79-0.83. (e.g., "Retinal imaging for 5/10-year stroke prediction" circa 2025)
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">Coronary Artery Calcification (CAC):</span> CAC, measured via radiation-based imaging, is a strong cardiovascular risk indicator. Research attempting to predict it from fundus images has emerged. Studies like RetiCAC (2021) have reported that fundus-based scores can improve risk stratification for cardiovascular disease.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <span className="font-semibold">Biological Age Estimation ("Retinal Age/BA"):</span> Since 2022, research has been active in estimating biological age (or "retinal age") from fundus photographs, with the gap between retinal age and chronological age correlating with mortality and disease risk. For example, studies using large cohorts (e.g., UK Biobank) have evaluated risk stratification utility from "fundus-based biological age estimation and morbidity/mortality stratification."
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="font-semibold">10-Year CVD Risk (Chinese Cohorts, etc.):</span> Studies "calculating 10-year cardiovascular risk from fundus images" provide quite specific performance figures. For instance, research published in 2021-2022 reports internal validation AUC ~0.97 and external validation AUC ~0.87 (with development datasets mentioned at hundreds of thousands of samples), explaining the approach of combining with traditional risk factors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Diseases</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Liver Disease (Liver Cancer, Cirrhosis, NAFLD, etc.)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hepatobiliary diseases strongly demonstrate the concept of "screening systemic organ disease from eye images." A 2021 prospective multi-center study on "screening hepatobiliary diseases using ocular images (fundus + slit lamp)" showed disease-specific AUCs varying: liver cancer in the 0.9+ range, cirrhosis 0.8-0.9, NAFLD 0.6-0.7 (illustrating the difficulty spectrum across diseases).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lung Tumors (Pulmonary Nodules/Lung Cancer Screening Support)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uniquely, a 2023 study attempted to detect lung tumor signals using "scleral (white of the eye) images." The research reported that scleral-based AI achieved AUC approximately 0.90 (e.g., around 0.897) for distinguishing benign vs. malignant lung nodules, discussing potential as a supplementary tool where LDCT is challenging.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Anemia</h3>
                  <p className="text-gray-600 leading-relaxed">
                    For anemia, conjunctival (inner eyelid) images are more commonly used than fundus. Recent smartphone-based conjunctival imaging + deep learning studies for anemia classification have emerged, with some claiming high performance (accuracy/classification power). However, sensitivity to lighting, skin tone, and imaging standardization is frequently mentioned, noting high variability in external validation and real-world application. (e.g., "Smartphone conjunctival imaging for anemia detection" 2025, "Conjunctival/scleral imaging for anemia classification" 2025)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kidney Disease (CKD)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Given kidney disease's connection to microvascular changes, fundus-based prediction has been researched. A 2025 study on "predicting advanced CKD from fundus images" reported AUC around 0.87 (e.g., 0.868) using EfficientNet-family models, with fairly specific performance figures.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thyroid Disease (Hyperthyroidism)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A 2023 multi-center study reported that fundus photograph-based deep learning could detect hyperthyroidism with AUC around 0.82-0.85 and accuracy 0.74-0.80. "Low-cost screening without blood tests" is the key message.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarcopenia</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While sarcopenia research primarily uses body imaging (CT or DXA), oculomics research exists from the perspective that "eye (retinal/external eye) indicators reflect aging and systemic status." A 2022 paper organized how retinal imaging and eyelid examination-like ophthalmic observations may correlate with sarcopenia signs, discussing predictive modeling possibilities (though this area hasn't yet reached widely agreed-upon standard performance figures).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Polycystic Ovary Syndrome (PCOS)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    PCOS research notably uses scleral (white of the eye) rather than fundus images. A 2022 "scleral image-based PCOS auxiliary diagnosis deep learning" study reported mean AUC around 0.979 and accuracy ~0.93, explaining that the model can learn scleral change patterns.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                The eye is no longer just a visual organ. Increasingly, research views the retina as a data hub for whole-body health.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                As AI technology advances, we may soon enter an era where health status is predicted and managed even before visiting a hospital.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                And the starting point is closer than we think—within the eyes we use every day.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default RetinaDisease

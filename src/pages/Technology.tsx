import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../utils/seo'
import Section from '../components/Section'
import Badge from '../components/Badge'
import PageHero from '../components/PageHero'

const Technology: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  useSEO({
    title: 'Technology - Demenpil',
    description: 'Explore the science behind Demenpil\'s retinal-based cognitive screening technology.',
  })

  const techPosts = [
    {
      id: 1,
      category: 'Academic Basis',
      title: 'Retinal images could provide insights into over a thousand disease processes',
      date: 'January, 2026',
      link: '/technology/retina-disease'
    },
    {
      id: 2,
      category: 'AI Technology',
      title: 'What Is Trustworthy AI: Accuracy or Uncertainty?',
      date: 'January, 2026',
      link: '/technology/trustworthy-ai'
    },
    {
      id: 3,
      category: 'Biological Signals',
      title: 'What\'s in Our Eyes? The Biological Signals Behind Vision',
      date: 'January, 2026',
      link: '/technology/biological-signals'
    },
    {
      id: 4,
      category: 'MCI',
      title: 'Stages of Cognitive Impairment and Mild Cognitive Impairment',
      date: 'January, 2026',
      link: '/technology/mci-stages'
    },
    {
      id: 5,
      category: 'Biomarkers',
      title: 'What Is Dementia? Biomarkers, Pathology, and the Gap Between Them',
      date: 'January, 2026',
      link: '/technology/dementia-biomarkers'
    },
    {
      id: 6,
      category: 'Early Detection',
      title: 'Why Early Detection Matters: The Evolution of Identifying MCI',
      date: 'January, 2026',
      link: '/technology/early-detection'
    }
  ]

  const categories = ['All', 'Academic Basis', 'AI Technology', 'Biological Signals', 'MCI', 'Biomarkers', 'Early Detection']
  
  const filteredPosts = techPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <PageHero
        title="Technology Insights"
        subtitle="Exploring the science and innovation behind retinal-based cognitive screening"
      />

      {/* Main Content with Sidebar */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Category Filter */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-8">
                <h3 className="text-lg font-bold text-navy mb-4">CATEGORY</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-deep text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <svg 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by title or category"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-deep/20 focus:border-deep transition-all text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Total Count */}
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Total: <span className="font-bold text-navy">{filteredPosts.length}</span>
                </p>
              </div>

              {/* Article List */}
              <div className="space-y-4">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={post.link}
                      className="block bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <div className="space-y-3">
                        <Badge variant="mint" className="text-xs">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-bold text-navy leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                    <p className="text-gray-400 text-sm mt-2">Try different keywords or select another category</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-deep/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            For detailed technical documentation, research papers, or partnership inquiries, reach out to our team.
          </p>
          <a 
            href="mailto:contact-us@demenpil.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-deep text-white font-medium rounded-xl hover:bg-deep/90 transition-all shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </div>
  )
}

export default Technology

import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

const DEFAULT_SEO = {
  title: 'Demenpil - Retina-Based Cognitive Screening',
  description: 'AI SaMD that estimates dementia/MCI risk in minutes from a single standard fundus image.',
  image: '/og-image.png',
}

export const useSEO = ({ title, description, image }: SEOProps = {}) => {
  useEffect(() => {
    // Update title
    document.title = title || DEFAULT_SEO.title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || DEFAULT_SEO.description)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title || DEFAULT_SEO.title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description || DEFAULT_SEO.description)
    }

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) {
      ogImage.setAttribute('content', image || DEFAULT_SEO.image)
    }
  }, [title, description, image])
}

export default useSEO

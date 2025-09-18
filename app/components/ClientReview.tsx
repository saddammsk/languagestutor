import Image from 'next/image'
import React from 'react'
import { urlFor } from '../lib/sanityImage'
import { useLocale } from 'next-intl'

interface CourseRef {
  _id: string
  title: string | { en: string; ar: string }
  price: number
  review: number
  slug: string
}

interface Review {
  _id: string
  user: string | { en: string; ar: string }
  userCourse: string | { en: string; ar: string }
  userAvatar?: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  location?: string | { en: string; ar: string }
  rating?: number | null  
  comment: string | { en: string; ar: string }
  createdAt: string
  courseRefs?: CourseRef[]
  formattedDate?: string
}

interface Props {
  reviews: Review[]
  maxCards?: number
  locale?: string
}

const ClientReview = ({ reviews, maxCards = 30 }: Props) => {
  const displayedReviews = reviews.slice(0, maxCards)
  const locale = useLocale()


  const getLocalizedText = (text: string | { en: string; ar: string }): string => {
    if (typeof text === 'string') return text
    if (text && typeof text === 'object') {
      return text[locale as keyof typeof text] || text.en || text.ar || ''
    }
    return '' 
  }

  const getFallbackInitials = (name: string | { en: string; ar: string }) => {
    const nameString = getLocalizedText(name)
    const names = nameString.split(' ')
    return names.map(n => n[0]).join('').toUpperCase()
  }

  const renderRating = (rating?: number | null) => {
    const safeRating = rating ?? 0 
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src={"/star.png"}
            width={16}
            height={16}
            className="w-4 h-4"
            alt={i < safeRating ? "Filled star" : "Empty star"}
          />
        ))}
        <span className="sr-only">Rating: {safeRating} out of 5</span>
      </div>
    )
  }

  return (
    <div className="w-full">
      {displayedReviews.map((review) => {
        const userName = getLocalizedText(review.user)
        const userCourse = getLocalizedText(review.userCourse)
        const comment = getLocalizedText(review.comment)
        const location = review.location ? getLocalizedText(review.location) : null
        return (
          <div 
            key={review._id} 
            className="w-full border mb-5 border-neutral3 bg-white p-6 rounded-xl inline-block break-inside-avoid"
          >
            <div className="w-full flex gap-3">
              <div className="relative">
                <div className="rounded-full min-w-12 h-12 bg-gray-100 flex items-center justify-center">
                  {review.userAvatar ? (
                    <Image
                      src={urlFor(review.userAvatar).width(48).height(48).url()}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                      alt={userName}
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-neutral-500 font-medium text-sm">
                      {getFallbackInitials(review.user)}
                    </span>
                  )}
                </div>

                {location && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs text-blue-600 font-medium" title={location}>
                        {location.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full">
                <div className="flex items-center gap-1">
                  <h3 className="text-base font-semibold text-neutral2">
                    {userName}
                  </h3>
                  <Image 
                    src="/verified-user.svg" 
                    width={16} 
                    height={16} 
                    className="w-4 h-4" 
                    alt="Verified user" 
                  />
                </div>
                <p className="text-base text-gray5 font-medium">
                  {userCourse}
                </p>
                {review.formattedDate && (
                  <p className="text-xs text-gray-400 mt-1">
                    {review.formattedDate}
                  </p>
                )}
              </div>
            </div>

            <p className="md:text-base text-sm font-medium text-neutral2 my-5">
              {comment}
            </p>

            {review.rating && renderRating(review.rating)}

            {review.courseRefs && review.courseRefs.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {review.courseRefs.map(course => (
                    <span 
                      key={course._id}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
                      title={getLocalizedText(course.title)}
                    >
                      {getLocalizedText(course.title)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ClientReview
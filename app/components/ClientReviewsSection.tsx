import React from 'react'
import ClientReview from './ClientReview'
import { sanityClient } from '../lib/sanity'
import { reviewsQuery } from '../lib/queries'
import { getLocale } from 'next-intl/server'



export default async function ClientReviewsSection() {
  const locale = await getLocale()
  const reviews = await sanityClient.fetch(reviewsQuery(locale).query, reviewsQuery(locale).params)



  return (
    <section className="lg:pb-20 pb-10 w-full">
    <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
      <div className="w-full md:columns-3 columns-1">
        <ClientReview reviews={reviews} maxCards={30}/>
      </div>
      </div>
    </section>
  )
}
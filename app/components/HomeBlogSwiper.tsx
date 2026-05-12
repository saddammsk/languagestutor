'use client'
import React, { useState, useEffect } from 'react'
import Swiper from './common/Swiper'
import Image from 'next/image'
import { allBlogQuery, allBlogQueryFallback } from '../lib/queries'
import { sanityClient } from '../lib/sanity'
import { urlFor } from '../lib/sanityImage'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
interface BlogPost {
  _id: string
  title: {
    en: string
    ar: string
  }
  slug: {
    current: string
  }
  blogCategory: Array<{
    _id: string
    title: {
      en: string
      ar: string
    }
    slug: {
      current: string
    }
  }>
  description: {
    en: string
    ar: string
  }
  mainImage: any
  createdAt: string
  readTime: string
  writer: {
    _id: string
    name: {
      en: string
      ar: string
    }
    image: any
    position: {
      en: string
      ar: string
    }
  }
}

export default function HomeBlogSwiper() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const t = useTranslations()
  const locale = useLocale()
  
  // Helper function to get localized text
  const getLocalizedText = (field: { en: string; ar: string } | string | undefined, fallback: string = '') => {
    if (!field) return fallback
    if (typeof field === 'string') return field
    if (typeof field === 'object' && field.en && field.ar) {
      return locale === 'ar' ? field.ar : field.en
    }
    return fallback
  }

  const getSanityImageUrl = (source: any, fallback: string, width: number) => {
    if (!source) return fallback
    try {
      return urlFor(source).width(width).url()
    } catch {
      return fallback
    }
  }
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let data = await sanityClient.fetch<BlogPost[]>(allBlogQuery(locale).query, allBlogQuery(locale).params)
        
        if (!data || data.length === 0) {
          console.log('No posts found with locale, trying fallback query...')
          data = await sanityClient.fetch<BlogPost[]>(allBlogQueryFallback().query, allBlogQueryFallback().params)
        }
        
        setPosts(data || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
        try {
          console.log('Trying fallback query due to error...')
          const fallbackData = await sanityClient.fetch<BlogPost[]>(allBlogQueryFallback().query, allBlogQueryFallback().params)
          setPosts(fallbackData || [])
        } catch (fallbackError) {
          console.error('Fallback query also failed:', fallbackError)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [locale])

  if (loading) return <div>{t('loading')}</div>

  const Slides = posts.map((post) => (
    <div
      key={post._id}
      className="w-full flex flex-col h-full transition-all duration-300 hover:shadow-xl bg-white p-4 rounded-[10px] border border-neutral3"
    >
      <Link href={`/blog/${post.slug}`} className='flex flex-col h-full' aria-label={getLocalizedText(post.title, 'Blog Post Link')} >
      <div className="inline-flex items-center justify-center relative overflow-hidden h-auto w-full">
        <Image
          src={getSanityImageUrl(post?.mainImage, '/logo.svg', 274)}
          alt={getLocalizedText(post?.title, 'Blog Post')}
          width={274}
          height={224}
          className="w-full rounded-xl h-[224px] object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mt-4">
        <span className='text-sm text-gray5'>{getLocalizedText(post?.blogCategory[0]?.title, 'Uncategorized')}</span>
        <h3 className='text-xl font-semibold text-black'>{getLocalizedText(post?.title, 'Untitled')}</h3>
        <p className='text-sm text-gray3 mb-6'>{getLocalizedText(post?.description, 'No description available')}</p>
      </div>
      <div className="w-full flex items-center gap-4 mt-auto">
        <div className="inline-flex items-center justify-center relative">
          <Image 
            src={getSanityImageUrl(post?.writer?.image, '/user-icon.svg', 48)} 
            width={48} 
            height={48} 
            className="w-12 h-12 rounded-full" 
            alt={getLocalizedText(post?.writer?.name, 'Author')} 
          />
        </div>
        <div>
          <h4 className="text-sm text-neutral2 leading-tight font-semibold mb-1">
            {getLocalizedText(post.writer?.name, 'Unknown Author')}
          </h4>
          <p className="text-sm text-gray5 leading-tight">
            {new Date(post.createdAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })} · {post.readTime}
          </p>
        </div>
      </div>
      </Link>
    </div>
  ))

  return (
    <div>
      <Swiper 
        swiperClass="success-swiper !pb-8 !flex"
        slidesPerView={3}
        spaceBetween={20}
        slides={Slides}
        hasScrollbar={true}
        slideClass='!h-auto'
        slidesDesktop={3}
      />
    </div>
  )
  }
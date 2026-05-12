'use client'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {clsx} from 'clsx'
import { Link } from '@/i18n/navigation';
import Image from 'next/image'
import { sanityClient } from '../lib/sanity'
import { featuredCoursesQuery } from '../lib/queries'
import { urlFor } from '../lib/sanityImage'
import { useTranslations, useLocale } from 'next-intl'

interface Course {
  _id: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  mainImage: any
  createdAt: string
  purchasedCount: string
  review: string
  level: string | null
  slug: string
  featured: boolean
  topCourse: boolean
  duration: number
  languages: string
  courseCategory: Array<{
    _id: string
    title: string
    slug: string
  }>
}

export default function CoursesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [courses, setCourses] = useState<Course[]>([])
  const t = useTranslations()
  const locale = useLocale()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await sanityClient.fetch<Course[]>(
          featuredCoursesQuery(locale).query,
          featuredCoursesQuery(locale).params
        )
        setCourses(fetchedCourses)
      } catch (error) {
        console.error('Error fetching courses:', error)
      }
    }

    fetchCourses()
  }, [locale])


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getLocalizedText = (text: { en: string; ar: string } | string) => {
    if (typeof text === 'string') return text
    return text[locale as keyof typeof text] || text.en
  }

  const sortedCourses = [...courses].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <Menu as="div" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {() => (
        <>
          <MenuButton 
            as="button" 
            className={clsx(
              isOpen && 'text-primary',
              "p-2 py-2.5 lg:w-fit w-full text-sm font-medium px-4 data-[hover]:text-primary transition-all duration-200 text-gray5 flex items-center gap-1.5 border border-neutral2 rounded-lg"
            )}
          >
            <Link href="/courses">
              <span>{t('courses')}</span>
            </Link>
            <CaretDown 
              weight='bold' 
              className={isOpen ? 'rotate-180 transition-rotate duration-200' : 'rotate-0 transition-rotate duration-200'} 
              size={14} 
            />
          </MenuButton>

          <AnimatePresence>
            {isOpen && (
              <MenuItems
                static
                as={motion.div}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
                className="absolute w-full lg:max-w-[800px] bg-black2 sm:max-w-[93.5%] max-w-[88%] shadow-lg rounded-md lg:overflow-hidden overflow-y-auto border origin-top mt-1 border-black3 z-10"
              >
                <div className="w-full flex md:flex-row flex-col lg:max-h-max max-h-[450px]">
                  <div className="bg-black2 md:w-3/5 border-r border-black3 pt-5 md:pb-8 pb-5 px-3">
                    <div className="w-full flex flex-col gap-2">
                      <div className="w-full">
                        <h4 className='text-xs text-gray5 my-1'>{t('courses')}</h4>
                        {sortedCourses.slice(0, 3).map((course) => (
                          <Link 
                            key={course._id}
                            href={`/courses/${course.slug}`}
                            className='px-4 flex nav-link items-center text-gray1 group hover:text-neutral1 gap-3 py-1.5 transition-all duration-200 hover:bg-hover-nav-link rounded-lg'
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className='font-medium text-sm mb-1'>
                                  {getLocalizedText(course.title)}
                                </h3>
                                {new Date().getTime() - new Date(course.createdAt).getTime() <= 30 * 24 * 60 * 60 * 1000 && (
                                  <span className='text-primary1 text-xs bg-primary px-2.5 rounded-full'>
                                    {t('new')}
                                  </span>
                                )}
                              </div>
                              <ul className='flex items-center gap-3'>
                                <li className='flex items-center gap-1'>
                                  <img src="/user-group.svg" alt="user group"/>
                                  <h5 className='text-xs text-gray5'>{course.purchasedCount}</h5>
                                </li>
                                <li className='flex items-center gap-1'>
                                  <img src="/star.svg" alt="rating"/>
                                  <h5 className='text-xs text-gray5'>{course.review}</h5>
                                </li>
                                {course.level && (
                                  <li className='flex items-center gap-1'>
                                    <img src="/chart-bar.svg" alt="level"/>
                                    <h5 className='text-xs text-gray5'>{course.level}</h5>
                                  </li>
                                )}
                              </ul>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* <div className="w-full">
                        <h4 className='text-xs text-gray5 my-1'>{t('bundles')}</h4>
                        <ul>
                          <li>
                            <Link href="/courses" className='px-4 flex nav-link items-center text-gray1 group hover:text-neutral1 gap-3 py-1.5 transition-all duration-200 hover:bg-hover-nav-link rounded-lg'>
                              <div>
                                <h3 className='font-medium text-sm mb-1'>{t('pashto_urdu_languages')}</h3>
                                <ul className='flex items-center gap-3'>
                                  <li className='flex items-center gap-1'>
                                    <img src="/user-group.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>400 +</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                    <img src="/star.svg" alt="rating"/>
                                    <h5 className='text-xs text-gray5'>4.9</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                    <img src="/chart-bar.svg" alt="level"/>
                                    <h5 className='text-xs text-gray5'>{t('intermediate')}</h5>
                                  </li>
                                </ul>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/courses" className='px-4 flex nav-link items-center text-gray1 group hover:text-neutral1 gap-3 py-1.5 transition-all duration-200 hover:bg-hover-nav-link rounded-lg'>
                              <div>
                                <h3 className='font-medium text-sm mb-1'>{t('pashto_arabic_languages')}</h3>
                                <ul className='flex items-center gap-3'>
                                  <li className='flex items-center gap-1'>
                                    <img src="/user-group.svg" alt="user group"/>
                                    <h5 className='text-xs text-gray5'>140 +</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                    <img src="/star.svg" alt="rating"/>
                                    <h5 className='text-xs text-gray5'>4.86</h5>
                                  </li>
                                  <li className='flex items-center gap-1'>
                                    <img src="/chart-bar.svg" alt="level"/>
                                    <h5 className='text-xs text-gray5'>{t('intermediate')}</h5>
                                  </li>
                                </ul>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>

                  <div className="bg-black1 md:w-2/5 pt-5 md:pb-8 pb-3 px-3 flex flex-col items-center justify-center">
                    <h4 className='text-xs text-gray5 mb-2 text-start mr-auto'>{t('the_latest_news')}</h4>
                    {sortedCourses.slice(0, 1).map((course) => (
                      <Link 
                        key={course._id}
                        href={`/courses/${course.slug}`}
                        className="hover:bg-hover-nav-link p-3 w-full transition-all flex flex-col duration-200 rounded-lg gap-3"
                      >
                        <Image 
                          src={urlFor(course.mainImage).width(400).url()} 
                          width={100} 
                          height={130}  
                          alt={getLocalizedText(course.title)}
                          className='w-full h-[130px] rounded-lg bg-cover object-cover' 
                        />
                        <h3 className='text-sm font-medium text-neutral1'>
                          {getLocalizedText(course.title)}
                        </h3>
                        <p className='text-gray5 text-sm'>
                          {getLocalizedText(course.description)}
                        </p>
                        <div className="flex items-center">
                          <ul className='flex items-center gap-3'>
                            <li className='flex items-center gap-1'>
                              <img src="/Calendar-icon.svg" alt="date"/>
                              <h5 className='text-xs text-gray5'>{formatDate(course.createdAt)}</h5>
                            </li>
                            <li className='flex items-center gap-1'>
                              <img src="/Time-icon.svg" alt="time"/>
                              <h5 className='text-xs text-gray5'>{t('min_read', { minutes: course.duration })}</h5>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    ))}          
                  </div>
                </div>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}
import Image from 'next/image';
import React from 'react';
import facebook from '@/public/Facebook.svg';
import instagram from '@/public/Instagram.svg';
import twitter from '@/public/_X.svg';
import linkedin from '@/public/LinkedIn.svg';
import youtube from '@/public/Youtube.svg';
import { Link } from '@/i18n/navigation'; 
import { featuredCoursesQuery } from '../../lib/queries';
import { sanityClient } from '../../lib/sanity';
import { urlFor } from '../../lib/sanityImage';
import { getTranslations, getLocale } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations()
  const locale = await getLocale()
  const courses = await sanityClient.fetch(featuredCoursesQuery(locale).query, featuredCoursesQuery(locale).params)
  
  const getLocalizedText = (text: any): string => {
    if (typeof text === 'string') return text
    if (text && typeof text === 'object') {
      return text[locale as keyof typeof text] || text.en || ''
    }
    return ''
  }

  return (
    <footer className='lg:py-20 pt-10 pb-20 w-full bg-black1 text-white'>
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
        <div className="w-full flex md:flex-row flex-col gap-5">
          <div className="md:w-1/4">
            <Image src={'/lang-logo.svg'} width={185} height={34} className='h-9 w-fit mb-2' alt='footer logo' />
            <p className='text-sm text-gray5 mb-3'>
              <span>{t('footer-para_1')}</span> Language Tutor – <span>{t('footer-para_2')}</span>
            </p>
            <p className='text-sm text-gray5'>
              <span>{t('footer-para_3')}</span>
            </p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className='text-base mb-2 text-neutral1'><span>{t('footer-top-courses')}</span></h3>
            {courses
              .filter((course: any) => course.topCourse)
              .slice(0, 4)
              .map((course: any) => {
                const localizedTitle = getLocalizedText(course.title)
                const localizedDescription = getLocalizedText(course.description)
                
                return (
                  <Link 
                    href={`/courses/${course.slug}`} 
                    key={course._id} 
                    className='flex items-center gap-3 py-3 px-2 hover:bg-neutral5/5 rounded-lg'
                  >
                    <Image 
                      src={urlFor(course?.mainImage).width(400).url()} 
                      alt={localizedTitle} 
                      width={120} 
                      height={64} 
                      className='w-32 h-16 object-cover rounded-lg' 
                    />
                    <div>
                      <h4 className='text-sm text-gray1 font-medium'>{localizedTitle}</h4>
                      <p className='text-xs text-gray5'>{localizedDescription}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          
          <div className="md:w-1/6">
            <div className="w-full mb-10">
              <h3 className='text-base text-neutral1 mb-3'><span>{t('footer-other-courses')}</span></h3>
              <ul className='space-y-2'>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-adv-pashto')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-pashto-children')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-conv-pashto')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-pashto-writing')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-pashto-reading')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-pashto-culture')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-pashto-history')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-custom-pashto')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-urdu-grammar')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-arabic-course')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-english-grammar')}</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/5">
            <div className="w-full mb-10">
              <h3 className='text-base text-neutral1 mb-3'><span>{t('footer-languages')}</span></h3>
              <ul className='space-y-1'>
                <li>
                  <Link href='/courses' className='text-sm text-gray5 hover:text-white'>{t('footer-pashto-language')}</Link>
                </li>
                <li>
                  <Link href='/courses' className='text-sm text-gray5 hover:text-white'>{t('footer-urdu-language')}</Link>
                </li>
                <li>
                  <Link href='/courses' className='text-sm text-gray5 hover:text-white'>{t('footer-arabic-language')}</Link>
                </li>
                <li>
                  <Link href='/courses' className='text-sm text-gray5 hover:text-white'>{t('footer-english-language')}</Link>
                </li>
              </ul>
            </div>
            
            <div className="w-full">
              <h3 className='text-base text-neutral1 mb-3'><span>{t('footer-company')}</span></h3>
              <ul className='space-y-1'>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-mission')}</Link>
                </li>
                <li>
                  <Link href='/testimonials' className='text-sm text-gray5 hover:text-white'>{t('footer-testimonials')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-success-stories')}</Link>
                </li>
                <li>
                  <Link href='#' className='text-sm text-gray5 hover:text-white'>{t('footer-contact-us')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:mt-20 mt-10 flex md:flex-row flex-col items-start gap-4 md:items-center justify-between">
          <p className='text-sm text-gray5 max-w-[425px]'>
            © 2025 {t('footer-all-rights')}
          </p>
          
          <div className="flex items-center gap-2">
            <Link href="#" className='text-sm text-gray5 hover:text-white'>{t('footer-privacy-policy')}</Link>
            <Link href="#" className='text-sm text-gray5 hover:text-white'>{t('footer-terms-service')}</Link>
          </div>
          
          <ul className='flex items-center gap-3'>
            <li>
              <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={facebook} alt='Facebook logo' />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={instagram} alt='Instagram logo' />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={twitter} alt='Twitter logo' />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={linkedin} alt='LinkedIn logo' />
              </Link>
            </li>
            <li>
              <Link href="#" className='text-sm text-gray5 hover:text-white'>
                <Image src={youtube} alt='YouTube logo' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
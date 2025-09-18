import { Link } from '@/i18n/navigation';
import React from 'react'
import SuccessStoriesSection from '../../components/SuccessStoriesSection'
import FaqsSection from '../../components/FaqsSection'
import NewsLetterSection from '../../components/NewsLetterSection'
import { Metadata } from 'next'
import AllCourses from './_component/AllCourses'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: "Courses | LanguagesTutor",
  description: "Languages Tutor.",
  icons: {
    icon: '/favicon.png',
  },
};


const Courses = async () => {
  const t = await getTranslations()

  return (
    <main className='bg-neutral1'>
        <section className='py-14 lg bg-black1 bg-cover bg-center bg-no-repeat' >
            <div className="w-full max-w-[1340px] px-5 mx-auto">
                <div className="max-w-[750px]">
                <ul className='flex items-center gap-2 mb-5'>
                    <li>
                        <Link href="/" className="text-gray-900 flex items-center hover:text-gray-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            >
                            <path
                                d="M18.1441 12.3726V12.3727C18.1441 12.5475 18.0111 12.6924 17.8373 12.7098C15.9116 12.903 14.2514 13.996 13.2824 15.562C12.8112 16.3244 12.5032 17.1998 12.4096 18.1375C12.3922 18.3113 12.2472 18.4441 12.0725 18.4441C11.8978 18.4441 11.7528 18.3112 11.7354 18.1374C11.4488 15.2741 9.17094 12.9963 6.3068 12.7097C6.13293 12.6923 6 12.5474 6 12.3726C6 12.1979 6.13294 12.0529 6.30682 12.0355C9.17187 11.7489 11.4489 9.47192 11.7354 6.60687C11.7528 6.43299 11.8978 6.30005 12.0725 6.30005C12.2473 6.30005 12.3923 6.43298 12.4097 6.60686C12.6962 9.47102 14.9732 11.7488 17.8373 12.0355C18.0112 12.0529 18.1441 12.1978 18.1441 12.3726Z"
                                fill="#7F8090"
                            />
                            </svg>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={17}
                            viewBox="0 0 16 17"
                            fill="none"
                            >
                            <path d="M6 3.5L11 8.5L6 13.5" stroke="#3A3A41" strokeWidth="1.5" />
                            </svg>


                        </Link>
                    </li>
                    <li>
                        <Link href="/courses" className='text-primary text-sm font-medium' >
                            <span>{t('all_courses_breadcrumb')}</span>
                        </Link>
                    </li>
                </ul>
                <div className="w-full">
                    <h1 className='lg:text-56 md:text-40 text-32 font-semibold text-neutral1 mb-4'>
                        <span>{t('online_languages_courses')}</span>
                    </h1>
                    <p className='md:text-lg max-w-[600px] text-base text-neutral3'>
                        <span>{t('online_languages_courses_paragraph')}</span>
                    </p>
                </div>
                </div>

            </div>
        </section>

        <AllCourses/>

        <SuccessStoriesSection/>

        <FaqsSection/>

        <NewsLetterSection/>

       

    </main>
  )
}

export default Courses
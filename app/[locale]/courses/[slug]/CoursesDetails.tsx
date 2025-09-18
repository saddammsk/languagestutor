import CoursesProductsSection from '@/app/components/CoursesProductsSection'
import NewsLetterSection from '@/app/components/NewsLetterSection'
import { urlFor } from '@/app/lib/sanityImage'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { DetailVideo } from './_components/DetailVideo'
import RichText from '@/app/components/common/RichText'
import FaqsLectures from '@/app/components/FaqsLectures'
import { Link } from '@/i18n/navigation';
import { PrimaryLinkGradient } from '@/app/components/common/PrimaryLinkGradient'
import { Trans } from 'react-i18next';
import CoursesReviews from './_components/CoursesReviews'

interface Lecture {
  title: { en: string; ar: string };
  duration?: string;
  previewUrl?: string;
}

interface Module {
  title: { en: string; ar: string };
  description?: { en: string; ar: string };
  previewlink?: string;
  lectures?: Lecture[];
}


export default function CoursesDetails({ course, frequentlyCourses, locale }: any) {
  const t = useTranslations()
  const currentLocale = useLocale()

  const getTranslatedValue = (value: any, locale: string): string => {
    if (typeof value === 'string') return value
    if (value && typeof value === 'object') {
      return value[locale] || value.en || value.ar || ''
    }
    return ''
  }



function getTranslatedCurriculum(curriculum: any[], locale: 'en' | 'ar'): Module[] {
  if (!Array.isArray(curriculum)) return [];
  
  return curriculum.map((module: any) => ({
    id: module.id,
    title: module.title,
    description: module.description,
    previewlink: module.previewlink,
    lectures: module.lectures?.map((lec: any) => ({
      id: lec.id,
      title: lec.title,
      duration: lec.duration,
      previewUrl: lec.previewUrl
    }))
  }));
}


function getTranslatedReviews(reviews: any[], locale: 'en' | 'ar') {
  if (!Array.isArray(reviews)) return [];

  return reviews.map((review: any) => ({
    ...review,
    comment: review.comment?.[locale] || review.comment?.en || ""
  }));
}


  return (
    <main className="bg-neutral1">
         <nav className='w-full mb-10'>
        <div className="w-full border-b max-w-[1340px] px-5 mx-auto border-neutral3">
        <ul className='flex items-center gap-2 py-3 overflow-hidden'>
          <li>
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
          </li>
          <li>
            <Image src='/cheveron-right.svg' width={20} height={20} className='min-w-5' alt='nav icon'/>
          </li>
          <li><a href="/courses" className='text-sm whitespace-nowrap text-gray5 font-medium'>{t('courses')}</a></li>
          <li>
            <Image src='/cheveron-right.svg' width={20} height={20} className='min-w-5' alt='nav icon'/>
          </li>
          <li><a href="/courses" className='text-sm whitespace-nowrap text-gray5 font-medium'>{t('pashto_course')}</a></li>
          <li>
            <Image src='/cheveron-right.svg' width={20} height={20} className='min-w-5' alt='nav icon'/>
          </li>
          <li><a href="#" className='text-sm whitespace-nowrap text-primary1 font-medium'>{getTranslatedValue(course?.title, currentLocale)}</a></li>
        </ul>
        </div>
      </nav>

      <section className='md:pb-20 pb-10'>
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
      <div className="w-full flex gap-8">
        <div className="lg:w-[calc(100%_-_360px)]">
          <h1 className='md:text-5xl text-32 font-semibold text-black mb-4'>{getTranslatedValue(course?.title, currentLocale)}</h1>
          <p className='md:text-base text-sm text-gray3 mb-4'>{getTranslatedValue(course?.description, currentLocale)}</p>
          <div className="w-full flex lg:flex-row flex-col items-start lg:items-center gap-3 justify-between lg:border border-neutral3 lg:px-4 lg:py-2 rounded-xl">
            <div className="flex items-center gap-2 lg:w-auto w-full border lg:border-none border-neutral3 lg:p-0 px-2 py-1 rounded-md">
            <Image src={urlFor(course?.instructor?.image).width(40).url()}  alt='avator' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
            <h3 className='text-sm text-black font-semibold'>{getTranslatedValue(course?.instructor?.name, currentLocale)}</h3>
            <span className='text-sm text-gray5'>{t('instructor')}</span>
            </div>
            <ul className='flex items-center gap-2 py-2'>
                <li className='flex items-center gap-1'>
                    <Image src='/user-group-icon.svg' width={20} height={20} alt='user' />
                    <span className='text-sm text-gray5 '>{getTranslatedValue(course?.purchasedCount, currentLocale)}</span>
                </li>
                <li>
                  <Image src='/group-img.png' width={88} height={24} alt='group' />
                </li>
                <li className='flex items-center gap-1'>
                    <Image src='/star-yellow.svg' width={20} height={20} alt='star-yellow' />
                    <span className='text-sm text-gray5 '>{getTranslatedValue(course?.review, currentLocale)}</span>
                </li>
                <li className='flex items-center gap-1'>
                    <Image src='/intermediate-icon.svg' width={20} height={20} alt='intermediate-icon' />
                    <span className='text-sm text-gray5 '>{getTranslatedValue(course?.level, currentLocale)}</span>
                </li>
            </ul>
          </div>

           
          <div className="w-full mt-4 mb-6">
            <DetailVideo thumbnail={course?.video?.poster?.image}  url={course?.video?.url} />
          </div>
          
          <div className="w-full bg-white md:p-8 p-4 rounded-lg mb-6">
            <h3 className='text-2xl text-black font-semibold mb-5'>{t('what_you_learn')}</h3>

            <ul className='grid sm:grid-cols-2 grid-cols-1 md:gap-4 gap-3'>
             {course?.WhatYouLearn?.map((item:string, index: number)=>(
                 <li key={item} className='flex items-center gap-2'>
                 <Image src='/list_check.svg' width={20} height={20} alt='check-circle' />
                 <span className='text-base text-black'>{getTranslatedValue(item, currentLocale)} </span>
               </li>
             ))}
            </ul>
          </div>
          
          <div className="w-full bg-white md:p-8 p-4 rounded-lg mb-6">
            <h3 className='text-2xl text-black font-semibold mb-5'>{t('top_companies_up_skill')}</h3>
            <div className="w-full grid md:grid-cols-6 items-center justify-center grid-cols-3">
              <Image src={'/medibank-logo.svg'} alt='no-img' width={100} height={58}/>
              <Image src={'/samsung-logo.svg'} alt='no-img' className='-ml-5' width={120} height={58}/>
              <Image src={'/square-icon.svg'} alt='no-img' className='-ml-3' width={80} height={58}/>
              <Image src={'/shopify-icon.svg'} alt='no-img' className='-ml-3' width={80} height={58}/>
              <Image src={'/zoho-icon.svg'} alt='no-img' className='-ml-5' width={70} height={58}/>

            </div>
          </div>
           
          <div className="w-full bg-white md:p-8 p-4 rounded-lg mb-6">
            <div className="w-full">
              <div className="rich-text">
              <RichText content={getTranslatedValue(course?.body, currentLocale)} />
              </div>
            </div>
        
          {course?.body &&
          <>
          <hr className="w-full my-6 bg-neutral1 border-neutral1"></hr>
          <div className="w-full">
            <h3 className='text-2xl text-black font-semibold mb-4'>{t('what_to_expect')}
          </h3>
          <div className="w-full">
            <ul className='w-full grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6'>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/e-learning.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('e-learning')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('e-learning_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Expert-Led.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('industry_expert_led')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('industry_expert_led_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Active_Support.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('active_support')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('active_support_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Diverse_Community.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('diverse_community')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('diverse_community_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Hands-on.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('practical_hands_on')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('practical_hands_on_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Track_Record.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('proven_track_record')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('proven_track_record_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Highly_Rated.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('highly_rated')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('highly_rated_description')}</p>
              </li>
              <li>
                <div className=" flex items-center gap-3 mb-2">
                  <Image src={'/Flexible_Learning.svg'} width={24} height={24} className='' alt="" />
                <h4 className='md:text-lg text-base text-black font-medium'>{t('flexible_learning')}</h4>
                </div>
                <p className='md:text-base text-sm text-gray3'>{t('flexible_learning_description')}</p>
              </li>
            </ul>

          </div>

          </div>
          </>}
          </div> 
          
          <div className="w-full bg-white md:p-8 p-4 rounded-lg mb-6">
            <div className="w-full">
            <FaqsLectures
            curriculum={getTranslatedCurriculum(course?.curriculum || [], currentLocale as 'en' | 'ar')}
            locale={currentLocale as 'en' | 'ar'}
            />
            </div>
          </div>

          
           <div className="w-full bg-white md:p-8 p-4 rounded-lg mb-6">
          <h3 className='text-2xl text-black font-semibold mb-5'>{t('certificate_of_completion')}</h3>
          <div className="w-full lg:px-5">
          <Image src={urlFor(course?.certificate).width(840).url()}  className='w-full h-auto' width={790} height={530} alt='no-img' />
          </div>
          </div> 

           <div className="w-full py-4">
          <h3 className='text-2xl text-black font-semibold mb-5'>{t('instructor')}</h3>
          <div className="w-full flex items-start gap-6">
            <Image src={urlFor(course?.instructor?.image).width(840).url()} alt="Image" width={220} height={268} className='max-w-[220px] rounded-lg max-h-[268px] w-full h-auto object-cover' />
            <div className="">
              <h4 className='text-base text-black font-medium'>{getTranslatedValue(course.instructor?.name, currentLocale)}</h4>
              <p className='text-base text-gray5'>{getTranslatedValue(course.instructor?.position, currentLocale)}
              </p>
              <div className="rich-text-bio">
              <RichText content={getTranslatedValue(course.instructor?.bio, currentLocale)}/>
              </div>
            
                <ul className='flex items-center gap-2 -mt-2'>
                  <li>
                    <a href="#">
                    <Image src={'/twitter1.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <Image src={'/youtube-icon1.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <Image src={'/linked-icon1.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <Image src={'/instagram-icon1.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <Image src={'/social-icon1.svg'} width={20} height={20} className='w-5 h-5' alt=""/>
                    </a>
                  </li>
                </ul>
            </div>

          </div>
          </div>
          <hr className='w-full bg-gray-300 border-gray-300 my-8' />

          <div className="w-full">
          <h3 className='text-2xl text-black font-semibold mb-5'>{t('frequently_bought_together')}</h3>
          <div className="w-full space-y-4">
             {frequentlyCourses
                .slice(0,3)
                ?.map((course:any) => (
                  <Link key={course.title?.[locale] || course.title?.en} href={`/courses/${course.slug}`} className='w-full p-3 flex md:flex-row flex-col md:gap-5 gap-3 bg-white rounded-2xl transition-all duration-300 hover:drop-shadow-xl border border-neutral3'>
                  <div className="w-full">
                  <Image src={urlFor(course?.mainImage).width(426).url()} width={397} height={240} className='w-full object-cover object-center rounded-lg h-[220px]' alt={'no-img'}  />
                  </div>
                  <div className="w-full p-2 pt-4 flex flex-col">
                  <h3 className='text-xl font-semibold text-black'>{getTranslatedValue(course?.title, currentLocale)}</h3>
                  <ul className='flex items-center gap-2 py-2'>
                      <li className='flex items-center gap-1'>
                          <Image src='/user-group-icon.svg' width={20} height={20} alt='user' />
                          <span className='text-sm text-gray5'>{course?.purchasedCount}</span>
                      </li>
                      <li className='flex items-center gap-1'>
                          <Image src='/star-yellow.svg' width={20} height={20} alt='star-yellow' />
                          <span className='text-sm text-gray5 '>{course?.review}</span>
                      </li>
                      <li className='flex items-center gap-1'>
                          <Image src='/intermediate-icon.svg' width={20} height={20} alt='intermediate-icon' />
                          <span className='text-sm text-gray5 '>{getTranslatedValue(course?.level, currentLocale)}</span>
                      </li>
                  </ul>
                  <p className='text-sm font-medium mt-1 text-gray3'>{getTranslatedValue(course?.description, currentLocale)}</p>
                  <div className="w-full flex items-center justify-between pt-8 pb-4 mt-auto">
                  <span className='text-2xl font-bold text-neutral2  block'>${course?.price}</span>
                  <span className='border border-gray1 px-4 text-sm drop-shadow bg-btn-gradient1 hover:bg-btn-gradient2 rounded-lg py-2 inline-flex '>{t('view_course')}</span>
                  </div>
                  </div>
            </Link>
                ))}
       
          </div>

          </div>

          <hr className='w-full border-neutral3 my-10' />
          <div className="w-full">
              <div className="w-full flex items-center justify-between mb-5">
              <h3 className='text-2xl text-black font-semibold mb-0'>{t('testimonials')}</h3>
              <Link href={'/testimonials'} className='bg-btn-gradient1 hidden md:flex hover:bg-btn-gradient2 py-2 px-5 rounded-lg border border-neutral3' >
              {t('read_all_testimonials')}
              </Link>
              </div>
              <div className="w-ful bg-white p-6 border border-neutral3 rounded-lg">
                <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-full flex items-center gap-2">
                  <Image src={'/user-group.svg'} width={20} height={20} alt="no-img" />
                  <p className='text-sm text-gray5'><span>7600</span> {t('students')}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={'/star-yellow.svg'} width={18} height={18} alt="star-yellow" />
                  <span className='text-sm text-gray5 '>{course?.review}</span>

                </div>
                </div>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-5">
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className='text-base text-black font-medium'>{t('quality_of_content')}</span> 
                      <span className='text-base text-black font-medium'>{course?.testimonialsReviews[0]?.quality}%</span>
                    </div>
                    <div className="w-full bg-neutral3 rounded-full h-2 overflow-hidden relative">
                      <div style={{width: `${course?.testimonialsReviews[0]?.quality}%`}} className=" bg-green1 h-full absolute rounded-full">
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className='text-base text-black font-medium'>{t('supportive_learning_material')}</span> 
                      <span className='text-base text-black font-medium'>{course?.testimonialsReviews[0]?.supportive}%</span>
                    </div>
                    <div className="w-full bg-neutral3 rounded-full h-2 overflow-hidden relative">
                      <div style={{width: `${course?.testimonialsReviews[0]?.supportive}%`}} className=" bg-green1 h-full absolute rounded-full">
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className='text-base text-black font-medium'>{t('ease_of_following')}</span> 
                      <span className='text-base text-black font-medium'>{course?.testimonialsReviews[0]?.following}%</span>
                    </div>
                    <div className="w-full bg-neutral3 rounded-full h-2 overflow-hidden relative">
                      <div style={{width: `${course?.testimonialsReviews[0]?.following}%`}} className=" bg-green1 h-full absolute rounded-full">
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className='text-base text-black font-medium'>{t('instructor')}</span> 
                      <span className='text-base text-black font-medium'>{course?.testimonialsReviews[0]?.instructor}%</span>
                    </div>
                    <div className="w-full bg-neutral3 rounded-full h-2 overflow-hidden relative">
                      <div style={{width: `${course?.testimonialsReviews[0]?.instructor}%`}} className=" bg-green1 h-full absolute rounded-full">
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className='text-base text-black font-medium'>{t('new_knowledge_learnt')}</span> 
                      <span className='text-base text-black font-medium'>{course?.testimonialsReviews[0]?.newKnowledge}%</span>
                    </div>
                    <div className="w-full bg-neutral3 rounded-full h-2 overflow-hidden relative">
                      <div style={{width: `${course?.testimonialsReviews[0]?.newKnowledge}%`}} className=" bg-green1 h-full absolute rounded-full">
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className='text-base text-black font-medium'>{t('would_recommend_course')}</span> 
                      <span className='text-base text-black font-medium'>{course?.testimonialsReviews[0]?.recommendCourse}%</span>
                    </div>
                    <div className="w-full bg-neutral3 rounded-full h-2 overflow-hidden relative">
                      <div style={{width: `${course?.testimonialsReviews[0]?.recommendCourse}%`}} className=" bg-green1 h-full absolute rounded-full">
                      </div>
                    </div>
                  </div>

                </div>

              </div>

          </div> 
          
          <CoursesReviews course={getTranslatedReviews(course?.userReviews || [], currentLocale as 'en' | 'ar')}  locale={currentLocale as 'en' | 'ar'}/>

        </div>


        {/* Right sidebar */}
     <div className="w-full max-w-[360px] h-full border border-neutral3 bg-white rounded-xl p-4 lg:block hidden sticky top-20">
          <div className="w-full p-3 overflow-y-auto h-full max-h-[88vh] scroll-y-hidden">
            <h3 className='text-2xl font-semibold text-black'>{t('learning_today')}</h3>
            <p className='text-sm text-gray5 mb-6 mt-2'>{getTranslatedValue(course?.packages[0]?.description, currentLocale)}</p>
             <div className="w-full flex items-center justify-between">
              <h4 className='text-[32px] font-medium text-black'><span>$</span>{course?.packages[0]?.price}</h4>
              <div className="flex items-center justify-center gap-2 bg-neutral1 rounded-full px-3 p-2">
                <Image src={'/ce_wallet.svg'} width={20} height={20} alt="wallet" />
                <p className='text-sm text-gray5'>{t('one_time_payment')}</p>
              </div>
            </div> 
            <div className="w-full">
              <PrimaryLinkGradient href="#" className='w-full text-center justify-center my-6 py-3' >
              {t('buy_course')}
              </PrimaryLinkGradient>
             
           <div className="w-full">
                <span className='text-sm text-gray5 mb-2 block'>{t('inclusion')}</span>
                <ul className='space-y-2'>
                  {course?.packages[0]?.inclusion[0].hoursOfContent &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/list_clock.svg'} width={24} height={24} alt='no-img' />
                    <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{course?.packages[0]?.inclusion[0].hoursOfContent}</p>
                    <p className='text-sm text-gray3'>{t('hours_of_content')}</p>
                    </div>
                  </li>
                  }
                  {course?.packages[0]?.inclusion[0].lessons &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/d_book-open.svg'} width={24} height={24} alt='no-img' />
                    <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{course?.packages[0]?.inclusion[0].lessons}</p>
                    <p className='text-sm text-gray3'>{t('lessons')}</p>
                    </div>
                  </li>
                  }
                   {course?.packages[0]?.inclusion[0].fileResources &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/list_document.svg'} width={24} height={24} alt='no-img' />
                    <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{course?.packages[0]?.inclusion[0].fileResources}</p>
                    <p className='text-sm text-gray3'>{t('file_resources')}</p>
                    </div>
                  </li>
                   }
                    {course?.packages[0]?.inclusion[0].certificateOfCompletion &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/list_academic-cap.svg'} width={24} height={24} alt='no-img' />
                    <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{course?.packages[0]?.inclusion[0].certificateOfCompletion}</p>
                    <p className='text-sm text-gray3'>{t('certificate')}</p>
                    </div>
                  </li>
                    }
                     {course?.packages[0]?.inclusion[0].audio &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/list_volumn.svg'} width={24} height={24} alt='no-img' />
                      <div className="flex-row flex gap-1">
                     <p className='text-sm text-gray3'>{t('audio')}</p>
                    <p className='text-sm text-gray3'>{course?.packages[0]?.inclusion[0].audio}</p>
                    </div>
                  </li>
                    }
                </ul>
              </div>
                             
              <div className="w-full mt-5">
                <span className='text-sm text-gray5 mb-2 block'>{t('access')}</span>
                <ul className='space-y-2'>
                {course?.packages[0]?.access[0].lifetimeAccess &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/f_desktop-computer.svg'} width={24} height={24} alt='no-img' />
                    <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{course?.packages[0]?.access[0].lifetimeAccess}</p>
                     <p className='text-sm text-gray3'>{t('own_pace')}</p>
                    </div>
                  </li>
                  }
                  {course?.packages[0]?.access[0].onlinePace &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/infinity.svg'} width={24} height={24} alt='no-img' />
                     <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{course?.packages[0]?.access[0].onlinePace}</p>
                     <p className='text-sm text-gray3'>{t('lifetime_access')}</p>
                    </div>
                  </li>
                }
                  {course.publishedAt &&
                  <li className='flex items-center gap-2'>
                    <Image src={'/calendar-days.svg'} width={24} height={24} alt='no-img' />
                     <div className="flex-row flex gap-1">
                    <p className='text-sm text-gray3'>{t('last_update')}</p>
                    <p className='text-sm text-gray3'>{new Date(course.publishedAt).toLocaleDateString(currentLocale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </li>
                  }
                </ul>
              </div> 

              <div className="w-full bg-neutral1 p-3 rounded-lg mt-6">
                <h4 className='text-lg text-gray3 text-center font-semibold'>{t('team_of')}</h4>
                <div className="w-full">
                <p className='text-sm text-gray5 text-center'>{t('team_discount')}
                <a className='text-green1 text-sm hover:underline ml-1' href='#'>{t('get_touch')}</a>

                </p>
                </div>
              </div>
            </div> 
            
          </div>
        </div>

         <div className="w-full h-auto bg-black1 p-2 lg:hidden block left-0 fixed bottom-0 z-50">
          <div className="w-full h-full">
            <div className="w-full flex items-center justify-between">
               <div className="flex items-center gap-4">   
            <h3 className='text-base font-semibold leading-tight text-white'>{getTranslatedValue(course?.title, currentLocale)}</h3>
              <h4 className='text-2xl mx-6 font-medium text-white'><span>$</span>{course?.packages[0]?.price}</h4>
              </div>
              <PrimaryLinkGradient href="#" className='w-fit whitespace-nowrap text-sm text-center justify-center py-2' >
              {t('buy_course')}
              </PrimaryLinkGradient>
            </div>
           
          </div>
        </div>

      </div>
      </div>
      </section>
        
    
      <div className="w-full bg-white lg:pt-10">
        <CoursesProductsSection/>
      </div>

      <NewsLetterSection/>
    </main>
  )
}

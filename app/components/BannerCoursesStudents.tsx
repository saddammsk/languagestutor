import Image from 'next/image'
import React from 'react'
import { getTranslations } from 'next-intl/server';

export default async function BannerCoursesStudents() {
  const t = await getTranslations();
  return (
    <div className='banner-marquee-main flex items-center gap-4'>
      <div className="banner-marquee flex lg:flex-col flex-row gap-4">
      <ul className='flex lg:flex-col mb-4 gap-4'>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-2.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-abhishek')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-urdu')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-1.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-angel')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-3.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-miles')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-4.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
              <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-zohdi')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-english')}</span></p>
            </div>
          </div>
        </div>
        </li>
      </ul>

      <ul className='flex lg:flex-col gap-4'>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-2.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-abhishek')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-urdu')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-1.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-angel')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-3.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-miles')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
              <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-4.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-zohdi')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-english')}</span></p>
            </div>
          </div>
        </div>
        </li>
      </ul>

      <ul className='flex lg:flex-col mb-4 gap-4 lg:hidden'>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-5.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-raymond')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-6.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-preston')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-7.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
              <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-pranavi')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-urdu')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-8.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-alyssa')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
      </ul>

      <ul className='flex lg:flex-col mb-4 gap-4 lg:hidden'>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-5.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-raymond')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-6.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-preston')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
                <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-arabic')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-7.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-pranavi')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-urdu')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-8.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-alyssa')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-arabic')}</span></p>
            </div>
          </div>
        </div>
        </li>
      </ul>
      </div>
      <div className="banner-marquee-2 lg:block hidden">
      <ul className='flex flex-col mb-4 gap-4'>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-5.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-raymond')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-6.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-preston')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-arabic')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-7.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-pranavi')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-urdu')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-8.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-alyssa')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-arabic')}</span></p>
            </div>
          </div>
        </div>
        </li>
      </ul>
      <ul className='flex flex-col mb-4 gap-4'>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-5.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
                <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-raymond')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-pashto')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-6.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-preston')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-arabic')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-7.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-pranavi')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-urdu')}</span></p>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className='banner-marquee-card relative flex items-start justify-end flex-col rounded-2xl w-[210px] h-[260px] overflow-hidden '>
          <div className="bg-gradient-to-t from-neutral2 to-[#26262b33] absolute w-full h-full z-10"></div>
          <Image width={210} height={260} src="/marquee-card-img-8.png" className='absolute rounded-2xl top-0 left-0 w-full h-full z-0' alt="no img" />
          <div className="bg-white verified- transition-all duration-200 absolute top-3 right-3 rounded-full z-20 p-1 w-6 overflow-hidden pr-1 gap-1 flex items-center">
            <img src="verified-icon.svg" alt="course icon" className='min-w-4' />
            <p className='text-black text-xs font-medium whitespace-nowrap'><span>{t('banner-verified-student')}</span></p>
          </div>
          <div className='relative z-10 p-4'>
            <div className="flex items-center gap-1 mb-1">
            <img src="user-icon.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-student-alyssa')}</span></p>
            </div>
            <div className="flex items-center gap-1 mb-1">
            <img src="academic-cap.svg" alt="user icon" />
            <p className='text-neutral6 text-sm font-medium'><span>{t('banner-course-arabic')}</span></p>
            </div>
          </div>
        </div>
        </li>
      </ul>
      </div>
      </div>
  )
}

import React from 'react'
import { PrimaryLinkGradient } from './common/PrimaryLinkGradient'
import { SucessSwiper } from './SucessSwiper'
import { useTranslations } from 'next-intl'

export default function SuccessStoriesSection() {
  const t = useTranslations()
  return (
       <section className="lg:py-20 py-10 w-full">
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full">
          <span className="text-base font-medium text-primary2"><span>{t('success-stories-title')}</span></span>
            <div className="w-full flex lg:flex-row flex-col gap-6 items-start lg:items-center justify-between mb-9">
            <div className="">
            <h2 className="md:text-5xl text-28 text-neutral2 font-semibold md:mt-5 md:mb-5 my-3"><span>{t('success-stories-heading')}</span></h2>
            <p className="md:text-lg text-base text-gray3"><span>{t('success-stories-desc')}</span></p>
            </div>
                <PrimaryLinkGradient href="/testimonials" className="py-3 text-base">
                  <span>{t('success-stories-link')}</span>
                </PrimaryLinkGradient>
            </div>
          </div>
          <div className="w-full">
            <SucessSwiper/>
          </div>
    
        </div>
        </section>
  )
}
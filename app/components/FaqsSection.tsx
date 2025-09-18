import React from 'react'
import Faqs from './Faqs'
import { getTranslations } from 'next-intl/server'

export default async function FaqsSection() {
  const t = await getTranslations()
  return (
        <section className="lg:py-20 py-10 bg-white">
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full">
          <div className="">
            <h2 className="md:text-5xl text-28 text-center text-neutral2 font-semibold md:mt-5 mb-3"><span>{t('faq-heading')}</span></h2>
            <p className="md:text-lg text-base text-center text-gray3"><span>{t('faq-desc')}</span></p>
            </div>
            <div className="w-ful">
              <Faqs/>
              <p className="dm:text-lg text-sm text-neutral2 font-medium text-center"><span>{t('faq-still-question')}</span> <a href="#" className="text-primary1 underline"><span>{t('faq-contact-support')}</span></a></p>
            </div>
          </div>
          </div>
        </section>
  )
}
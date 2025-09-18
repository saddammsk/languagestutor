'use client'
import React,{useState} from 'react'
import { LightBox } from './LightBox'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
  
export default function IntroVideoModel() {
    const t = useTranslations()
    const [IsOpenModel ,setIsOpenModel] = useState(false)

  return (
      <div onClick={()=>setIsOpenModel(true)} className="w-full intro-video transition-all duration-300 relative cursor-pointer md:p-10 p-4 bg-no-repeat overflow-hidden rounded-xl !pt-[35%] bg-cover bg-center">
         <Image src="/MasterclassCourse.png" className='w-full h-full transition-all scale-100 duration-500 absolute object-cover left-0 top-0' width={1300} height={762} alt="thumnail video" />
        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-t to-transparent from-black/60"></div>
        <div className="w-full relative z-10">
         <LightBox
           media={"https://youtu.be/Uh4w3yTKeqg?si=mm-RMeOvNpZxGwn1"}
           isOpenModel={IsOpenModel}
           setIsOpenModel={setIsOpenModel}
           isAutoplay={true}
         />
           <div className="max-w-[600px]">
           <h2 className="md:text-5xl text-28 leading-tight font-semibold text-white"><span>{t('intro-video-heading')}</span></h2>
           <p className="md:text-lg texts-m text-white mb-2 sm:mt-5 mt-3"><span>{t('intro-video-desc')}</span></p>
           <div className="inline-flex text-base text-white">
             <Image src="/play-icon.svg" alt="play-icon" width={20} height={20} />
             <span>{t('intro-video-watch')}</span>
           </div>
           </div>
           </div>
         </div>
  )
}

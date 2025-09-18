import React from 'react'
import Image from "next/image";
import { useTranslations } from 'next-intl'

const TeachingMarqueeSection = () => {
  const t = useTranslations()
  return (
     <section className="w-full lg:py-16 py-10">
        <div className="w-full max-w-[1340px] px-5 mx-auto">
          <h2 className="text-base text-gray5 font-medium text-center">{t('teaching_brilliant_designers_worldwide')}</h2>
          <div className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-5 w-20 h-full bg-gradient-to-r from-neutral1 to-transparent z-10 "></div>
            <div className="absolute right-0 top-5 w-20 h-full bg-gradient-to-l from-neutral1 to-transparent z-10 "></div>
          <div className="designers-marquee w-full flex items-center gap-5">
            <ul className="designers-marquee-list lg:mt-8 mt-6 flex items-center gap-5">
              <li className="designers-marquee-item">
                <Image src="/company-logo-1.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-2.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-3.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-4.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-5.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-6.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-7.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-8.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-9.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
            </ul>
            <ul className="designers-marquee-list mt-8 flex items-center gap-5">
              <li className="designers-marquee-item">
                <Image src="/company-logo-1.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-2.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-3.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-4.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-5.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-6.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-7.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-8.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
              <li className="designers-marquee-item">
                <Image src="/company-logo-9.svg" width={144} height={44} className="min-w-32 h-14" alt="no-img"  />
              </li>
            </ul>
          </div>
          </div>
        </div>
       </section>
  )
}

export default TeachingMarqueeSection
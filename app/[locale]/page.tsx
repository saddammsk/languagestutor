import type { Metadata } from "next";
import { PrimaryLinkGradient } from "../components/common/PrimaryLinkGradient";
import Image from "next/image";
import BannerCoursesStudents  from "../components/BannerCoursesStudents";
import { SkillCard } from "../components/SkillCard";
import  IntroVideoModel  from "../components/IntroVideoModel";
import  HomeBlogSwiper  from "../components/HomeBlogSwiper";
import ClientReviewsSection from "../components/ClientReviewsSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import FaqsSection from "../components/FaqsSection";
import NewsLetterSection from "../components/NewsLetterSection";
import CoursesProductsSection from "../components/CoursesProductsSection";
import BookDemoButton from "../components/BookDemoButton";
import { Link } from '@/i18n/navigation'; 


import { getTranslations } from 'next-intl/server';



export const metadata: Metadata = {
  title: "LanguagesTutor",
  description: "Languages Tutor.",
 
};


export default async function Home() {
  const t = await getTranslations();
  return (
    <main className="w-full bg-neutral1">
      
    <section className="w-full bg-no-repeat lg:pb-0 pb-6 bg-cover lg:max-h-[75vh] overflow-hidden min-h-[620px] bg-center" style={{backgroundImage: 'url("/hero-bg-1.svg")' }}>
        <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
          <div className="w-full flex lg:flex-row flex-col">
          <div className="w-full max-w-[870px] lg:py-[113.44px] py-10">
          <div className="max-w-[640px]">
          <h1 className="md:text-40 text-32 font-bold text-neutral1">{t('main_heading')}</h1>
          <p className="md:text-lg text-base text-gray5 lg:py-7 py-4">{t('main_paragraph')}</p>
        
          <div className="flex flex-wrap items-center lg:justify-start justify-center gap-3">
               <Link href={'/courses'} className={'inline-flex text-base text-primary1 bg-primary border border-[#fff3] font-medium transition-all duration-200 py-2.5 px-5 rounded-lg'}>       
                  <span>{t('view_courses')}</span>
                </Link>
           <BookDemoButton/>
          </div>
          </div>
          <div className="w-full flex gap-3 pt-8">
            <div className="flex items-center gap-3 bg-gray4 sm:p-4 p-2 rounded-lg">
            <Image src="/group-imgs.png" width={176} height={48} alt="group imgs" className="sm:w-[176px] w-[120px] object-contain h-auto" />
            <div className="">
            <Image src="/rating-stars.svg" width={104} height={22} alt="group imgs" className="w-[104px] object-contain h-auto" />
            <p className="sm:text-base text-xs text-gray5 mt-1"><span>{t('loved_by_designers')}</span></p>
            </div>

            </div>

          </div>
          </div>
          <div className=" translate-x-6">
            <BannerCoursesStudents/>
          </div>
        </div>

        </div>
    </section>
    
        <CoursesProductsSection/>

    <section className="w-full lg:pt-10 lg:pb-[140px] py-10 bg-neutral1">
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
        <IntroVideoModel/>
      </div>
    </section>

    <section className="w-full lg:pb-20 lg:pt-20 py-10 bg-white">
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
        <div className="w-full">
          <span className="text-base text-primary2"><span>{t('why-section-offer')}</span></span>
          <div className="w-full flex lg:flex-row flex-col items-start gap-4 lg:items-center justify-between mb-9">
          <div className="">
          <h2 className="lg:text-5xl text-28 text-neutral2 font-semibold md:mt-5 mt-3 mb-3"><span>{t('why-section-heading')}</span></h2>
          <p className="md:text-lg text-base text-gray3"><span>{t('why-section-desc')}</span></p>
          </div>
              <PrimaryLinkGradient href="/courses" className="py-3 text-base">
                <span>{t('view_courses')}</span>
              </PrimaryLinkGradient>
          </div>
          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <SkillCard
            icon="IndustryExpert-Led.svg"
            title={<span>{t('why-section-card1-title')}</span>}
            des={<span>{t('why-section-card1-desc')}</span>}
            />
            <SkillCard
            icon="ESYRLearning.svg"
            title={<span>{t('why-section-card2-title')}</span>}
            des={<span>{t('why-section-card2-desc')}</span>}
            />
            <SkillCard
            icon="ActiveSupport.svg"
            title={<span>{t('why-section-card3-title')}</span>}
            des={<span>{t('why-section-card3-desc')}</span>}
            />
            <SkillCard
            icon="DiverseCommunity.svg"
            title={<span>{t('why-section-card4-title')}</span>}
            des={<span>{t('why-section-card4-desc')}</span>}
            />

          </div>
        </div>
        <div className="w-full py-10">
        <div className="text-center mb-8">
          <h2 className="lg:text-5xl text-28 text-neutral2 font-semibold md:mt-5 mt-3 mb-3"><span>{t('pashto-section-heading')}</span></h2>
          <p className="md:text-lg text-base text-gray3"><span>{t('pashto-section-desc')}</span></p>
          </div>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="w-full bg-white rounded-xl border border-neutral-neutral3 p-[13px]">
              <div className="w-full">
                <img src="/Designership_Cover-p-1600.png" className="rounded-lg" alt="img" />
              </div>
              <div className="w-full py-4 px-2">
                <h4 className="text-sm text-gray3 font-semibold"><span>{t('pashto-section-card1-title')}</span></h4>
                <h3 className="text-xl font-semibold text-black my-2"><span>{t('pashto-section-card1-heading')}</span></h3>
                <p className="text-sm text-gray3"><span>{t('pashto-section-card1-desc')}</span></p>
              </div>

            </div>

            <div className="w-full bg-white rounded-xl border border-neutral-neutral3 p-[13px]">
              <div className="w-full">
                <img src="/UX-Research-Method.png" className="rounded-lg" alt="img" />
              </div>
              <div className="w-full py-4 px-2">
                <h4 className="text-sm text-gray3 font-semibold"><span>{t('pashto-section-card2-title')}</span></h4>
                <h3 className="text-xl font-semibold text-black my-2"><span>{t('pashto-section-card2-heading')}</span></h3>
                <p className="text-sm text-gray3"><span>{t('pashto-section-card2-desc')}</span></p>
              </div>

            </div>

            <div className="w-full bg-white rounded-xl border border-neutral-neutral3 p-[13px]">
              <div className="w-full">
                <img src="/Primary-Secondary-Research.png" className="rounded-lg" alt="img" />
              </div>
              <div className="w-full py-4 px-2">
                <h4 className="text-sm text-gray3 font-semibold"><span>{t('pashto-section-card3-title')}</span></h4>
                <h3 className="text-xl font-semibold text-black my-2"><span>{t('pashto-section-card3-heading')}</span></h3>
                <p className="text-sm text-gray3"><span>{t('pashto-section-card3-desc')}</span></p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

    <SuccessStoriesSection/>
    
    <ClientReviewsSection/>

    <FaqsSection/>

    <section className="lg:pb-20 pb-10 pt-10 bg-white w-full">
    <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
      <div className="w-full">
      <span className="text-base text-primary2"><span>{t('blogs-section-title')}</span></span>
        <div className="w-full flex lg:flex-row flex-col items-start gap-4 lg:items-center justify-between mb-9">
        <div className="">
        <h2 className="lg:text-5xl text-28 text-neutral2 font-semibold md:mt-5 mt-3 md:mb-5 mb-3"><span>{t('blogs-section-heading')}</span></h2>
          <p className="md:text-lg text-base text-gray3"><span>{t('blogs-section-desc')}</span></p>
        </div>
            <PrimaryLinkGradient href="/blog" className="py-3 text-base">
              <span>{t('blogs-section-link')}</span>
            </PrimaryLinkGradient>
        </div>
      </div>
      <div className="w-full">
        <HomeBlogSwiper/>
      </div>

    </div>
    </section>

    <NewsLetterSection/>

    </main>

  );
}
 
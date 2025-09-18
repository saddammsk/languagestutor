'use client';

import { useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { PrimaryLinkGradient } from './common/PrimaryLinkGradient';
import { CourseCard } from './CourseCard';
import { sanityClient } from "../lib/sanity";
import { featuredCoursesQuery, languagesCoursesQuery } from "../lib/queries";
import { urlFor } from '../lib/sanityImage';
import { useTranslations, useLocale } from 'next-intl';

const CoursesProductsSection = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [languagesCourses, setLanguagesCourses] = useState<any[]>([]);
  const t = useTranslations();
  const locale = useLocale();
  
  const getLocalizedText = (field: { en: string; ar: string } | string | undefined, fallback: string = '') => {
    if (!field) return fallback
    if (typeof field === 'string') return field
    if (typeof field === 'object' && field.en && field.ar) {
      return locale === 'ar' ? field.ar : field.en
    }
    return fallback
  }

  const getTotalLectures = (curriculum: any[] | null | undefined): number => {
    if (!curriculum || !Array.isArray(curriculum)) return 0;
    return curriculum.reduce((total: number, module: any) => {
      return total + (module.lectures?.length || 0);
    }, 0);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
            const fetchedCourses = await sanityClient.fetch(featuredCoursesQuery(locale).query, featuredCoursesQuery(locale).params);
    const fetchedLanguagesCourses = await sanityClient.fetch(languagesCoursesQuery(locale).query, languagesCoursesQuery(locale).params);
        
        setCourses(fetchedCourses);
        setLanguagesCourses(fetchedLanguagesCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } 
    };

    fetchCourses();
  }, [locale]);




  return (
    <section className="lg:py-[100px] py-10">
      <div className="w-full max-w-[1340px] md:px-5 px-4 mx-auto">
        <div className="w-full">
          <TabGroup>
            <TabList className="inline-flex border p-1 border-neutral1 rounded-xl bg-neutral5">
              <Tab className="rounded-xl py-1.5 px-6 text-base font-medium text-gray5 focus:outline-none data-[selected]:text-black3 data-[selected]:shadow">
                <span>{t('courses-products-tab-courses')}</span>
              </Tab>
              <Tab className="rounded-xl py-1.5 px-6 text-base font-medium text-gray5 focus:outline-none data-[selected]:text-black3 data-[selected]:shadow">
                <span>{t('courses-products-tab-languages')}</span>
              </Tab>
            </TabList>
            <TabPanels className="mt-3">
              <TabPanel className="md:p-3">
                <div className="w-full">
                  <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between gap-6">
                    <div className="max-w-[600px]">
                      <h3 className="lg:text-5xl text-28 font-semibold mb-4 text-neutral2">
                        <span>{t('courses-products-heading')}</span>
                      </h3>
                      <p className="md:text-lg text-base text-gray3">
                        <span>{t('courses-products-desc')}</span>
                      </p>
                    </div>
                    <PrimaryLinkGradient href="/courses" className="text-base py-3">
                      {t('courses-products-link')}
                    </PrimaryLinkGradient>
                  </div>
                  <div className="w-full mt-8 overflow-auto">
                    <div className="w-full px-2 pt-2 pb-4 grid grid-cols-3 gap-4 min-w-[900px]">
                      {courses
                        .filter((course: any) => course.featured)
                        .slice(0, 3)
                        .map((course: any) => (
                          <CourseCard
                            key={course._id}
                            href={`/courses/${course.slug}`}
                            img={urlFor(course?.mainImage).width(400).url()}
                            title={getLocalizedText(course?.title, 'Untitled Course')}
                            users={course?.purchasedCount}
                            rating={course?.review}
                            level={course?.level}
                            description={getLocalizedText(course?.description, 'No description available')}
                            lessons={getTotalLectures(course?.curriculum)}
                            duration={course?.duration}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="md:p-3">
                <div className="w-full">
                  <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between gap-6">
                    <div className="max-w-[600px]">
                      <h3 className="lg:text-5xl text-28 font-semibold mb-4 text-neutral2">
                          <span>{t('courses-products-heading')}</span>
                      </h3>
                      <p className="md:text-lg text-base text-gray3">
                        <span>{t('courses-products-desc')}</span>
                      </p>
                    </div>
                    <PrimaryLinkGradient href="/courses" className="text-base py-3">
                      {t('courses-products-link')}
                    </PrimaryLinkGradient>
                  </div>
                  <div className="w-full mt-8 overflow-auto">
                    <div className="w-full px-2 pt-2 pb-4 grid grid-cols-3 gap-4 min-w-[900px]">
                      {languagesCourses
                        .slice(0, 3)
                        .map((course: any) => (
                          <CourseCard
                            key={course._id}
                            href={`/courses/${course.slug}`}
                            img={urlFor(course?.mainImage).width(400).url()}
                            title={getLocalizedText(course?.title, 'Untitled Course')}
                            users={course?.purchasedCount}
                            rating={course?.review}
                            level={course?.level}
                            description={getLocalizedText(course?.description, 'No description available')}
                            lessons={getTotalLectures(course?.curriculum)}
                            duration={course?.duration}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
};

export default CoursesProductsSection;

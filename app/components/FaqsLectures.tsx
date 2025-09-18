'use client'

import { motion } from "framer-motion";
import Image from 'next/image';
import { Link } from '@/i18n/navigation';;
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export interface Lecture {
  id?: string | number;
  title: { en: string; ar: string };
  previewUrl?: string;
  duration?: string;
}

export interface Module {
  id?: string | number;
  title: { en: string; ar: string };
  description?: { en: string; ar: string };
  previewlink?: string;
  lectures?: Lecture[];
}

interface FaqsLecturesProps {
  curriculum: Module[];
  locale: 'en' | 'ar';
}

// Helper to map raw course data into Module[]
export function getTranslatedCurriculum(curriculum: any[], locale: 'en' | 'ar'): Module[] {
  if (!Array.isArray(curriculum)) return [];
  
  return curriculum.map((mod: any) => ({
    id: mod.id,
    title: mod.title,
    description: mod.description,
    previewlink: mod.previewlink,
    lectures: Array.isArray(mod.lectures)
      ? mod.lectures.map((lec: any) => ({
          id: lec.id,
          title: lec.title,
          duration: lec.duration,
          previewUrl: lec.previewUrl
        }))
      : []
  }));
}

export default function FaqsLectures({ curriculum = [], locale }: FaqsLecturesProps) {
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});
  const [expandAll, setExpandAll] = useState(false);
  const t = useTranslations();

  const toggleDisclosure = (id: string) => {
    setExpandedStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);

    const newStates: Record<string, boolean> = {};
    curriculum.forEach((mod, index) => {
      newStates[`module-${mod.id ?? index}`] = newExpandAll;
    });
    setExpandedStates(newStates);
  };

  const totalLectures = curriculum.reduce((count, mod) => count + (mod.lectures?.length || 0), 0);

  return (
    <div className="w-full">
      {/* Expand All Button */}
      <div onClick={handleExpandAll} className="w-full flex items-center justify-between cursor-pointer mb-5">
        <h3 className='text-2xl text-black font-semibold mb-4'>{t('curriculum')}</h3>
        <div className="flex items-center gap-1">
          <span className='text-sm text-primary1 font-medium'>
            {!expandAll ? t('expand_all') : t('collapse_all')}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} fill="none" viewBox="0 0 20 21">
            <path d="M15 8.5L10 13.5L5 8.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Summary */}
      <div className="w-full flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Image src="/cf_collection.svg" width={20} height={20} alt='no-img' />
          <p className='text-sm text-gray5'>
            <span>{curriculum.length}</span> {t('modules')}
          </p>
        </div>
        <div className="flex items-center w-fit gap-2">
          <div className="flex items-center gap-2">
            <Image src="/d_book-open.svg" width={20} height={20} alt='no-img' />
            <p className='text-sm text-gray5 flex gap-1'>
              <span>{totalLectures}</span>
              <span className="hidden md:block">{t('lectures')}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="w-full space-y-4">
        {curriculum.map((mod, index) => {
          const moduleId = `module-${mod.id ?? index}`;
          const moduleTitle = mod.title?.[locale] ?? mod.title?.en;
          const moduleDesc = mod.description?.[locale] ?? mod.description?.en;

          return (
            <div key={moduleId}>
              {/* Module Toggle */}
              <button
                onClick={() => toggleDisclosure(moduleId)}
                className="group flex w-full sm:flex-row flex-col gap-2 sm:items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <span className={`size-5 inline-flex items-center justify-center transition-transform duration-300 ${expandedStates[moduleId] ? "rotate-90" : ""}`}>
                    <Image src={'/cheveron-right.svg'} width={20} height={24} alt='chevron' />
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="md:text-lg text-base text-start font-semibold text-neutral2">
                      {moduleTitle}
                    </span>
                    {mod.previewlink && (
                      <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded-full text-primary1">
                        {t('preview')}
                      </span>
                    )}
                  </div>
                </div>
              </button>

              {/* Module Lectures */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedStates[moduleId] ? "auto" : 0,
                  opacity: expandedStates[moduleId] ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="text-base text-neutral2 md:px-4 px-0 pb-4 py-4 mt-4">
                  {moduleDesc && (
                    <h3 className='md:text-base text-sm text-black mb-2'>{moduleDesc}</h3>
                  )}
                  <ul>
                    {mod.lectures?.map((lec, lecIdx) => {
                      const lectureTitle = lec.title?.[locale] ?? lec.title?.en;
                      return (
                        <li key={lec.id ?? `lec-${index}-${lecIdx}`} className='md:py-2 py-1.5'>
                          <Link href={"#"} className='flex items-center gap-3 justify-between sm:text-base text-sm text-black hover:text-primary1 font-medium'>
                            <div className="flex items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20">
                                <path
                                  d="M13.125 8.75L17.0581 4.81694C17.4518 4.42321 18.125 4.70207 18.125 5.25888V14.7411C18.125 15.2979 17.4518 15.5768 17.0581 15.1831L13.125 11.25M3.75 15.625H11.25C12.2855 15.625 13.125 14.7855 13.125 13.75V6.25C13.125 5.21447 12.2855 4.375 11.25 4.375H3.75C2.71447 4.375 1.875 5.21447 1.875 6.25V13.75C1.875 14.7855 2.71447 15.625 3.75 15.625Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{lectureTitle}</span>
                            </div>
                            <div className="flex items-center sm:gap-3 gap-2">
                              {lec.previewUrl && (
                                <span className='text-primary1 bg-primary/10 rounded-full sm:text-sm text-xs px-2 py-1'>
                                  {t('preview')}
                                </span>
                              )}
                              <span className='sm:text-base text-sm text-gray5'>{lec.duration}</span>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

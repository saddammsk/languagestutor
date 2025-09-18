'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';;
import clsx from 'clsx';
import { allBlogQuery } from '../../../lib/queries';
import { sanityClient } from '../../../lib/sanity';
import { useGlobalContext } from '../../../context/GlobalContext';
import { useTranslations, useLocale } from 'next-intl';

const Asidebar = () => {
    const [toggleFilterBar, settoggleFilterBar] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const {setFilteredBlog} = useGlobalContext();
    const t = useTranslations();
    const locale = useLocale();


  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };


  const getLocalizedText = (field: any): string => {
    if (typeof field === 'string') return field;
    if (field && typeof field === 'object') {
      return field[locale as keyof typeof field] || field.en || field.ar || '';
    }
    return '';
  };

  useEffect(() => {
    const fetchFilteredCourses = async () => {
      const allBlog = await sanityClient.fetch(allBlogQuery(locale).query, allBlogQuery(locale).params);
      const filtered = allBlog.filter((blog: any) => {
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(getLocalizedText (blog.blogCategory[0]?.title).toLowerCase());
        return matchCategory;
      });
      
      setFilteredBlog(filtered);
    };
  
    fetchFilteredCourses();
  }, [selectedCategories, locale]);
  

  return (
    <div>
         <button onClick={()=>settoggleFilterBar(pre=> !pre)} 
          className="w-full border lg:hidden font-medium flex items-center justify-between shadow-md p-3 rounded-md"> 
            <span>{t('all_blogs')}</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#000"
            aria-hidden="true"
            data-slot="icon"
            className='w-6' >
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
            </svg>
        </button>
        <div className={clsx(!toggleFilterBar && 'hidden' ,"lg:w-[212px] w-full lg:flex flex-col lg:static fixed lg:h-auto h-full lg:px-0 px-4 lg:py-0 py-20 lg:left-auto left-0 lg:bg-transparent bg-neutral1 lg:top-auto top-0 lg:z-auto z-[99]")}>
        <div className="w-full">
   
        <button onClick={()=> settoggleFilterBar(!toggleFilterBar)} className='absolute block lg:hidden bottom-6 left-1/2  -translate-x-1/2 z-50'>
        <svg    
            xmlns="http://www.w3.org/2000/svg"
            width={49}
            height={48}
            viewBox="0 0 49 48"
            fill="none">
            <rect
                x={1}
                y="0.5"
                width={47}
                height={47}
                rx="23.5"
                fill="url(#paint0_linear_6503_39794)"
            />
            <rect x={1} y="0.5" width={47} height={47} rx="23.5" stroke="#BEBEC6" />
            <path
                d="M18.5 30L30.5 18M18.5 18L30.5 30"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient
                id="paint0_linear_6503_39794"
                x1="24.5"
                y1={0}
                x2="24.5"
                y2={48}
                gradientUnits="userSpaceOnUse"
                >
                <stop stopColor="#FCFCFD" />
                <stop offset={1} stopColor="#F4F4F5" />
                </linearGradient>
            </defs>
            </svg>

        </button>
        </div>
        <div className="w-full pt-14">
      
        <div className="flex items-center gap-2.5 mb-2">
            <Image src={'/categories-icon.svg'} width={20} height={21} alt='courses logo' />
            <h4 className='text-neutral2 text-lg font-semibold'><span>{t('categories')}</span></h4>
        </div>
 
        <ul className='w-full pb-6 border-b border-neutral3'>
        <li>
            <label htmlFor="all-categories" className='flex relative items-center gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            defaultChecked
            type="checkbox" 
            name="all-categories" 
            id="all-categories" 
            className="appearance-none peer w-5 h-5 bg-neutral1  checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className={`absolute ${locale === 'ar' ? 'right-2' : 'left-2'}`}><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'><span>{t('all_blogs')}</span></span>
            </label>
        </li>
        <li>
            <label htmlFor="beginner-blog" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="beginner" 
            value="beginner" 
            onChange={handleCategoryChange}
            id="beginner-blog" 
            className="appearance-none peer w-5 h-5 bg-neutral1  checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className={`absolute ${locale === 'ar' ? 'right-2' : 'left-2'}`}><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'><span>{t('beginner')}</span></span>
            </label>
        </li>
        <li>
            <label htmlFor="intermediate-blog" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="intermediate" 
            value="intermediate" 
            id="intermediate-blog" 
            onChange={handleCategoryChange}
            className="appearance-none peer w-5 h-5 bg-neutral1  checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className={`absolute ${locale === 'ar' ? 'right-2' : 'left-2'}`}><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'><span>{t('intermediate')}</span></span>
            </label>
        </li>
        <li>
            <label htmlFor="advanced-blog" className='flex items-center relative gap-3 text-gray3 font-medium cursor-pointer hover:bg-neutral3 rounded p-1'>
            <input 
            type="checkbox" 
            name="advanced" 
            value="advanced" 
            id="advanced-blog" 
            onChange={handleCategoryChange}
            className="appearance-none peer w-5 h-5 bg-neutral1  checked:bg-primary1 border border-gray1 checked:border-neutral1 rounded"
            />
            <span className={`absolute ${locale === 'ar' ? 'right-2' : 'left-2'}`}><Image src={'/checbox-tick.svg'} width={12} height={12} alt='logo' /></span>
            <span className='peer-checked:text-primary1'><span>{t('advance')}</span></span>
            </label>
        </li>
    
        </ul>
        </div>

        <div className="w-full lg:flex flex-col items-center hidden justify-center gap-1 border border-neutral3 p-3 rounded-lg mt-8">
            <h4 className='text-lg  text-neutral2 font-semibold text-center'><span>{t('suggest_blog')}</span></h4>
            <p className='text-gray5 text-center text-sm'><span>{t('what_learn_next')}</span></p>
            <Link href={'/'} className='text-sm text-primary1 text-center font-medium hover:underline -mt-1' >
                <span>{t('submit_suggestion')}</span>
            </Link>
        </div>

        </div>
    </div>
  )
}

export default Asidebar
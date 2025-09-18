'use client'
import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { useTranslations } from 'next-intl';

const BookDemoButton = () => {
  const t = useTranslations();
const {setIsOpenForm} = useGlobalContext()


  return (
    <button onClick={()=>setIsOpenForm(true)}  className="text-base text-neutral3 bg-gray4 hover:bg-gray2 transition-all duration-200 border border-gray3 py-2.5 px-5 rounded-lg">
        <span>{t('demo_class')}</span>

    </button>
  )
}

export default BookDemoButton
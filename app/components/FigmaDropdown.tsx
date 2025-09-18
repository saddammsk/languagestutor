'use client'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import {clsx} from 'clsx'
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl'
import Image from 'next/image'





export default function FigmaDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()
  return (
    <Menu as="div" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="ml-2.5">
      {() => (
        <>
          <MenuButton as="button" className={clsx(isOpen && 'text-primary',"px-2 py-2.5 text-sm font-medium data-[hover]:text-primary transition-all duration-200 text-gray5 flex items-center gap-1.5 rounded-lg")}>
          {t('figma')}
          <CaretDown weight='bold' className={isOpen ? 'rotate-180 transition-rotate duration-200' :'rotate-0 transition-rotate duration-200'} size={14} />
          </MenuButton>
          <AnimatePresence>
            {isOpen && (
              <MenuItems
                static
                as={motion.div}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 10 }}
                className="absolute ml-1 shadow-lg bg-black2 rounded-xl origin-top border -mt-1 border-black3 z-10"
              >
                <div className="w-full py-3 px-3">
                    <ul className='w-full'>
                      <li>
                          <Link href="/" className='block text-sm text-gray1 group hover:text-neutral1 gap-3 py-2 transition-all duration-200 rounded-lg'>
                          {t('figma_courses')}
                          </Link>
                      </li>
                      <li>
                          <Link href="/" className='block text-sm text-gray1 group hover:text-neutral1 gap-3 py-2 transition-all duration-200 rounded-lg'>
                          {t('figma_resources')}
                          </Link>
                      </li>
                      <li>
                          <Link href="/" className='block text-sm text-gray1 group hover:text-neutral1 gap-3 py-2 transition-all duration-200 rounded-lg'>
                            {t('figma_articles')}
                          </Link>
                      </li>

                
                      
                    </ul>
                </div>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}

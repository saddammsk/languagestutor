'use client'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { sanityClient } from '../lib/sanity'
import { allCoursesQuery } from '../lib/queries'
import { useGlobalContext } from '../context/GlobalContext'
import { useTranslations, useLocale } from 'next-intl'
const sortOptions = [
  { id: 1, name: 'sort_popular' },
  { id: 2, name: 'sort_new' },
  { id: 3, name: 'sort_top_rated' },
  { id: 4, name: 'sort_price_low_high' },
  { id: 5, name: 'sort_price_high_low' },
]

interface CourseItem {
  review: number;
  price: number;
  createdAt: string;
}

export default function SortBy() {
  const [selected, setSelected] = useState(sortOptions[0]) 
  const [courses, setCourses] = useState<CourseItem[]>([])
  const { setFilteredCourses } = useGlobalContext()
  const t = useTranslations()
  const locale = useLocale()
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await sanityClient.fetch(allCoursesQuery(locale).query, allCoursesQuery(locale).params)
      setCourses(data)
    }
    fetchCourses()
  }, [locale])

  const sortedCourses = useMemo(() => {
    if (!courses || courses.length === 0) return []

    const sorted = [...courses]

    switch (selected.name) {
      case 'sort_popular':
        return sorted
      case 'sort_top_rated':
        return sorted.sort((a, b) => b.review - a.review)
      case 'sort_new':
        return sorted.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      case 'sort_price_low_high':
        return sorted.sort((a, b) => a.price - b.price)
      case 'sort_price_high_low':
        return sorted.sort((a, b) => b.price - a.price)
      default:
        return sorted
    }
  }, [selected, courses])

  useEffect(() => {
    if (sortedCourses.length > 0) {
      setFilteredCourses(sortedCourses)
    }
  }, [sortedCourses, setFilteredCourses])

  return (
    <div className="inline-flex flex-col items-start gap-4">
      <div className="inline-flex items-center justify-center">
        <span className="whitespace-nowrap text-base text-gray5 font-medium mr-2">
          <span>{t('sort_by')}</span>
        </span>
        <Listbox value={selected} onChange={setSelected}>
          <ListboxButton
            className={clsx(
              'relative block w-full py-1.5 pr-8 pl-2 text-left text-base text-neutral2 font-medium',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          >
            {selected && <span>{t(selected.name)}</span>}
            <ChevronDownIcon
              className="group pointer-events-none absolute top-2 right-2.5 size-5 fill-gray5"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={clsx(
              'w-fit rounded-lg border border-neutral3 bg-neutral5 px-1 py-3 focus:outline-none',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            )}
          >
            {sortOptions.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="group flex cursor-pointer text-base font-medium items-center gap-2 rounded-lg py-1 px-2 select-none"
              >
                <CheckIcon className="invisible size-4 fill-primary1 group-data-[selected]:visible" />
                <div className="text-base text-gray5 group-data-[selected]:text-primary1">
                  <span>{t(option.name)}</span>
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  )
}

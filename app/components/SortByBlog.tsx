import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { useTranslations } from 'next-intl'

const sortOptions = [
  { id: 1, name: 'sort_popular' },
  { id: 2, name: 'sort_new' },
  { id: 3, name: 'sort_top_rated' },
]

interface BlogItem {
  _id: string;
  topBlog: number;
  createdAt: string;
}

export default function SortByBlog() {
  const [selected, setSelected] = useState(sortOptions[0])
  const { filteredBlog, setFilteredBlog } = useGlobalContext()
  const t = useTranslations()

  const sortedBlog = useMemo(() => {
    if (!filteredBlog || filteredBlog.length === 0) return []

    const sorted = [...(filteredBlog as BlogItem[])]

    switch (selected.name) {
      case 'sort_popular':
        return sorted
      case 'sort_top_rated':
        return sorted.sort((a, b) => b.topBlog - a.topBlog)
      case 'sort_new':
        return sorted.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      default:
        return sorted
    }
  }, [selected, filteredBlog])

  useEffect(() => {
    if (selected.name === 'sort_popular') return
    if (sortedBlog.length === 0) return

    const currentIds = filteredBlog.map((item: any) => item?._id).join('|')
    const sortedIds = sortedBlog.map((item: BlogItem) => item?._id).join('|')

    if (currentIds !== sortedIds) {
      setFilteredBlog(sortedBlog)
    }
  }, [selected, sortedBlog, filteredBlog, setFilteredBlog])

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

'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const currentLang = languages.find((l) => l.code === locale) || languages[0]

  const switchLocale = (langCode: string) => {
    if (langCode === locale) return

    router.replace(pathname, { locale: langCode })
  }

  return (
    <div>
      <Listbox value={currentLang} onChange={(option) => switchLocale(option.code)}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-transparent py-1.5 pr-6 pl-3 text-left md:text-sm text-xs text-white',
            'focus:outline-none'
          )}
        >
          {currentLang.label}
          <ChevronDownIcon
            className="pointer-events-none absolute md:top-2.5 top-1.5 right-1.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'rounded-xl z-50 border border-white/5 bg-white p-1 focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {languages.map((option) => (
            <ListboxOption
              key={option.code}
              value={option}
              className="group text-xs flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 select-none data-[focus]:bg-primary"
            >
              <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
              <div className="md:text-sm text-xs text-black">{option.label}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}

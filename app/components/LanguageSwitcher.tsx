'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
];

const LanguageSwitcher = () => {
  const locale = useLocale(); // from next-intl
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const switchLocale = (langCode: string) => {
    if (langCode === locale) return;

    const segments = pathname.split('/');
    segments[1] = langCode; // update the locale segment
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div className="relative">
      <Listbox value={currentLang} onChange={(option) => switchLocale(option.code)}>
        <ListboxButton className="bg-transparent text-sm rounded-md px-2 py-1 text-white outline-none cursor-pointer flex items-center gap-2">
          {currentLang.label}
          <ChevronDownIcon className="w-4 h-4 text-white" />
        </ListboxButton>
        <ListboxOptions className="absolute mt-1 w-32 rounded-md overflow-hidden bg-white shadow-lg z-50">
          {languages.map((option) => (
            <ListboxOption
              key={option.code}
              value={option}
              className={({ active, selected }) =>
                `cursor-pointer text-sm select-none relative py-2 pl-4 pr-8 ${
                  active ? 'bg-primary text-gray-900' : 'text-gray-900'
                } ${selected ? 'font-semibold' : 'font-normal'}`
              }
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {option.label}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 right-2 flex items-center text-primary1">
                      <CheckIcon className="w-4 h-4" />
                    </span>
                  )}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default LanguageSwitcher;

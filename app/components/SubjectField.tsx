import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Controller, Control, FieldErrors } from "react-hook-form";
import clsx from "clsx";
import { useLocale } from "next-intl";

type SubjectOption = {
  id: number;
  name: {
    en: string;
    ar: string;
  };
};

// types/form.ts
export type FormValues = {
  name: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message?: string;
  privacyAccepted: boolean;
};
type Props = {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  t: (key: string) => string;
};

const subjects: SubjectOption[] = [
  { id: 1, name: { en: "Pashto Beginner Course", ar: "دورة الباشتو للمبتدئين" } },
  { id: 2, name: { en: "Professional Pashto Course", ar: "دورة الباشتو المهنية" } },
  { id: 3, name: { en: "Pashto Dialects Course", ar: "دورة لهجات الباشتو" } },
  { id: 4, name: { en: "Advanced Pashto Course", ar: "دورة الباشتو المتقدمة" } },
  { id: 5, name: { en: "Arabic Beginner Course", ar: "دورة العربية للمبتدئين" } },
  { id: 6, name: { en: "Quran Reading & Tajweed", ar: "قراءة القرآن والتجويد" } },
  { id: 7, name: { en: "Urdu Language Course", ar: "دورة اللغة الأردية" } },
  { id: 8, name: { en: "Complete Pashto Mastery Program", ar: "برنامج إتقان الباشتو الكامل" } },
  { id: 9, name: { en: "Customized Pashto Course", ar: "دورة باشتو مخصصة" } },
  { id: 10, name: { en: "Gulf Arabic Course", ar: "دورة العربية الخليجية" } },
];

export default function SubjectField({ control, errors, t }: Props) {
  const locale = useLocale();
  const activeLocale = locale === "ar" ? "ar" : "en";

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray5">
        {t("subject")}
      </label>

      <Controller
        name="subject"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const selected = subjects.find(
            (s) => s.name.en === field.value || s.name.ar === field.value
          );

          return (
            <Listbox
              value={selected || null}
              onChange={(val: SubjectOption) =>
                field.onChange(val.name[activeLocale])
              }
            >
              <div className="relative">
                <ListboxButton
                  className={clsx(
                    "relative w-full border-b border-gray-200 py-2 text-sm text-black1 bg-transparent",
                    activeLocale === "ar"
                      ? "pl-8 pr-0 text-right"
                      : "pr-8 pl-0 text-left",
                    "focus:outline-none focus:border-black1"
                  )}
                >
                  {selected?.name[activeLocale] || t("subject")}

                  <ChevronDownIcon
                    className={clsx(
                      "pointer-events-none absolute top-2.5 size-4 text-gray-400",
                      activeLocale === "ar" ? "left-0" : "right-0"
                    )}
                    aria-hidden="true"
                  />
                </ListboxButton>

                <ListboxOptions
                  transition
                  className={clsx(
                    "z-10 mt-1 w-full absolute rounded-md bg-white border border-gray-200 max-h-[200px] overflow-auto shadow-md",
                    "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                  )}
                >
                  {subjects.map((subject) => (
                    <ListboxOption
                      key={subject.id}
                      value={subject}
                      className={clsx(
                        "group flex cursor-pointer items-center gap-2 px-3 py-2 text-sm select-none data-[focus]:bg-gray-100",
                        activeLocale === "ar" ? "text-right" : "text-left"
                      )}
                    >
                      <CheckIcon className="invisible size-4 text-black group-data-[selected]:visible" />
                      <span>{subject.name[activeLocale]}</span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          );
        }}
      />

      {errors.subject && (
        <p className="text-red-500 text-xs">
          {errors.subject.message as string}
        </p>
      )}
    </div>
  );
}

'use client'
import { Disclosure } from '@headlessui/react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl'

export default function DynamicFaqs({ faqs }: { faqs: any[] }) {
  const t = useTranslations()

  return (
    <div className="w-full">
         <div className="">
          <h2 className="md:text-2xl text-28  text-neutral2 font-semibold md:my-6 mb-3"><span>{t('faq-heading')}</span></h2>
          </div>


      <div className="mx-auto w-full space-y-3">
        {faqs?.map((faq, index) => (
          <Disclosure as="div" key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-white border border-neutral3 rounded-xl">
                  <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
                    <span>{faq?.question}</span>
                  </span>
                  <span
                    className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${
                      open ? "rotate-45 translate-x-0.5" : ""
                    }`}
                  >
                    +
                  </span>
                </Disclosure.Button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
                    <span>{faq?.answer}</span>
                  </div>
                </motion.div>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}
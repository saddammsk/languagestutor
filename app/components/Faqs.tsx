'use client'
import { Disclosure } from '@headlessui/react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl'

export default function Faqs() {
  const t = useTranslations()
  return (
    <div className="w-full md:px-4 py-10">
      <div className="mx-auto w-full max-w-[768px] md:space-y-5 space-y-3">
      {/* defaultOpen={true} */}
        <Disclosure as="div" >
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <span>{t('faq-q1')}</span>
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>

          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <span>{t('faq-a1')}</span>
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <span>{t('faq-q2')}</span>
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <span>{t('faq-a2')}</span>
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <span>{t('faq-q3')}</span>
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <span>{t('faq-a3')}</span>
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <span>{t('faq-q4')}</span>
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <span>{t('faq-a4')}</span>
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <span>{t('faq-q5')}</span>
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
                <span>{t('faq-a5')}</span>
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 px-5 md:py-5 py-4 gap-2 bg-neutral1 border border-neutral3 rounded-xl">
            <span className="md:text-lg sm:text-base text-sm text-start font-semibold text-neutral2">
              <span>{t('faq-q6')}</span>
            </span>
            <span className={`size-5 fill-white/60 inline-flex items-center justify-center transition-transform text-3xl duration-300 ${open ? "rotate-45 translate-x-0.5" : ""}`} >+</span>
          </Disclosure.Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="sm:text-base text-sm text-neutral2 mt-4 p-4 bg-neutral5 rounded-xl border border-neutral3">
              <span>{t('faq-a6')}</span>
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

     
      </div>
    </div>
  )
}

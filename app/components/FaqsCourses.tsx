'use client'
import { Disclosure } from '@headlessui/react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl'

export default function FaqsCourses() {
  const t = useTranslations()
  return (
    <div className="w-full">
      <div className="mx-auto w-full md:space-y-5 space-y-3">
      {/* defaultOpen={true} */}
        <Disclosure as="div" >
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-base text-start font-semibold text-neutral2">
              {t('what_is_designership')}
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            {t('what_is_designership_description')}
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            {t('how_can_i_learn_figma')}
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            {t('how_can_i_learn_figma_description')}
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            {t('how_can_i_learn_ux_research')}
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            {t('how_can_i_learn_ux_research_description')}
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            {t('where_can_i_find_reviews_on_designership')}
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            {t('designership_description2')}
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            {t('designership_offer')}
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            {t('design_skills_description')}
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            {t('my_ux_ui_design_skills')}
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
            <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
            {t('design_skills_description')}
            </div>
          </motion.div>
        </>
      )}
        </Disclosure>

        <Disclosure as="div">
        {({ open }) => (
        <>
          <Disclosure.Button className="group flex w-full items-center justify-between md:px-6 md:py-5 p-3 bg-neutral5 border border-neutral3 rounded-xl">
            <span className="md:text-lg text-sm text-start font-semibold text-neutral2">
            {t('do_discount_codes_or_coupons_work_for_bundles')}
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
              <div className="text-base text-neutral2 mt-4 p-4 bg-neutral5/10 rounded-xl border border-neutral3">
                {t('work_for_bundles_description')}
              </div>
          </motion.div>
        </>
      )}
        </Disclosure>
     
      </div>

      <p className="md:text-lg text-sm text-neutral2 font-medium text-center mt-8">{t('still_cant_find_the_answer')} <a href="#" className="text-primary1">{t('contact_our_support')}</a></p>

    </div>
  )
}

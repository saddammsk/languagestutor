'use client'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import discountlogo from '../../public/discount-logo.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'


export default function DiscountPopup() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }


  useEffect(()=>{
    const timer =  setTimeout(()=>{
        open();
    }, 5000) 

    return () => {
      clearInterval(timer)
    }
  },[])

  const t = useTranslations()

  return (
    <>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/70">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full relative max-w-md rounded-xl bg-white py-[60px] px-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                <button onClick={close} className='absolute right-5 top-5'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 28 28"
                fill="none"
                >
                <path
                    d="M7 21L21 7M7 7L21 21"
                    stroke="#DFDFE2"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
                </button>

                <div className="w-ful flex items-center justify-center mb-5">
                <Image src={discountlogo} alt='logo' />
               </div>

              <DialogTitle as="h3" className="text-32 mb-2 text-neutral2 font-semibold text-center">
              <span>{t('discount_title')}</span>
              </DialogTitle>
              <p className="mt-2 text-sm font-medium text-gray5 text-center mb-6">
                {t('discount_subtitle')}
              </p>
              <form >
              <div className="mt-4 flex flex-col gap-3">
                <input
                required
                  type="email"
                  className="w-full rounded-md py-2 px-3 text-sm/6 font-medium text-gray-900 border border-gray1 focus:outline-none"
                  placeholder={t('discount_placeholder')}
                  aria-label="email"
                />
                <Button
                type="submit"
                  className="inline-flex justify-center items-center gap-2 rounded-md bg-gradient-to-t hover:from-primary2 hover:to-primary1 from-primary3 to-primary4 py-3 px-6 w-full text-center text-base font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                >
                 {t('discount_button')}
                </Button>
              </div>
              </form>

              <p className="text-center text-xs text-gray5 font-medium mt-6">
                {t('discount_privacy')}
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

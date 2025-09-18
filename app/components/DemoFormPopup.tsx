'use client'
import { Button, Dialog, DialogPanel } from '@headlessui/react'
import { useGlobalContext } from '../context/GlobalContext'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import toast from 'react-hot-toast'
import WhatsappInput from './CountryCodeInput'
import { useTranslations } from 'next-intl' 

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number required'),
  course: z.string().min(1, 'Please select a course'),
  message: z.string().optional(),
  privacyAccepted: z.boolean().refine(val => val, {
    message: 'You must accept the privacy policy',
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function DemoFormPopup() {
  const { isOpenForm, setIsOpenForm } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const t = useTranslations()
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      message: '',
      privacyAccepted: false,
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const close = () => {
    setIsOpenForm(false)
    reset()
  }

  const onSubmit = async (data: FormValues) => {
    setLoading(true)
    try {
      const res = await fetch('/api/bookdemo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        toast.success(result.message || 'Demo booked successfully!')
        close()
      } else {
        toast.error(result.error || 'Failed to submit form')
      }
    } catch (err) {
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpenForm} as="div" className="relative z-50 focus:outline-none" onClose={close}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/70">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full relative max-w-[576px] rounded-xl bg-gray8 lg:p-8 px-4 py-8 backdrop-blur-2xl">
            <button onClick={()=>setIsOpenForm(false)} className='text-black font-bold absolute right-3 top-2 font-sans lg:hidden'>
            <span>X</span>
            </button>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full" id="demo-form">
                <div className="flex flex-col gap-8">
                  <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5">
                    <div className="w-full">
                      <label htmlFor="firstName" className="text-gray7 text-sm mb-2 block font-medium">{t('first_name')}</label>
                      <input
                        {...register('firstName')}
                        id="firstName"
                        className="w-full rounded-md shadow py-2 px-3 text-sm font-medium text-gray-900 border border-gray1 focus:outline-none"
                        placeholder={t('first_name')}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>

                    <div className="w-full">
                      <label htmlFor="lastName" className="text-gray7 text-sm mb-2 block font-medium">{t('last_name')}</label>
                      <input
                        {...register('lastName')}
                        id="lastName"
                        className="w-full rounded-md shadow py-2 px-3 text-sm font-medium text-gray-900 border border-gray1 focus:outline-none"
                        placeholder={t('last_name')}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="email" className="text-gray7 text-sm mb-2 block font-medium">{t('email')}</label>
                    <input
                      {...register('email')}
                      id="email"
                      className="w-full rounded-md shadow py-2 px-3 text-sm font-medium text-gray-900 border border-gray1 focus:outline-none"
                      placeholder={t('enter_your_email')}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="w-full">
                  <WhatsappInput />
                  </div>

                  <div className="w-full">
                    <label htmlFor="course" className="text-gray7 text-sm mb-2 block font-medium">{t('course')}</label>
                    <select
                      {...register('course')}
                      id="course"
                      className="w-full shadow rounded-md py-2.5 px-3 text-sm font-medium text-gray7/60 border border-gray1 focus:outline-none"
                    >
                      <option value="">{t('select_course_to_enroll')}</option>
                      <option value="Pashto">{t('pashto')}</option>
                      <option value="Arabic">{t('arabic')}</option>
                      <option value="Urdu">{t('urdu')}</option>
                      <option value="English">{t('english')}</option>
                    </select>
                    {errors.course && <p className="text-red-500 text-sm">{errors.course.message}</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="message" className="text-gray7 text-sm mb-2 block font-medium">{t('message')}</label>
                    <textarea
                      {...register('message')}
                      id="message"
                      placeholder={t('type_your_message_here')}
                      className="w-full focus:outline-none p-3 border border-gray6 shadow rounded-lg h-32"
                    />
                  </div>

                  <div className="w-full">
                    <div className="flex items-center gap-2">
                      <input {...register('privacyAccepted')} type="checkbox" id="Privacy" className="border-gray6" />
                      <label htmlFor="Privacy" className="text-gray7 text-sm">
                        {t('privacy_policy')}
                      </label>
                    </div>
                    {errors.privacyAccepted && <p className="text-red-500 text-sm">{errors.privacyAccepted.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 rounded-md bg-gradient-to-t from-primary3 to-[#AFD86B] py-3 px-6 w-full text-base font-semibold text-white shadow-inner focus:outline-none"
                  >
                      {!loading ? t('book_demo_class') : t('please_wait')}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

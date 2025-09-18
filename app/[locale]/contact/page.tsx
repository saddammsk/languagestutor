'use client'
import { Button } from '@headlessui/react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl' 
import { useGlobalContext } from '@/app/context/GlobalContext'

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

export default function Contact() {
  const { isOpenForm, setIsOpenForm } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const t = useTranslations()
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
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
      <section className="pt-14 pb-20 bg-black3">
        <div className="w-full max-w-[1440px] mx-auto px-5">
        <div className=" flex flex-col items-center justify-center gap-10">
          <div className="max-w-[600px]">
            <h1 className='text-5xl text-center mb-3 text-white font-medium'>Contact Us</h1>
            <p className='text-base text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ullam impedit, blanditiis cupiditate vel quidem error eveniet dicta. Commodi hic aliquid laudantium reprehenderit quas saepe esse voluptatibus est sunt deserunt.</p>
          </div>
          <div className="w-full relative max-w-[576px] rounded-xl bg-gray8 shadow-lg lg:p-8 px-4 py-8 backdrop-blur-2xl">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full" id="demo-form">
                <div className="flex flex-col gap-4">
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
                      {!loading ? t('contact_btn') : t('please_wait')}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
          
        </div>
        </div>
      </section>
  )
}

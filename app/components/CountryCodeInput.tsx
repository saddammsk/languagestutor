'use client'

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useFormContext } from 'react-hook-form'

export default function WhatsappInput() {
  const { setValue, getValues, formState: { errors } } = useFormContext()

  return (
    <div className="w-full">
      <label htmlFor="phone" className="text-gray7 text-sm mb-2 block font-medium">
        WhatsApp Number
      </label>

      <PhoneInput
        id="phone"
        international
        defaultCountry="US"
        value={getValues('phone')}
        onChange={(value) => setValue('phone', value || '')}
        className="!text-sm !w-full phone-input bg-white shadow rounded-md py-2 px-3 font-medium text-gray-900 border border-gray1 focus:outline-none"
        placeholder="Whatsapp number"
      />

      {errors.phone && (
        <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
      )}
    </div>
  )
}

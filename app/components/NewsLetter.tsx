'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'

export default function NewsLetter() {
  const t = useTranslations()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ email }),
    })
    
    const data = await res.json()
    
    if (res.ok && data.message) {
      toast.success(data.message || 'Subscription successfully!')
    } else if (data.error) {
      toast.error(data.error || 'Subscription failed!')
      alert('❌ Subscription failed: ' + data.error);
    }

    setLoading(false)
    setEmail('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex md:flex-row flex-col items-center gap-4">
        <input
          required
          type="email"
          placeholder={undefined}
          aria-placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:w-4/5 w-full bg-white border p-3 focus:outline-none rounded-lg"
        />
        <button
          type="submit"
          className="md:w-fit w-full text-center items-center justify-center inline-flex text-neutral5 bg-primary1 hover:bg-slate-800 border border-[#fff3] font-medium transition-all duration-200 py-2.5 px-5 rounded-lg"
        > 
        {!loading ? 
          <span>{t('newsletter-subscribe')}</span>
        :
          <span>{t('newsletter-wait')}</span>
        }
        </button>

      </form>
      <p className="text-xs text-center text-gray3 mt-6 font-medium max-w-[470px] mx-auto">
        <span>{t('newsletter-terms')}</span>
      </p>
    </div>
  )
  }

import { urlFor } from '@/app/lib/sanityImage'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null

      const url = urlFor(value).width(800).height(500).url()

      return (
        <div className="lg:my-10 my-6">
          <Image
            src={url}
            alt={value.alt || 'Sanity image'}
            width={800}
            height={500}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      )
    }
  }
}

const RichText = ({ content }: { content: any }) => {
  return <PortableText value={content} components={components} />
}

export default RichText

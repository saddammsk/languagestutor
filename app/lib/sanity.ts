import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'h7nrg0d7',     
  dataset: 'production',          
  useCdn: false,                     
  apiVersion: '2024-03-19',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  perspective: "published",
})


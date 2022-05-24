import createImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '98ar8gck',
  apiVersion: '2022-01-21', // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

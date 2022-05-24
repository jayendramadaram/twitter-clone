// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'
type Data = {
  tweets: Tweet[]
}

const query = groq`
*[_type == 'tweet']  | order(_createdAt)  {
  _id,
 ...
} 
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await sanityClient.fetch(query)

  res.status(200).json({ tweets })
}

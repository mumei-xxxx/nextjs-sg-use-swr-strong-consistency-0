// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { fetcher } from '@/libraries/fetcher'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const API_URL = 'https://api.bitflyer.com/v1/getticker'

  const data = await fetcher(API_URL)
  res.end(JSON.stringify(data))
}

// eslint-disable-next-line import/no-default-export
export default handler

import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

export const optionsHandler = {
  onError: (error: Error, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: error.message })
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  },
}

export const apiHandler = () => {
  return nextConnect<NextApiRequest, NextApiResponse>(optionsHandler)
}

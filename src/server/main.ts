import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { handleApiError } from './common/errors/apiError'

export const optionsHandler = {
  onError: (error: Error, req: NextApiRequest, res: NextApiResponse) => {
    handleApiError(error, req, res)
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` })
  },
}

export const apiHandler = () => {
  return nextConnect<NextApiRequest, NextApiResponse>(optionsHandler)
}

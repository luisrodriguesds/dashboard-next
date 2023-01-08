import { apiHandler } from '../../../server/main'

const handler = apiHandler()

handler.post(async (req, res) => {
  return res.status(200).json({
    message: req.body,
  })
})

export default handler

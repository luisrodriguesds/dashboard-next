import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
let prisma: PrismaClient

// only on server
if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    if (!(global as any).prisma) {
      ;(global as any).prisma = new PrismaClient({
        log: ['query'],
      })
    }
    prisma = (global as any).prisma
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default prisma as PrismaClient
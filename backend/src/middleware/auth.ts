import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import prisma from '../prisma/client'

interface JwtPayload {
  userId: number
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]

  if (!token) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user as JwtPayload
    next()
  })
}

export const authorizeAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user?.userId

  if (!userId) return res.sendStatus(403)

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (user?.role !== 'admin') return res.sendStatus(403)

  next()
}
import bcrypt from 'bcrypt'
import { Router } from 'express'
import jwt from 'jsonwebtoken'
import prisma from '../prisma/client'

const router = Router()

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await prisma.user.findUnique({ where: { username } })
  if (!user) return res.status(400).send('Invalid credentials')

  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET as string, {
        expiresIn: '3h',
      })
      res.json({ accessToken })
    } else {
      res.send('Not Allowed')
    }
  } catch (error) {
    res.status(500).send()
  }
})

export default router
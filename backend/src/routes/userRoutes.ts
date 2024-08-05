import { Router } from 'express'
import { authenticateToken, authorizeAdmin } from '../middleware/auth'
import prisma from '../prisma/client'

const router = Router()

router.put('/:id/role', authenticateToken, authorizeAdmin, async (req, res) => {
  const { id } = req.params
  const { role } = req.body

  if (!role) return res.status(400).send('Role is required')

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { role }
    })
    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default router
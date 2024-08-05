import type { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma/client'

export const createTechnician = async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { name, lastName } = req.body
    const technician = await prisma.technician.create({
      data: {
        name,
        lastName,
      },
    })
    res.json(technician)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const getTechnicians = async (_req: Request, res: Response) => {
  try {
    const technicians = await prisma.technician.findMany()
    res.json(technicians)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const getTechnicianById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const technician = await prisma.technician.findUnique({
      where: {
        id: Number.parseInt(id),
      },
    })
    if (!technician) {
      return res.status(404).json({ error: 'Technician not found' })
    }
    res.json(technician)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const updateTechnician = async (req: Request, res: Response) => {
  const { id } = req.params
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const updatedTechnician = await prisma.technician.update({
      where: { id: Number(id) },
      data: req.body
    })
    res.json(updatedTechnician)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const disableTechnician = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const technician = await prisma.technician.update({
      where: { id: Number(id) },
      data: { enabled: false }
    })
    res.json(technician)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}
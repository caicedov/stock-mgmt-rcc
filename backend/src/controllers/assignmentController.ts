import type { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma/client'

export const createAssignment = async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const {
    productId,
    technicianId,
    quantity,
    date,
    serial
  } = req.body

  try {
    const newAssignment = await prisma.assignment.create({
      data: {
        productId,
        technicianId,
        quantity,
        date,
        serial
      }
    })
    res.status(201).json(newAssignment)
  } catch (error) {
    return res.status(500).json({ error: 'Error creating assignment' })
  }
}

export const getAssignments = async (_req: Request, res: Response) => {
  try {
    const assignments = await prisma.assignment.findMany()
    res.status(200).json(assignments)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assignments' })
  }
}

export const getAssignmentsById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const assignment = await prisma.assignment.findUnique({
      where: { id: Number(id) }
    })
    if (!assignment) return res.status(404).json({ error: 'Assignment not found' })

    res.status(200).json(assignment)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assignment' })
  }
}

export const getAssignmentsByProductId = async (req: Request, res: Response) => {
  const { productId } = req.params

  try {
    const assignments = await prisma.assignment.findMany({
      where: { productId: Number(productId) }
    })
    res.status(200).json(assignments)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assignments' })
  }
}

export const getAssignmentsByTechnicianId = async (req: Request, res: Response) => {
  const { technicianId } = req.params

  try {
    const assignments = await prisma.assignment.findMany({
      where: { technicianId: Number(technicianId) }
    })
    res.status(200).json(assignments)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assignments' })
  }
}

export const getAssignmentsByTechnicianAndProduct = async (req: Request, res: Response) => {
  const { technicianId, productId } = req.query

  try {
    const assignments = await prisma.assignment.findMany({
      where: {
        AND: [
          { technicianId: technicianId ? Number(technicianId) : undefined },
          { productId: productId ? Number(productId) : undefined }
        ]
      }
    })
    res.status(200).json(assignments)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assignments' })
  }
}
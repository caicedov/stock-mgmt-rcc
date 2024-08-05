import type { Request, Response } from 'express'
import prisma from '../prisma/client'
import { validationResult } from 'express-validator'

export const createCategory = async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const { name } = req.body
    const category = await prisma.category.create({
      data: {
        name,
      },
    })
    res.json(category)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany()
    res.json(categories)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await prisma.category.findUnique({
      where: {
        id: Number.parseInt(id),
      },
    })
    if (!category) {
      return res.status(404).json({ error: 'Category not found' })
    }
    res.json(category)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  try {
    const updatedCategory = await prisma.category.update({
      where: { id: Number(id) },
      data: req.body
    })
    res.status(200).json(updatedCategory)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}
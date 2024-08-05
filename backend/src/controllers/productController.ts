import type { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma/client'

export const createProduct = async (req: Request, res: Response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const {
    name,
    serial,
    quantity,
    arrivalDate,
    price,
    provider,
    enabled,
    criticalStock,
    status,
    categoryId
  } = req.body

  const normalizedName = name.toUpperCase()

  try {

    // Check if a product with the same name already exists
    const existingProduct = await prisma.product.findUnique({
      where: {
        name: normalizedName
      }
    })

    if (existingProduct) {
      // If product exists, update the quantity
      const updatedProduct = await prisma.product.update({
        where: { id: existingProduct.id },
        data: { quantity: existingProduct.quantity + quantity }
      })
      res.status(200).json(updatedProduct)
    } else {
      // If product does not exist, create a new one
      const newProduct = await prisma.product.create({
        data: {
          name: normalizedName,
          serial,
          quantity,
          arrivalDate,
          price,
          provider,
          enabled,
          criticalStock,
          status,
          categoryId
        }
      })
      res.status(201).json(newProduct)
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error creating product' })
  }
}

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving products' })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (!product) return res.status(404).json({ error: 'Product not found' })

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving product' })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(id)
      },
      data: req.body
    })
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (!product) return res.status(404).json({ error: 'Product not found' })

    await prisma.product.update({
      where: { id: Number(id) },
      data: { enabled: false }
    })
    res.status(200).json({ message: 'Product disabled successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Error disabling product' })
  }
}


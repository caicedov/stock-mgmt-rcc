import { body } from 'express-validator'

export const createTechnicianValidator = [
  body('name').isString().notEmpty().withMessage('Name is required and must be a string'),
  body('lastName').isString().notEmpty().withMessage('Last name is required and must be a string'),
]

export const updateTechnicianValidator = [
  body('name').optional().isString().notEmpty().withMessage('Name must be a string'),
  body('lastName').optional().isString().notEmpty().withMessage('Last name must be a string'),
]
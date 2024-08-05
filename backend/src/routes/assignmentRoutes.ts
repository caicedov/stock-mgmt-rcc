import { Router } from 'express'
import {
  createAssignment,
  getAssignments,
  getAssignmentsById,
  getAssignmentsByProductId,
  getAssignmentsByTechnicianAndProduct,
  getAssignmentsByTechnicianId
} from '../controllers/assignmentController'
import {
  createAssignmentValidator
} from '../validators/assignmentValidators'

const router = Router()

router.post('/', createAssignmentValidator, createAssignment)
router.get('/', getAssignments)
router.get('/:id', getAssignmentsById)
router.get('/product/:productId', getAssignmentsByProductId)
router.get('/technician/:technicianId', getAssignmentsByTechnicianId)
router.get('/filter', getAssignmentsByTechnicianAndProduct)

export default router
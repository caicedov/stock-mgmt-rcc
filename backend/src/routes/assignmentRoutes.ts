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
import { authenticateToken, authorizeAdmin } from '../middleware/auth'

const router = Router()

router.post('/',  authenticateToken, authorizeAdmin, createAssignmentValidator, createAssignment)
router.get('/', getAssignments)
router.get('/:id', getAssignmentsById)
router.get('/product/:productId', getAssignmentsByProductId)
router.get('/technician/:technicianId', getAssignmentsByTechnicianId)
router.get('/filter', getAssignmentsByTechnicianAndProduct)

export default router
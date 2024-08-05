import { Router } from 'express'
import {
  createTechnician,
  disableTechnician,
  getTechnicianById,
  getTechnicians,
  updateTechnician
} from '../controllers/technicianController'
import { authenticateToken, authorizeAdmin } from '../middleware/auth'
import {
  createTechnicianValidator,
  updateTechnicianValidator
} from '../validators/technicianValidators'

const router = Router()

router.post('/', authenticateToken, authorizeAdmin, createTechnicianValidator, createTechnician)
router.get('/', getTechnicians)
router.get('/:id', getTechnicianById)
router.put('/:id', authenticateToken, authorizeAdmin, updateTechnicianValidator, updateTechnician)
router.put('/:id/disable', authenticateToken, authorizeAdmin, disableTechnician)

export default router
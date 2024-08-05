import { Router } from 'express'
import {
  createTechnician,
  disableTechnician,
  getTechnicianById,
  getTechnicians,
  updateTechnician
} from '../controllers/technicianController'
import {
  createTechnicianValidator,
  updateTechnicianValidator
} from '../validators/technicianValidators'

const router = Router()

router.post('/', createTechnicianValidator, createTechnician)
router.get('/', getTechnicians)
router.get('/:id', getTechnicianById)
router.put('/:id', updateTechnicianValidator, updateTechnician)
router.put('/:id/disable', disableTechnician)

export default router
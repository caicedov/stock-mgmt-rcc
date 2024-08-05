import express, { json } from 'express'
import { authenticateToken, authorizeAdmin } from './middleware/auth'
import assignmentRoutes from './routes/assignmentRoutes'
import authRoutes from './routes/authRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/products'
import technicianRoutes from './routes/technicianRoutes'

const app = express()

app.use(json())
app.use('/api/v1', authRoutes)

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/assignments', assignmentRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/technicians', technicianRoutes)

app.use(authenticateToken)
app.use('/api/v1', authorizeAdmin)

export default app
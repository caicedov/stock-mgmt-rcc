import express, { json } from 'express'
import { authenticateToken, authorizeAdmin } from './middleware/auth'
import assignmentRoutes from './routes/assignmentRoutes'
import authRoutes from './routes/authRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/products'
import technicianRoutes from './routes/technicianRoutes'
import userRoutes from './routes/userRoutes'

const app = express()

app.use(json())
app.use('/api', authRoutes)

// Public routes
app.use('/api/products', productRoutes)
app.use('/api/assignments', assignmentRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/technicians', technicianRoutes)

// Protected routes
app.use(authenticateToken)
app.use('/api', authorizeAdmin)
app.use('/api/users', userRoutes)

export default app
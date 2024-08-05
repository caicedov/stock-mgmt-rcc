import express, { json } from 'express'
import assignmentRoutes from './routes/assignmentRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/products'
import technicianRoutes from './routes/technicianRoutes'

const app = express()

app.use(json())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/assignments', assignmentRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/technicians', technicianRoutes)

export default app
import express, { json } from 'express'
import assignmentRoutes from './routes/assignmentRoutes'
import productRoutes from './routes/products'

const app = express()

app.use(json())

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/assignments', assignmentRoutes)

export default app
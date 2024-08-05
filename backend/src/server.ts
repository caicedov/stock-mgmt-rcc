import express, { json } from 'express'
import productRoutes from './routes/products'

const app = express()

app.use(json())

app.use('/api/v1/products', productRoutes)

export default app
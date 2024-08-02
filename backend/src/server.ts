import express, { json } from 'express'
import { errorHandler } from './middlewares/errorHandler'

const server = express()

server.use(json())


server.use(errorHandler)

export default server
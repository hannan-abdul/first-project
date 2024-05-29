/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import globlaErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'

const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

const test = (req: Request, res: Response) => {
  const a = 10
  res.send(a)
}

app.get('/', test)

// golbal error function
app.use(globlaErrorHandler)

// Not Found
app.use(notFound)

export default app

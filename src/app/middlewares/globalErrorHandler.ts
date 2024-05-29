/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, NextFunction, Request, Response } from 'express'

const globlaErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500
  const message = err.message || 'Something went wrong'
  return res.status(statusCode).json({
    succss: false,
    message,
    error: err,
  })
}

export default globlaErrorHandler

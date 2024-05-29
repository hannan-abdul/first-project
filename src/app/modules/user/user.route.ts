import express from 'express'
import { UserControllers } from './user.controller'
import { studentValidations } from '../students/student.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

// this will call controller function
router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
)

export const UserRoutes = router

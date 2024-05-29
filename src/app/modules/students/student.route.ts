import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()
// get student route
router.get('/', StudentControllers.getAllStudents)
// get single student route
router.get('/:studentId', StudentControllers.getSingleStudent)
// delete single student
router.delete('/:studentId', StudentControllers.deleteStudent)

export const StudentRoutes = router

import express from 'express'
import { StudentControllers } from './student.controller'

const router = express.Router()

// this will call controller function
router.post('/create-student', StudentControllers.createStudent)

// get student route
router.get('/', StudentControllers.getAllStudents)
// get single student route
router.get('/:studentId', StudentControllers.getSingleStudent)

export const StudentRoutes = router

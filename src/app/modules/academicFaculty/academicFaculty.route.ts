import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicFacultyValidation } from './academicFaculty.validation'
import { AcademicFacultyControllers } from './academicFaculty.controller'

const router = express.Router()
// get student route
router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
)
router.get('/', AcademicFacultyControllers.getAllAcademicFaculties)
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty)
router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
)

export const AcademicFacultyRoutes = router

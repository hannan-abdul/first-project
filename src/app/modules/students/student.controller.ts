import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'

// here i used higher order function imported from catchAsync.ts
const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrived successfully',
    data: result,
  })
})

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const result = await StudentServices.getSingleStudentFromDB(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrived successfully',
    data: result,
  })
})

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params
  const result = await StudentServices.deleteStudentFromDB(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students deleted successfully',
    data: result,
  })
})

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}

// Joi validation
// import { Request, Response } from 'express'
// import { StudentServices } from './student.service'
// import studentValidationSchema from './student.validation'
// import { z } from "zod";

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body
//     // will call service function to send this data
//     // data validation using Joi
//     const { error, value } = studentValidationSchema.validate(studentData)
//     const result = await StudentServices.createStudentIntoDB(value)
//     if (error) {
//       res.status(500).json({
//         success: false,
//         message: 'something went wrong',
//         error: error.details,
//       })
//     }

//     // send response
//     res.status(200).json({
//       success: true,
//       message: 'student is created',
//       data: result,
//     })
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'something went wrong',
//       error: err,
//     })
//   }
// }

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     // importing from service
//     const result = await StudentServices.getAllStudentsFromDB()
//     res.status(200).json({
//       success: true,
//       message: 'student retrieved successfully',
//       data: result,
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// const getSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params
//     // importing from service
//     const result = await StudentServices.getSingleStudentFromDB(studentId)

//     res.status(200).json({
//       success: true,
//       message: 'single student retrieved successfully',
//       data: result,
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const StudentControllers = {
//   // all these will exporting to route
//   createStudent,
//   getAllStudents,
//   getSingleStudent,
// }

// // mongoos default validation
// import { Request, Response } from 'express'
// import { StudentServices } from './student.service'

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body
//     // will call service function to send this data
//     const result = await StudentServices.createStudentIntoDB(studentData)
//     // send response
//     res.status(200).json({
//       success: true,
//       message: 'student is created',
//       data: result,
//     })
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'something went wrong',
//       error: err,
//     })
//   }
// }

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     // importing from service
//     const result = await StudentServices.getAllStudentsFromDB()
//     res.status(200).json({
//       success: true,
//       message: 'student retrieved successfully',
//       data: result,
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// const getSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params
//     // importing from service
//     const result = await StudentServices.getSingleStudentFromDB(studentId)

//     res.status(200).json({
//       success: true,
//       message: 'single student retrieved successfully',
//       data: result,
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const StudentControllers = {
//   // all these will exporting to route
//   createStudent,
//   getAllStudents,
//   getSingleStudent,
// }

import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import { UserService } from './user.service'

// here i used higher order function imported from catchAsync.ts

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body
  // const zodParseData = studentValidationSchema.parse(studentData)
  const result = await UserService.createStudentIntoDB(password, studentData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  })
})

export const UserControllers = {
  createStudent,
}

// import { NextFunction, Request, RequestHandler, Response } from 'express'
// import { UserService } from './user.service'
// import sendResponse from '../../utils/sendResponse'
// import httpStatus from 'http-status'

// const createStudent: RequestHandler = async (req, res, next) => {
//   try {
//     const { password, student: studentData } = req.body
//     // const zodParseData = studentValidationSchema.parse(studentData)
//     const result = await UserService.createStudentIntoDB(password, studentData)
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student is created successfully',
//       data: result,
//     })
//     // send response
//     // res.status(200).json({
//     //   success: true,
//     //   message: 'student is created',
//     //   data: result,
//     // })
//   } catch (err) {
//     // res.status(500).json({
//     //   success: false,
//     //   message: err.message || 'something went wrong',
//     //   error: err,
//     // })
//     next(err)
//   }
// }

// export const UserControllers = {
//   createStudent,
// }

import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import { AcademicSemesterServices } from './academicSemester.service'

// here i used higher order function imported from catchAsync.ts
const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  })
})

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester retrived successfully',
    data: result,
  })
})
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single semester retrived successfully',
    data: result,
  })
})
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester updated successfully',
    data: result,
  })
})
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

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
}

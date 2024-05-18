import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData)
    // send response
    res.status(200).json({
      success: true,
      message: 'student is created',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    // importing from service
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'student retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    // importing from service
    const result = await StudentServices.getSingleStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: 'single student retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudentControllers = {
  // all these will exporting to route
  createStudent,
  getAllStudents,
  getSingleStudent,
}

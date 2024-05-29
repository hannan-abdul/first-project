import { Student } from './student.model'

// //built in static method
// const createStudentIntoDB = async (studentData: TStudent) => {
//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error('User already exits')
//   }
//   const result = await Student.create(studentData)
//   return result
// }

// built in instance method
// const createStudentIntoDB = async (studentData: TStudent) => {
//   const student = new Student(studentData)
//   if (await student.isUserExists(studentData.id)) {
//     throw new Error('User already exits')
//   }
//   const result = await student.save()
//   return result
// }

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
  //   this file will import in controller
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
  // const result = await Student.aggregate([{ $match: { id: id } }])
  return result
  //   this file will import in controller
}

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true })
  return result
  //   this file will import in controller
}
export const StudentServices = {
  // createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
}

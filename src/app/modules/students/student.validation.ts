import { z } from 'zod'

// Define Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20, {
    message:
      'First Name should start with an uppercase letter and contain only alphabets',
  }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last Name should contain only alphabets' }),
})

// Define Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
})

// Define Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

// Define Zod schema for Student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodgroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'A', 'B', 'AB', 'O'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
})

export const studentValidations = {
  createStudentValidationSchema,
}

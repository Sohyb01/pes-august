import { z } from "zod";

export const parentApplicationFormSchema = z.object({
  studentName: z
    .string({ required_error: "Student Name is Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  studentAge: z
    .number({
      required_error: "Student Age is Required",
    })
    .int()
    .min(7, "Student must be at least 7 years old")
    .max(16, "Student cannot be older than 16"),
  parentEmail: z
    .string({ required_error: "Parent Email is Required" })
    .email("Please enter a valid email address"),
  parentMobile: z
    .string({ required_error: "Parent Mobile Number Required" })
    .regex(/^01\d{9}$/, "Please enter a valid Egyptian phone number"), //Matches Egptian phone numbers in the format 01X XXXX XXXX
  studentEmail: z.union([
    z.string().email("Please enter a valid email address"),
    z.null(),
  ]),
  studentMobile: z.union([
    z.string().regex(/^01\d{9}$/, "Please enter a valid Egyptian phone number"),
    z.null(),
  ]),
  studentGender: z.enum(["Boy", "Girl"], {
    required_error: "Please select a gender",
  }),
  studentHasLaptop: z.enum(["Yes", "No"], {
    required_error: "Please confirm if the student has a laptop/desktop",
  }),
});

export type parentApplicationFormSchemaType = z.infer<
  typeof parentApplicationFormSchema
>;

export const studentApplicationFormSchema = z.object({
  studentName: z
    .string({ required_error: "Student Name is Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  studentUniversity: z.string({
    required_error: "University Name is Required",
  }),
  studentFaculty: z.string({ required_error: "Faculty Name is Required" }),
  studentAcademicYear: z.string({
    required_error: "Academic Year is Required",
  }),
  studentEmail: z
    .string({ required_error: "Parent Email is Required" })
    .email("Please enter a valid email address"),
  studentMobile: z
    .string({ required_error: "Mobile Number is Required" })
    .regex(/^01\d{9}$/, "Please enter a valid Egyptian phone number"), //Matches Egptian phone numbers in the format 01X XXXX XXXX
  studentAdditionalMessage: z.union([z.string(), z.null()]),
});

export type studentApplicationFormSchemaType = z.infer<
  typeof studentApplicationFormSchema
>;

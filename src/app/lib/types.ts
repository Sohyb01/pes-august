import { z } from "zod";

export const applicationFormSchema = z.object({
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

export type applicationFormSchemaType = z.infer<typeof applicationFormSchema>;

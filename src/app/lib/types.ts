import { z } from "zod";

export const PESKidsFormSchema = z.object({
  DesiredCourse: z
    .string({ required_error: "Required" })
    .nonempty("Please select an option"),
  //
  ParentMobile: z
    .string({ required_error: "Required" })
    .regex(/^(\+\d{1,3})?\d{9,15}$/, "Please enter a valid phone number"),
  ParentEmail: z
    .string({ required_error: "Required" })
    .email("Please enter a valid email address"),
  //
  StudentName: z
    .string({ required_error: "Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  StudentAge: z
    .number({
      required_error: "Required",
      invalid_type_error: "Please enter a valid number",
    })
    .int()
    .min(7, "Student must be at least 7 years old")
    .max(16, "Student cannot be older than 16"),
  //
  StudentMobile: z
    .string()
    .regex(/^(\+\d{1,3})?\d{9,15}$/, "Please enter a valid phone number")
    .optional(),
  StudentEmail: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  //
  DesiredMethod: z.enum(["Online", "Offline"]).optional().nullable(),
  StudentHasLaptop: z.string({
    required_error: "Required",
    invalid_type_error: "Please select an option",
  }),
});

export type PESKidsFormDatatype = z.infer<typeof PESKidsFormSchema>;

export const PESYouthFormSchema = z.object({
  DesiredCourse: z
    .string({ required_error: "Required" })
    .nonempty("Please select"),
  //
  StudentName: z
    .string({ required_error: "Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  //
  StudentAge: z
    .number({
      required_error: "Required",
      invalid_type_error: "Please enter a valid number",
    })
    .int()
    .min(17, "Student must be at least 17 years old"),
  //
  StudentMobile: z
    .string({ required_error: "Required" })
    .regex(/^(\+\d{1,3})?\d{9,15}$/, "Please enter a valid phone number"),
  StudentEmail: z
    .string({ required_error: "Required" })
    .email("Please enter a valid email address"),
  //
  StudentUniversity: z
    .string({ required_error: "Required" })
    .nonempty("Required"),
  StudentCollege: z.string({ required_error: "Required" }).nonempty("Required"),
  //
  StudentSpeciality: z.string().optional(),
  StudentHasLaptop: z.string({
    required_error: "Required",
    invalid_type_error: "Please select an option",
  }),
});

export type PESYouthFormDatatype = z.infer<typeof PESYouthFormSchema>;

export const SchoolPartnershipFormSchema = z.object({
  SchoolName: z.string({ required_error: "Required" }),
  //
  ApplierName: z
    .string({ required_error: "Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  ApplierMobile: z
    .string({ required_error: "Required" })
    .regex(/^(\+\d{1,3})?\d{9,15}$/, "Please enter a valid phone number"),
  //
  ApplierEmail: z
    .string({ required_error: "Required" })
    .email("Please enter a valid email address"),
  ApplierRoleInSchool: z.string({ required_error: "Required" }),
});

export type SchoolPartnershipFormDatatype = z.infer<
  typeof SchoolPartnershipFormSchema
>;

// FRANCHISE SCHEMA
export const FranchiseFormSchema = z.object({
  ApplierName: z
    .string({ required_error: "Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  ApplierMobile: z
    .string({ required_error: "Required" })
    .regex(/^(\+\d{1,3})?\d{9,15}$/, "Please enter a valid phone number"),
  //
  ApplierEmail: z
    .string({ required_error: "Required" })
    .email("Please enter a valid email address"),
  ApplierLocation: z
    .string({ required_error: "Required" })
    .nonempty("Required"),
  //
  ApplierBudget: z.string({ required_error: "Required" }).nonempty("Required"),
  DesiredFranchiseLocation: z
    .string({ required_error: "Required" })
    .nonempty("Required"),
  //
  ApplierProfession: z.string({ required_error: "Required" }).optional(),
  ApplierHeardAboutUs: z.string({ required_error: "Required" }).optional(),
  //
  ApplierMotivation: z.string({ required_error: "Required" }).optional(),
  //
  ApplierAdditionalMessage: z.string({ required_error: "Required" }).optional(),
});

export type FranchiseFormDatatype = z.infer<typeof FranchiseFormSchema>;

export const InstructorFormSchema = z.object({
  ApplierName: z
    .string({ required_error: "Required" })
    .regex(/^[A-Za-z]+(\s[A-Za-z]+){3}$/, "Please enter a valid name (رباعي)"),
  ApplierAge: z
    .number({
      required_error: "Required",
      invalid_type_error: "Please enter a valid number",
    })
    .int({ message: "Please enter a valid number" })
    .min(17, "must be at least 17 years old"),
  //
  ApplierGender: z.enum(["Male", "Female"], {
    invalid_type_error: "Please select an option",
  }),
  ApplierMobile: z
    .string({ required_error: "Required" })
    .regex(/^(\+\d{1,3})?\d{9,15}$/, "Please enter a valid phone number"),
  //
  ApplierEmail: z
    .string({ required_error: "Required" })
    .email("Please enter a valid email address"),
  //
  ApplierExtraSocialMediaProfileLinks: z.string().optional(),
  ApplierIsGraduated: z.string({ required_error: "Required" }),
  //
  DesiredInstructorRole: z.enum(["PES Kids", "PES Youth"]),
});

export type InstructorFormDatatype = z.infer<typeof InstructorFormSchema>;

export const AddCourseFormSchema = z.object({
  courseName: z.string(),
  courseDuration: z.string(),
  courseDescription: z.string(),
  courseImageURL: z.string().optional(),
  isAvailable: z.boolean().default(true),
});

export type AddCourseFormDatatype = z.infer<typeof AddCourseFormSchema>;

export const AddPESMemberFormSchema = z.object({
  name: z.string(),
  role: z.string(),
  imgUrl: z.string().optional(),
  facebookUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
});

export type AddPESMemberFormDatatype = z.infer<typeof AddPESMemberFormSchema>;

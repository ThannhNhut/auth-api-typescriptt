import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({ required_error: "Name is required" }),
        email: string({ required_error: "email is required." }).email("Not a valid email"),
        password: string({ required_error: "password is required." })
            .min(8, "Password is too short - should be 8 chars minimum.")
            .max(40, "Password cannot be longer than 40 characters.")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,40}$/, "Password should have at least one numeral, one lowercase letter, uppercase letter, special character."),
        passwordConfirmation: string({ required_error: "Password confirmation is required" }),
    }).strict().refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    })
})

export const verifyUserSchema = object({
    params: object({
        id: string(),
        verificationCode: string(),
    }),
});

export const forgotPasswordSchema = object({
    body: object({
        email: string({
            required_error: "Email is required",
        }).email("Not a valid email"),
    }),
});

export const resetPasswordSchema = object({
    params: object({
        id: string(),
        passwordResetCode: string(),
    }),
    body: object({
        password: string({ required_error: "password is required." })
            .min(8, "Password is too short - should be 8 chars minimum.")
            .max(40, "Password cannot be longer than 40 characters.")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,40}$/, "Password should have at least one numeral, one lowercase letter, uppercase letter, special character."),
        passwordConfirmation: string({ required_error: "Password confirmation is required" }),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>["body"], "passwordConfirmation">;
export type VerifyUserInput = TypeOf<typeof verifyUserSchema>["params"];
export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>["body"];
export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;

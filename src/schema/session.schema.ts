import { object, string, TypeOf } from "zod";


export const createSessionSchema = object({
    body: object({
        email: string({ required_error: "email is required." }).email("Not a valid email"),
        password: string({ required_error: "password is required." })
    })
})

export type createSessionInput = TypeOf<typeof createSessionSchema>["body"]
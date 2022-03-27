import { RequestHandler as Middleware } from "express"
import { AnyZodObject } from "zod";

const validateResource = (schema: AnyZodObject): Middleware => (req, res, next) => {
    try {
        schema.parse({
            params: req.params,
            body: req.body,
            query: req.query
        });
        next()
    }
    catch (err: any) {
        return res.status(400).json({ message: err.issues[0].message });
    }
}
export default validateResource;

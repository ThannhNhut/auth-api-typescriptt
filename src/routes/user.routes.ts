import { Router } from "express";
import { validateResource, requireUser } from '../middleware';
import { createUserHandler, verifyUserHandler, forgotPasswordHandler, resetPasswordHandler, getCurrentUserHandler } from '../handler/user.handler';
import { createUserSchema, verifyUserSchema, forgotPasswordSchema, resetPasswordSchema } from '../schema/user.schema';


const router = Router()

router.post('/api/v1/users',
    validateResource(createUserSchema),
    createUserHandler
);
router.post('/api/users/verify/:id/:verificationCode',
    validateResource(verifyUserSchema),
    verifyUserHandler
);

router.post(
    "/api/users/forgotpassword",
    validateResource(forgotPasswordSchema),
    forgotPasswordHandler
);

router.post(
    "/api/users/resetpassword/:id/:passwordResetCode",
    validateResource(resetPasswordSchema),
    resetPasswordHandler
);

router.get("/api/users/me",
    requireUser,
    getCurrentUserHandler
);


export default router;
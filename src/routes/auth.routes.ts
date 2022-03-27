import { Router } from 'express';
import { validateResource } from '../middleware';
import { createSessionSchema } from '../schema/session.schema';
import { createSessionHandler, refreshAccessTokenHandler } from '../handler/auth.handler';
const router = Router();

router.post('/api/v1/sessions', validateResource(createSessionSchema), createSessionHandler);
router.post('/api/v1/sessions/refresh', refreshAccessTokenHandler);

export default router;
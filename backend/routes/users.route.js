import express from 'express';
import { AllUsersForHomeScreen } from '../controllers/users.controller.js';
import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();


router.get("/", secureRoute,AllUsersForHomeScreen);

export default router;
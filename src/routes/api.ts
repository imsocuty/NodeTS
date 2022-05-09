import { Router } from 'express';
import userRouter from './user-router';
import boardRouter from "@routes/board-router";


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/boards', boardRouter);

// Export default.
export default baseRouter;

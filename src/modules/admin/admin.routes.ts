import { Router } from 'express';
import { httpUpdateCreatorMetadata } from './admin.controllers';

const adminRouter = Router();

adminRouter.patch('/creators/:id/metadata', httpUpdateCreatorMetadata);

export default adminRouter;

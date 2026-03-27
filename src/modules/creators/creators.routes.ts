import { Router } from 'express';
import { httpListCreators } from './creators.controllers';
import { setPublicHeaders } from '../../utils/public-headers.utils';

const creatorsRouter = Router();

/**
 * GET /api/v1/creators
 *
 * List all creators with pagination and filtering.
 * Public endpoint with 5-minute cache.
 */
creatorsRouter.get('/', setPublicHeaders, httpListCreators);

export default creatorsRouter;

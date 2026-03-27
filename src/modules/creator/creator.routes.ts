// src/modules/creator/creator.routes.ts
import { Router } from 'express';
import { listCreators } from './creator.controller';
import { setPublicHeaders } from '../../utils/public-headers.utils';

const router = Router();

/**
 * @route GET /api/v1/creators
 * @desc Get a paginated list of creators
 * @access Public
 */
router.get('/', setPublicHeaders, listCreators);

export default router;

import { Router } from 'express';
import { categoriesRoutes } from './category.routes';
import { specificationsRoutes } from './specification.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router };
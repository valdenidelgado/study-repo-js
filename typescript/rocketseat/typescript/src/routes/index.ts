import { Router } from 'express';
import { categoriesRoutes } from './category.routes';
import { specificationsRoutes } from './specification.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRouter);

export { router };
import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', (req, res) => {
  res.send('products');
});

router.post('/products', (req, res) => {
  res.send('products');
});

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('products per category');
});

router.get('/orders', (req, res) => {
  res.send('orders');
});

router.post('/orders', (req, res) => {
  res.send('orders');
});

router.patch('/orders/:id', (req, res) => {
  res.send('orders');
});

router.delete('/orders/:id', (req, res) => {
  res.send('orders');
});

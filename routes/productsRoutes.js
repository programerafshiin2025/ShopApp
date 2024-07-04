import express from 'express';
import {  DeleteProduct, CreateProduct,UpdateProduct, getProducts, getProductsById } from '../controller/productController.js';
const router=express.Router();

router.route('/').get(getProducts).post(CreateProduct)
router.route('/:id').get(getProductsById).put(UpdateProduct).delete(DeleteProduct)
export default router

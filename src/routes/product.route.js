//router
import { Router } from "express";
import productController from '../controllers/product.controller.js'

const router = Router()

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)
router.post('/create', productController.createProduct)
router.delete('/:id', productController.deleteProduct)

export default router

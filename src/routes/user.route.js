//router
import { Router } from "express";
import userController from '../controllers/user.controller.js'

const router = Router()

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/create', userController.createUser)
router.delete('/:id', userController.deleteUser)

export default router

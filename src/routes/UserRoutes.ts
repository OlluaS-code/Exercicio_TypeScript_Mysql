import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../service/UserService';

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository); 
const userController = new UserController(userService);

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

export default router;

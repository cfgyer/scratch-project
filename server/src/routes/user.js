import { Router } from 'express';
import userController from '../controllers/userController';


const router = Router();


// TODO: currently working on assumption that all requests in middleware 
router.post("/", userController.createUser, (req, res) => {
  return res.send(`Created user: ${req.body.email}`);
});

router.get('/:user_id', userController.getOneUser, (req, res) => {
  return res.send(`Hello from server/${req.params.user_id}`);
});

router.get('/', userController.getAllUsers, (req, res) => {
  return res.send('<h1>Hello from server/user</h1>');
});

router.patch("/", userController.updateUser, (req, res) => {
  return res.send(`Updated user ${req.body.email} to ${res.locals.username}`);
});

router.delete('/:user_id', userController.deleteUser, (req, res) => {
  return res.send(`Deleted user ${req.params.user_id}`);
});


export default router
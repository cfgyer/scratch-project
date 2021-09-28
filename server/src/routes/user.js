import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router()

router.post("/", userController.createUser, (req, res) => {
  // currently result is stored on res.locals.userinfo - discuss with Christian
  return res.send(`Created user: ${req.body.email}`);
});

router.get('/', userController.getAllUsers, (req, res) => {
  return res.send('<h1>Hello from server/user</h1>')
});

// decide whether this needs to be user id or username
router.get('/:user_id', (req, res) => {
  return res.send(`Hello from server/${req.params.user_id}`)
});

router.patch("/", (req, res) => {
  return res.send(`Updated user ${req.body.user_id} to ${req.body.updatedProduct.user_id}`)
});

router.delete('/:user_id', (req, res) => {
  return res.send(`Deleted product ${req.params.user_id}`)
});


export default router
import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';

import passport from 'passport';


const router = Router();

// need redirect for failed registration
router.post("/register", userController.createUser, (req, res) => {
  return res.status(200).json({})
});


router.post("/login", passport.authenticate('local'), (req, res) => {
  console.log(req.user)
});

export default router;

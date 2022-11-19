import express from 'express'
import { check } from 'express-validator'
import { fieldValidator } from '../validator/validation.js';
import { isEmailExist } from '../middlewares/validator-db.js';
import { register, login } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', [
  check('name', 'El nombre es obligatorio').notEmpty(),
  check('email', 'El email es obligatorio').notEmpty(),
  check('email', 'El email no es válido').isEmail(),
  check('email').custom(isEmailExist),
  check('password', 'El password es obligatorio').notEmpty(),
  check('password', 'El password debe contener más de 6 caracteres').isLength({ min: 6 }),
  fieldValidator
], register)

router.post('/login', [
  check('email', 'El email es obligatorio').notEmpty(),
  check('email', 'El email no es válido').isEmail(),
  check('password', 'El password es obligatorio').notEmpty(),
  fieldValidator
], login)

export default router

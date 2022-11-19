import express from 'express'
import { destroy, getUser, getUsers, update } from '../controllers/user.js';
import { check } from 'express-validator'
import { fieldValidator } from '../validator/validation.js';
import { isEmailExist } from '../middlewares/validator-db.js';

const router = express.Router();

// Get All Users
router.get('/', getUsers)

router.get('/:id', getUser)

router.put('/:id', update)

router.delete('/:id', destroy)


export default router

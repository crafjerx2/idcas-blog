import express from 'express'
import { create, destroy, getPost, getPosts, update } from '../controllers/post.js';
import { check } from 'express-validator'
import { fieldValidator } from '../validator/validation.js';
import { isTitleExist } from '../middlewares/validator-db.js';

const router = express.Router();

// Get All posts
router.get('/', getPosts)

router.post('/', [
  check('title', 'El título es obligatorio').notEmpty(),
  check('title').custom(isTitleExist),
  check('content', 'El contenido es obligatorio').notEmpty(),
  check('userId', 'El usuario es obligatorio').notEmpty(),
  check('category', 'La categoría es obligatoria').notEmpty(),
  fieldValidator
], create)

router.get('/:id', getPost)

router.put('/:id', update)

router.delete('/:id', destroy)


export default router

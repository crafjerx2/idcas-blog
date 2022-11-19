import express from 'express'
import { destroy, getCategory, getCategories, update } from '../controllers/category.js';

const router = express.Router();

// Get All Categories
router.get('/', getCategories)

// TODO:
//router.post('/create', create)

router.get('/:id', getCategory)

router.put('/:id', update)

router.delete('/:id', destroy)


export default router

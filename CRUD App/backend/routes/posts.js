import express from 'express';
import { createPost, getPost, updatePost } from '../controllers/posts.js';

let router = express.Router();

router.get('/new', getPost);

router.get('/new/post', createPost);

router.get('/new/post/update', updatePost);

export default router;

// postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for creating, updating, deleting, and retrieving company posts
router.post('/posts', postController.createPost);
router.put('/posts/:postId', postController.updatePost);
router.delete('/posts/:postId', postController.deletePost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:postId', postController.getPostById);

module.exports = router;


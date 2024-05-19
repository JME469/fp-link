// postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for creating, updating, deleting, and retrieving company posts
router.post('/', postController.createPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);

module.exports = router;


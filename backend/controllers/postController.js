const Post = require('../models/Post'); 

// Controller method to create a new company post
exports.createPost = async (req, res) => {
  try {
    const { empresa_id, title, content, image } = req.body;
    const post = await Post.create({ empresa_id, title, content, image });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller method to update an existing company post
exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content, image } = req.body;
    const [updatedRowsCount, updatedRows] = await Post.update({ title, content, image }, { where: { id: postId }, returning: true });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(updatedRows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller method to delete a company post
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedRowCount = await Post.destroy({ where: { id: postId } });
    if (deletedRowCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller method to get all company posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller method to get a specific company post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

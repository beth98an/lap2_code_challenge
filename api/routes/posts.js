const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts')

router.get('/posts', postsController.index)
router.get('/posts/:penName/:id', postsController.showPost)
router.get('/posts/:id', postsController.showPostById)
router.post('/posts', postsController.createPost)

module.exports = router

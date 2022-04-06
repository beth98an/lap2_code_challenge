const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts')

router.get('/posts', postsController.index)
router.get('/posts/:penName/:id', postsController.showPost)

module.exports = router

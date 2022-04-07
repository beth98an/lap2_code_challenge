const Post = require('../models/posts')

async function index (req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function showPost(req, res) {
    try {
        let post = await Post.find(req.params.penName, req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}
async function showPostById(req, res) {
    try {
        let post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function createPost(req, res) {
    try {
        let newPost = await Post.create(req.body)
        res.status(201).json(newPost)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = {index, showPost, showPostById, createPost}

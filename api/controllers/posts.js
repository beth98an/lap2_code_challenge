const Post = require('../models/posts')

async function index (req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({err})
    }
}

module.exports = {index}
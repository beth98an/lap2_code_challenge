const db = require('../dbConfig')

module.exports = class Posts {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.penName = data.pen_name;
        this.postBody = data.post_body;
        this.path = `/post/${this.penName}/${this.id}`;
    }

    static get all(){
        return new Promise(async(resolve, reject) => {
            try{
                const result = await db.query('SELECT * FROM posts;')
                const posts = result.rows.map(p => new Posts(p))
                resolve(posts)
            }
            catch (err) {
                reject('Post not found')
            }
        })
    }

    static find(penName, id){
        return new Promise(async(resolve, reject) => {
            try {
               let postData = await db.query('SELECT * FROM posts WHERE id = $1 AND pen_name = $2', [id, penName])
               let post = new Posts(postData.rows[0])
               resolve(post)
            }
            catch(err) {
                reject('Post not found')
            }
        })
    }

    static findByPenName(penName) {
        return new Promise(async(resolve, reject) => {
            try {
               let postData = await db.query('SELECT * FROM posts WHERE pen_name = $1', [penName])
               let post = postData.rows.map(p => new Posts(p))
               resolve(post)
            }
            catch(err) {
                reject('Post not found')
            }
        })
    }

    static create(postData) {
        return new Promise(async(resolve, reject) => {
            try {
                const {title, penName, postBody} = postData
                let newPost = await db.query('INSERT INTO posts (title, pen_name, post_body) VALUES ($1, $2, $3) RETURNING *;', [title, penName.toLowerCase(), postBody])
                let post = new Posts(newPost.rows[0])
                resolve(post)
            } catch (err) {
                reject('Post could not be created')
            }
        })
    }
}

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
}

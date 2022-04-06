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
                console.log(posts)
                resolve(posts)
            }
            catch (err) {
                reject('Post not found')
            }
        })
    }
}

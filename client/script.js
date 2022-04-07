const titleBox = document.querySelector('#post-title')
const penNameBox = document.querySelector('#post-name')
const postBodyBox = document.querySelector('#post-entry')
const submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', async(e) =>{
    try {
        if (titleBox.value !== '' && penNameBox.value !== '' && postBodyBox.value !== '') {
            const response = await fetch('http://localhost:3000/posts/', 
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "POST",
                    body: JSON.stringify({ title: titleBox.value, penName: penNameBox.value, postBody: postBodyBox.value})
                });
            const { id, err } = await response.json();
            console.log(id)
            if(err) { 
                throw Error(err) 
            } else {
                window.location.hash = `posts/${id}`
            }
        }
    }
    catch (err) {
        console.log(err)
    }
})

// const title = document.querySelector('#title')
// const penName = document.querySelector('#penName')
// const postBody = document.querySelector('#postBody')
// submitBtn.addEventListener('click', async() => {
//     try {
//         const result = await fetch(`http://localhost:3000/posts/${penNameBox.value}`)
//         let data = await result.json()
//         for (i=0; i< data.length; i++) {
//                 title.textContent = data[i].title
//                 penName.textContent = data[i].penName
//                 postBody.textContent = data[i].postBody
//             }

//     } catch (err) {
//         console.log(err)
//     }
// })
// async function getItem(id) {
//     try {
//         const response = await fetch(`http://localhost:3000/posts/${id}`);
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.warn(err);
//     }
// }
// const postForm = document.getElementById('postForm')
// const post = document.getElementById('postHere')

// window.addEventListener('hashchange', (e) => {
//     console.log(e.target.value)
//     postForm.style.display = 'none'
//     postHere.style.display = 'block'
//     let data = getItem(id)
//     title.textContent = data.title
//     penName.textContent = data.penName
//     postBody.textContent = data.postBody
// })

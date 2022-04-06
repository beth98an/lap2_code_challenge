const titleBox = document.querySelector('#post-title')
const penNameBox = document.querySelector('#post-name')
const postBodyBox = document.querySelector('#post-entry')
const submitBtn = document.querySelector('#submit')
const posted = document.querySelector('#posted')

submitBtn.addEventListener('click', async(e) =>{
    try {
        const response = await fetch('http://localhost:3000/posts', 
        {
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            method: "POST",
            body: JSON.stringify({ title: titleBox.value, penName: penNameBox.value, postBody: postBodyBox.value})
        }); 
    } catch (err) {
        console.log(err)
    }

})

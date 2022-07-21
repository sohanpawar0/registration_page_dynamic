const posts = [
    {name:'post1', review:'good'},
    {name:'post2', review:'nice'}
]

function getPosts(){
    let output = '';
    setTimeout(() => {
        posts.forEach((post)=>{
            output +=`<li>${post.name} ${post.review}</li>`
        })

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post,getPosts){
    posts.push(post);
    setTimeout(() => {
        getPosts();
    }, 2000);
}

createPost({name:'post3',review: 'bad'},getPosts);
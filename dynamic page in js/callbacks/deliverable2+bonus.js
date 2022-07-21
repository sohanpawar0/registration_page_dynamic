const posts = [
    {name:'post1', review:'good', created: new Date().getTime()},
    {name:'post2', review:'nice', created: new Date().getTime()}
]

function getPosts(){
    let output = '';
    setTimeout(() => {
        posts.forEach((post)=>{
            const time = Math.round((new Date().getTime() - post.created)/1000);
            output +=`<li>${post.name} created ${time} secs ago </li>`
        })
        const time = lastEditedInSecondsAgo();
        output += `<div>Last Modified: ${time} secs ago!</div>`;
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    posts.push(post);  
}

function createPost4th(post,createPost,getPosts){
    createPost(post);
    setTimeout(() => {
        getPosts();
    }, 2000);
}

function lastEditedInSecondsAgo(){
 const listModifiedLast = new Date().getTime() - posts[posts.length-1].created;
 return Math.round(listModifiedLast/1000);
}

setTimeout(() => {
 createPost({name:'post3',review:'bad', created: new Date().getTime()},lastEditedInSecondsAgo)
}, 1000);

setTimeout(() => {
 createPost4th({name:'post4',review:'satisfactory', created: new Date().getTime()},createPost,getPosts,lastEditedInSecondsAgo)     
}, 2000);

setInterval(() => {
    getPosts(lastEditedInSecondsAgo);
}, 1000);
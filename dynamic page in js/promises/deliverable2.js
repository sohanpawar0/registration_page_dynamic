const posts = [
    {name:'post1', review:'good'},
    {name:'post2', review:'nice'}
]

function getPosts(){
    let output = '';
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.forEach((post)=>{
            output +=`<li>${post.name} ${post.review}</li>`
        })

        document.body.innerHTML = output;
    }, 1000);
    resolve();
   });
}

function createPost(post){

    return new Promise((resolve,reject)=>{
        posts.push(post);

        setTimeout(() => {
            const error = false;

            if(!error)
             resolve();
            else
             reject('Somthing went wrong!');

        }, 2000);
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.length == 0)
             reject(`can't pop elements from an empty array!`)
            
             posts.pop();
             resolve();
        }, 1000);
    });
}

createPost({name:'post3',review: 'bad'})
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.then(getPosts)
.then(deletePost)
.then(getPosts)
.catch(error => console.log(error));
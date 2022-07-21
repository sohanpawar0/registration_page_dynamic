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

createPost({name:'post3',review: 'bad'})
.then(getPosts)
.catch(error => console.log(error));
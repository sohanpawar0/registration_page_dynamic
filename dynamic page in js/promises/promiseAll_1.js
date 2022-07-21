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
             resolve(posts);
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
             resolve(posts);
        }, 1000);
    });
}


//promise all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise3')
    }, 1000);
})

const userActivity = {lastTime: new Date().getTime()
}

// Promise.all([promise1,promise2,promise3])
// .then((values)=>console.log(values));

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            userActivity.lastTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            resolve(userActivity.lastTime);
        }, 1000);
    })
}

Promise.all([createPost({name:'post3',review:'good'}),updateLastUserActivityTime()])
.then(([posts,lastTime])=>{
    console.log(posts);
    console.log(`Last Modified: ${lastTime}`);
})
.then(deletePost)
.then((posts)=>{
    console.log(posts);
});
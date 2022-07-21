const posts = [
    {name:'post1', review:'good'},
    {name:'post2', review:'nice'},
]

const operations = async()=>{
    const createPost = (post)=>{
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
          posts.push(post)
          resolve();
        }, 2000);
    })
  }
   const deletePost = ()=>{
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(posts.length !==0 ){
             posts.pop();
             resolve();
          }else{
            reject('Empty array!');
          }
        }, 1000);
   })
  }

   const getPosts = ()=>{
    return new Promise((resolve,reject)=>{
    let output = '';
    setTimeout(() => {
        posts.forEach((post)=>{
            output +=`<li>${post.name} ${post.review}</li>`
        })

        document.body.innerHTML = output;
        resolve();
    }, 2000);
   })
 } 
 try{
   await getPosts();
   await createPost({name: 'post3', review: 'nice'});
   await getPosts();
   await deletePost();
   await getPosts();
   await deletePost();
   await getPosts();
   await deletePost();
   await getPosts();
   await deletePost();
 }catch(e){
    console.log(e);
 }
}

operations();
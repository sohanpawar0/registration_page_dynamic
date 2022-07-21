const form = document.getElementById('my-form');
let updateId;
let updateLi;

const onDelete = (li,id)=>{
 axios.delete(`https://crudcrud.com/api/c208d57f2d1d40c5a63b96e7912096ba/bookings/${id}`)
 .then(()=> li.remove())
 .catch((e)=>console.log(e));
}

const onEdit = (_id,_name,_email,li)=>{
 const name = document.getElementById('name');
 const email = document.getElementById('email');
 const btn = document.getElementById('btn')

 name.value = _name;
 email.value = _email;
 btn.value = "Edit";

 updateId = _id;
 updateLi = li;
}
const createPost = ({_id,name,email})=>{
    const userList  = document.getElementById('items');
    const li  = document.createElement('li');
    const del = document.createElement('button');
    const edit = document.createElement('button');
    del.addEventListener('click',(e)=>onDelete(li,_id));
    edit.addEventListener('click',(e)=>onEdit(_id,name,email,li));
    const text = document.createTextNode(`${name}`);
    del.appendChild(document.createTextNode(`Delete`));
    edit.appendChild(document.createTextNode(`Edit`));
    del.style.margin = '5px';

    li.appendChild(text);
    li.appendChild(document.createTextNode(`${email}`));
    li.appendChild(del);
    li.appendChild(edit);

    userList.appendChild(li);
}
const showPosts = (bookings)=>{
    bookings.forEach((booking) => {
        createPost(booking);
    });
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const btn = document.getElementById('btn');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const obj = {
        name: e.target.name.value,
        email: e.target.email.value
    }

    if(btn.value === 'Submit')
    {  
    axios.post('https://crudcrud.com/api/c208d57f2d1d40c5a63b96e7912096ba/bookings', obj)
    .then((res)=> {
        console.log(res);
        createPost(res.data);
        name.value = '';
        email.value= '';
    })
    .catch((e)=> console.log(e));
   }
   else
   {
    axios.put(`https://crudcrud.com/api/c208d57f2d1d40c5a63b96e7912096ba/bookings/${updateId}`, obj)
    .then(()=>{
        updateLi.childNodes[0].nodeValue = obj.name;
        updateLi.childNodes[1].nodeValue = obj.email;
        name.value = '';
        email.value = '';
        btn.value = "Submit";
    })
    .catch(()=>{
        console.log(e);
    })
   }
})

document.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/c208d57f2d1d40c5a63b96e7912096ba/bookings')
    .then((res)=> showPosts(res.data));
})

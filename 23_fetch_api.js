//Using .then()
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// });

// //Now the same thing using async/await
// async function getUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }
// getUsers();

//Write an async function called getPosts that fetches https://jsonplaceholder.typicode.com/posts and logs the result to the console. Then try logging only the title of the first post (hint: data[0].title).
// async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await response.json();
//     console.log(result);
//     console.log(result[0].title);
// }
// getPosts();

//Now the same thing with .then()
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response)=>{
//     return response.json();
// })
// .then((result)=>{
//     console.log(result[0].title);
//     console.log(result);
// });


// async function getUser(userId) {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         if(!response.ok){
//             throw new Error(`HTTP Error! Status : ${response.status}`);
//         }

//         //Now unwrap JSON if response was actually successfull
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch(err){
//         console.error('Something went wrong : ',err);
//     }
// }
// getUser(10000000);


//Create Post . 
// async function createPost() {
//     try{
//         const newPost = {
//             title:"Husnain's First Post",
//             body:"This is the content of the first Post ",
//             userId:1
//         };
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//             method:'POST',
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(newPost)
//         });

//         if(!response.ok){
//             throw new Error(`HTTP Error : ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch(err){
//         console.error('Somehing went wrong! ',err);
//     }
    
// }
// createPost();


async function getUser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error("HTTP Error");
        }
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.error("Something went wrong. ",err);
    }
}
getUser();
//Using .then()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
});

//Now the same thing using async/await
async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}
getUsers();

//Write an async function called getPosts that fetches https://jsonplaceholder.typicode.com/posts and logs the result to the console. Then try logging only the title of the first post (hint: data[0].title).
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    console.log(result);
    console.log(result[0].title);
}
getPosts();

//Now the same thing with .then()
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
})
.then((result)=>{
    console.log(result[0].title);
    console.log(result);
});
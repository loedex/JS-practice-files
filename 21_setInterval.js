// let seconds = 0;
// let intervalId = setInterval(()=>{
//     seconds++;
//     console.log(`Time : ${seconds}`);
//     if(seconds == 10){
//         clearInterval(intervalId);
//     }
// },1000);


//Returning a Promise from .then()
// function step1(){
//     return Promise.resolve("A");
// }
// function step2(value){
//     return Promise.resolve(value+"B");
// }
// function step3(value){
//     return Promise.resolve(value+"C");
// }
// function step4(value){
//     return Promise.resolve(value+"D");
// }
// step1()
// .then((value)=>{
//     return step2(value);
// })
// .then((value)=>{
//     return step3(value);S
// })
// .then((value)=>{
//     return step4(value);
// })
// .then((value)=>{
//     console.log("Final Result : "+value);
// })


//Promise.allSettled(iterable)
function getUser(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:"Ali"});
        },2000);
    });
}
function getPosts(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["POst 1","Post 2","Post 3"]);
        },2000);
    });
}
Promise.all([getUser(1),getPosts(1)])
.then(([user,posts])=>{
    console.log(user);
    console.log(posts);
})
.catch((error)=>{
    console.log("Something Failed");
});
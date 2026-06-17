// async function myFunction(){
//     return "Hello World";
// }
// const result = myFunction();
// console.log(result);
// To actually get the value out, you still need .then() or await:
// result.then((value)=>{console.log(value);})


//.then() vs async/await
//Imagine we have a function getUser() that returns a Promise 

// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({name:"Husnain",city:"Faisalabad"});
//         });
//     });
// }

//The .then() way (what you already know):
// function showUser(){
//     getUser().then((value)=>{
//         console.log(value);
//         console.log(value.name);
//         console.log(value.city);
//     });
// }
// showUser();

//The async/await way (the new, clean way):
//To use the await way , we also need to add the async keyword in function declaration, otherwise if we want to use the .then() way then it's not needed
// async function showUser(){
//     const resul = await getUser();
//     console.log(resul);
//     console.log(resul.city);
//     console.log(resul.name);
// }
// showUser();


//try/catch/finally

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50/50 chance, simulating a flaky network
      if (success) {
        resolve({ name: "Alice" });
      } else {
        reject(new Error("Network failed!"));
      }
    }, 1000);
  });
}

//Old way 
// function showUser(){
//     fetchUserData()
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Task Finished");
// });
// }
// showUser();

//New Way 
//try/catch/finally structure with async await
async function showUser(){
    try{
        const result = await fetchUserData(); // if this fails , we jump straight into catch
        console.log("User Loaded");
    }
    catch(error){
        console.log("Error Occurred" + error);
    }
    finally{
        console.log("Task Finished");
    }
}
showUser();
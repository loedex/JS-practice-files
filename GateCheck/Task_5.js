// Write a function that returns a promise which resolves after 2 seconds (using setTimeout + new
// Promise)
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 2000);
});
p.then((value)=>{console.log(value);
});
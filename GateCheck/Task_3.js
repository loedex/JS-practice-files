//Use async/await + fetch() to call a public API (e.g. https://jsonplaceholder.typicode.com/users) and
// console.log the result
async function Task3() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    
}
Task3();
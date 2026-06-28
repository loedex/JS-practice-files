const container = document.getElementById('container');
const arr = ["Book","Copy","Pencil","Bag","Register"];

const newArray = arr.map((i)=>{
    return `<li>${i}</li>`;
});

const ulElement = document.createElement('ul');
ulElement.innerHTML = newArray.join(' ');
container.appendChild(ulElement);




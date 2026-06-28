const container = document.getElementById('container');
const arr = ["Book","Copy","Pencil","Bag","Register"];

const cardCol = document.createElement('div');
cardCol.innerHTML = `
    <ul>
        <li>${arr[0]}</li>
        <li>${arr[1]}</li>
        <li>${arr[2]}</li>
        <li>${arr[3]}</li>
        <li>${arr[4]}</li>
    </ul>
`;
container.appendChild(cardCol);
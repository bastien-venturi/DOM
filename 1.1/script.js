document.title = "Modifying the DOM";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";

function getRandomColor() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r},${g},${b})`;
}
document.body.style.backgroundColor = getRandomColor();


let bodyElement = document.body.querySelector('main');
let secondChild = bodyElement.children[0];
for (let child of secondChild.children) {
    console.log(child);
}

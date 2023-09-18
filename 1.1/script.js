document.title = "Modifying the DOM";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";

function Random() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r},${g},${b})`;
}
document.body.style.backgroundColor = Random();


let bodyElement = document.body;
let secondChild = bodyElement.children[0];
for (let child of secondChild.children) {
    console.log(child);
}

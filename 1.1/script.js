document.title = "Modifying the DOM";
console.log(document.title);


function randcolor() {
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
return `rgb(${r},${g},${b})`;
}
document.body.style.backgroundColor = randcolor();


let bodyelement = document.body;
let secondchild = bodyelement.children[0];
for (let child of secondchild.children) {
    console.log(child);
}

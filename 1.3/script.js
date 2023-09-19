let names = [
    "Alexandre Vandewiele",
    "Antoine Lansman",
    "Bastien Venturi",
    "Carole Gérard",
    "Dorian Vanden Eynde",
    "Elisabeth Leyder",
    "Elodie Ali",
    "Justin Michel",
    "Justine Frigo",
    "Justine Leleu",
    "Kimi Lefort",
    "Layla",
    "Lidwine Careme",
    "Lucas Beauloi",
    "Marie Tara",
    "Mathias Barbier",
    "okly2023",
    "Pierre Marien",
    "Robin Piot",
    "Rosalie Boulard",
    "Stephane Comblez",
    "Tim Desmet",
    "Toms",
    "Valentin Lefort",
    "Vens Alexandre",
    "Virginie Dourson"
];

function randnames(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

randnames(names);

let main = document.querySelector('main');
let article = document.createElement('article');

function randcolor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
    }

function dark(defdark) {
    let r = parseInt(defdark.slice(1, 3), 16);
    let g = parseInt(defdark.slice(3, 5), 16);
    let b = parseInt(defdark.slice(5, 7), 16);
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
}

names.forEach(function(name) {
    let section = document.createElement('section');
    let p = document.createElement('p');
    let randomColor = randcolor();
    
    section.style.backgroundColor = randomColor;
    p.textContent = name;
    
    if (dark(randomColor)) {
        p.style.color = 'white';
    } else {
        p.style.color = 'black';
    }
    
    section.appendChild(p);
    article.appendChild(section);
});

main.appendChild(article);

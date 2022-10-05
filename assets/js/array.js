const carrosDOM = document.querySelector("#carros");

const veiculos = ["chevrolet", "Ford", "Fiat", "Vw",
"Honda", "Toyota", "Hyundai" ];

veiculos.push("BMW");

veiculos.unshift("Audi");

const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array ", primeiro);

const ultimo = veiculos.pop();
console.log("Removendo o último elemento do array ", ultimo);

const posicao = 2;
const removido = veiculos.splice(posicao, 1);

const removidos = veiculos.splice(1, 2);

const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lambroghini");



veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>`;
});

// =========================

const nbaTeams = ["Warrions",
    "Raptors",
    "Lakers",
    "Celtics",
    "Bucks",
    "76ers"
];

const newNba = nbaTeams.slice(3,5);

console.log(nbaTeams);
console.log(newNba);

const procuraCeltics = (nomeTime) =>{
    return nomeTime == "Celtics" ||
    nomeTime == "Raptors"

}

const celticsMap = nbaTeams.map(procuraCeltics);
const celticsFilter = nbaTeams.filter(procuraCeltics);
const celticsFind = nbaTeams.find(procuraCeltics);

console.log(celticsMap, "map");
console.log(celticsFilter, "Filter");
console.log(celticsFind, "Find");


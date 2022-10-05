const aereasNacionais = ['Azul', 'Gol', 'Latam'];

const airCompanies = [
    ...aereasNacionais,
    'Delta', 'United Airlines', 'Emirates', "Qatar", "Tap"];

console.log(airCompanies);

const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;

console.log(delta, "verificando delta");
console.log(internacionais, "verificando internacionais");




const body = document.querySelector("body");

const nome = "Fiap";

console.log(nome, "variavel com var nome");



escreve("Função nominal!");

function escreve(titulo){
    //alert(titulo);
}

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Victor");

const mudaTitulo2 =  function(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}

mudaTitulo2("Victor 2");

const relogio = ()=>{
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
}

setInterval(relogio, 1000);
const nome = "Fiap";

console.log(nome, "variavel com var nome");



escreve("Função nominal!");

function escreve(titulo){
    //alert(titulo);
}

function mudaTitulo(target,novoTitulo){

    document.querySelector(target).innerHTML = novoTitulo

}

mudaTitulo("h1","Victor");

const mudaTitulo2 =  function(novoTitulo){
    document.querySelector("h2").innerHTML = novoTitulo;
}

mudaTitulo2("Victor 2");

const relogio = ()=>{
    const date = new Date();
    mudaTitulo2(date.toLocaleTimeString());
}

setInterval(relogio, 1000);

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];


const mudaFrase=(elem, frases, i)=>{
    mudaTitulo(elem,frases[i]);
};

setInterval(mudaFrase, 4000);
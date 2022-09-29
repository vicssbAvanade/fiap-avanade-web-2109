
const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc1.showArguments(
    "Victor",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let myFunc2 = {
    showArguments: () => {
       // resultado.innerHTML = arguments;
        //console.log(...arguments);
    },
};

myFunc2.showArguments(
    "Victor",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);


let user = {
    name: "Victor",
    usandoArrow: ()=>{
        console.log("Meu nome é ", this.name, " Arrow function");
    },
    usandoNominal(){
        console.log("Meu nome é ", this.name, " Nominal function");
    },   
};

user.usandoArrow();
user.usandoNominal();
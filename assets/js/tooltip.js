const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header =  document.querySelector(".top-site");

// alvo.addEventListener("evento", funcao);

body.addEventListener("mouseover", ()=> {
    body.style.background = 'gray';
} );

body.addEventListener("mouseout", (e)=> {
    console.log("Dentro do body, saindo dele");
    body.style.background = 'unset';
   
} );

tooltip.addEventListener("mouseover", (e)=>{


    console.log("Altura da página", body.clientHeight);
    console.log("Largura da página", body.clientWidth);
    console.log("Altura do tooltip", tooltip.clientHeight);
    console.log("Largura do tooltip", tooltip.clientWidth);
    console.log("Altura do mouse", e.clientY);
    console.log("Largura do mouse", e.clientX);

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = 
    "Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa!"
    
    const largura = 200;
  newDiv.style.position = "fixed";
  newDiv.style.width = largura + "px";
  newDiv.style.top = e.clientY + "px";
  newDiv.style.display = "flex";
  newDiv.style.left =
    (e.clientX + largura > body.clientWidth
      ? e.clientX - largura -20
      : e.clientX + largura) + "px";

  console.log(newDiv.style.width, "width");

  header.appendChild(newDiv);


});

tooltip.addEventListener("mouseout",(e) =>{
 if (document.querySelector(".tooltip")){
    document.querySelector(".tooltip").remove();
}
} );
let containerEl=document.getElementById("container");
let displayclrEl=document.getElementById("displayclr");
let btnEl=document.getElementById("btn");

let hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btnEl.addEventListener("click",randomclr)

function randomclr(){
    let index=()=>Math.floor(Math.random()*16)
    hexclr="#"
    for(i=0;i<6;i++){
        hexclr= hexclr + hex[index()];

    }
   
    containerEl.style.backgroundColor= hexclr
   
    displayclrEl.textContent=hexclr
} 



const pl1=document.querySelector("#pl1");
const pl2=document.querySelector("#pl2");
const reset=document.querySelector("#reset");
const p1=document.querySelector(".p1");
const p2=document.querySelector(".p2");
const winsel=document.querySelector("#playto");

let p1score=0;
let p2score=0;
let win=winsel.value;  
let gameover=false;

pl1.addEventListener("click",(e)=>{
    if(!gameover)
    {
        p1score+=1;
        if(p1score==winsel.value)   
        {
            gameover=true;
            p1.classList.add("winner");
            p2.classList.add("looser");
        }
        p1.innerText=p1score;
    } 
})

pl2.addEventListener("click",(e)=>{
    if(!gameover)
    {
        p2score+=1;
        if(p2score==winsel.value)
        {
            gameover=true;
            p2.classList.add("winner");
            p1.classList.add("looser");
        }
        p2.innerText=p2score;
    } 
})

winsel.addEventListener("change",()=>{
    win=parseInt(this.value);
    reeset();
})

reset.addEventListener("click",reeset);


function reeset(){
    gameover=false;
    p1score=0;
    p2score=0;
    p1.innerText=0;
    p2.innerText=0;
    p1.classList.remove("winner","looser");
    p2.classList.remove("winner","looser");
}

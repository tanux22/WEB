const x=document.querySelectorAll("button")[1];
x.classList.add("butt");
x.onclick=function(){
    console.log("hello you clicked me");
}


function scream(){
    console.log("AHAHHAAHA");
    console.log("Stop touching meh");
}

x.onmouseenter=scream;


const y=document.querySelectorAll("button")[2];
y.classList.add("lol");
y.addEventListener('click',function(){
    console.log("good bye");
})




const butts=document.querySelectorAll("button");
for (let but of butts){
    but.addEventListener("click",colourize  )
}


const h1s=document.querySelectorAll("h1");
for (let h of h1s)
{
    h.addEventListener("click",()=>{
        h.style.backgroundColor=colormaker();
        h.style.color=colormaker();
    })
}


const colormaker= ()=>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}


function colourize(){
    this.style.backgroundColor=colormaker();
    this.style.color=colormaker();
}
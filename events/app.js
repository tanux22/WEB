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

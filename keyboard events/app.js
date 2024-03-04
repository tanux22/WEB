document.querySelector("button").addEventListener("click",(evt)=>{
    console.log(evt);
})

const input=document.querySelector("input");
input.addEventListener("keydown",(e)=>{
    console.log(e.key);
    console.log(e.code);
})


// input.addEventListener("keyup",()=>{
//     console.log("KEYUP");
// })

window.addEventListener("keydown",(e)=>{
    switch(e.code)
    {
        case "ArrowUp":
            console.log("UP");
    }
})


const f=document.querySelector("form");
f.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("SUBMITTED");
}); 


const fo=document.querySelector("form");
const inp=document.querySelectorAll("input")[1];
const cat=document.querySelector(".cats");
fo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const val=inp.value;
    const d=document.createElement("li");
    d.innerText=val;
    cat.append(d); 
})


//event delegation
cat.addEventListener("click",(e)=>{
    console.log(e.target);
    cat.nodeName ==="LI" && cat.target.remove() 
})

// const form = document.querySelector("form");
// const ul = document.querySelector('#list');
// form.addEventListener('submit', function(e){
//   e.preventDefault();
//   const qty = form.elements.qty.value;
//   const product = form.elements.product.value;
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   ul.appendChild(li);
//   form.reset();
// });

const he=document.querySelector("h2");
const ip=document.querySelectorAll("input")[2];
ip.addEventListener("input",(e)=>{
    h2.innerText=ip.value;
    console.log(e);
})

// const ip=document.querySelectorAll("input")[2];
// ip.addEventListener("change",(e)=>{
//     console.log("input change");
// })

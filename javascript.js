console.log("HELLO GUYS");
alert("CAUTION");


// const sec="hello";
// let s=prompt("Enter the code");
// while(s!==sec)
// {
//     s=prompt("Enter the secret code");
// }
// console.log("Congragulations");



// let n = parseInt(prompt("Enter the maximum number"));
// while (!n) {
//     n = parseInt(prompt("Enter the maximum number"));
// }

// let r = Math.floor(Math.random() * n) + 1;
// let g = parseInt(prompt("Enter first guess"));
// let gu = 1;
// while (r !== n) {
//     if(r==='q')
//     {
//         break;
//     }
//     gu++;
//     if (r > n) {
//         g = parseInt(prompt("Too high! Enter a new guess"));
//     }
//     else {
//         g = parseInt(prompt("Too low! Enter a new guess"));
//     }
// }

// if(r==='q')
// {
//     console.log("Quit");
// }
// else
// {
//     console.log("You win!!!");
//     console.log(`You got it in ${gu} attempts!!!`);
// }



// const sw = {
//     name: 32,
//     sec: 2,
//     math: 23,
//     sci: 92
// }
// let tot = 0;
// let g = 0;
// for (let s of Object.values(sw)) {
//     tot = tot + s;
//     g++;
// }

// let avg = tot / g;
// console.log(`the average is ${avg}`);
// console.log(`the average is ${Object.entries(sw)}`);




let pr = prompt("What would you like to do?");
let ar = [];
while (pr != "quit") {
    pr = prompt("What would you like to do?");
    if (pr === "list") {
        console.log("**********");
        for (let i = 0; i <= ar.length; i++) {
            console.log(`${i}:${ar[i]}`);
        }
        console.log("**********");
    }
    else if (pr === "new") {
        let ne = prompt("OK!What is the new todo!!");
        ar.push(ne);
        console.log(`New todo ${ne} added to the list`);
    }
    else if (pr === "delete") {
        let i = parseInt(prompt("Enter an index to delete!!"));
        if (!Number.isNaN(i)) {
            let n = ar.splice(i, 1);
            console.log(`The deleted item is ${n[0]}`);
        }
        else
        {
            console.log("Unkown Index!!!");
        }

    }
}





function add(x,y)
{
    let num=x+y;
    return num;
}

let tot=add(3,4); 
console.log(`${tot}`);





function callback(f)
{
    for (let k=0;k<10;k++)
    {
        f();
    }
}

function roll()
{
    const number=Math.floor((Math.random()*6)+1);
    console.log(`${number}`);
}

callback(roll);







function mynumber(){
    const rand=Math.randon();
    if (rand>0.5)
    {
        return function(){
            console.log("GOOD!!!");
        }
    }
    else
    {
        return function(){
            console.log("BAD");
        }
    }
}






const cat={
    name:"TAUSH",
    color:"grey",
    breed:"Svcotish fold",
    meow(){
        console.log("THis is:",this);
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2=cat.meow;




function yell(msg){
    try{
        console.log(toUpperCase().repeat(3));
    }
    catch(e){
        console.log(e);
        console.log("Please pass a string next time");
    }
}
const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13]

nums.forEach(function (el){
    console.log(el)
})
// OR
// function print(element){
//     console.log(element)
// }
// nums.forEach(print)




const movies=[
    {
        title:"hel",
        score:79
    },
    {
        title:"damn",
        score:12
    },
    {
        title:"gin",
        score:43
    }
]
for (mov in movies)
{
    console.log(mov.titl)
}
movies.forEach(function(mov)
{
    console.log(mov)
})



const texts=["rolo","mango","cello","tanush"]
const caps=texts.map(function(t)
{
    return t.toUpperCase();
})




// const add= function(x,y){
//     return x+y;
// }
// add(5,4);
// can also be written as
const add=(x,y)=>{
    return x+y;
}




console.log("HELLO!!!!...");
setTimeout(()=>{
    console.log("are you still there?")
},3000)

console.log("GOODbye!!!!");



 

const num=[2,5,6,3,6,2,8,9];
const smallnums=num.filter(n=>n<5);




const marks=[23,43,546,7634,33,21];
marks.every(mar=>mar>=5);//true




const prices=[43.232,43.23,654.232,54.123,54.221];
const total=prices.reduce((total,val)=>total+val);



// const person={
//     firstname: "vifs",
//     lastname:"gdff",
//     fullname: ()=>{
//         return `${this.firstname} ${this.lastname}`
//     },
//     shoutname: function(){
//         setTimeout(function () {
//             console.log(this.fullname())
//         },3000)
//     }
// }





//default params
(numside=6) => {
    return Math.floor(Math.random()*numside)+1;
}


//spread
Math.max(12,34,45,23,76,43,321,4663)
const x=[12,34,45,23,76,43,321,4663]
Math.max(x)
Math.max(...x)
console.log(...x);

const dogs={legs:4,family:"lale"}
const cats={isfur:true,family:"nane"};
{...dogs,hand:0};
{ ...dogs, ...cats};





//rest perams
function sumall(...nums)
{
    let total=0;
    for (let n in nums)
    {
        total+=n;
    }
}
sumall(1,2,43,2);




//destructuring arrays
const scores=[432544543,3453543543,43253453,53432345,543135345];
const [gold,silver,bronze,...everything]=scores;


//destructuring objects
const runner={
    first:"ergdfx",
    lasr:"fadjgv",
    country:"insid",       
    title:'gvkdav evdan fsoa fwsflc vnvdv'
}
const {first,last:vjadv ,country}=runner;
first;
lasr;
country;






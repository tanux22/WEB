const multiply=(x,y)=>x*y;

const square=(x)=>multiply(x,x);

const isrighttri=(a,b,c)=>(
    square(a)+square(b)===square(c)
)

isrighttri(3,4,5);
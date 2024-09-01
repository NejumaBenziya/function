
function calculateFactorial(n)
{
let f=1
while(n!=0)
{
    f*=n;
    n--;
}
return f;
}
console.log("factorial of 5 is ",calculateFactorial(5));

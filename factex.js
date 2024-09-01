let n=5;
console.log("Number is ",n);
const factorial=function(n)
{
    let f=1
while(n!=0)
{
    f*=n;
    n--;
}
return f;
}
console.log("Factorial is ", factorial(n));

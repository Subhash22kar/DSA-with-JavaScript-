function gcd(a,b){
    if(a === b) return a;
    if(a>b) return gcd(a-b, b);
    return gcd(b , b-a)
    
}

let a = 32, b = 20;
console.log(gcd(a,b));

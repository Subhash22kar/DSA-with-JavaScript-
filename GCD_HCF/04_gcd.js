function gcd(a,b){
    //base case
    if(b==0) return a;
    return gcd(b , a%b);
}

console.log(gcd(16,14));

let n = 30;

for(let i = 1; i<=Math.floor(Math.sqrt(n)); i++){
  if(n % i == 0){
    process.stdout.write(i + " ")
  }

}

function find(a, b) {
  // base case
  if (a === b) return a;
  
  // recursive case
  if (a > b) {
    return find(a - b, b);
  } else {
    return find(a, b - a);
  }
}

console.log(find(32, 20)); // output: 4


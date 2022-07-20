//function that finds an element and removes it of the first array given to the function
function destroyer(arr) {
  for(let i = 1; i < arguments.length;i++){
    const NOT_HERE = -1;
    while(arguments[0].indexOf(arguments[i]) != NOT_HERE){
      arguments[0].splice(arguments[0].indexOf(arguments[i]),1); 
    }
  }
  return arguments[0];
}

console.log(destroyer([1,2,3,4,5,1,1,5,2,3],1,5,3));

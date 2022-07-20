function palindrome(str){
  const newStr = str.split(/[\W_]/).filter((elem)=> elem != '').join('').toLowerCase();
  for(let i = 0; i < Math.floor( newStr.length/2 ); i++){
    if(newStr[i] != newStr[newStr.length-(i+1)]) return false;
  }
  return true;
}
function checkCleanStringPalindrome(str){
}
console.log(palindrome("0_0 (: /-\ :) 0-0"));


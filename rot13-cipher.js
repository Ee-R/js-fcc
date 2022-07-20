function rot13(str) {
  const newStr = [];
  for(let i = 0 ; i < str.length ; i++){
    if(str[i].match(/\W/)){
      newStr.push(str[i]);
      continue
    }
    let charNum = str.charCodeAt(i);
    if(charNum>77){
      newStr.push(String.fromCharCode(str.charCodeAt(i)-13))
    }else{
      if(charNum < 65) ;
      newStr.push(String.fromCharCode(str.charCodeAt(i)+13))
    }
  }
  return newStr.join('');
}
console.log(rot13("SERR PBQR PNZC"));

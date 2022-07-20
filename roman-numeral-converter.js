function convertToRoman(num) {
  let numberToRoman = '';
  const romanNumberTable = {
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
    "XC":90,
    "L":50,
    "XL":40,
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1
  }
  while(num > 0){
    for(let romanNumber in romanNumberTable){
      if(num >= romanNumberTable[romanNumber]){
        console.log(num, romanNumber)
        num -= romanNumberTable[romanNumber];
        console.log(num);
        numberToRoman =  numberToRoman + romanNumber;
        break;
      }
    }
  }
  return numberToRoman;
}
console.log(convertToRoman(649));

function telephoneCheck(str){
  if( str.match(/^1?[\s|-]?((\([0-9]{3}\)|[0-9]{3}))[\s|-]?[0-9]{3}[\s|-]?[0-9]{4}\b/)){
    return true;
  }
  return false;
}
console.log(telephoneCheck("1(555)555-5555"));

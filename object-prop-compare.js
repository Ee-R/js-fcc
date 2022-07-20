//check if an object of collection has the same property as source
function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let sourcePropertiesCount = 0;
  // Iterate through the source array to check how many properties it has
  for(let property in source){
    sourcePropertiesCount++;
  }
  // Iterate through each object in the array
  collection.forEach((object)=>{
    let propertiesShared = 0;
    for(let property in source){
      if(source[property] == object[property]){
        propertiesShared++;
      }
    }
    if(propertiesShared == sourcePropertiesCount){
      arr.push(object);
    }
  })
  // Only change code above this line
  return arr;
}

console.log( whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) );


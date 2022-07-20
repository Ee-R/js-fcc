//spinal case : rage-against-the-machine
//this function pass given inputs to spinal-case using regex

//spinalCase("This Is Spinal Tap")
//spinalCase("Teletubbies say Eh-oh")
//spinalCase("AllThe-small Things");

//the regex splits anything(or optionally, any nonalphanumeric and _ character) that is preceeded by an uppercase letter or any non alphanumeric character
function convertToSpinalcase(str){
  return str.split(/[\W_]*(?=[A-Z])|\W/).join("-").toLowerCase();
}
console.log(convertToSpinalcase("Teletubbies say Eh-oh"));

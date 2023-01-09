function rot13(str) {
  let alpha = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split(""); //This will be our key to work our cipher off of
  let arr = str.split(""); //convert input into array
  let cipheredArr = arr.map(elem => {
    if(/[A-Z]/.test(elem)){ //check for only letters
      if(alpha.indexOf(elem) < 13){ //handle letters that will overflow to the end of the alphabet
        return alpha[alpha.length - (13 - alpha.indexOf(elem))];    
      } else { //handle the rest of the letters
        return alpha[alpha.indexOf(elem) - 13];
      }
    }
    return elem; //be sure to add any extra symbols/spaces too
  });
  return cipheredArr.join("");
}

console.log(rot13("URER JR TB!"));
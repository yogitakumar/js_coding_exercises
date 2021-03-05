function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  const f = firstName.charAt(0);
  const l = lastName.charAt(0);
  return(f+'.'+l);
  
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  var amtToAdd = originalPrice * vatRate/100;
  var num = originalPrice+amtToAdd;
  return (Math.round(num*100)/100);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  var amtToreduce = originalPrice * reduction/100;
  var num = originalPrice-amtToreduce;
  return (Math.round(num*100)/100);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  var pos;
  var len;

        if(str.length % 2 == 1) {
            pos = str.length / 2;
            len = 1;
        } else {
            pos = str.length / 2 - 1;
            len = 2;
        }

        return str.substring(pos, pos + len);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var arr=[];
  for(var i =0,j=word.length-1; i<word.length;i++,j--){
    arr[i]=word[j];
  }
  return arr.join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  var arr=[];
  for(var i=0;i<words.length;i++){
    var str = words[i].split("").reverse().join("").split(" ").reverse().join(" ");
    arr[i]=str;
  }
  return arr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  var count =0;
  for(var i=0; i<users.length;i++){
    if(users[i]['type']=="Linux"){
          count++;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var total=0;
  for(var i=0;i<scores.length;i++){
    total = total + scores[i];
    
}
  var mean = Math.round((total/scores.length)*100)/100;
  return mean;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
 
if(n % 3 == 0 && n % 5 != 0){
    return("fizz");
}
else if(n % 5 == 0 && n % 3 != 0){
    return("buzz");
}
else if (n % 3 == 0 && n % 5 == 0){
    return("fizzbuzz");
}
else
{
   return(n);
}
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich['fillings'];
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if(person['city']=="Manchester")
    return true;
    else return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
var num = Math.ceil(people/40);
return num;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  var count = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]=="sheep")
    {
      count++;
    }
  }
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  var c = (person.address.postCode).charAt(0).toUpperCase();
  if(c == 'M' && person.address.city == "Manchester"){
      return true;
  }
  else
    return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
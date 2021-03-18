function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (firstName.charAt(0) + '.' + lastName.charAt(0));

}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return originalPrice + Math.round((originalPrice * vatRate / 100) * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return originalPrice - Math.round((originalPrice * reduction / 100) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return (str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2));
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(word => word.split("").reverse().join(""));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter(types => types.type == "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  return Math.round((scores.reduce((a, b) => (a + b)) / scores.length) * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 == 0 && n % 5 != 0) {
    return ("fizz");
  }
  else if (n % 5 == 0 && n % 3 != 0) {
    return ("buzz");
  }
  else if (n % 3 == 0 && n % 5 == 0) {
    return ("fizzbuzz");
  }
  else {
    return (n);
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
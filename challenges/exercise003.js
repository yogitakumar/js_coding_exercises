function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => Math.pow(num, 2));

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const str = words.map(word => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()).join("");
  return str.charAt(0).toLowerCase() + str.slice(1);


}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return (people.map(sub => sub.subjects.length)).reduce((a, b) => a + b)
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  return menu.filter(item => item.ingredients.includes(ingredient)).length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  return [... new Set(arr1.filter(arr => arr2.indexOf(arr) > -1).sort())];

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

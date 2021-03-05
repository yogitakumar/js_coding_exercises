function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  var arr =[];
  for(var i=0;i<nums.length;i++){
    arr[i]=Math.pow(nums[i],2);
  }
  return arr;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  
  var newStr ="";
  for(var i=0;i<words.length;i++){
    if(i==0){
      var ch = words[i].charAt(0).toLowerCase() + words[i].slice(1);
    }
    else
        var ch = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    
    newStr=newStr+ch;
  }
  return newStr;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var total=0;
  for(var i=0;i<people.length;i++){
    var arr = people[i];
          total = total+arr.subjects.length;
  }
  return total;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for(var i=0;i<menu.length;i++){
    if(menu[i].ingredients.indexOf(ingredient)>-1){
      return true;
    }
      
  } 
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  var newArr=[];
  var j=0;
  for(var i=0;i<arr1.length;i++){
      if(arr2.includes(arr1[i])){
        if(!newArr.includes(arr1[i])){
        newArr[j]=arr1[i];
        }
        j++;
      }
  }
  return newArr.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var j=0;
  var newArr=[];
  for(var i=0;i<nums.length;i++){
    if(nums[i]<1){
      newArr.push(nums[i]);
    //  j++;
    }
  }
  return newArr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var newArr=[];
  for(var i=0;i<names.length;i++){
    if((names[i].charAt(0).toUpperCase())==char)
    {
newArr.push(names[i]);
    }
  }
  return newArr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return verb = words.filter((word) => word.startsWith("to "));

}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var arr=[];
  for(var i=0;i<nums.length;i++){
    if(Number.isInteger(nums[i]))
     arr.push(nums[i]);
  }
  return arr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  var arr=[];
  for(var i=0;i<users.length;i++){
      var city = users[i].data.city.displayName;
      arr.push(city);
  }
  return arr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var arr=[];
  for(var i=0;i<nums.length;i++){
   var n= Math.round(Math.sqrt(nums[i]) * 100)/100;
   if(Number.isInteger(n)){
    
   }
      arr.push(n);
  }
  return arr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
 

  return sentences.filter((sentence) => sentence.toLowerCase().indexOf(str.toLowerCase()) >= 0 );
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  var arr=[];
  for(var i=0;i<triangles.length;i++){
    var max= Math.max(...triangles[i]); 
    arr.push(max);
  }
  return arr;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  //for(var i=0;i<nums.length;i++){
    var index =-1;
    index= nums.indexOf(n);
    if (nums == null){
      return null;
    }
    else if(index == nums.length-1)
       return null;
       else if(index == -1)
          return null;
       else
    return nums[index+1];
  //}
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var zeroCount = 0;
  var oneCount = 0;
  for (var i = 0;i<str.length;i++) {
    if (str[i] === '0') {
      zeroCount++;
    }
    else {
      oneCount++;
    }
  } 
  return {
    '1': oneCount,
    '0': zeroCount    
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return (
    parseFloat(
      n
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(n)
  )          
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var total =0;
  for(var i=0;i<arrs.length;i++){
     var a=arrs[i];
     for(var j=0;j<a.length;j++){
     total = total + a[j];
     }
  }
  return total;

};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
   var n=arr.length-1;
   if(arr.length < 2)
     return arr;
     else
     {
       var a=arr[0];
      arr[0]=arr[n];
      arr[n]=a;
      return arr;
     }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  console.log(haystack);
 
    for(let value of Object.values(haystack)){
     
     if (value.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0)
     {
      console.log("Abhishek"+ value.toLowerCase());
      console.log("Abhishek1"+ searchTerm.toLowerCase());
       return true;

     }
        
    }
    return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
   var obj = {};
   var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
   str=str.replace(regex, '');
  //str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  str.split(" ").forEach(function(el, i, arr) {
    el = el.toLowerCase();
    obj[el] = obj[el] ? ++obj[el] : 1;
  });
  
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

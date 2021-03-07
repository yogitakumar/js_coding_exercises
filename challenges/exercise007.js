/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  
  var sum = 0;

  while (n>0) {
      sum += n % 10;
      n = Math.floor(n / 10);
  }
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  var arr=[];
  if(step === undefined)
     step =1;
  for(var i=start; i<= end; i=i+step)
  {
     arr.push(i);
  }
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  var output = [];
 
  for (var i = 0; i < users.length; i++) {
    for (var j = 0; j < users[i].screenTime.length; j++) {

      if (users[i].screenTime[j].date == date) {
       
        var temp_arr = Object.values(users[i].screenTime[j].usage).map((val) => val);
        var val = temp_arr.reduce((a, b) => a + b, 0);
        if (val > 100) {
          output[i] = users[i].username.toString();
          
        }
      }
    }
  }
 return output;
 
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if(hexStr.length !== 7) throw new Error("hexStr is not in correct format");
  
  var decimal_arr=[];
  var current_number = 0 ;
  var prev_number = 0;
  var base =16;
 
  for(var i=1;i<hexStr.length;i++){
       current_number= parseInt(hexStr[i],16);
      
      
      if (i%2 == 0){
          decimal_arr.push(prev_number*base + current_number);
          current_number=0;
      }
      prev_number = current_number;
  }
 
  return "rgb("+ decimal_arr[0] + ","+  decimal_arr[1] + "," +  decimal_arr[2] + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  
 
 var win_combo =[];
 
 for (var i = 0; i < board.length; i++) {
     for (var j = 0; j < board[i].length; j++) {
         win_combo.push(board[i][j]);
     }
 }

 
     if ((win_combo[0] == 'X' && win_combo[1] == 'X' && win_combo[2] == 'X') ||
         (win_combo[0] == 'X' && win_combo[3] == 'X' && win_combo[6] == 'X') ||
         (win_combo[0] == 'X' && win_combo[4] == 'X' && win_combo[8] == 'X') ||
         (win_combo[1] == 'X' && win_combo[4] == 'X' && win_combo[7] == 'X') ||
         (win_combo[2] == 'X' && win_combo[5] == 'X' && win_combo[8] == 'X') ||
         (win_combo[2] == 'X' && win_combo[4] == 'X' && win_combo[6] == 'X') ||
         (win_combo[3] == 'X' && win_combo[4] == 'X' && win_combo[5] == 'X') ||
         (win_combo[6] == 'X' && win_combo[7] == 'X' && win_combo[8] == 'X')) {
             
          return "X";
 
 
     }
     else if((win_combo[0] == '0' && win_combo[1] == '0' && win_combo[2] == '0') ||
     (win_combo[0] == '0' && win_combo[3] == '0' && win_combo[6] == '0') ||
     (win_combo[0] == '0' && win_combo[4] == '0' && win_combo[8] == '0') ||
     (win_combo[1] == '0' && win_combo[4] == '0' && win_combo[7] == '0') ||
     (win_combo[2] == '0' && win_combo[5] == '0' && win_combo[8] == '0') ||
     (win_combo[2] == '0' && win_combo[4] == '0' && win_combo[6] == '0') ||
     (win_combo[3] == '0' && win_combo[4] == '0' && win_combo[5] == '0') ||
     (win_combo[6] == '0' && win_combo[7] == '0' && win_combo[8] == '0')){
         return "0";
 
     }
     else {
         return null;
     }

};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

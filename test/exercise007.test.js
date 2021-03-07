const { TestScheduler } = require("jest");
const {sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
    } = require("../challenges/exercise007");

describe("sumDigits",()=>{
test("return error if number not privided",()=>{
    expect(()=>{
        sumDigits();
    }).toThrow("n is required");
});

test("returns sum of all digits in number",()=>{
       expect(sumDigits(123)).toBe(6);
       expect(sumDigits(456)).toBe(15);
    });
});

describe("getScreentimeAlertList",()=>{
    test("it throws an error if no user object provided",()=>{
        expect(()=>{
            getScreentimeAlertList();
        }).toThrow("users is required");
    });

test("return array of username having total usage on given date > 100", () => {
    users=[
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                       { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                     ]
         },
         {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
                       { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                       { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                      ]
         },
       ];
    expect(getScreentimeAlertList(users,"2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users,"2019-06-11")).toEqual([]);
  });
});

describe("createRange",()=>{
    test("return error if start not privided",()=>{
        expect(()=>{
            createRange();
        }).toThrow("start is required");
    });
   
test("gives range from start to end with step 2",()=>{
  expect(createRange(1,6,2)).toStrictEqual([1,3,5]);
});
});

describe("hexToRGB", () => {
    test("it throws an error if no hex color format pass",()=>{
        expect(()=>{
            hexToRGB();
        }).toThrow("hexStr is required");
    });
    test("return RGB equivalent of hex color format", () => {
        hexStr = "#ff1133";
        expect(hexToRGB(hexStr)).toEqual("rgb(255,17,51)");

    });
});

describe("findWinner", () => {
    test("it throws an error if no board paas",()=>{
        expect(()=>{
            findWinner();
        }).toThrow("board is required");
    });

    test("return X as winner of board game", () => {
        var board =
            [
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ]
        expect(findWinner(board)).toEqual("X");
    });
    test("return 0 as winner of board game", () => {
        var board =
            [
                ["X", "0", "0"],
                ["0", null, "0"],
                ["X", null, "0"]
            ]
        expect(findWinner(board)).toEqual("0");
    });
    test("return null as no one is winner of board game", () => {
        var board =
            [
                ["X", "0", "0"],
                ["0", null, "0"],
                ["X", null, "null"]
            ]
        expect(findWinner(board)).toEqual(null);

    });
});
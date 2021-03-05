const { TestScheduler } = require("jest");
const {sumDigits,
    createRange
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
const {sumMultiples,
    areWeCovered,
    createMatrix,
    isItPrime,
    isValidDNA,
    getComplementaryDNA
    } = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array",()=>{
       expect(()=>{
           sumMultiples();
       }).toThrow("arr is required");

       expect(()=>{
           sumMultiples("foo");
       }).toThrow("an array is required")
    });

  test("it returns the sum of any number that are a multiple of 3 or 5",()=>{
     const result = sumMultiples([1,3,5]);
     const expected = 8;
     expect(result).toBe(expected);
  });

  test("it works ok with decimal numbers", ()=>{
const result = sumMultiples([1,3,5.0,2,12,10]);
const expected = 30;
expect(result).toBe(expected);
  });

  test("it works ok with decimal numbers", ()=>{
    const result = sumMultiples([1,2,8,13,7]);
    const expected = 0;
    expect(result).toBe(expected);
      });
});

describe("areWeCovered",()=>{
test("it returns false if there are no staff at all",()=>{
    expect(areWeCovered([],"Sunday")).toBe(false);
    expect(areWeCovered([],"Monday")).toBe(false);
    expect(areWeCovered([],"Tuesday")).toBe(false);
    expect(areWeCovered([],"Wednesday")).toBe(false);
    expect(areWeCovered([],"Friday")).toBe(false);
    expect(areWeCovered([],"Saturday")).toBe(false);
});

test("returns false if there are staff less than 3 not scheduled to work",()=>{
    const staff=[
 {name:"Gary",rota:["Monday","Tuesday"]},
 {name:"Paul",rota:["Monday","Tuesday"]},
 {name:"Sally",rota:["Monday","Tuesday"]},
 {name:"Chris",rota:["Monday","Tuesday"]},
 ];
    expect(areWeCovered(staff,"Wednesday")).toBe(false);
    expect(areWeCovered(staff,"Monday")).toBe(false);

});
});

describe("createMatrix",()=>{
    test("it returns a matrix of 1*1 when passed 1",()=>{
      const result=createMatrix(1,"foo");
      const expected = [ [ "foo" ] ];
      expect(result).toEqual(expected);
    });

    test("it returns a matrix of 3*3 when passed 3",()=>{
        const result=createMatrix(3,"foo");
        const expected = [
        [ "foo","foo","foo" ],
        [ "foo","foo","foo" ],
        [ "foo","foo","foo" ],
     ];
        expect(result).toEqual(expected);
      });
});

describe("isItPrime",()=>{
     test("returns error message if no n provided",()=>{
        expect(()=>{
            isItPrime();
        }).toThrow("n is required");
     });

    test("it will return true if n is prime number",()=>{
   
    expect(isItPrime(13)).toBe(true);
    expect(isItPrime(25)).toBe(false);
});
});

describe("isValidDNA",()=>{
    test("return error message if pass empty string",()=>{
        expect(()=>{
            isValidDNA();
        }).toThrow("str is required");
    });
  test("returns true if contain C,G,T,A",()=>{
    expect(isValidDNA("ABBAW")).toBe(true);
    expect(isValidDNA("XYZ")).toBe(false);
  });
});

describe("getComplementaryDNA",()=>{
    // T always pairs with A,
     //C always pairs with G.
     
  test("returns complementary DNA",()=>{
    // expect(getComplementaryDNA("AAA")).toBe("TTT");
  });
});
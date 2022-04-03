// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("result", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    expect(result(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// result › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// ReferenceError: result is not defined
// Got Red. 


// b) Create the function that makes the test pass.
// Create a function named result that will pass a string in the parameter
// likely will need to iterate through the object. .map/.filter for loop?
// store a variable that contains the built-in methods for capitalization 
// string interpolation. 


const result = (string) => {
  return string.map(value => {
    let cap = value.name.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")
    return `${cap} is ${value.occupation}.`
  })
}

// Got Green. 



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("rem3", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(rem3(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(rem3(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// rem3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// ReferenceError: rem3 is not defined
// Got Red.


// b) Create the function that makes the test pass.
// Create a function named rem3 that takes in an array in its parameters
// Make an empty array 
// Will need to iterate through the array to find integers --> .filter? forloop?
// iteration must disregard anything that is not an integer --> use typeof method?
// Will have a modulo 3 somewhere
// Push into the empty array


const rem3 = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      newArr.push(array[i] % 3)
    }
  }
  return newArr
}

// Got Green. 





// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ● sumCubed › takes in an array of numbers and returns the sum of all the numbers cubed.
// ReferenceError: sumCubed is not defined
// Got Red. 

// b) Create the function that makes the test pass.
// Create a function that will pass in an array as its parameters
// likely will need an empty array 
// likely need a variable that equals to zero 
// Must iterate through the array --> .map? for loop?
// Find a way to cube all the elements in the array individually. 
// add the elements together after they are cubed. 


const sumCubed = (array) => {
  let x = []
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i] * array[i]
    sum += array[i]
  }
  return sum
}

// Got Green


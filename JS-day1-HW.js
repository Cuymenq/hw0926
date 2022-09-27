//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string){
    if (dog_string == 'Max') {
        return 'Matched dog_name'
    } else {
        return 'No Matches'
    }
}

//Call method here with parameters

console.log(findWords('Max'))
console.log(findWords('Paul'))


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

var arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i,1,"even index")
    }
    console.log(arr)
}
replaceEvens(arr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



//Remove duplicates from list   https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

a = [1,1,1,1,1,2,2,2,3,3,4,5]
function distinct(a) { 
    return [...new Set(a)]
  }
  console.log(distinct(a))





//Basic Mathematical Operations    https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
//Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
    if (operation == '+') {
        return value1 + value2
    } else if (operation == '-') {
        return value1 - value2
    } else if (operation == '*') {
        return value1 * value2
    } else if (operation == '/') {
        return value1 / value2
    }
}




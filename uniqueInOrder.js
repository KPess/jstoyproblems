// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// Pseudocode Answer

// 1. Convert string into array.
// 2. Filter duplicates.

function uniqueInOrder(str) {
    let arr = str.split('')
    let uniqueArray = [...new Set(arr)]
    return uniqueArray
}

uniqueInOrder('aaabbacon')

//4. Evaluate if next index is same or not.
//3. Filter only duplicates that are adjacent. 

//Re evaluate   
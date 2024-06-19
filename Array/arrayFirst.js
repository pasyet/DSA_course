// Give 2 arrays, create a function that let's a user know (true/false) whether
// these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
//-------------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true and false

// O(n^2)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
function containCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}
/*
Compare 'a' with 'z', 'y', 'x' (no match)
Compare 'b' with 'z', 'y', 'x' (no match)
Compare 'c' with 'z', 'y', 'x' (no match)
Compare 'd' with 'z', 'y', 'x' (no match)
No common item found, return false
*/

// O(a*b) ==> Time Complexity
// O(1) ==> Space Complexity
//console.log(containCommonItem(array1, array2));

/*loop through first array and create object where properties === 
items in the array*/

const array11 = ['a', 'b', 'c', 'x'];
const array22 = ['z', 'y', 'a'];

function containCommonItem2(arr1, arr2) {
    // create an empty object to store elements of arr1 as properties
    let map = {};
    // 1
    for (let i = 0; i < arr1.length; i++) { // loop through arr1
        if (!map[arr1[i]]) { // check if element is not already a property in map
            const item = arr1[i]; // assign element to a variable
            map[item] = true; // add element as a property in map with value true
        }
    }
    // 2
    for (let j = 0; j < arr2.length; j++) {  // loop through arr2
        if (map[arr2[j]]) { // check if element exists as a property in map
            return true;  // if found, return true immediately
        }
    }
    return false;  // if no common element found, return false
}
/*
1
arr1 = ['a', 'b', 'c', 'x']
map = {
    'a': true,
    'b': true,
    'c': true,
    'x': true
};
2
arr2 = ['z', 'y', 'a']
Check 'z': not in map
Check 'y': not in map
Check 'a': found in map, return true
*/

// O(a+b) ==> Time Complexity
// O(a) ==> Space Complexity
//console.log(containCommonItem2(array11, array22));

function containCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
/*
The 'some' method to test whether at least one element in the first array passes the check implemented by the provided function.
The 'includes' method to check if an element from the first array is present in the second array.

1. The 'some' method iterates over each element in 'arr1'.
2. For each element in 'arr1', the includes method is called on 'arr2'.
3. The 'includes' method itself iterates over each element in 'arr2'
to check if the current element from 'arr1' exists in 'arr2'.
*/

// O(a*b) ==> Time Complexity
// O(1) ==> Space Complexity
//console.log(containCommonItem3(array11, array22));





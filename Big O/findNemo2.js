const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'grill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array (10000).fill('nemo');

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('Running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break; // make stop search if nemo found 
        }
    }
    
}


// findNemo(nemo);
findNemo(everyone);
// findNemo(large);

const boxes = [0,1,2,3,4,5];
function logFistTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

// logFistTwoBoxes(boxes); // O(2)
const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'grill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array (10000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    // make slower process
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' +(t1 - t0)+ ' millseconds');
}


findNemo(nemo);
findNemo(everyone);
findNemo(large);
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //0(1)

    var middleIndex = Math.floor(items.length / 2); //0(n/2)
    var index = 0; //0(1)

    while (index < middleIndex) { 
        console.log(items[index]); 
        index++; 
    }

    for (var i = 0; i < 100; i++) { //O(100)
        console.log('hi');
    }
}

// Big O = O(n)

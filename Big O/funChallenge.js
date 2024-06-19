function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); //O(n)
        let stranger = true; // O(n)
        a++; //O(n)
    } 
    return a; // O(1)

}

// Big O = O(1) + O(1) + O(1) + O(n) + O(n) + O(n) + O(n) = O(3+4n) = O(4n) = O(n)
